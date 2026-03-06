"use client";

import { Bot, CheckCircle2, Clock, MessageSquare, Send, ShieldCheck, User } from "lucide-react";
import { useSearchParams } from "next/navigation";
import { Suspense, useEffect, useRef, useState } from "react";

interface Session {
  id: string;
  status: "active" | "closed";
  createdAt: string;
  updatedAt: string;
  latestMessage?: {
    id: string;
    role: string;
    content: string;
    createdAt: string;
  };
}

interface Message {
  id: string;
  role: "user" | "assistant" | "admin";
  content: string;
  createdAt: string;
}

function AdminChatContent() {
  const searchParams = useSearchParams();
  const initialSessionId = searchParams.get("sessionId");

  const [sessions, setSessions] = useState<Session[]>([]);
  const [selectedSessionId, setSelectedSessionId] = useState<string | null>(initialSessionId);
  const [messages, setMessages] = useState<Message[]>([]);
  const [inputText, setInputText] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const [isSending, setIsSending] = useState(false);

  const messagesEndRef = useRef<HTMLDivElement>(null);

  // Fetch all sessions
  const fetchSessions = async () => {
    try {
      const res = await fetch("/api/admin/chats");
      if (res.ok) {
        const data = await res.json();
        setSessions(data.sessions);
      }
    } catch (error) {
      console.error("Failed to fetch sessions", error);
    } finally {
      setIsLoading(false);
    }
  };

  // Fetch messages for selected session
  const fetchMessages = async (sessionId: string) => {
    try {
      const res = await fetch(`/api/admin/chats/${sessionId}`);
      if (res.ok) {
        const data = await res.json();
        setMessages(data.messages);
        scrollToBottom();
      }
    } catch (error) {
      console.error("Failed to fetch messages", error);
    }
  };

  // Polling Effect
  useEffect(() => {
    fetchSessions();
    const interval = setInterval(fetchSessions, 5000); // refresh list every 5s
    return () => clearInterval(interval);
  }, []);

  // When selected session changes, fetch its messages
  useEffect(() => {
    if (selectedSessionId) {
      fetchMessages(selectedSessionId);
      const messageInterval = setInterval(() => fetchMessages(selectedSessionId), 3000);
      return () => clearInterval(messageInterval);
    } else {
      setMessages([]);
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedSessionId]);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const handleSendMessage = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputText.trim() || !selectedSessionId) return;

    setIsSending(true);
    const content = inputText;
    setInputText("");

    // Optimistically add to UI
    const tempMsg: Message = {
      id: "temp-" + Date.now(),
      role: "admin",
      content,
      createdAt: new Date().toISOString(),
    };
    setMessages((prev) => [...prev, tempMsg]);
    scrollToBottom();

    try {
      const res = await fetch(`/api/admin/chats/${selectedSessionId}`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: content }),
      });
      if (!res.ok) {
        throw new Error("Failed to send");
      }
      // Re-fetch to get real ID
      fetchMessages(selectedSessionId);
    } catch (error) {
      console.error(error);
      // Removed temp msg on fail
      setMessages((prev) => prev.filter((m) => m.id !== tempMsg.id));
    } finally {
      setIsSending(false);
    }
  };

  const handleCloseSession = async (sessionId: string) => {
    if (!confirm("Are you sure you want to resolve and close this chat?")) return;
    try {
      await fetch(`/api/admin/chats/${sessionId}/close`, { method: "POST" });
      setSelectedSessionId(null);
      fetchSessions();
    } catch (error) {
      console.error(error);
    }
  };

  const formatTime = (isoString: string) => {
    return new Date(isoString).toLocaleTimeString("th-TH", {
      hour: "2-digit",
      minute: "2-digit",
    });
  };

  return (
    <div className="flex h-screen bg-gray-50 dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800">
      {/* Sidebar Layout */}
      <div className="w-1/3 max-w-sm bg-white dark:bg-gray-800 border-r border-gray-200 dark:border-gray-700 flex flex-col">
        <div className="p-4 border-b border-gray-200 dark:border-gray-700 bg-indigo-600">
          <h1 className="text-lg font-bold text-white flex items-center gap-2">
            <ShieldCheck className="w-5 h-5" />
            Admin Chat Console
          </h1>
          <p className="text-xs text-indigo-200 mt-1">
            {isLoading ? "Loading..." : `${sessions.length} Active Sessions`}
          </p>
        </div>

        <div className="flex-1 overflow-y-auto">
          {sessions.map((session) => (
            <div
              key={session.id}
              onClick={() => setSelectedSessionId(session.id)}
              className={`p-4 border-b border-gray-100 dark:border-gray-700 cursor-pointer transition-colors ${
                selectedSessionId === session.id
                  ? "bg-indigo-50 dark:bg-indigo-900/30 border-l-4 border-l-indigo-500"
                  : "hover:bg-gray-50 dark:hover:bg-gray-700/50 border-l-4 border-l-transparent"
              }`}
            >
              <div className="flex justify-between items-start mb-1">
                <span className="font-mono text-xs font-semibold text-gray-500 dark:text-gray-400">
                  #{session.id.slice(0, 8).toUpperCase()}
                </span>
                <span className="text-xs text-gray-400">
                  {formatTime(session.updatedAt)}
                </span>
              </div>
              <p className="text-sm text-gray-800 dark:text-gray-200 truncate">
                {session.latestMessage?.content || "No messages yet"}
              </p>
            </div>
          ))}
          {sessions.length === 0 && !isLoading && (
            <div className="p-8 text-center text-gray-500 flex flex-col items-center">
              <MessageSquare className="w-8 h-8 mb-2 opacity-20" />
              <p>No active chats</p>
            </div>
          )}
        </div>
      </div>

      {/* Main Chat Area Layout */}
      <div className="flex-1 flex flex-col bg-gray-50 dark:bg-gray-900">
        {selectedSessionId ? (
          <>
            <div className="p-4 bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700 flex justify-between items-center shadow-sm z-10">
              <div>
                <h2 className="font-semibold text-gray-800 dark:text-white flex items-center gap-2">
                  Session Room
                  <span className="text-xs font-mono bg-gray-100 dark:bg-gray-700 text-gray-500 dark:text-gray-300 px-2 py-1 rounded">
                    #{selectedSessionId.slice(0, 8).toUpperCase()}
                  </span>
                </h2>
              </div>
              <button
                onClick={() => handleCloseSession(selectedSessionId)}
                className="flex items-center gap-1 px-3 py-1.5 text-sm bg-green-50 text-green-600 hover:bg-green-100 dark:bg-green-900/20 dark:text-green-400 dark:hover:bg-green-900/40 rounded-md transition-colors"
                title="Mark this conversation as resolved and closed"
              >
                <CheckCircle2 className="w-4 h-4" />
                Resolve Chat
              </button>
            </div>

            <div className="flex-1 overflow-y-auto p-4 space-y-4">
              {messages.map((message) => {
                const isAdmin = message.role === "admin";
                const isSystem = message.role === "assistant";
                
                return (
                  <div
                    key={message.id}
                    className={`flex ${isAdmin ? "justify-end" : "justify-start"}`}
                  >
                    <div
                      className={`max-w-[70%] rounded-2xl p-4 shadow-sm ${
                        isAdmin
                          ? "bg-indigo-600 text-white rounded-tr-sm"
                          : isSystem
                          ? "bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-100 rounded-tl-sm"
                          : "bg-white dark:bg-gray-800 text-gray-800 dark:text-gray-100 border border-gray-200 dark:border-gray-700 rounded-tl-sm"
                      }`}
                    >
                      <div className="flex items-center gap-2 mb-1.5 opacity-80">
                         {isAdmin ? <ShieldCheck className="w-3.5 h-3.5" /> : isSystem ? <Bot className="w-3.5 h-3.5" /> : <User className="w-3.5 h-3.5" />}
                         <span className="text-xs font-medium">
                           {isAdmin ? "You" : isSystem ? "AI Assistant" : "Customer"}
                         </span>
                         <span className="text-[10px] ml-auto flex items-center gap-1">
                           <Clock className="w-3 h-3" />
                           {formatTime(message.createdAt)}
                         </span>
                      </div>
                      <p className="whitespace-pre-wrap text-sm">{message.content}</p>
                    </div>
                  </div>
                );
              })}
              <div ref={messagesEndRef} />
            </div>

            <div className="p-4 bg-white dark:bg-gray-800 border-t border-gray-200 dark:border-gray-700">
              <form onSubmit={handleSendMessage} className="flex gap-2">
                <input
                  type="text"
                  value={inputText}
                  onChange={(e) => setInputText(e.target.value)}
                  placeholder="Type a message to the customer..."
                  className="flex-1 px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 dark:bg-gray-700 dark:text-white"
                />
                <button
                  type="submit"
                  disabled={isSending || !inputText.trim()}
                  className="px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 disabled:opacity-50 flex items-center gap-2 transition-colors"
                >
                  <Send className="w-4 h-4" />
                  Send
                </button>
              </form>
            </div>
          </>
        ) : (
          <div className="flex-1 flex flex-col items-center justify-center text-gray-400 dark:text-gray-500">
            <MessageSquare className="w-16 h-16 mb-4 opacity-20" />
            <h2 className="text-xl font-medium text-gray-600 dark:text-gray-300">No Chat Selected</h2>
            <p className="text-sm mt-2">Select a session from the sidebar to view history and reply.</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default function AdminChatDashboard() {
  return (
    <Suspense fallback={<div className="flex h-screen items-center justify-center p-8 bg-gray-50 dark:bg-gray-900"><p className="text-gray-500">Loading Dashboard...</p></div>}>
      <AdminChatContent />
    </Suspense>
  );
}

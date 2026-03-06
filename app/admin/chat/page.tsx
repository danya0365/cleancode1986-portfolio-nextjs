"use client";

import { Bot, CheckCircle2, Clock, Loader2, MessageSquare, Search, Send, ShieldCheck, User, X } from "lucide-react";
import { Suspense, useEffect, useRef, useState } from "react";

interface Session {
  id: string;
  customerName?: string;
  customerPhone?: string;
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
  const searchParams = typeof window !== 'undefined' ? new URLSearchParams(window.location.search) : null;
  const initialSessionId = searchParams?.get("sessionId") || null;

  const [sessions, setSessions] = useState<Session[]>([]);
  const [selectedSessionId, setSelectedSessionId] = useState<string | null>(initialSessionId);
  const [messages, setMessages] = useState<Message[]>([]);
  const [inputText, setInputText] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const [isSending, setIsSending] = useState(false);
  
  // Pagination & Search States
  const [hasMoreHistory, setHasMoreHistory] = useState(false);
  const [isLoadingHistory, setIsLoadingHistory] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState<Message[] | null>(null);

  const messagesEndRef = useRef<HTMLDivElement>(null);
  const latestMessageAtRef = useRef<string | null>(null);

  // Sync latest message ref
  useEffect(() => {
    if (messages.length > 0) {
        latestMessageAtRef.current = messages[messages.length - 1].createdAt;
    } else {
        latestMessageAtRef.current = null;
    }
  }, [messages]);

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

  // Fetch initial/older messages for selected session
  const fetchMessages = async (sessionId: string, before?: string) => {
    try {
      if (before) setIsLoadingHistory(true);
      const url = new URL(`/api/admin/chats/${sessionId}`, window.location.origin);
      if (before) url.searchParams.set("before", before);

      const res = await fetch(url.toString());
      if (res.ok) {
        const data = await res.json();
        
        if (before) {
          setMessages(prev => [...data.messages, ...prev]);
        } else {
          setMessages(data.messages);
          setTimeout(() => scrollToBottom(), 100);
        }
        
        setHasMoreHistory(data.messages.length >= 50);
      }
    } catch (error) {
      console.error("Failed to fetch messages", error);
    } finally {
      if (before) setIsLoadingHistory(false);
    }
  };

  // Poll strictly new messages
  const pollNewMessages = async (sessionId: string) => {
    if (searchResults !== null) return; // Don't poll while viewing search results
    
    try {
      const url = new URL(`/api/admin/chats/${sessionId}`, window.location.origin);
      if (latestMessageAtRef.current) {
        url.searchParams.set("lastMessageAt", latestMessageAtRef.current);
      }
      
      const res = await fetch(url.toString());
      if (res.ok) {
        const data = await res.json();
        if (data.messages && data.messages.length > 0) {
          setMessages(prev => {
            return latestMessageAtRef.current ? [...prev, ...data.messages] : data.messages;
          });
          if (latestMessageAtRef.current) scrollToBottom();
        }
      }
    } catch (e) {
       console.error(e);
    }
  };

  // Polling Effect for Sessions
  useEffect(() => {
    fetchSessions();
    const interval = setInterval(fetchSessions, 5000); // refresh list every 5s
    return () => clearInterval(interval);
  }, []);

  // Effect when selected session changes
  useEffect(() => {
    if (selectedSessionId) {
      setMessages([]);
      setHasMoreHistory(false);
      setSearchQuery("");
      setSearchResults(null);
      latestMessageAtRef.current = null;
      
      fetchMessages(selectedSessionId);
    } else {
      setMessages([]);
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedSessionId]);

  // Polling Effect for Messages
  useEffect(() => {
    let messageInterval: NodeJS.Timeout;
    if (selectedSessionId) {
      messageInterval = setInterval(() => pollNewMessages(selectedSessionId), 3000);
    }
    return () => clearInterval(messageInterval);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedSessionId, searchResults]);

  const handleSearch = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!searchQuery.trim() || !selectedSessionId) return;

    try {
      const res = await fetch(`/api/admin/chats/${selectedSessionId}/search?q=${encodeURIComponent(searchQuery.trim())}`);
      if (res.ok) {
        const data = await res.json();
        setSearchResults(data.messages);
      }
    } catch (error) {
       console.error("Search failed:", error);
    }
  };

  const clearSearch = () => {
    setSearchQuery("");
    setSearchResults(null);
    scrollToBottom();
  };

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
                <div className="flex flex-col">
                  <span className="font-semibold text-sm text-gray-800 dark:text-gray-200">
                    {session.customerName || `Guest #${session.id.slice(0, 4).toUpperCase()}`}
                  </span>
                  {session.customerPhone && (
                    <span className="font-mono text-[10px] text-gray-500 dark:text-gray-400">
                      📞 {session.customerPhone}
                    </span>
                  )}
                </div>
                <span className="text-[10px] text-gray-400 mt-1">
                  {formatTime(session.updatedAt)}
                </span>
              </div>
              <p className="text-xs text-gray-600 dark:text-gray-400 truncate mt-2">
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
            <div className="p-4 bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700 flex justify-between items-center shadow-sm z-10 gap-4">
              <div className="flex-1 min-w-0">
                <h2 className="font-semibold text-gray-800 dark:text-white flex flex-col">
                  {sessions.find(s => s.id === selectedSessionId)?.customerName || "Session Room"}
                  <span className="text-[10px] font-mono text-gray-400 dark:text-gray-500 font-normal">
                    {sessions.find(s => s.id === selectedSessionId)?.customerPhone || `#${selectedSessionId.slice(0, 8).toUpperCase()}`}
                  </span>
                </h2>
              </div>

               {/* Search Bar */}
               <form onSubmit={handleSearch} className="flex-1 max-w-sm flex items-center relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <Search className="h-4 w-4 text-gray-400" />
                  </div>
                  <input
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder="Search messages..."
                    className="block w-full pl-10 pr-10 py-1.5 border border-gray-300 dark:border-gray-600 rounded-md leading-5 bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 placeholder-gray-500 focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm transition-colors"
                  />
                  {searchQuery && (
                    <button
                      type="button"
                      onClick={clearSearch}
                      className="absolute inset-y-0 right-0 pr-3 flex items-center text-gray-400 hover:text-gray-500"
                    >
                      <X className="h-4 w-4" />
                    </button>
                  )}
               </form>

              <button
                onClick={() => handleCloseSession(selectedSessionId)}
                className="flex items-center gap-1 px-3 py-1.5 text-sm bg-green-50 text-green-600 hover:bg-green-100 dark:bg-green-900/20 dark:text-green-400 dark:hover:bg-green-900/40 rounded-md transition-colors flex-shrink-0"
                title="Mark this conversation as resolved and closed"
              >
                <CheckCircle2 className="w-4 h-4" />
                Resolve Chat
              </button>
            </div>

            <div className="flex-1 overflow-y-auto p-4 space-y-4">
              
              {/* Load More Button or Search Results Header */}
              {searchResults ? (
                <div className="text-center py-2 text-sm text-indigo-600 font-medium bg-indigo-50 dark:bg-indigo-900/30 rounded-md">
                  Showing Search Results for &quot;{searchQuery}&quot; ({searchResults.length})
                </div>
              ) : hasMoreHistory ? (
                <div className="flex justify-center my-2">
                  <button
                    onClick={() => fetchMessages(selectedSessionId, messages[0]?.createdAt)}
                    disabled={isLoadingHistory}
                    className="text-xs bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 shadow-sm hover:bg-gray-50 dark:hover:bg-gray-700 text-gray-600 dark:text-gray-300 font-medium py-1.5 px-4 rounded-full transition-colors flex items-center gap-2"
                  >
                    {isLoadingHistory ? <Loader2 className="w-3 h-3 animate-spin"/> : null}
                    {isLoadingHistory ? "Loading..." : "Load Older Messages"}
                  </button>
                </div>
              ) : null}

              {(searchResults || messages).map((message) => {
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
                  disabled={isSending || !inputText.trim() || searchResults !== null}
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

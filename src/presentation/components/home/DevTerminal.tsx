"use client";

import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { SITE } from "@/src/data/master/site";
import { STATIC_CVS } from "@/src/data/static/cv.static";

export function DevTerminal() {
  const masterCV = STATIC_CVS["1"];
  const skillPreview = `[ ${masterCV.skills.flatMap(s => s.items).slice(0, 7).join(" | ")} ... ]`;

  const [history, setHistory] = useState([
    { text: `Welcome to ${SITE.company.name} Interactive Terminal v1.0.0`, type: "system" },
    { text: "Type 'help' to see available commands.", type: "system" },
  ]);
  const [input, setInput] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [history]);

  const handleCommand = (cmd: string) => {
    const trimmed = cmd.trim().toLowerCase();
    const newHistory = [...history, { text: `> ${cmd}`, type: "user" }];
    
    setTimeout(() => {
      let response = { text: "", type: "system" };
      switch (trimmed) {
        case "help":
          response.text = "Available commands: bio, skills, contact, clear, sudo rm -rf /";
          break;
        case "bio":
          response.text = masterCV.professionalSummary;
          break;
        case "skills":
          response.text = skillPreview;
          break;
        case "contact":
          response.text = `Initiating contact sequence... Email: ${SITE.contact.email} | LINE: ${SITE.contact.lineId} | Phone: ${SITE.contact.phone}`;
          break;
        case "sudo rm -rf /":
          response.text = "nice_try.sh: Permission denied. We secure our servers.";
          break;
        case "clear":
          setHistory([]);
          return;
        case "":
          return;
        default:
          response.text = `Command not found: ${cmd}`;
      }
      setHistory((prev) => [...prev, response]);
    }, 400);

    setHistory(newHistory);
    setInput("");
  };

  return (
    <motion.div 
      initial={{ opacity: 0, scale: 0.95, y: 30 }}
      whileInView={{ opacity: 1, scale: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
      className="w-full max-w-3xl mx-auto mt-20 text-left shadow-2xl rounded-xl overflow-hidden border border-gray-800 bg-black/95 backdrop-blur-md relative z-10 hover:shadow-blue-900/40 transition-shadow duration-500 cursor-text"
      onClick={() => inputRef.current?.focus()}
    >
      {/* Terminal Header */}
      <div className="bg-gray-900 px-4 py-3 flex items-center justify-between border-b border-gray-800 select-none">
        <div className="flex gap-2">
          <div className="w-3 h-3 rounded-full bg-red-500/80 hover:bg-red-500 transition-colors"></div>
          <div className="w-3 h-3 rounded-full bg-yellow-500/80 hover:bg-yellow-500 transition-colors"></div>
          <div className="w-3 h-3 rounded-full bg-green-500/80 hover:bg-green-500 transition-colors"></div>
        </div>
        <div className="text-gray-400 text-xs font-mono tracking-wider">guest@cleancode:~</div>
        <div className="w-12"></div>
      </div>
      
      {/* Terminal Body */}
      <div 
        ref={scrollRef}
        className="p-6 h-64 overflow-y-auto font-mono text-sm sm:text-base selection:bg-blue-500/30 scroll-smooth"
      >
        {history.map((line, i) => (
          <div key={i} className={`mb-2 leading-relaxed ${line.type === "user" ? "text-gray-100" : "text-emerald-400"}`}>
            {line.text}
          </div>
        ))}
        <div className="flex items-center mt-2 group">
          <span className="text-fuchsia-400 mr-2 font-bold select-none">➜</span>
          <span className="text-cyan-400 mr-2 font-bold select-none">~</span>
          <input
            ref={inputRef}
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter") handleCommand(input);
            }}
            className="flex-1 bg-transparent outline-none text-white focus:ring-0 border-none p-0 transition-opacity"
            spellCheck="false"
            autoComplete="off"
          />
        </div>
        <div className="h-4" />
      </div>
    </motion.div>
  );
}

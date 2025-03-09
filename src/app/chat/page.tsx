"use client";

import React, { useState, FormEvent } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Send, Bot, User } from "lucide-react";

// Define interface for file props
interface File {
  // Add properties your files have
  name?: string;
  id?: string;
}

// Define interface for message objects
interface Message {
  role: "user" | "assistant";
  content: string;
}

// Define component props
interface DocumentChatProps {
  files?: File[];
}

const DocumentChat = ({ files = [] }: DocumentChatProps) => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleSendMessage = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!input.trim()) return;

    const newMessage: Message = {
      role: "user",
      content: input,
    };

    setMessages((prev) => [...prev, newMessage]);
    setInput("");
    setIsLoading(true);

    try {
      // Simulate AI response for now
      setTimeout(() => {
        setMessages((prev) => [
          ...prev,
          {
            role: "assistant",
            content:
              "Esta é uma resposta simulada da Nexus AI, desenvolvido por Jacinto Robate.",
          },
        ]);
        setIsLoading(false);
      }, 1000);
    } catch (error) {
      console.error("Error sending message:", error);
      setIsLoading(false);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-black p-4">
      <div className="w-full max-w-2xl h-[600px] bg-black rounded-lg shadow-lg flex flex-col">
        <header className="border-b border-white/10 p-4 rounded-t-lg">
          <h1 className="text-xl font-semibold text-white">
            Chat com Documentos
          </h1>
          <p className="text-sm text-gray-400">
            Faça perguntas sobre {files?.length}{" "}
            {files?.length === 1 ? "arquivo" : "arquivos"}
          </p>
        </header>

        <ScrollArea className="flex-1 p-4">
          <div className="space-y-4">
            {messages.map((message, i) => (
              <div
                key={i}
                className={`flex items-start gap-3 ${
                  message.role === "assistant" ? "flex-row" : "flex-row-reverse"
                }`}
              >
                <div
                  className={`p-2 rounded-lg max-w-[80%] ${
                    message.role === "assistant"
                      ? "bg-blue-600/20 text-white"
                      : "bg-white/10 text-white"
                  }`}
                >
                  <div className="flex items-center gap-2 mb-1">
                    {message.role === "assistant" ? (
                      <Bot className="w-4 h-4" />
                    ) : (
                      <User className="w-4 h-4" />
                    )}
                    <span className="text-sm font-medium">
                      {message.role === "assistant" ? "IA" : "Você"}
                    </span>
                  </div>
                  <p className="text-sm">{message.content}</p>
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="flex items-center gap-2 text-gray-400">
                <Bot className="w-4 h-4 animate-pulse" />
                <span className="text-sm">IA está digitando...</span>
              </div>
            )}
          </div>
        </ScrollArea>

        <form
          onSubmit={handleSendMessage}
          className="p-4 border-t border-white/10"
        >
          <div className="flex gap-2">
            <Input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Digite sua pergunta..."
              className="flex-1 bg-white/5 border-white/10 text-white"
            />
            <Button
              type="submit"
              disabled={isLoading}
              className="bg-blue-600 hover:bg-blue-700"
            >
              <Send className="w-4 h-4" />
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default function ChatPage() {
  const [chatFiles] = useState<File[]>([]);

  // Poderia carregar arquivos da sessão se necessário
  // useEffect(() => { ... }, []);

  return <DocumentChat files={chatFiles} />;
}

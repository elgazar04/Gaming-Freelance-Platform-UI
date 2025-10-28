import React, { useState } from 'react';
import { Navbar } from '../Navbar';
import { Footer } from '../Footer';
import { Sidebar } from '../Sidebar';
import { Send, Paperclip, Search, Circle } from 'lucide-react';
import { Input } from '../ui/input';
import { ScrollArea } from '../ui/scroll-area';

interface ChatPageProps {
  currentPage: string;
  onNavigate: (page: string) => void;
}

export function ChatPage({ currentPage, onNavigate }: ChatPageProps) {
  const [message, setMessage] = useState('');
  const [selectedChat, setSelectedChat] = useState(0);

  const conversations = [
    {
      id: 0,
      name: 'Client_Alex',
      avatar: 'A',
      lastMessage: 'Thanks for the update!',
      time: '2m ago',
      unread: 2,
      online: true
    },
    {
      id: 1,
      name: 'ProGamer_Mike',
      avatar: 'M',
      lastMessage: 'When can we start?',
      time: '15m ago',
      unread: 0,
      online: true
    },
    {
      id: 2,
      name: 'Client_Sarah',
      avatar: 'S',
      lastMessage: 'Perfect, sounds good!',
      time: '1h ago',
      unread: 0,
      online: false
    },
    {
      id: 3,
      name: 'CoachPro_Elite',
      avatar: 'E',
      lastMessage: 'I can help with that',
      time: '3h ago',
      unread: 1,
      online: false
    },
  ];

  const messages = [
    {
      id: 1,
      sender: 'them',
      text: 'Hey! I saw your gig for Valorant coaching. Are you available this week?',
      time: '10:30 AM'
    },
    {
      id: 2,
      sender: 'me',
      text: 'Hi! Yes, I have slots available on Tuesday and Thursday. What time works best for you?',
      time: '10:32 AM'
    },
    {
      id: 3,
      sender: 'them',
      text: 'Tuesday at 7 PM would be perfect! What do we need to get started?',
      time: '10:35 AM'
    },
    {
      id: 4,
      sender: 'me',
      text: 'Great! I\'ll need your in-game username and we can do a Discord call for the session. I\'ll share my Discord link.',
      time: '10:36 AM'
    },
    {
      id: 5,
      sender: 'them',
      text: 'Thanks for the update!',
      time: '10:40 AM'
    },
  ];

  const handleSend = (e: React.FormEvent) => {
    e.preventDefault();
    if (message.trim()) {
      setMessage('');
    }
  };

  return (
    <div className="min-h-screen bg-[#0D0D0D]">
      <Navbar onNavigate={onNavigate} />
      
      <div className="flex min-h-screen" style={{ marginTop: '80px' }}>
        <Sidebar userRole="gamer" currentPage={currentPage} onNavigate={onNavigate} />
      
      <div className="flex-1 flex">
        {/* Conversations List */}
        <div className="w-80 bg-[#121212] border-r border-[#333] flex flex-col">
          <div className="p-4 border-b border-[#333]">
            <h4 className="mb-4">Messages</h4>
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-[#A0A0A0]" size={18} />
              <Input
                placeholder="Search conversations..."
                className="pl-10 bg-[#1A1A1A] border-[#333]"
              />
            </div>
          </div>

          <ScrollArea className="flex-1 scrollbar-custom">
            <div className="p-2">
              {conversations.map((conv) => (
                <button
                  key={conv.id}
                  onClick={() => setSelectedChat(conv.id)}
                  className={`w-full p-4 rounded-lg mb-2 text-left transition-all ${
                    selectedChat === conv.id
                      ? 'bg-[#00FF9D]/10 border border-[#00FF9D]/30'
                      : 'bg-[#1A1A1A] border border-transparent hover:border-[#333]'
                  }`}
                >
                  <div className="flex items-start gap-3">
                    <div className="relative">
                      <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#00FF9D] to-[#7B61FF] flex items-center justify-center flex-shrink-0">
                        <span>{conv.avatar}</span>
                      </div>
                      {conv.online && (
                        <Circle
                          size={12}
                          className="absolute bottom-0 right-0 fill-[#00FF9D] text-[#00FF9D]"
                        />
                      )}
                    </div>
                    
                    <div className="flex-1 min-w-0">
                      <div className="flex items-start justify-between mb-1">
                        <span className="truncate">{conv.name}</span>
                        <span className="text-xs text-[#A0A0A0] ml-2">{conv.time}</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <p className="text-sm text-[#A0A0A0] truncate">{conv.lastMessage}</p>
                        {conv.unread > 0 && (
                          <span className="ml-2 px-2 py-0.5 bg-[#00FF9D] text-black text-xs rounded-full flex-shrink-0">
                            {conv.unread}
                          </span>
                        )}
                      </div>
                    </div>
                  </div>
                </button>
              ))}
            </div>
          </ScrollArea>
        </div>

        {/* Chat Window */}
        <div className="flex-1 flex flex-col">
          {/* Chat Header */}
          <div className="bg-[#121212] border-b border-[#333] p-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="relative">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#00FF9D] to-[#7B61FF] flex items-center justify-center">
                    <span>{conversations[selectedChat].avatar}</span>
                  </div>
                  {conversations[selectedChat].online && (
                    <Circle
                      size={10}
                      className="absolute bottom-0 right-0 fill-[#00FF9D] text-[#00FF9D]"
                    />
                  )}
                </div>
                <div>
                  <h5>{conversations[selectedChat].name}</h5>
                  <p className="text-sm text-[#A0A0A0]">
                    {conversations[selectedChat].online ? 'Online' : 'Offline'}
                  </p>
                </div>
              </div>
              
              <button className="px-4 py-2 bg-[#1A1A1A] border border-[#333] rounded-lg hover:border-[#00FF9D] transition-all text-sm">
                View Profile
              </button>
            </div>
          </div>

          {/* Messages */}
          <ScrollArea className="flex-1 p-6 scrollbar-custom">
            <div className="space-y-4 max-w-4xl mx-auto">
              {messages.map((msg) => (
                <div
                  key={msg.id}
                  className={`flex ${msg.sender === 'me' ? 'justify-end' : 'justify-start'}`}
                >
                  <div
                    className={`max-w-md px-4 py-3 rounded-lg ${
                      msg.sender === 'me'
                        ? 'bg-gradient-to-r from-[#00FF9D] to-[#7B61FF] text-black'
                        : 'bg-[#1A1A1A] border border-[#333]'
                    }`}
                  >
                    <p className="mb-1">{msg.text}</p>
                    <p className={`text-xs ${msg.sender === 'me' ? 'text-black/70' : 'text-[#A0A0A0]'}`}>
                      {msg.time}
                    </p>
                  </div>
                </div>
              ))}
              
              {/* Typing Indicator */}
              <div className="flex justify-start">
                <div className="bg-[#1A1A1A] border border-[#333] px-4 py-3 rounded-lg">
                  <div className="flex gap-1">
                    <div className="w-2 h-2 bg-[#00FF9D] rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></div>
                    <div className="w-2 h-2 bg-[#00FF9D] rounded-full animate-bounce" style={{ animationDelay: '150ms' }}></div>
                    <div className="w-2 h-2 bg-[#00FF9D] rounded-full animate-bounce" style={{ animationDelay: '300ms' }}></div>
                  </div>
                </div>
              </div>
            </div>
          </ScrollArea>

          {/* Message Input */}
          <div className="bg-[#121212] border-t border-[#333] p-4">
            <form onSubmit={handleSend} className="flex items-center gap-3">
              <button
                type="button"
                className="p-3 bg-[#1A1A1A] border border-[#333] rounded-lg hover:border-[#00FF9D] transition-all"
              >
                <Paperclip size={20} className="text-[#A0A0A0]" />
              </button>
              
              <Input
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Type your message..."
                className="flex-1 bg-[#1A1A1A] border-[#333]"
              />
              
              <button
                type="submit"
                className="p-3 bg-[#00FF9D] text-black rounded-lg hover:bg-[#00CC7E] transition-all shadow-[0_0_20px_rgba(0,255,157,0.3)]"
              >
                <Send size={20} />
              </button>
            </form>
          </div>
        </div>
      </div>
      </div>
      
      <Footer onNavigate={onNavigate} />
    </div>
  );
}

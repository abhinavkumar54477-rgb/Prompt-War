import React, { useState } from 'react';
import { MessageSquare, X, Send, Bot, Info, Ticket, Utensils, Users } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const AIAgentWidget: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<{role: 'user' | 'agent', text: string}[]>([
    { role: 'agent', text: 'Hello! I am your Kinetic Concierge. How can I help you navigate the event today?' }
  ]);
  const [input, setInput] = useState('');

  const handleSend = () => {
    if (!input.trim()) return;
    
    const userMsg = input;
    setMessages([...messages, { role: 'user', text: userMsg }]);
    setInput('');

    // Simulated AI Responses
    setTimeout(() => {
      let response = "I'm not sure about that, but you can find more info at the Main Stage Info Desk.";
      const lower = userMsg.toLowerCase();
      
      if (lower.includes('food') || lower.includes('eat')) {
        response = "The Food Court is located in Zone B. Currently, the Pizza Hub stall has a low wait time of about 5 minutes!";
      } else if (lower.includes('ticket') || lower.includes('entry')) {
        response = "You can view your e-ticket by clicking the QR icon in the top bar. Ticket sales for tomorrow are available in the 'Leaderboard' section under Rewards.";
      } else if (lower.includes('crowd') || lower.includes('busy')) {
        response = "The Main Stage is currently 'Packed'. I recommend visiting the Tech Hub (Stalls 11-20), which is currently 'Quiet'.";
      } else if (lower.includes('emergency') || lower.includes('help')) {
        response = "Please use the red 'Safety' button in the menu or top bar. Medical assistance is available at Zone C near the entrance.";
      }

      setMessages(prev => [...prev, { role: 'agent', text: response }]);
    }, 1000);
  };

  return (
    <>
      {/* Floating Action Button */}
      <button 
        onClick={() => setIsOpen(true)}
        className="fixed bottom-24 lg:bottom-8 right-6 w-14 h-14 bg-primary text-white rounded-full shadow-2xl flex items-center justify-center hover:scale-110 active:scale-95 transition-all z-[60]"
      >
        <MessageSquare size={28} />
      </button>

      {/* Chat Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, y: 100, scale: 0.8 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 100, scale: 0.8 }}
            className="fixed bottom-24 lg:bottom-28 right-6 w-[350px] max-w-[calc(100vw-3rem)] h-[500px] glass-panel rounded-3xl overflow-hidden flex flex-col z-[70] border border-white/20"
          >
            {/* Header */}
            <div className="p-4 bg-primary text-white flex justify-between items-center shadow-md">
              <div className="flex items-center gap-2">
                <Bot size={24} />
                <div>
                  <h3 className="font-headline font-bold text-sm">Kinetic Concierge</h3>
                  <p className="text-[10px] opacity-80">AI Assistant • Online</p>
                </div>
              </div>
              <button onClick={() => setIsOpen(false)} className="hover:bg-white/20 p-1 rounded-full transition-colors">
                <X size={20} />
              </button>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto p-4 flex flex-col gap-3 hide-scrollbar">
              {messages.map((msg, i) => (
                <div key={i} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                  <div className={`max-w-[80%] p-3 rounded-2xl text-sm font-body ${
                    msg.role === 'user' 
                      ? 'bg-primary text-white rounded-br-none' 
                      : 'bg-surface-container-high text-on-surface rounded-bl-none shadow-sm'
                  }`}>
                    {msg.text}
                  </div>
                </div>
              ))}
            </div>

            {/* Quick Suggestions */}
            <div className="px-4 py-2 flex gap-2 overflow-x-auto hide-scrollbar whitespace-nowrap">
              {[
                { icon: Utensils, text: 'Food?' },
                { icon: Ticket, text: 'Tickets?' },
                { icon: Users, text: 'Crowd?' },
                { icon: Info, text: 'Help' }
              ].map((item, i) => (
                <button 
                  key={i}
                  onClick={() => { setInput(item.text); handleSend(); }}
                  className="flex items-center gap-1 bg-surface-container-highest/50 hover:bg-surface-container-highest px-3 py-1.5 rounded-full text-[10px] font-bold text-on-surface-variant transition-colors"
                >
                  <item.icon size={12} />
                  {item.text}
                </button>
              ))}
            </div>

            {/* Input Area */}
            <div className="p-4 border-t border-surface-variant/30 flex gap-2 bg-white/50">
              <input 
                type="text" 
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && handleSend()}
                placeholder="Ask me anything..."
                className="flex-1 bg-surface-container-highest border-none rounded-xl px-4 py-2 text-xs focus:ring-1 focus:ring-primary outline-none font-body"
              />
              <button 
                onClick={handleSend}
                className="bg-primary text-white p-2 rounded-xl hover:scale-105 active:scale-95 transition-all"
              >
                <Send size={18} />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default AIAgentWidget;

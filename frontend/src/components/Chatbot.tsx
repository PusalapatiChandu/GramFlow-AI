import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageCircle, X, Send } from 'lucide-react';
import { Button } from '@/components/ui/button';

export const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<{role: 'user' | 'ai', text: string}[]>([
    { role: 'ai', text: 'Hello! I am your GramFlow AI assistant. How can I help you today? (Try asking: "Why is my risk high?" or "Can I take a loan?")' }
  ]);
  const [input, setInput] = useState('');

  const handleSend = () => {
    if (!input.trim()) return;
    
    // Add user message
    setMessages(prev => [...prev, { role: 'user', text: input }]);
    
    // Mock AI response
    setTimeout(() => {
      setMessages(prev => [...prev, { 
        role: 'ai', 
        text: `Based on your data, your ${input.includes('risk') ? 'risk is high because of expected low rainfall and high equipment costs next month.' : 'business shows strong cash flow. You are eligible for a NABARD scheme loan.'}`
      }]);
    }, 1000);
    
    setInput('');
  };

  return (
    <>
      <Button
        className="fixed bottom-6 right-6 rounded-full w-14 h-14 shadow-lg p-0 flex items-center justify-center bg-primary"
        onClick={() => setIsOpen(true)}
      >
        <MessageCircle size={28} />
      </Button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 50, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 50, scale: 0.9 }}
            className="fixed bottom-24 right-6 w-80 md:w-96 h-[500px] max-h-[80vh] bg-card border rounded-2xl shadow-xl flex flex-col overflow-hidden z-50"
          >
            <div className="bg-primary p-4 flex justify-between items-center text-primary-foreground">
              <h3 className="font-semibold flex items-center gap-2"><MessageCircle size={18} /> AI Assistant</h3>
              <button onClick={() => setIsOpen(false)} className="hover:bg-primary-foreground/20 p-1 rounded-md transition">
                <X size={18} />
              </button>
            </div>
            
            <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-background">
              {messages.map((msg, i) => (
                <div key={i} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                  <div className={`max-w-[80%] rounded-lg p-3 text-sm ${msg.role === 'user' ? 'bg-primary text-primary-foreground' : 'bg-muted'}`}>
                    {msg.text}
                  </div>
                </div>
              ))}
            </div>
            
            <div className="p-3 border-t border-border bg-card">
              <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-hide">
                {['Why is my risk high?', 'Explain prediction.', 'Should I take a loan?', 'Suggest improvements.'].map((prompt) => (
                  <button 
                    key={prompt}
                    onClick={() => { setInput(prompt); }}
                    className="whitespace-nowrap text-[10px] bg-secondary text-secondary-foreground hover:bg-secondary/80 px-2 py-1 rounded-full border border-border"
                  >
                    {prompt}
                  </button>
                ))}
              </div>
              <form onSubmit={handleSend} className="flex gap-2 mt-1">
                <input 
                  type="text" 
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  placeholder="Ask about your cash flow..." 
                  className="flex-1 bg-secondary text-secondary-foreground rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-primary border border-border"
                />
                <button type="submit" className="bg-primary text-primary-foreground p-2 rounded-md hover:bg-primary/90">
                  <Send size={18} />
                </button>
              </form>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

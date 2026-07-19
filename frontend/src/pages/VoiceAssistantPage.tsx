import { useState } from 'react';
import { motion } from 'framer-motion';
import { Mic, Volume2, Globe } from 'lucide-react';
import { Button } from '../components/ui/button';

export const VoiceAssistantPage = () => {
  const [listening, setListening] = useState(false);
  const [transcript, setTranscript] = useState('');

  const handleListen = () => {
    setListening(true);
    setTranscript('');
    
    // Mock the listening process
    setTimeout(() => {
      setTranscript('Mera is mahine ka doodh ka kitna profit hua?');
      setTimeout(() => {
        setListening(false);
      }, 1500);
    }, 2000);
  };

  return (
    <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="space-y-6 w-full max-w-4xl mx-auto h-[80vh] flex flex-col justify-center items-center relative">
      
      <div className="absolute top-0 right-0 flex items-center gap-2 bg-white/5 rounded-full px-4 py-2 border border-white/10">
        <Globe size={16} className="text-blue-400" />
        <select className="bg-transparent text-sm font-medium focus:outline-none text-white appearance-none">
          <option>Hindi / हिंदी</option>
          <option>Telugu / తెలుగు</option>
          <option>Marathi / मराठी</option>
          <option>English</option>
        </select>
      </div>

      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold mb-3">Multilingual Voice AI</h2>
        <p className="text-muted-foreground">Tap the microphone and ask a question in your local language.</p>
      </div>

      <div className="relative flex justify-center items-center w-64 h-64 mb-8">
        {listening && (
          <>
            <motion.div 
              initial={{ scale: 0.8, opacity: 0 }} animate={{ scale: 1.5, opacity: 0 }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="absolute w-32 h-32 bg-blue-500 rounded-full"
            />
            <motion.div 
              initial={{ scale: 0.8, opacity: 0 }} animate={{ scale: 2, opacity: 0 }}
              transition={{ duration: 1.5, delay: 0.5, repeat: Infinity }}
              className="absolute w-32 h-32 bg-blue-500 rounded-full"
            />
          </>
        )}
        
        <button 
          onClick={listening ? undefined : handleListen}
          className={`relative z-10 w-32 h-32 rounded-full flex items-center justify-center transition-all duration-300 shadow-2xl ${
            listening ? 'bg-blue-600 shadow-[0_0_40px_rgba(37,99,235,0.6)]' : 'bg-background border-4 border-white/10 hover:border-blue-500/50 hover:bg-white/5'
          }`}
        >
          <Mic size={48} className={listening ? 'text-white animate-pulse' : 'text-blue-400'} />
        </button>
      </div>

      <div className="h-32 text-center w-full max-w-2xl px-6">
        {listening ? (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
            <p className="text-blue-400 font-medium animate-pulse mb-2">Listening...</p>
            <p className="text-2xl font-semibold">{transcript}</p>
          </motion.div>
        ) : transcript ? (
          <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="bg-background/80 backdrop-blur-md p-6 rounded-2xl border border-white/10 shadow-xl text-left">
            <div className="flex items-start gap-3 mb-4 border-b border-white/10 pb-4">
              <Mic size={20} className="text-muted-foreground mt-1 shrink-0" />
              <p className="text-lg italic">"{transcript}"</p>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-8 h-8 rounded-full bg-gradient-to-br from-emerald-400 to-blue-500 flex items-center justify-center shrink-0">
                <Volume2 size={16} className="text-white" />
              </div>
              <div>
                <p className="text-sm font-bold text-emerald-400 mb-1">AI Assistant (Translated internally)</p>
                <p className="text-lg font-medium">आपका इस महीने का दूध से मुनाफा ₹24,500 रहा है, जो पिछले महीने से 12% अधिक है।</p>
                <p className="text-sm text-muted-foreground mt-2">(Your milk profit this month is ₹24,500, which is 12% higher than last month.)</p>
              </div>
            </div>
          </motion.div>
        ) : (
          <p className="text-muted-foreground italic">Try asking: "Mera is mahine ka profit kitna hai?"</p>
        )}
      </div>

    </motion.div>
  );
};

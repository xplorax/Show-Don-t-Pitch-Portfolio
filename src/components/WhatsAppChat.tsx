import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { MessageCircle, X, Send, Sparkles } from 'lucide-react';

// Easily replace this image link with your custom chat avatar/logo URL
export const CHAT_LOGO_IMAGE_URL = "https://res.cloudinary.com/yxfu3pyp/image/upload/v1784695066/white-icon_transparent_aw5jcl.png";

export const WhatsAppChat: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [userMessage, setUserMessage] = useState('');
  const [imgFailed, setImgFailed] = useState(false);

  const phoneNumber = '17056259094'; // Show, Don't Pitch WhatsApp

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    const defaultText = "Hi Show, Don't Pitch! I'm interested in discussing a project with your team.";
    const textToSend = userMessage.trim() ? userMessage.trim() : defaultText;
    const encodedText = encodeURIComponent(textToSend);
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedText}`;
    
    // Open in a new tab
    window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
    setUserMessage('');
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 font-sans">
      <AnimatePresence>
        {/* Chat Window */}
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            transition={{ type: 'spring', damping: 20, stiffness: 260 }}
            className="absolute bottom-16 right-0 w-[350px] max-w-[calc(100vw-2rem)] bg-white border border-stone-200/80 rounded-2xl shadow-2xl overflow-hidden z-50 flex flex-col"
          >
            {/* Header */}
            <div className="bg-emerald-950 p-4 text-white flex items-center justify-between relative">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(193,147,36,0.15)_0%,transparent_50%)] pointer-events-none" />
              
              <div className="flex items-center gap-3 relative z-10">
                {!imgFailed && CHAT_LOGO_IMAGE_URL ? (
                  <img
                    src={CHAT_LOGO_IMAGE_URL}
                    alt="Show Don't Pitch"
                    referrerPolicy="no-referrer"
                    onError={() => setImgFailed(true)}
                    className="w-10 h-10 rounded-full object-contain bg-emerald-900/60 p-1 border border-emerald-800"
                  />
                ) : (
                  <div className="w-10 h-10 rounded-full bg-emerald-900 border border-emerald-800 flex items-center justify-center font-display font-bold text-xs text-gold-300">
                    SDP
                  </div>
                )}
                <div className="flex flex-col">
                  <span className="font-display font-bold text-sm text-stone-100 tracking-wide leading-tight">
                    Show, Don't Pitch
                  </span>
                  <span className="text-[10px] text-emerald-300/90 font-mono tracking-wider flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse inline-block" />
                    DIRECTOR • ONLINE
                  </span>
                </div>
              </div>

              <button
                onClick={() => setIsOpen(false)}
                className="p-1 rounded-full hover:bg-white/10 text-stone-300 hover:text-white transition-colors cursor-pointer"
                aria-label="Close chat"
              >
                <X size={16} />
              </button>
            </div>

            {/* Chat Body */}
            <div className="p-4 bg-[#fcfbfa] flex-1 max-h-[280px] overflow-y-auto space-y-3.5 border-b border-stone-100 flex flex-col justify-end">
              {/* Automated Welcome Msg */}
              <div className="flex flex-col gap-1.5 max-w-[85%]">
                <div className="bg-emerald-50 border border-emerald-100/40 text-emerald-950 p-3 rounded-2xl rounded-tl-none text-xs leading-relaxed shadow-2xs">
                  Hello! I'm the lead director at Show, Don't Pitch. 👋
                </div>
                <span className="font-mono text-[9px] text-stone-400 pl-1 font-bold">11:00 AM</span>
              </div>

              <div className="flex flex-col gap-1.5 max-w-[85%]">
                <div className="bg-emerald-50 border border-emerald-100/40 text-emerald-950 p-3 rounded-2xl rounded-tl-none text-xs leading-relaxed shadow-2xs">
                  How can we help you craft your digital masterpiece? Let's discuss your project goals. Let's chat directly on WhatsApp!
                </div>
                <span className="font-mono text-[9px] text-stone-400 pl-1 font-bold">11:01 AM</span>
              </div>
            </div>

            {/* Input Form */}
            <form onSubmit={handleSendMessage} className="p-3 bg-white flex items-center gap-2">
              <input
                type="text"
                value={userMessage}
                onChange={(e) => setUserMessage(e.target.value)}
                placeholder="Type your inquiry message..."
                className="flex-1 px-3 py-2 border border-stone-200 focus:border-gold-500 focus:outline-hidden text-xs rounded-lg bg-stone-50 focus:bg-white transition-all text-emerald-950"
              />
              <button
                type="submit"
                className="w-8 h-8 rounded-lg bg-emerald-900 hover:bg-emerald-950 text-white flex items-center justify-center shrink-0 transition-colors cursor-pointer"
                aria-label="Send WhatsApp Message"
              >
                <Send size={14} className="text-gold-300" />
              </button>
            </form>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Floating Trigger Button */}
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => setIsOpen(!isOpen)}
        className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-emerald-900 hover:bg-emerald-950 text-white flex items-center justify-center shadow-lg hover:shadow-emerald-900/30 transition-all border border-emerald-800/50 cursor-pointer relative group"
        aria-label="Open Chat Support"
      >
        <span className="absolute -top-1 -right-1 w-3.5 h-3.5 rounded-full bg-gold-500 border-2 border-white flex items-center justify-center text-[7px] text-emerald-950 font-bold animate-bounce shadow-xs">
          1
        </span>
        <MessageCircle size={22} className="text-gold-300 group-hover:scale-110 transition-transform" />
      </motion.button>
    </div>
  );
};

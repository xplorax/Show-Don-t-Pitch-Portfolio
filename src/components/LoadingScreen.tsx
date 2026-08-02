import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';

export const LOADING_LOGO_IMAGE_URL = "https://res.cloudinary.com/yxfu3pyp/image/upload/v1784695066/white-icon_transparent_aw5jcl.png";

interface LoadingScreenProps {
  onComplete?: () => void;
}

export const LoadingScreen: React.FC<LoadingScreenProps> = ({ onComplete }) => {
  const [progress, setProgress] = useState(0);
  const [statusText, setStatusText] = useState('Initializing SDP Protocol...');
  const [isFinished, setIsFinished] = useState(false);
  const [imgFailed, setImgFailed] = useState(false);

  useEffect(() => {
    // Smooth progress counter simulation
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          return 100;
        }
        // Accelerate near the end
        const increment = prev < 60 ? Math.floor(Math.random() * 8) + 4 : Math.floor(Math.random() * 12) + 8;
        const next = Math.min(100, prev + increment);
        
        if (next > 30 && next < 70) {
          setStatusText('Loading verified benchmarks...');
        } else if (next >= 70 && next < 95) {
          setStatusText('Compiling custom storefront...');
        } else if (next >= 95) {
          setStatusText('System Ready.');
        }
        return next;
      });
    }, 80);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (progress === 100) {
      const timeout = setTimeout(() => {
        setIsFinished(true);
        if (onComplete) onComplete();
      }, 400);
      return () => clearTimeout(timeout);
    }
  }, [progress, onComplete]);

  return (
    <AnimatePresence>
      {!isFinished && (
        <motion.div
          key="loading-screen"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, y: -20, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } }}
          className="fixed inset-0 z-[9999] bg-[#021f18] text-stone-100 flex flex-col items-center justify-between p-8 select-none overflow-hidden"
        >
          {/* Subtle Ambient Background Glows */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-emerald-800/20 blur-[120px] rounded-full pointer-events-none" />
          <div className="absolute top-1/4 right-1/4 w-[300px] h-[300px] bg-gold-500/10 blur-[100px] rounded-full pointer-events-none" />

          {/* Top Brand Tag */}
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="w-full max-w-7xl flex justify-between items-center text-xs font-mono uppercase tracking-[0.25em] text-emerald-300/60"
          >
            <span>SDP Agency</span>
            <span>2026 Edition</span>
          </motion.div>

          {/* Center Content: Brand Logo + Progress */}
          <div className="flex flex-col items-center text-center max-w-md w-full relative z-10 my-auto">
            <motion.div
              initial={{ scale: 0.85, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="mb-8 relative"
            >
              {!imgFailed && LOADING_LOGO_IMAGE_URL ? (
                <div className="relative">
                  <div className="absolute inset-0 bg-gold-500/20 rounded-full blur-xl animate-pulse" />
                  <img
                    src={LOADING_LOGO_IMAGE_URL}
                    alt="Show Don't Pitch"
                    referrerPolicy="no-referrer"
                    onError={() => setImgFailed(true)}
                    className="w-20 h-20 sm:w-24 sm:h-24 object-contain relative z-10 mx-auto filter drop-shadow-lg"
                  />
                </div>
              ) : (
                <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-full bg-emerald-900 border-2 border-gold-500/40 flex items-center justify-center text-gold-300 font-display font-bold text-2xl shadow-xl mx-auto">
                  SDP
                </div>
              )}
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h1 className="font-display text-2xl sm:text-3xl font-bold tracking-tight text-stone-100 mb-2">
                SHOW, DON'T PITCH
              </h1>
              <p className="font-mono text-[10px] sm:text-xs text-gold-400/90 tracking-[0.3em] uppercase font-semibold mb-10">
                CREATIVE AGENCY
              </p>
            </motion.div>

            {/* Progress Bar Container */}
            <div className="w-full space-y-3">
              <div className="w-full h-1 bg-emerald-950 rounded-full overflow-hidden border border-emerald-800/40 p-[1px]">
                <motion.div
                  className="h-full bg-gradient-to-r from-gold-600 via-gold-400 to-emerald-400 rounded-full shadow-[0_0_12px_rgba(217,170,72,0.6)]"
                  style={{ width: `${progress}%` }}
                  transition={{ ease: 'easeOut', duration: 0.1 }}
                />
              </div>

              {/* Status and Percentage counter */}
              <div className="flex items-center justify-between font-mono text-xs text-emerald-200/70">
                <span className="truncate pr-2">{statusText}</span>
                <span className="text-gold-300 font-bold tracking-wider">{progress}%</span>
              </div>
            </div>
          </div>

          {/* Bottom Footer Note */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-center font-mono text-[10px] text-emerald-400/50 uppercase tracking-widest"
          >
            Built for sustainable growth &bull; 21-Day Sprint System
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

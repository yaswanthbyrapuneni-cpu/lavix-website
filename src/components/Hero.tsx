import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Play, ArrowRight, Cloud, Store, Zap } from 'lucide-react';

interface HeroProps {
  onOpenBookDemo: () => void;
  onOpenWatchDemo: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenBookDemo, onOpenWatchDemo }) => {
  const featureChips = [
    { icon: Sparkles, label: 'AI Powered' },
    { icon: Cloud, label: 'Cloud Based' },
    { icon: Store, label: 'Retail Ready' },
    { icon: Zap, label: 'Real Time' },
  ];

  return (
    <section id="hero" className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden bg-[#FFF9F2]">
      {/* Ambient background soft glowing gradient blobs */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[700px] h-[500px] bg-gradient-to-tr from-[#D48B2C]/10 via-[#8B3E2F]/12 to-[#6E1F1F]/08 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute top-10 right-10 w-[400px] h-[400px] bg-[#D48B2C]/10 rounded-full blur-3xl pointer-events-none -z-10 animate-pulse-glow" />
      <div className="absolute bottom-0 left-10 w-[450px] h-[450px] bg-[#6E1F1F]/10 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Side Content */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-6 flex flex-col items-start text-left"
          >
            {/* AI Powered Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-[#F1E4D3] shadow-soft mb-6">
              <Sparkles className="w-4 h-4 text-[#D48B2C] animate-spin" style={{ animationDuration: '8s' }} />
              <span className="text-xs font-semibold text-[#6E1F1F] tracking-wider uppercase">
                AI-Powered Virtual Trial Room
              </span>
            </div>

            {/* Main Heading */}
            <h1 className="font-heading text-4xl sm:text-5xl lg:text-[64px] leading-[1.1] font-bold tracking-tight text-[#2A1C18] mb-6">
              Experience <br className="hidden sm:inline" />
              <span className="bg-gradient-to-r from-[#6E1F1F] to-[#D48B2C] bg-clip-text text-transparent">
                Before You Buy
              </span>
            </h1>

            {/* Description Paragraph */}
            <p className="text-base sm:text-lg text-[#5E4A43] leading-relaxed max-w-xl mb-8">
              LAVIX is an AI-powered Virtual Trial Room solution that lets customers try on apparel virtually in real time without physically wearing garments.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-4 mb-10 w-full sm:w-auto">
              <button
                onClick={onOpenBookDemo}
                className="w-full sm:w-auto px-8 py-4 rounded-full bg-[#6E1F1F] hover:bg-[#8B3E2F] text-white text-base font-semibold shadow-lg shadow-[#6E1F1F]/25 hover:shadow-xl hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 flex items-center justify-center gap-2 group"
              >
                <span>Book Live Demo</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>

              <button
                onClick={onOpenWatchDemo}
                className="w-full sm:w-auto px-7 py-4 rounded-full bg-white text-[#6E1F1F] text-base font-semibold border border-[#D48B2C] shadow-soft hover:bg-[#FFF6EC] transition-all duration-300 flex items-center justify-center gap-2.5 group"
              >
                <div className="w-7 h-7 rounded-full bg-[#F4E7D5] text-[#6E1F1F] flex items-center justify-center group-hover:bg-[#8B3E2F] group-hover:text-white transition-colors">
                  <Play className="w-3.5 h-3.5 fill-current ml-0.5" />
                </div>
                <span>Watch Demo</span>
              </button>
            </div>

            {/* Small Feature Chips */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 w-full pt-4 border-t border-[#F1E4D3]">
              {featureChips.map((chip, idx) => {
                const IconComponent = chip.icon;
                return (
                  <div 
                    key={idx}
                    className="flex items-center gap-2 px-3.5 py-2 rounded-2xl bg-white border border-[#F1E4D3] shadow-xs hover:border-[#D48B2C] transition-all"
                  >
                    <IconComponent className="w-4 h-4 text-[#D48B2C]" />
                    <span className="text-xs font-semibold text-[#2A1C18]">{chip.label}</span>
                  </div>
                );
              })}
            </div>
          </motion.div>

          {/* Right Side - Clean Phone / Smart Mirror Mockup with Video */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-6 relative flex items-center justify-center"
          >
            {/* Smart Mirror / Phone Device Container */}
            <div className="relative w-full max-w-[380px] sm:max-w-[420px] aspect-[9/16] rounded-[44px] bg-gradient-to-b from-[#2A1C18] via-[#6E1F1F] to-[#1C120F] p-3 sm:p-4 shadow-hero-mirror border-4 border-white ring-1 ring-[#D48B2C]/30">
              
              {/* Top Camera Notch */}
              <div className="absolute top-3 left-1/2 -translate-x-1/2 w-16 h-3 rounded-full bg-black/60 z-30 flex items-center justify-center gap-1.5">
                <div className="w-1.5 h-1.5 rounded-full bg-[#D48B2C]" />
                <div className="w-1 h-1 rounded-full bg-white/40" />
              </div>

              {/* Display Area with Video */}
              <div className="relative w-full h-full rounded-[34px] overflow-hidden bg-black shadow-inner">
                <video
                  src="/intro.mp4"
                  autoPlay
                  loop
                  muted
                  playsInline
                  preload="auto"
                  poster="/intro-poster.jpg"
                  controlsList="nodownload noplaybackrate"
                  disablePictureInPicture
                  onContextMenu={(e) => e.preventDefault()}
                  className="w-full h-full object-cover rounded-[34px] select-none"
                />
              </div>

            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

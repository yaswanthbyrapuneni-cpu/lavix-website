import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2, ChevronLeft, ChevronRight, ArrowRight, Sparkles, Heart, Search, Camera } from 'lucide-react';
import { DEMO_GARMENTS } from '../data/garments';

interface FutureOfTryOnProps {
  onOpenBookDemo: () => void;
}

export const FutureOfTryOn: React.FC<FutureOfTryOnProps> = ({ onOpenBookDemo }) => {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const currentGarment = DEMO_GARMENTS[selectedIndex];

  const handlePrev = () => {
    setSelectedIndex((prev) => (prev === 0 ? DEMO_GARMENTS.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setSelectedIndex((prev) => (prev === DEMO_GARMENTS.length - 1 ? 0 : prev + 1));
  };

  const checklistLeft = [
    'Real-Time Try-On',
    'Instant Garment Switching',
    'Body & Pose Detection',
    'Smart Alignment',
    'High-Quality Rendering',
  ];

  const checklistRight = [
    'Full Screen Experience',
    'Capture & Save Images',
    'Wishlist & Favorites',
    'Product Search',
    'Category-Based Browsing',
  ];

  return (
    <section id="solutions" className="py-24 bg-[#FFF9F2] relative overflow-hidden">
      {/* Background Soft Glow */}
      <div className="absolute top-1/3 left-1/4 w-[500px] h-[500px] bg-gradient-to-tr from-[#D48B2C]/10 to-[#6E1F1F]/10 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column Content */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-6 flex flex-col items-start"
          >
            {/* Heading */}
            <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#2A1C18] mb-5 leading-tight">
              Experience the <br />
              <span className="bg-gradient-to-r from-[#6E1F1F] to-[#D48B2C] bg-clip-text text-transparent">
                Future of Try-On
              </span>
            </h2>

            {/* Subtitle / Description */}
            <p className="text-base sm:text-lg text-[#5E4A43] leading-relaxed mb-8 max-w-xl">
              Advanced AI technology detects your body, understands your pose and renders apparel instantly with perfect fit and alignment.
            </p>

            {/* Checklist 2-Column Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-3 gap-x-6 w-full mb-9">
              <div className="flex flex-col gap-3">
                {checklistLeft.map((item, idx) => (
                  <div key={idx} className="flex items-center gap-2.5">
                    <CheckCircle2 className="w-5 h-5 text-[#D48B2C] shrink-0" />
                    <span className="text-sm font-semibold text-[#2A1C18]">{item}</span>
                  </div>
                ))}
              </div>

              <div className="flex flex-col gap-3">
                {checklistRight.map((item, idx) => (
                  <div key={idx} className="flex items-center gap-2.5">
                    <CheckCircle2 className="w-5 h-5 text-[#8B3E2F] shrink-0" />
                    <span className="text-sm font-semibold text-[#2A1C18]">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* CTA Button */}
            <button
              onClick={onOpenBookDemo}
              className="px-7 py-3.5 rounded-full bg-[#6E1F1F] hover:bg-[#8B3E2F] text-white text-sm font-semibold shadow-md shadow-[#6E1F1F]/20 hover:shadow-lg transition-all flex items-center gap-2 group"
            >
              <span>Explore All Features</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
          </motion.div>

          {/* Right Column - Smartphone Mockup & Outfit Preview Carousel */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-6 relative flex items-center justify-center py-6"
          >
            {/* Carousel Control Buttons */}
            <button
              onClick={handlePrev}
              className="absolute left-0 z-30 w-11 h-11 rounded-full bg-white shadow-md border border-[#D48B2C] flex items-center justify-center text-[#6E1F1F] hover:bg-[#FFF6EC] transition-colors"
              aria-label="Previous Outfit"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>

            <button
              onClick={handleNext}
              className="absolute right-0 z-30 w-11 h-11 rounded-full bg-white shadow-md border border-[#D48B2C] flex items-center justify-center text-[#6E1F1F] hover:bg-[#FFF6EC] transition-colors"
              aria-label="Next Outfit"
            >
              <ChevronRight className="w-6 h-6" />
            </button>

            {/* Background Outfit Preview Cards Flanking Phone */}
            <div className="flex items-center justify-center gap-2 sm:gap-4 w-full px-2 sm:px-12">
              
              {/* Left Side Preview Card */}
              <div 
                onClick={handlePrev}
                className="hidden sm:block w-20 sm:w-24 h-36 sm:h-40 rounded-2xl overflow-hidden shadow-md opacity-60 scale-90 border border-white/60 cursor-pointer hover:opacity-90 transition-all shrink-0"
              >
                <img 
                  src={DEMO_GARMENTS[(selectedIndex - 1 + DEMO_GARMENTS.length) % DEMO_GARMENTS.length].thumbnail} 
                  alt="Previous garment"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Center Smartphone Mockup */}
              <div className="relative w-full max-w-[270px] sm:max-w-[310px] aspect-[9/18] rounded-[38px] sm:rounded-[44px] bg-gradient-to-b from-[#2A1C18] via-[#6E1F1F] to-[#1C120F] p-2.5 sm:p-3 shadow-2xl border-4 border-white ring-1 ring-[#D48B2C]/30 shrink-0">
                
                {/* Dynamic Phone Notch */}
                <div className="absolute top-4 left-1/2 -translate-x-1/2 w-24 h-4 rounded-full bg-black z-30 flex items-center justify-center">
                  <div className="w-3 h-3 rounded-full bg-amber-950 border border-gray-700" />
                </div>

                {/* Phone Screen Display */}
                <div className="relative w-full h-full rounded-[30px] sm:rounded-[34px] overflow-hidden bg-gray-950 flex flex-col justify-between pt-8 pb-4 px-3">
                  
                  {/* Smartphone App Header */}
                  <div className="flex items-center justify-between text-white text-xs mb-2 z-10">
                    <span className="font-heading font-bold tracking-wider text-amber-200 text-[11px] sm:text-xs">LAVIX APP</span>
                    <div className="flex items-center gap-2">
                      <Search className="w-3.5 h-3.5 text-gray-300" />
                      <Heart className="w-3.5 h-3.5 text-[#D48B2C]" />
                    </div>
                  </div>

                  {/* Model Image displaying selected outfit */}
                  <div className="relative flex-1 rounded-2xl overflow-hidden my-1 bg-gray-900 border border-white/10 flex items-center justify-center">
                    <img 
                      key={currentGarment.id}
                      src={currentGarment.modelImage} 
                      alt={currentGarment.name} 
                      className="w-full h-full object-cover object-top animate-in fade-in duration-300"
                    />
                    
                    {/* Live AR indicator */}
                    <div className="absolute top-2 right-2 px-2 py-0.5 rounded-full bg-black/60 backdrop-blur-md text-[9px] text-white flex items-center gap-1 border border-white/20">
                      <Sparkles className="w-2.5 h-2.5 text-[#D48B2C]" />
                      <span>Live AR</span>
                    </div>

                    {/* Garment Details Badge */}
                    <div className="absolute bottom-2 left-2 right-2 p-2 rounded-xl bg-black/70 backdrop-blur-md text-white border border-white/15">
                      <p className="text-[10px] font-semibold text-amber-200 truncate">{currentGarment.name}</p>
                      <div className="flex items-center justify-between mt-0.5">
                        <span className="text-xs font-bold text-[#F2B84A]">{currentGarment.price}</span>
                        <span className="text-[9px] px-1.5 py-0.5 rounded bg-[#6E1F1F] text-white font-medium">{currentGarment.tag}</span>
                      </div>
                    </div>
                  </div>

                  {/* Smartphone App Bottom Navigation */}
                  <div className="flex items-center justify-between pt-2 px-2 text-white">
                    <button className="p-1.5 rounded-xl bg-white/10 hover:bg-white/20 text-xs flex items-center gap-1 cursor-pointer">
                      <Camera className="w-3.5 h-3.5 text-[#D48B2C]" />
                      <span className="text-[10px]">Capture</span>
                    </button>
                    <button className="p-1.5 rounded-xl bg-white/10 hover:bg-white/20 text-xs flex items-center gap-1 cursor-pointer">
                      <Heart className="w-3.5 h-3.5 text-rose-400" />
                      <span className="text-[10px]">Favorite</span>
                    </button>
                  </div>

                </div>
              </div>

              {/* Right Side Preview Card */}
              <div 
                onClick={handleNext}
                className="hidden sm:block w-20 sm:w-24 h-36 sm:h-40 rounded-2xl overflow-hidden shadow-md opacity-60 scale-90 border border-white/60 cursor-pointer hover:opacity-90 transition-all shrink-0"
              >
                <img 
                  src={DEMO_GARMENTS[(selectedIndex + 1) % DEMO_GARMENTS.length].thumbnail} 
                  alt="Next garment"
                  className="w-full h-full object-cover"
                />
              </div>

            </div>

          </motion.div>

        </div>
      </div>
    </section>
  );
};

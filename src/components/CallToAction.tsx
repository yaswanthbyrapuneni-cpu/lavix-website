import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, ArrowRight } from 'lucide-react';

interface CallToActionProps {
  onOpenBookDemo: () => void;
}

export const CallToAction: React.FC<CallToActionProps> = ({ onOpenBookDemo }) => {
  return (
    <section className="py-20 bg-[#FFF9F2] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Large Gradient Banner */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative rounded-[36px] bg-cta-gradient p-8 sm:p-12 lg:p-16 text-white overflow-hidden shadow-2xl shadow-[#6E1F1F]/25 flex flex-col md:flex-row items-center justify-between gap-8"
        >
          {/* Subtle Decorative Pattern */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-black/10 rounded-full blur-2xl pointer-events-none" />

          {/* Left Text */}
          <div className="relative z-10 max-w-2xl text-left">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/15 backdrop-blur-md text-white text-xs font-semibold mb-4 border border-white/20">
              <Calendar className="w-4 h-4 text-[#F2B84A]" />
              <span>INTERACTIVE LIVE DEMONSTRATION</span>
            </div>

            <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight mb-4 leading-tight">
              Ready to Transform Your Retail Experience?
            </h2>
            <p className="text-base sm:text-lg text-amber-100 font-medium leading-relaxed">
              Book a live demo today and see how LAVIX virtual trial room can elevate your store performance, engage shoppers, and boost conversion rates.
            </p>
          </div>

          {/* Right Action Button */}
          <div className="relative z-10 shrink-0 w-full md:w-auto">
            <button
              onClick={onOpenBookDemo}
              className="w-full md:w-auto px-9 py-5 rounded-full bg-white text-[#6E1F1F] hover:bg-[#FFF6EC] font-heading font-bold text-base shadow-xl hover:shadow-2xl hover:scale-105 active:scale-95 transition-all duration-300 flex items-center justify-center gap-3 group"
            >
              <span>Book Your Demo</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>

        </motion.div>

      </div>
    </section>
  );
};

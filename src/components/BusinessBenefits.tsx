import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2, ArrowRight, Sparkles, Store, ShieldCheck } from 'lucide-react';

interface BusinessBenefitsProps {
  onOpenBookDemo: () => void;
}

export const BusinessBenefits: React.FC<BusinessBenefitsProps> = ({ onOpenBookDemo }) => {
  const benefits = [
    'Increase Customer Engagement',
    'Improve Shopping Experience',
    'Boost Product Discovery',
    'Reduce Trial Room Congestion',
    'Increase Conversion Rates',
    'Reduce Return Rates',
    'Gain Actionable Customer Insights',
    'Build Modern Digital Retail Experience',
  ];

  return (
    <section id="about" className="py-24 bg-[#FDF5EC] relative overflow-hidden">
      {/* Soft Gradient Background Blobs */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-[#D48B2C]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#6E1F1F]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Side: Large Illustration / Showcase Card */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-6 relative"
          >
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-[#F1E4D3] group">
              <img
                src="https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=1000&q=80"
                alt="LAVIX Smart Retail Showroom"
                className="w-full aspect-[4/3] object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#2A1C18] via-[#2A1C18]/40 to-transparent flex flex-col justify-end p-8 text-white">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/20 backdrop-blur-md w-fit mb-3 border border-white/30">
                  <Sparkles className="w-3.5 h-3.5 text-[#D48B2C]" />
                  <span className="text-xs font-semibold">ENTERPRISE RETAIL READY</span>
                </div>
                <h3 className="font-heading text-2xl font-bold mb-2">
                  Transforming Store Footprint Into Interactive Digital Experience
                </h3>
                <p className="text-xs text-amber-100 leading-relaxed">
                  LAVIX bridges the gap between physical retail touchpoints and digital convenience, bringing seamless virtual try-on to fashion boutiques and luxury chains.
                </p>
              </div>
            </div>

            {/* Floating Highlight Card */}
            <div className="absolute -bottom-6 -right-6 glass-panel p-4 rounded-2xl shadow-glass hidden sm:flex items-center gap-3 border border-[#F1E4D3]">
              <div className="w-10 h-10 rounded-xl bg-[#6E1F1F] text-white flex items-center justify-center">
                <Store className="w-5 h-5 text-[#D48B2C]" />
              </div>
              <div>
                <p className="text-xs font-bold text-[#2A1C18]">Zero Physical Garment Wear</p>
                <p className="text-[11px] text-[#5E4A43]">Contactless & Hygienic</p>
              </div>
            </div>
          </motion.div>

          {/* Right Side: Benefits Checklist & Content */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-6 flex flex-col items-start"
          >
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-[#F1E4D3] text-[#6E1F1F] text-xs font-semibold mb-4 shadow-xs">
              <ShieldCheck className="w-4 h-4 text-[#D48B2C]" />
              <span>PROVEN VALUE PROPOSITION</span>
            </div>

            <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#2A1C18] mb-5 leading-tight">
              Tangible{' '}
              <span className="bg-gradient-to-r from-[#6E1F1F] to-[#D48B2C] bg-clip-text text-transparent">
                Business Benefits
              </span>{' '}
              for Fashion Retailers
            </h2>

            <p className="text-base text-[#5E4A43] leading-relaxed mb-8">
              By deploying LAVIX Smart Mirrors and Tablets in your retail store, you resolve traditional trial room bottlenecks and create a memorable shopping journey.
            </p>

            {/* 8 Benefits Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full mb-9">
              {benefits.map((benefit, idx) => (
                <motion.div 
                  key={idx}
                  whileHover={{ y: -3, scale: 1.01 }}
                  transition={{ duration: 0.2 }}
                  className="glass-card p-3.5 rounded-2xl flex items-center gap-3 border border-[#F1E4D3] hover:border-[#D48B2C] transition-colors cursor-default"
                >
                  <div className="w-7 h-7 rounded-xl bg-[#F4E7D5] text-[#6E1F1F] flex items-center justify-center shrink-0">
                    <CheckCircle2 className="w-4 h-4 text-[#D48B2C]" />
                  </div>
                  <span className="text-xs font-semibold text-[#2A1C18]">{benefit}</span>
                </motion.div>
              ))}
            </div>

            {/* Action Button */}
            <button
              onClick={onOpenBookDemo}
              className="px-8 py-4 rounded-full bg-[#6E1F1F] hover:bg-[#8B3E2F] text-white text-sm font-semibold shadow-lg shadow-[#6E1F1F]/25 hover:shadow-xl hover:scale-[1.02] transition-all flex items-center gap-2 group"
            >
              <span>Schedule Retail Consultation</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>

          </motion.div>

        </div>
      </div>
    </section>
  );
};

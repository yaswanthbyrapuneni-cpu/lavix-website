import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Hand, Box, TrendingUp, Clock, UserCheck, Cloud, Target } from 'lucide-react';

export const WhyRetailersLove: React.FC = () => {
  const features = [
    {
      icon: Sparkles,
      title: 'AI-Powered Virtual Try-On',
      desc: 'Instant 3D body mapping and realistic fabric draping lets customers try any garment seamlessly.',
    },
    {
      icon: Hand,
      title: 'Contactless Shopping Experience',
      desc: 'Hygiene-first touchless trial room interaction eliminating physical garment wear and damage.',
    },
    {
      icon: Box,
      title: 'Increased Customer Engagement',
      desc: 'Interactive smart mirror experience keeps shoppers exploring more styles and outfits in-store.',
    },
    {
      icon: TrendingUp,
      title: 'Higher Conversion Rates',
      desc: 'Instant visual confidence reduces purchase hesitation and significantly boosts retail checkout rates.',
    },
    {
      icon: Clock,
      title: 'Reduced Trial Room Waiting Time',
      desc: 'Eliminates trial room queues during peak shopping hours for faster store throughput.',
    },
    {
      icon: UserCheck,
      title: 'Digital Customer Experience',
      desc: 'Delivers a futuristic omnichannel retail experience that sets your store brand apart.',
    },
    {
      icon: Cloud,
      title: 'SaaS Cloud Platform',
      desc: 'Zero heavy local servers required. Seamless cloud catalog synchronization & real-time updates.',
    },
    {
      icon: Target,
      title: 'Industry Ready & Scalable',
      desc: 'Designed for single boutique stores to multi-story retail chains & luxury shopping malls.',
    },
  ];

  return (
    <section id="features" className="py-24 bg-[#FDF5EC] relative overflow-hidden">
      {/* Subtle Background Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#D48B2C]/08 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#6E1F1F]/08 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Centered Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#2A1C18] mb-4"
          >
            Why Retailers Love{' '}
            <span className="bg-gradient-to-r from-[#6E1F1F] to-[#D48B2C] bg-clip-text text-transparent">
              LAVIX?
            </span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-base sm:text-lg text-[#5E4A43]"
          >
            Empower your retail store with next-generation AI trial technology engineered to elevate shopper satisfaction and accelerate retail performance.
          </motion.p>
        </div>

        {/* Feature Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((item, idx) => {
            const IconComp = item.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                whileHover={{ y: -6, scale: 1.02 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: idx * 0.05 }}
                className="glass-card p-6 rounded-3xl flex flex-col items-start group hover:bg-[#FFFFFF] transition-all duration-300 border border-[#F1E4D3] cursor-pointer"
              >
                {/* Rounded Icon Container */}
                <div className="w-14 h-14 rounded-2xl bg-[#FFF8F0] flex items-center justify-center mb-5 group-hover:scale-110 group-hover:bg-[#F4E7D5] transition-transform duration-300">
                  <IconComp className="w-7 h-7 text-[#D48B2C] group-hover:text-[#8B3E2F] transition-colors" />
                </div>

                {/* Card Title */}
                <h3 className="font-heading text-lg font-bold text-[#2A1C18] mb-2.5 leading-snug group-hover:text-[#6E1F1F] transition-colors">
                  {item.title}
                </h3>

                {/* Card Description */}
                <p className="text-sm text-[#5E4A43] leading-relaxed">
                  {item.desc}
                </p>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

import React from 'react';
import { motion } from 'framer-motion';
import { LayoutDashboard, UploadCloud, ShoppingCart, UserCheck, MessageSquareHeart, BarChart3, ArrowRight } from 'lucide-react';

export const HowLavixWorks: React.FC = () => {
  const steps = [
    {
      num: '01',
      title: 'Admin Panel',
      subtitle: 'System Control',
      desc: 'Central management dashboard for inventory setup, store settings & catalog controls.',
      icon: LayoutDashboard,
      iconBg: 'bg-purple-600 text-white shadow-purple-500/25',
      borderColor: 'border-purple-200 hover:border-purple-500',
      arrowColor: 'text-purple-500',
    },
    {
      num: '02',
      title: 'Upload & Categorize Products',
      subtitle: 'Catalog Onboarding',
      desc: 'Upload high-res apparel photos and organize into categories, collections, and sizes.',
      icon: UploadCloud,
      iconBg: 'bg-blue-600 text-white shadow-blue-500/25',
      borderColor: 'border-blue-200 hover:border-blue-500',
      arrowColor: 'text-blue-500',
    },
    {
      num: '03',
      title: 'Products Available in Customer Portal',
      subtitle: 'Live Sync',
      desc: 'Digital garment assets automatically sync across all smart mirrors and kiosk displays.',
      icon: ShoppingCart,
      iconBg: 'bg-teal-600 text-white shadow-teal-500/25',
      borderColor: 'border-teal-200 hover:border-teal-500',
      arrowColor: 'text-teal-500',
    },
    {
      num: '04',
      title: 'Customer Virtual Try-On',
      subtitle: 'Real-Time AR',
      desc: 'Shoppers stand in front of smart mirrors for instant, contactless real-time trial.',
      icon: UserCheck,
      iconBg: 'bg-emerald-600 text-white shadow-emerald-500/25',
      borderColor: 'border-emerald-200 hover:border-emerald-500',
      arrowColor: 'text-emerald-500',
    },
    {
      num: '05',
      title: 'Feedback & Engagement',
      subtitle: 'Shopper Insights',
      desc: 'Capture customer preferences, wishlist items, style ratings, and engagement metrics.',
      icon: MessageSquareHeart,
      iconBg: 'bg-green-600 text-white shadow-green-500/25',
      borderColor: 'border-green-200 hover:border-green-500',
      arrowColor: 'text-green-500',
    },
    {
      num: '06',
      title: 'Retail Analytics for Business Growth',
      subtitle: 'Revenue Scale',
      desc: 'Analyze try-on conversion data to optimize inventory stocking and accelerate revenue.',
      icon: BarChart3,
      iconBg: 'bg-purple-700 text-white shadow-purple-500/25',
      borderColor: 'border-purple-200 hover:border-purple-500',
      arrowColor: 'text-purple-500',
    },
  ];

  return (
    <section id="workflow" className="py-24 bg-[#FFF9F2] relative overflow-hidden">
      {/* Soft Ambient Background Glows */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[450px] bg-gradient-to-tr from-[#6E1F1F]/08 via-[#D48B2C]/10 to-[#8B3E2F]/08 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#2A1C18] mb-4"
          >
            End-to-End{' '}
            <span className="bg-gradient-to-r from-[#6E1F1F] to-[#D48B2C] bg-clip-text text-transparent">
              LAVIX Workflow
            </span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-base sm:text-lg text-[#5E4A43]"
          >
            A seamless 6-step ecosystem connecting retail store admin controls to customer virtual try-on and retail business analytics.
          </motion.p>
        </div>

        {/* Workflow Card Container with Top Badge */}
        <div className="relative rounded-3xl bg-white border border-[#D48B2C]/30 p-4 sm:p-10 pt-8 sm:pt-10 shadow-xl shadow-[#6E1F1F]/05">
          
          {/* Top Pill Header Badge */}
          <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 sm:px-6 py-1 sm:py-1.5 rounded-full bg-[#6E1F1F] text-white text-[10px] sm:text-xs font-bold uppercase tracking-widest shadow-md flex items-center gap-1.5 sm:gap-2 border border-white/20 whitespace-nowrap">
            <span className="w-1.5 sm:w-2 h-1.5 sm:h-2 rounded-full bg-[#F2B84A] animate-pulse" />
            <span>LAVIX WORKFLOW SUMMARY</span>
          </div>

          {/* 6-Step Horizontal Flow Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-6 sm:gap-4 items-stretch pt-2 sm:pt-4">
            {steps.map((step, idx) => {
              const IconComponent = step.icon;
              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  className="relative flex flex-col items-center text-center group h-full justify-between"
                >
                  {/* Arrow connector for LG screens */}
                  {idx < steps.length - 1 && (
                    <div className="hidden lg:flex absolute top-8 left-[65%] w-[70%] items-center justify-center z-0 pointer-events-none">
                      <div className="w-full h-[2px] bg-gradient-to-r from-gray-200 to-gray-300 group-hover:from-[#D48B2C]/60 group-hover:to-[#6E1F1F]/60 transition-colors" />
                      <ArrowRight className={`w-4 h-4 shrink-0 -ml-1 ${step.arrowColor}`} />
                    </div>
                  )}

                  {/* Icon Circle */}
                  <div className="relative z-10 mb-4 flex flex-col items-center">
                    <div className={`w-16 h-16 rounded-full ${step.iconBg} flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300 cursor-pointer ring-4 ring-white`}>
                      <IconComponent className="w-7 h-7" />
                    </div>
                    <span className="mt-2 text-[10px] font-mono font-bold text-[#6E1F1F] bg-[#FFF8F0] px-2 py-0.5 rounded-full border border-[#F1E4D3]">
                      STEP {step.num}
                    </span>
                  </div>

                  {/* Step Card Content */}
                  <div className={`w-full p-4 rounded-2xl bg-[#FFF9F2]/50 border ${step.borderColor} transition-all duration-300 flex-1 flex flex-col justify-between hover:shadow-md`}>
                    <div>
                      <h3 className="font-heading text-sm font-bold text-[#2A1C18] mb-1.5 leading-snug">
                        {step.title}
                      </h3>
                      <p className="text-[11px] text-[#5E4A43] leading-relaxed">
                        {step.desc}
                      </p>
                    </div>
                  </div>

                </motion.div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
};

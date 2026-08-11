import React from 'react';
import { motion } from 'framer-motion';
import { Tablet, Monitor, Building2, Check, ArrowRight } from 'lucide-react';

interface DeploymentPricingProps {
  onOpenBookDemo: () => void;
}

export const DeploymentPricing: React.FC<DeploymentPricingProps> = ({ onOpenBookDemo }) => {
  const deploymentCards = [
    {
      id: 'tablet',
      title: 'Tablet & Mobile Edition',
      subtitle: 'Small Scale & Boutique Stores',
      isPopular: false,
      hardwarePrice: 'BYOD',
      hardwarePriceLabel: 'tablet / phone',
      softwareMonthly: '₹600',
      softwareYearly: '₹7,200',
      specs: [
        'Android Tablet & Mobile App',
        '4K Camera Support',
        'Plug & Play Setup',
        'Complete Setup Guide',
      ],
      perfectFor: ['Small Scale Stores', 'Boutique Shops', 'Fashion Designers', 'Mobile Retail'],
      icon: Tablet,
    },
    {
      id: 'smart-mirror-32',
      title: 'Smart Mirror (32")',
      subtitle: 'Ideal for Boutiques & Chains',
      hardwarePrice: '₹70,000',
      hardwarePriceLabel: '+ Tax',
      softwareMonthly: '₹2,500',
      softwareYearly: '₹30,000',
      specs: [
        '32" Touch Display',
        '4K Camera',
        'Plug & Play Setup',
        'Complete Installation',
      ],
      perfectFor: ['Boutiques', 'Multi-Brand Stores', 'Designer Collections', 'Retail Outlets'],
      icon: Monitor,
    },
    {
      id: 'smart-mirror-kiosk-43',
      title: 'Smart Mirror Kiosk (43")',
      subtitle: 'Enterprise Retail Solution',
      hardwarePrice: '₹87,000',
      hardwarePriceLabel: '+ Tax',
      softwareMonthly: '₹2,500',
      softwareYearly: '₹30,000',
      specs: [
        '43" Professional Display',
        '4K Camera',
        'Premium Finish',
        'Complete Installation',
      ],
      perfectFor: ['Shopping Malls', 'Large Retail Chains', 'Premium Showrooms', 'Brand Experience Centers'],
      icon: Building2,
    },
  ];

  return (
    <section id="deployment" className="py-24 bg-[#FFF9F2] relative overflow-hidden scroll-mt-20">
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
            Deployment &{' '}
            <span className="bg-gradient-to-r from-[#6E1F1F] to-[#D48B2C] bg-clip-text text-transparent">
              Pricing Options
            </span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-base sm:text-lg text-[#5E4A43]"
          >
            Flexible hardware editions & software plans tailored to fit every retail store size.
          </motion.p>
        </div>

        {/* 3 Deployment Cards Grid with Pricing Anchor */}
        <div id="pricing" className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch scroll-mt-28">
          {deploymentCards.map((card, idx) => {
            const IconComponent = card.icon;
            return (
              <motion.div
                key={card.id}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                whileHover={{ y: -6 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
                className="relative glass-card rounded-3xl p-5 sm:p-7 flex flex-col justify-between transition-all duration-300"
              >

                <div>
                  {/* Header */}
                  <div className="flex items-center justify-between gap-2 mb-4">
                    <div className="w-11 sm:w-12 h-11 sm:h-12 rounded-2xl bg-[#F4E7D5] text-[#6E1F1F] flex items-center justify-center shrink-0">
                      <IconComponent className="w-5 sm:w-6 h-5 sm:h-6 text-[#D48B2C]" />
                    </div>
                    <span className="text-[10px] sm:text-xs font-medium text-[#5E4A43] bg-[#FFF8F0] px-2.5 sm:px-3 py-1 rounded-full border border-[#F1E4D3] text-right truncate">
                      {card.subtitle}
                    </span>
                  </div>

                  {/* Card Title */}
                  <h3 className="font-heading text-2xl font-bold text-[#2A1C18] mb-4">
                    {card.title}
                  </h3>

                  {/* Hardware & Software Pricing */}
                  <div className="bg-[#FDF5EC] rounded-2xl p-4 mb-6 border border-[#F1E4D3]">
                    <div className="mb-3 pb-3 border-b border-[#F1E4D3] flex items-baseline justify-between">
                      <span className="text-xs text-[#5E4A43]">Hardware Cost</span>
                      <div className="text-right">
                        <span className="font-heading text-2xl font-bold text-[#2A1C18]">{card.hardwarePrice}</span>
                        <span className="text-xs text-[#5E4A43] ml-1">{card.hardwarePriceLabel}</span>
                      </div>
                    </div>

                    <div className="flex items-baseline justify-between">
                      <span className="text-xs text-[#5E4A43]">Software Subscription</span>
                      <div className="text-right">
                        <span className="font-heading text-lg font-bold text-[#6E1F1F]">{card.softwareMonthly}</span>
                        <span className="text-xs text-[#5E4A43]"> / Month</span>
                        <p className="text-[11px] font-semibold text-[#D48B2C]">({card.softwareYearly} / Year)</p>
                      </div>
                    </div>
                  </div>

                  {/* Specifications List */}
                  <div className="mb-6">
                    <p className="text-xs font-bold text-[#2A1C18] uppercase tracking-wider mb-3">Specifications</p>
                    <div className="flex flex-col gap-2.5">
                      {card.specs.map((spec, sIdx) => (
                        <div key={sIdx} className="flex items-center gap-2.5">
                          <div className="w-4 h-4 rounded-full bg-[#F4E7D5] text-[#6E1F1F] flex items-center justify-center shrink-0">
                            <Check className="w-2.5 h-2.5 text-[#D48B2C]" />
                          </div>
                          <span className="text-sm font-medium text-[#2A1C18]">{spec}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Recommended For Section */}
                  <div className="pt-4 border-t border-[#F1E4D3] mb-6">
                    <p className="text-xs font-bold text-[#5E4A43] uppercase tracking-wider mb-2">Perfect For</p>
                    <div className="flex flex-wrap gap-1.5">
                      {card.perfectFor.map((pf, pIdx) => (
                        <span key={pIdx} className="text-xs font-medium px-2.5 py-1 rounded-lg bg-white border border-[#F1E4D3] text-[#2A1C18]">
                          {pf}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Card Action Button */}
                <button
                  onClick={onOpenBookDemo}
                  className="w-full py-3.5 rounded-full text-sm font-semibold bg-[#6E1F1F] hover:bg-[#8B3E2F] text-white shadow-md shadow-[#6E1F1F]/20 hover:shadow-lg hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 flex items-center justify-center gap-2 group cursor-pointer"
                >
                  <span>Book Demo for {card.title}</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>

              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

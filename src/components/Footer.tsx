import React from 'react';
import { MapPin, Mail, Globe, Phone } from 'lucide-react';
import { SITE_CONFIG } from '../config/siteConfig';
import { LavixLogo } from './LavixLogo';

interface FooterProps {
  onOpenPrivacy?: () => void;
  onOpenTerms?: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenPrivacy, onOpenTerms }) => {
  return (
    <footer id="contact" className="bg-[#6E1F1F] text-white pt-16 pb-12 relative overflow-hidden">
      
      {/* Glow Effects */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#D48B2C]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-[#8B3E2F]/20 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-[#8B3E2F]/50">
          
          {/* Company Brand & Address Column */}
          <div className="md:col-span-5 flex flex-col items-start">
            <a href="#hero" className="mb-4">
              <LavixLogo variant="light" size="lg" showTagline={true} />
            </a>

            <p className="text-xs text-[#F6E6D3] leading-relaxed mb-6 max-w-md">
              {SITE_CONFIG.productName} is an {SITE_CONFIG.businessType} solution developed by {SITE_CONFIG.companyName}, enabling apparel retailers to deliver a smart, contactless shopping experience through real-time virtual try-on technology.
            </p>

            {/* Official Address Card */}
            <div className="text-xs text-[#F6E6D3] space-y-1.5 border-l-2 border-[#D48B2C] pl-3.5 py-0.5">
              <p className="font-bold text-white text-sm">{SITE_CONFIG.companyName}</p>
              <p className="text-[#F6E6D3] leading-relaxed whitespace-pre-line font-mono text-[11px]">
                {SITE_CONFIG.address.formatted}
              </p>
              <p className="text-[#F6E6D3] flex items-center gap-1.5 pt-1">
                <MapPin className="w-3.5 h-3.5 text-[#F2B84A] shrink-0" />
                <span>{SITE_CONFIG.location}</span>
              </p>
            </div>
          </div>

          {/* Navigation Links */}
          <div className="md:col-span-2">
            <h4 className="font-heading text-sm font-bold text-white uppercase tracking-wider mb-4">
              Navigation
            </h4>
            <ul className="space-y-2.5 text-xs text-[#FFFFFF]">
              <li><a href="#hero" className="hover:text-[#F2B84A] transition-colors">Home</a></li>
              <li><a href="#features" className="hover:text-[#F2B84A] transition-colors">Features</a></li>
              <li><a href="#solutions" className="hover:text-[#F2B84A] transition-colors">Solutions</a></li>
              <li><a href="#deployment" className="hover:text-[#F2B84A] transition-colors">Deployment</a></li>
              <li><a href="#pricing" className="hover:text-[#F2B84A] transition-colors">Pricing</a></li>
              <li><a href="#about" className="hover:text-[#F2B84A] transition-colors">About Us</a></li>
            </ul>
          </div>

          {/* Official Contact Section Card */}
          <div className="md:col-span-5 flex flex-col justify-between">
            <div>
              <h4 className="font-heading text-sm font-bold text-white uppercase tracking-wider mb-4">
                Official Contact
              </h4>

              <div className="p-5 rounded-2xl bg-white/05 border border-[#8B3E2F]/60 space-y-3.5 text-xs">
                <div>
                  <p className="font-bold text-white text-sm tracking-wide">{SITE_CONFIG.companyName}</p>
                  <p className="text-[#F2B84A] text-xs font-semibold pt-0.5">{SITE_CONFIG.contactPerson} <span className="text-[#F6E6D3] font-normal">• {SITE_CONFIG.contactRole}</span></p>
                </div>
                
                <a 
                  href={SITE_CONFIG.phoneHref} 
                  className="flex items-center gap-3 text-[#F6E6D3] hover:text-[#F2B84A] transition-colors group"
                >
                  <div className="w-8 h-8 rounded-xl bg-[#8B3E2F] text-[#F6E6D3] flex items-center justify-center group-hover:bg-[#D48B2C] group-hover:text-white transition-colors">
                    <Phone className="w-4 h-4" />
                  </div>
                  <span className="font-mono text-sm font-semibold">{SITE_CONFIG.phone}</span>
                </a>

                <a 
                  href={SITE_CONFIG.emailHref} 
                  className="flex items-center gap-3 text-[#F6E6D3] hover:text-[#F2B84A] transition-colors group"
                >
                  <div className="w-8 h-8 rounded-xl bg-[#8B3E2F] text-[#F6E6D3] flex items-center justify-center group-hover:bg-[#D48B2C] group-hover:text-white transition-colors">
                    <Mail className="w-4 h-4" />
                  </div>
                  <span className="font-medium text-sm">{SITE_CONFIG.email}</span>
                </a>

                <a 
                  href={SITE_CONFIG.websiteUrl} 
                  target="_blank" 
                  rel="noreferrer" 
                  className="flex items-center gap-3 text-[#F6E6D3] hover:text-[#F2B84A] transition-colors group"
                >
                  <div className="w-8 h-8 rounded-xl bg-[#8B3E2F] text-[#F6E6D3] flex items-center justify-center group-hover:bg-[#D48B2C] group-hover:text-white transition-colors">
                    <Globe className="w-4 h-4" />
                  </div>
                  <span className="font-medium text-sm">{SITE_CONFIG.website}</span>
                </a>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-3 pt-4">
              <a href={SITE_CONFIG.websiteUrl} target="_blank" rel="noreferrer" aria-label="Website" className="w-9 h-9 rounded-full bg-[#8B3E2F] hover:bg-[#D48B2C] text-white flex items-center justify-center transition-colors">
                <Globe className="w-4 h-4" />
              </a>
              <a href={SITE_CONFIG.emailHref} aria-label="Email" className="w-9 h-9 rounded-full bg-[#8B3E2F] hover:bg-[#D48B2C] text-white flex items-center justify-center transition-colors">
                <Mail className="w-4 h-4" />
              </a>
              <a href={SITE_CONFIG.phoneHref} aria-label="Phone" className="w-9 h-9 rounded-full bg-[#8B3E2F] hover:bg-[#D48B2C] text-white flex items-center justify-center transition-colors">
                <Phone className="w-4 h-4" />
              </a>
            </div>
          </div>

        </div>

        {/* Bottom Copyright & Legal */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-[#F6E6D3] gap-4">
          <p>{SITE_CONFIG.copyright}</p>
          <div className="flex items-center gap-6">
            <button onClick={onOpenPrivacy} className="text-white hover:text-[#F2B84A] transition-colors">Privacy Policy</button>
            <button onClick={onOpenTerms} className="text-white hover:text-[#F2B84A] transition-colors">Terms of Service</button>
          </div>
        </div>

      </div>
    </footer>
  );
};

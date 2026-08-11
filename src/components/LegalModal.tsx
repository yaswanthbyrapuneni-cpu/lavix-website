import React from 'react';
import { X, ShieldCheck, FileText } from 'lucide-react';
import { SITE_CONFIG } from '../config/siteConfig';

interface LegalModalProps {
  isOpen: boolean;
  type: 'privacy' | 'terms' | null;
  onClose: () => void;
}

export const LegalModal: React.FC<LegalModalProps> = ({ isOpen, type, onClose }) => {
  if (!isOpen || !type) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-md animate-in fade-in duration-200">
      <div className="relative w-full max-w-2xl bg-white rounded-3xl p-6 sm:p-8 shadow-2xl border border-[#F1E4D3] overflow-hidden max-h-[85vh] flex flex-col">
        
        {/* Header */}
        <div className="flex items-center justify-between pb-4 border-b border-[#F1E4D3] mb-4">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-xl bg-[#F4E7D5] text-[#6E1F1F] flex items-center justify-center">
              {type === 'privacy' ? <ShieldCheck className="w-4 h-4 text-[#D48B2C]" /> : <FileText className="w-4 h-4 text-[#D48B2C]" />}
            </div>
            <h3 className="font-heading text-xl font-bold text-[#2A1C18]">
              {type === 'privacy' ? 'Privacy Policy' : 'Terms of Service'}
            </h3>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-full text-gray-400 hover:text-[#2A1C18] hover:bg-gray-100 transition-colors"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content Body */}
        <div className="flex-1 overflow-y-auto pr-2 space-y-4 text-xs text-[#5E4A43] leading-relaxed">
          {type === 'privacy' ? (
            <>
              <p className="font-semibold text-[#2A1C18]">Effective Date: January 1, 2026</p>
              <p>
                This Privacy Policy describes how {SITE_CONFIG.companyName} ("we", "us", or "our") collects, uses, and safeguards information obtained through the {SITE_CONFIG.productName} ({SITE_CONFIG.businessType}) platform and official website ({SITE_CONFIG.website}).
              </p>
              
              <h4 className="font-heading text-sm font-bold text-[#2A1C18] pt-2">1. Information We Collect</h4>
              <p>
                We process minimal operational data necessary for real-time virtual try-on technology. Images processed by {SITE_CONFIG.productName} smart mirrors and tablet kiosks are rendered instantly in local memory for pose estimation and fabric simulation and are not stored permanently unless explicitly saved by the user.
              </p>

              <h4 className="font-heading text-sm font-bold text-[#2A1C18] pt-2">2. Contact Information</h4>
              <p>
                For any privacy questions or data requests, please contact:<br />
                <strong>{SITE_CONFIG.companyName}</strong><br />
                <span className="text-[#6E1F1F] font-semibold">Contact Person: {SITE_CONFIG.contactPerson} ({SITE_CONFIG.contactRole})</span><br />
                {SITE_CONFIG.address.line1} {SITE_CONFIG.address.line2} {SITE_CONFIG.address.cityStatePin} {SITE_CONFIG.address.stateCountry}<br />
                Email: <a href={SITE_CONFIG.emailHref} className="text-[#6E1F1F] underline font-medium">{SITE_CONFIG.email}</a><br />
                Phone: <a href={SITE_CONFIG.phoneHref} className="text-[#6E1F1F] underline font-medium">{SITE_CONFIG.phone}</a>
              </p>
            </>
          ) : (
            <>
              <p className="font-semibold text-[#2A1C18]">Effective Date: January 1, 2026</p>
              <p>
                These Terms of Service govern your access to and use of the {SITE_CONFIG.productName} platform and smart mirror hardware solutions provided by {SITE_CONFIG.companyName}.
              </p>

              <h4 className="font-heading text-sm font-bold text-[#2A1C18] pt-2">1. Commercial License & Software Subscription</h4>
              <p>
                Hardware units (Tablet Edition, Smart Mirror 32", Smart Mirror Kiosk 43") include software licenses subject to active monthly or annual software subscriptions as specified in deployment agreements.
              </p>

              <h4 className="font-heading text-sm font-bold text-[#2A1C18] pt-2">2. Corporate Office & Contact</h4>
              <p>
                <strong>{SITE_CONFIG.companyName}</strong><br />
                <span className="text-[#6E1F1F] font-semibold">Contact Person: {SITE_CONFIG.contactPerson} ({SITE_CONFIG.contactRole})</span><br />
                {SITE_CONFIG.address.line1}<br />
                {SITE_CONFIG.address.line2}<br />
                {SITE_CONFIG.address.cityStatePin}<br />
                {SITE_CONFIG.address.stateCountry}<br />
                Phone: <a href={SITE_CONFIG.phoneHref} className="text-[#6E1F1F] underline font-medium">{SITE_CONFIG.phone}</a><br />
                Email: <a href={SITE_CONFIG.emailHref} className="text-[#6E1F1F] underline font-medium">{SITE_CONFIG.email}</a><br />
                Website: <a href={SITE_CONFIG.websiteUrl} target="_blank" rel="noreferrer" className="text-[#6E1F1F] underline font-medium">{SITE_CONFIG.website}</a>
              </p>
            </>
          )}
        </div>

        {/* Footer */}
        <div className="pt-4 border-t border-[#F1E4D3] flex items-center justify-between text-[11px] text-[#5E4A43]">
          <span>{SITE_CONFIG.copyright}</span>
          <button
            onClick={onClose}
            className="px-5 py-2 rounded-full bg-[#6E1F1F] text-white text-xs font-semibold hover:bg-[#8B3E2F] transition-colors"
          >
            Close
          </button>
        </div>

      </div>
    </div>
  );
};

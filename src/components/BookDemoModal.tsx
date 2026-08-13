import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import confetti from 'canvas-confetti';
import { X, Sparkles, CheckCircle2, Calendar, Store, Mail, User, Phone, MapPin } from 'lucide-react';
import { SITE_CONFIG } from '../config/siteConfig';

const bookDemoSchema = z.object({
  fullName: z.string().min(2, 'Name is required (at least 2 characters)'),
  email: z.string().email('Please enter a valid email address'),
  phone: z.string().min(10, 'Please enter a valid 10-digit phone number'),
  storeName: z.string().min(2, 'Store or Brand name is required'),
  city: z.string().min(2, 'City is required'),
  deploymentType: z.enum(['Tablet Edition', 'Smart Mirror (32")', 'Smart Mirror Kiosk (43")', 'Undecided / Custom']),
  preferredDate: z.string().min(1, 'Please select a preferred demo date'),
});

type BookDemoFormValues = z.infer<typeof bookDemoSchema>;

interface BookDemoModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const BookDemoModal: React.FC<BookDemoModalProps> = ({ isOpen, onClose }) => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<BookDemoFormValues>({
    resolver: zodResolver(bookDemoSchema),
    defaultValues: {
      deploymentType: 'Smart Mirror (32")',
    },
  });

  if (!isOpen) return null;

  const onSubmit = async (data: BookDemoFormValues) => {
    setErrorMessage(null);
    try {
      // Served by the Flask backend on the VM (nginx routes /api/* there).
      const res = await fetch('/api/book-demo', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });

      if (!res.ok) {
        const errBody = await res.json().catch(() => ({}));
        throw new Error(errBody.error || `Server error ${res.status}`);
      }

      // Trigger celebration confetti
      confetti({
        particleCount: 80,
        spread: 70,
        origin: { y: 0.6 },
        colors: ['#6E1F1F', '#8B3E2F', '#D48B2C', '#F2B84A'],
      });

      setIsSubmitted(true);
    } catch (err) {
      console.error('Submission error:', err);
      setErrorMessage('Failed to send your request. Please email us directly at ' + SITE_CONFIG.email);
    }
  };

  const handleResetAndClose = () => {
    setIsSubmitted(false);
    setErrorMessage(null);
    reset();
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="relative w-full max-w-lg bg-white rounded-3xl p-6 sm:p-8 shadow-2xl border border-[#F1E4D3] overflow-hidden max-h-[90vh] overflow-y-auto">
        
        {/* Close Button */}
        <button
          onClick={handleResetAndClose}
          className="absolute top-5 right-5 p-2 rounded-full text-gray-400 hover:text-[#2A1C18] hover:bg-gray-100 transition-colors"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {!isSubmitted ? (
          <div>
            {/* Header */}
            <div className="flex items-center gap-2 mb-2">
              <div className="w-8 h-8 rounded-xl bg-[#F4E7D5] text-[#6E1F1F] flex items-center justify-center">
                <Sparkles className="w-4 h-4 text-[#D48B2C]" />
              </div>
              <span className="text-xs font-bold text-[#6E1F1F] uppercase tracking-wider">
                {SITE_CONFIG.productName} LIVE DEMO
              </span>
            </div>

            <h3 className="font-heading text-2xl font-bold text-[#2A1C18] mb-2">
              Schedule Your Store Demo
            </h3>
            <p className="text-xs text-[#5E4A43] mb-6">
              Experience the {SITE_CONFIG.businessType} live with our retail product specialist.
            </p>

            {/* Form */}
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
              
              {/* Full Name */}
              <div>
                <label className="block text-xs font-semibold text-[#2A1C18] mb-1">Full Name *</label>
                <div className="relative">
                  <User className="w-4 h-4 text-gray-400 absolute left-3.5 top-3" />
                  <input
                    {...register('fullName')}
                    type="text"
                    placeholder="e.g. Ananya Sharma"
                    className="w-full pl-10 pr-4 py-2.5 text-xs rounded-xl border border-[#F1E4D3] focus:border-[#D48B2C] focus:ring-2 focus:ring-[#D48B2C]/20 outline-none transition-all"
                  />
                </div>
                {errors.fullName && <p className="text-[11px] text-red-500 mt-1">{errors.fullName.message}</p>}
              </div>

              {/* Email & Phone Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-semibold text-[#2A1C18] mb-1">Work Email *</label>
                  <div className="relative">
                    <Mail className="w-4 h-4 text-gray-400 absolute left-3.5 top-3" />
                    <input
                      {...register('email')}
                      type="email"
                      placeholder="name@store.com"
                      className="w-full pl-10 pr-4 py-2.5 text-xs rounded-xl border border-[#F1E4D3] focus:border-[#D48B2C] focus:ring-2 focus:ring-[#D48B2C]/20 outline-none transition-all"
                    />
                  </div>
                  {errors.email && <p className="text-[11px] text-red-500 mt-1">{errors.email.message}</p>}
                </div>

                <div>
                  <label className="block text-xs font-semibold text-[#2A1C18] mb-1">Phone Number *</label>
                  <div className="relative">
                    <Phone className="w-4 h-4 text-gray-400 absolute left-3.5 top-3" />
                    <input
                      {...register('phone')}
                      type="tel"
                      placeholder="+91 94941 65326"
                      className="w-full pl-10 pr-4 py-2.5 text-xs rounded-xl border border-[#F1E4D3] focus:border-[#D48B2C] focus:ring-2 focus:ring-[#D48B2C]/20 outline-none transition-all"
                    />
                  </div>
                  {errors.phone && <p className="text-[11px] text-red-500 mt-1">{errors.phone.message}</p>}
                </div>
              </div>

              {/* Store Name & City */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-semibold text-[#2A1C18] mb-1">Store / Brand Name *</label>
                  <div className="relative">
                    <Store className="w-4 h-4 text-gray-400 absolute left-3.5 top-3" />
                    <input
                      {...register('storeName')}
                      type="text"
                      placeholder="e.g. Royal Fashion Boutique"
                      className="w-full pl-10 pr-4 py-2.5 text-xs rounded-xl border border-[#F1E4D3] focus:border-[#D48B2C] focus:ring-2 focus:ring-[#D48B2C]/20 outline-none transition-all"
                    />
                  </div>
                  {errors.storeName && <p className="text-[11px] text-red-500 mt-1">{errors.storeName.message}</p>}
                </div>

                <div>
                  <label className="block text-xs font-semibold text-[#2A1C18] mb-1">City *</label>
                  <div className="relative">
                    <MapPin className="w-4 h-4 text-gray-400 absolute left-3.5 top-3" />
                    <input
                      {...register('city')}
                      type="text"
                      placeholder="e.g. Visakhapatnam / Mumbai"
                      className="w-full pl-10 pr-4 py-2.5 text-xs rounded-xl border border-[#F1E4D3] focus:border-[#D48B2C] focus:ring-2 focus:ring-[#D48B2C]/20 outline-none transition-all"
                    />
                  </div>
                  {errors.city && <p className="text-[11px] text-red-500 mt-1">{errors.city.message}</p>}
                </div>
              </div>

              {/* Hardware Edition Interest */}
              <div>
                <label className="block text-xs font-semibold text-[#2A1C18] mb-1">Preferred Hardware Edition</label>
                <select
                  {...register('deploymentType')}
                  className="w-full px-4 py-2.5 text-xs rounded-xl border border-[#F1E4D3] focus:border-[#D48B2C] focus:ring-2 focus:ring-[#D48B2C]/20 outline-none bg-white transition-all text-[#2A1C18]"
                >
                  <option value="Smart Mirror (32&quot;)">Smart Mirror (32") - Most Popular</option>
                  <option value="Tablet Edition">Tablet Edition (Android)</option>
                  <option value="Smart Mirror Kiosk (43&quot;)">Smart Mirror Kiosk (43") - Enterprise</option>
                  <option value="Undecided / Custom">Undecided / Custom Request</option>
                </select>
              </div>

              {/* Preferred Date */}
              <div>
                <label className="block text-xs font-semibold text-[#2A1C18] mb-1">Preferred Demo Date *</label>
                <div className="relative">
                  <Calendar className="w-4 h-4 text-gray-400 absolute left-3.5 top-3" />
                  <input
                    {...register('preferredDate')}
                    type="date"
                    className="w-full pl-10 pr-4 py-2.5 text-xs rounded-xl border border-[#F1E4D3] focus:border-[#D48B2C] focus:ring-2 focus:ring-[#D48B2C]/20 outline-none transition-all text-[#2A1C18]"
                  />
                </div>
                {errors.preferredDate && <p className="text-[11px] text-red-500 mt-1">{errors.preferredDate.message}</p>}
              </div>

              {/* Error Message */}
              {errorMessage && (
                <p className="text-[11px] text-red-500 text-center bg-red-50 rounded-xl px-3 py-2">{errorMessage}</p>
              )}

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-3.5 rounded-full bg-[#6E1F1F] hover:bg-[#8B3E2F] text-white text-xs font-bold uppercase tracking-wider shadow-md hover:shadow-lg transition-all mt-4 flex items-center justify-center gap-2"
              >
                {isSubmitting ? (
                  <span>Scheduling...</span>
                ) : (
                  <>
                    <span>Confirm Live Demo Booking</span>
                    <Sparkles className="w-4 h-4 text-[#F2B84A]" />
                  </>
                )}
              </button>

            </form>
          </div>
        ) : (
          /* Confirmation State */
          <div className="text-center py-8">
            <div className="w-16 h-16 rounded-full bg-[#6E1F1F] text-white flex items-center justify-center mx-auto mb-4 shadow-lg shadow-[#6E1F1F]/30">
              <CheckCircle2 className="w-8 h-8 text-[#D48B2C]" />
            </div>
            <h3 className="font-heading text-2xl font-bold text-[#2A1C18] mb-2">
              Demo Confirmed!
            </h3>
            <p className="text-xs text-[#5E4A43] max-w-sm mx-auto mb-6">
              Thank you for scheduling a live demo with {SITE_CONFIG.productName}. Our retail AI specialist from {SITE_CONFIG.companyName} will contact you within 24 hours.
            </p>
            <button
              onClick={handleResetAndClose}
              className="px-6 py-2.5 rounded-full bg-[#6E1F1F] text-white text-xs font-semibold hover:bg-[#8B3E2F] transition-colors"
            >
              Done
            </button>
          </div>
        )}

      </div>
    </div>
  );
};

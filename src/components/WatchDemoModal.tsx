import React, { useRef, useEffect } from 'react';
import { X } from 'lucide-react';

interface WatchDemoModalProps {
  isOpen: boolean;
  onClose: () => void;
  onOpenBookDemo: () => void;
}

export const WatchDemoModal: React.FC<WatchDemoModalProps> = ({ isOpen, onClose, onOpenBookDemo }) => {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (isOpen && videoRef.current) {
      videoRef.current.muted = true;
      videoRef.current.volume = 0;
    }
  }, [isOpen]);

  if (!isOpen) return null;

  const handleVolumeChange = () => {
    if (videoRef.current) {
      videoRef.current.muted = true;
      videoRef.current.volume = 0;
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-in fade-in duration-200">
      <div className="relative w-full max-w-4xl bg-[#1C120F] rounded-3xl p-4 sm:p-6 shadow-2xl border border-[#D48B2C]/40 overflow-hidden text-white">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2.5 rounded-full bg-black/70 text-white hover:bg-[#6E1F1F] transition-colors z-30 cursor-pointer border border-white/20"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header */}
        <div className="flex items-center gap-2 mb-3">
          <span className="px-3 py-1 rounded-full bg-[#6E1F1F] text-xs font-bold uppercase tracking-wider text-white">
            LAVIX Product Showcase
          </span>
          <span className="text-xs text-amber-200 hidden sm:inline-block">AI Virtual Try-On Demonstration</span>
        </div>

        {/* Video Player Box */}
        <div className="relative w-full aspect-video rounded-2xl overflow-hidden bg-black border border-white/10 mb-4 flex items-center justify-center group shadow-2xl">
          <video
            ref={videoRef}
            src="/demo.mp4"
            autoPlay
            loop
            muted
            playsInline
            controls
            controlsList="nodownload novolume noplaybackrate"
            disablePictureInPicture
            onContextMenu={(e) => e.preventDefault()}
            onVolumeChange={handleVolumeChange}
            className="w-full h-full object-contain rounded-2xl select-none"
          />
        </div>

        {/* Action Controls */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-2 border-t border-white/10">
          <p className="text-xs text-amber-100/90 text-center sm:text-left">
            Experience LAVIX in your retail store. Schedule a live product demo today.
          </p>
          <div className="flex items-center gap-3 w-full sm:w-auto justify-end">
            <button
              onClick={onClose}
              className="px-5 py-2.5 rounded-full bg-white/10 text-white text-xs font-semibold hover:bg-white/20 transition-colors cursor-pointer"
            >
              Close Preview
            </button>
            <button
              onClick={() => {
                onClose();
                onOpenBookDemo();
              }}
              className="px-6 py-2.5 rounded-full bg-[#6E1F1F] hover:bg-[#8B3E2F] text-white text-xs font-bold shadow-md hover:scale-105 transition-all cursor-pointer"
            >
              Book Live Store Demo
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};

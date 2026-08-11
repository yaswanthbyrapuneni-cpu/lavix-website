import { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { WhyRetailersLove } from './components/WhyRetailersLove';
import { FutureOfTryOn } from './components/FutureOfTryOn';
import { HowLavixWorks } from './components/HowLavixWorks';
import { DeploymentPricing } from './components/DeploymentPricing';
import { BusinessBenefits } from './components/BusinessBenefits';
import { CallToAction } from './components/CallToAction';
import { Footer } from './components/Footer';
import { BookDemoModal } from './components/BookDemoModal';
import { WatchDemoModal } from './components/WatchDemoModal';
import { LegalModal } from './components/LegalModal';

export function App() {
  const [isBookDemoOpen, setIsBookDemoOpen] = useState(false);
  const [isWatchDemoOpen, setIsWatchDemoOpen] = useState(false);
  const [legalModalType, setLegalModalType] = useState<'privacy' | 'terms' | null>(null);

  return (
    <div className="min-h-screen bg-[#FFF9FC] text-[#18181B] flex flex-col font-body selection:bg-[#7B61FF]/20 selection:text-[#7B61FF]">
      {/* Navbar */}
      <Navbar onOpenBookDemo={() => setIsBookDemoOpen(true)} />

      {/* Main Content Sections */}
      <main className="flex-grow">
        <Hero
          onOpenBookDemo={() => setIsBookDemoOpen(true)}
          onOpenWatchDemo={() => setIsWatchDemoOpen(true)}
        />
        <WhyRetailersLove />
        <FutureOfTryOn onOpenBookDemo={() => setIsBookDemoOpen(true)} />
        <HowLavixWorks />
        <DeploymentPricing onOpenBookDemo={() => setIsBookDemoOpen(true)} />
        <BusinessBenefits onOpenBookDemo={() => setIsBookDemoOpen(true)} />
        <CallToAction onOpenBookDemo={() => setIsBookDemoOpen(true)} />
      </main>

      {/* Footer */}
      <Footer 
        onOpenPrivacy={() => setLegalModalType('privacy')}
        onOpenTerms={() => setLegalModalType('terms')}
      />

      {/* Modals */}
      <BookDemoModal
        isOpen={isBookDemoOpen}
        onClose={() => setIsBookDemoOpen(false)}
      />
      <WatchDemoModal
        isOpen={isWatchDemoOpen}
        onClose={() => setIsWatchDemoOpen(false)}
        onOpenBookDemo={() => setIsBookDemoOpen(true)}
      />
      <LegalModal
        isOpen={legalModalType !== null}
        type={legalModalType}
        onClose={() => setLegalModalType(null)}
      />
    </div>
  );
}

export default App;

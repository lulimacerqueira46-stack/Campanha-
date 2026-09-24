import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { RegionFormsHeader } from './components/RegionFormsHeader';
import { VirtualTour360 } from './components/VirtualTour360';
import { FloorPlans } from './components/FloorPlans';
import { FinishesAndTech } from './components/FinishesAndTech';
import { Amenities } from './components/Amenities';
import { LocationSection } from './components/LocationSection';
import { InvestmentCalculator } from './components/InvestmentCalculator';
import { InterestSection } from './components/InterestSection';
import { BookingSection } from './components/BookingSection';
import { Footer } from './components/Footer';
import { FormsModal } from './components/FormsModal';
import { Sparkles } from 'lucide-react';

export default function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalTab, setModalTab] = useState<string>('visit-dialog');
  const [tourRoomIndex, setTourRoomIndex] = useState<number>(0);

  const handleOpenVisitModal = () => {
    setModalTab('visit-dialog');
    setIsModalOpen(true);
  };

  const handleOpenCatalogModal = () => {
    setModalTab('catalog-pricing');
    setIsModalOpen(true);
  };

  const handleOpenModalWithTab = (tabId: string) => {
    setModalTab(tabId);
    setIsModalOpen(true);
  };

  const handleSelectPlanForTour = (roomIndex: number) => {
    setTourRoomIndex(roomIndex);
    const tourSection = document.getElementById('tour-360');
    if (tourSection) {
      tourSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleStartTour = () => {
    const tourSection = document.getElementById('tour-360');
    if (tourSection) {
      tourSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleViewPlans = () => {
    const plansSection = document.getElementById('plantas');
    if (plansSection) {
      plansSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-stone-950 text-stone-100 flex flex-col selection:bg-amber-500/30 selection:text-amber-200">
      
      {/* Navigation */}
      <Navbar
        onOpenVisitModal={handleOpenVisitModal}
        onOpenCatalogModal={handleOpenCatalogModal}
      />

      <main className="flex-grow">
        {/* 1. Hero Section */}
        <Hero
          onStartTour={handleStartTour}
          onScheduleVisit={handleOpenVisitModal}
          onViewPlans={handleViewPlans}
        />

        {/* 1.1 Tabs at the beginning of the page: Formulários Mooca, Tatuapé e Vila Ema */}
        <RegionFormsHeader
          onOpenModal={handleOpenModalWithTab}
        />

        {/* 2. Interactive 360° Virtual Tour */}
        <VirtualTour360
          selectedRoomIndex={tourRoomIndex}
          onScheduleVisit={handleOpenVisitModal}
        />

        {/* 3. Detailed Floor Plans & Square Meters Showcase */}
        <FloorPlans
          onSelectPlanForTour={handleSelectPlanForTour}
          onRequestCatalog={handleOpenCatalogModal}
          onScheduleVisit={handleOpenVisitModal}
        />

        {/* 4. Strategic Location (Tatuapé, Mooca & Vila Ema) */}
        <LocationSection />

        {/* 5. Architectural Finishes & Acoustic Specs */}
        <FinishesAndTech />

        {/* 6. Amenities & Rooftop Infinity Pool */}
        <Amenities
          onScheduleVisit={handleOpenVisitModal}
        />

        {/* 7. Investment & Yield Simulator */}
        <InvestmentCalculator
          onRequestStudy={handleOpenCatalogModal}
        />

        {/* 8. Dedicated "Tem Interesse?" Section with 3 direct Google Form options */}
        <InterestSection
          onOpenModalWithTab={handleOpenModalWithTab}
        />

        {/* 9. Stand Information & Interactive Embedded Google Form Container */}
        <BookingSection />
      </main>

      {/* Footer */}
      <Footer />

      {/* Interactive Google Form Modal */}
      <FormsModal
        isOpen={isModalOpen}
        initialTab={modalTab}
        onClose={() => setIsModalOpen(false)}
      />

      {/* Floating Action Buttons for Quick Booking / Tenho Interesse */}
      <aside aria-label="Ações rápidas" className="fixed bottom-5 right-5 z-30 flex flex-col items-end gap-2.5">
        <a
          href="#abas-regioes"
          className="group flex items-center gap-2 px-5 py-3.5 bg-amber-500 hover:bg-amber-400 text-stone-950 font-bold text-xs sm:text-sm rounded-full shadow-2xl hover:shadow-amber-500/30 transition-all transform hover:-translate-y-0.5"
        >
          <Sparkles className="w-4 h-4 text-stone-950" />
          <span>Tenho Interesse</span>
        </a>
      </aside>

    </div>
  );
}


import React, { useState, useEffect } from 'react';
import { Menu, X, Calendar, Download, Sparkles } from 'lucide-react';

interface NavbarProps {
  onOpenVisitModal: () => void;
  onOpenCatalogModal: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  onOpenVisitModal,
  onOpenCatalogModal,
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-200 ${
        isScrolled
          ? 'bg-stone-950/90 backdrop-blur-md border-b border-stone-800/80 py-3.5 shadow-xl'
          : 'bg-gradient-to-b from-stone-950/80 to-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        
        {/* Zone 1: Brand Title (Strictly one single text element, no badges or subtitles in brand zone) */}
        <a
          href="#"
          className="text-xl sm:text-2xl font-bold tracking-tight text-stone-100 hover:text-amber-400 transition-colors whitespace-nowrap"
        >
          LUMINA STUDIOS
        </a>

        {/* Zone 2: 4-6 Nav Links (Single line, subtle hover effect) */}
        <nav className="hidden md:flex items-center gap-7 text-sm font-medium text-stone-300">
          <a
            href="#tour-360"
            className="hover:text-amber-400 transition-colors whitespace-nowrap"
          >
            Tour 360°
          </a>
          <a
            href="#plantas"
            className="hover:text-amber-400 transition-colors whitespace-nowrap"
          >
            Plantas & m²
          </a>
          <a
            href="#localizacao"
            className="hover:text-amber-400 transition-colors whitespace-nowrap"
          >
            Localização
          </a>
          <a
            href="#lazer"
            className="hover:text-amber-400 transition-colors whitespace-nowrap"
          >
            Áreas Comuns
          </a>
          <a
            href="#investimento"
            className="hover:text-amber-400 transition-colors whitespace-nowrap"
          >
            Rentabilidade
          </a>
          <a
            href="#abas-regioes"
            className="text-amber-400 hover:text-amber-300 font-semibold transition-colors whitespace-nowrap flex items-center gap-1"
          >
            <Sparkles className="w-3.5 h-3.5" />
            <span>Formulários por Região</span>
          </a>
        </nav>

        {/* Zone 3: 1-2 Primary Actions */}
        <div className="hidden sm:flex items-center gap-3">
          <a
            href="#abas-regioes"
            className="px-3.5 py-2 text-xs font-bold text-amber-400 bg-amber-500/10 hover:bg-amber-500/20 rounded-xl border border-amber-500/40 transition-colors whitespace-nowrap"
          >
            Formulários (Mooca · Tatuapé · Vila Ema)
          </a>
          <button
            onClick={onOpenVisitModal}
            className="px-4 py-2 text-xs font-bold text-stone-950 bg-amber-500 hover:bg-amber-400 rounded-xl shadow-lg hover:shadow-amber-500/20 transition-all whitespace-nowrap"
          >
            Agendar Visita
          </button>
        </div>

        {/* Mobile menu hamburger toggle */}
        <div className="flex sm:hidden items-center gap-2">
          <a
            href="#tem-interesse"
            className="px-2.5 py-1.5 text-xs font-bold text-amber-400 bg-amber-500/15 border border-amber-500/30 rounded-lg whitespace-nowrap"
          >
            Tem Interesse?
          </a>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-stone-300 hover:text-stone-100 rounded-lg hover:bg-stone-900"
            aria-label="Menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>

      </div>

      {/* Mobile dropdown menu */}
      {mobileMenuOpen && (
        <div className="sm:hidden bg-stone-950 border-b border-stone-800 px-4 pt-3 pb-5 space-y-3">
          <a
            href="#tour-360"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-sm font-medium text-stone-300 hover:text-amber-400 py-1.5"
          >
            Tour 360°
          </a>
          <a
            href="#plantas"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-sm font-medium text-stone-300 hover:text-amber-400 py-1.5"
          >
            Plantas & Metragens
          </a>
          <a
            href="#localizacao"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-sm font-medium text-stone-300 hover:text-amber-400 py-1.5"
          >
            Localização (Tatuapé / Mooca / Vila Ema)
          </a>
          <a
            href="#lazer"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-sm font-medium text-stone-300 hover:text-amber-400 py-1.5"
          >
            Rooftop & Lazer
          </a>
          <a
            href="#investimento"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-sm font-medium text-stone-300 hover:text-amber-400 py-1.5"
          >
            Rentabilidade & Simulação
          </a>
          <a
            href="#abas-regioes"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-sm font-bold text-amber-400 hover:text-amber-300 py-1.5"
          >
            Formulários por Região (Mooca · Tatuapé · Vila Ema)
          </a>
          
          <div className="pt-3 border-t border-stone-800 flex flex-col gap-2">
            <a
              href="#abas-regioes"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full py-2.5 text-xs font-bold text-center text-stone-950 bg-amber-400 rounded-xl shadow-md"
            >
              Formulários Mooca · Tatuapé · Vila Ema
            </a>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenCatalogModal();
              }}
              className="w-full py-2.5 text-xs font-semibold text-stone-200 bg-stone-900 rounded-xl border border-stone-800"
            >
              Baixar Book de Plantas
            </button>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenVisitModal();
              }}
              className="w-full py-2.5 text-xs font-bold text-stone-950 bg-amber-500 rounded-xl"
            >
              Agendar Visita ao Modelo
            </button>
          </div>
        </div>
      )}
    </header>
  );
};

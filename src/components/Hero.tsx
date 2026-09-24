import React from 'react';
import { Sparkles, ArrowRight, Eye, Check, ShieldCheck, MapPin, ExternalLink } from 'lucide-react';
import { BUILDING_SPECS } from '../data/studiosData';

interface HeroProps {
  onStartTour: () => void;
  onScheduleVisit: () => void;
  onViewPlans: () => void;
}

export const Hero: React.FC<HeroProps> = ({
  onStartTour,
  onScheduleVisit,
  onViewPlans,
}) => {
  return (
    <section className="relative min-h-[92vh] flex items-center justify-center pt-28 pb-16 overflow-hidden bg-stone-950 text-stone-100 border-b border-stone-800">
      
      {/* Background Architectural Photography with Light Scrim Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="/src/assets/images/studio_facade_bright_1790209555863.jpg"
          alt="Fachada iluminada do edifício Lumina Studios com luz natural"
          className="w-full h-full object-cover object-center brightness-100 contrast-105 scale-100 transition-transform duration-1000"
          referrerPolicy="no-referrer"
        />
        {/* Soft, light-friendly gradients that preserve bright sunny ambience while ensuring text readability */}
        <div className="absolute inset-0 bg-gradient-to-t from-stone-950/90 via-stone-950/30 to-black/10" />
        <div className="absolute inset-0 bg-gradient-to-r from-stone-950/80 via-stone-950/35 to-transparent" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-12">
        <div className="max-w-3xl bg-stone-950/65 backdrop-blur-md p-6 sm:p-10 rounded-3xl border border-stone-800/80 shadow-2xl">
          
          {/* Editorial Location & Delivery Marker */}
          <div className="flex items-center gap-2 text-xs font-medium text-amber-400 tracking-wider uppercase mb-4">
            <MapPin className="w-3.5 h-3.5" />
            <span>Região Tatuapé · Mooca · Vila Ema</span>
            <span aria-hidden="true" className="text-stone-500">·</span>
            <span className="text-stone-300">São Paulo / SP</span>
            <span aria-hidden="true" className="text-stone-500">·</span>
            <span className="text-amber-400/90 font-mono">Entrega em 2026</span>
          </div>

          {/* Main Headline */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-stone-100 leading-[1.1] text-balance">
            Apartamentos Modelo Studio de Alto Padrão
          </h1>

          {/* Subtitle / Concrete Proposition */}
          <p className="mt-5 text-base sm:text-lg text-stone-300 font-normal leading-relaxed max-w-2xl text-pretty">
            Studios inteligentes de <span className="text-amber-400 font-semibold font-mono">24m² a 54m²</span> estrategicamente posicionados no eixo de conexão entre <strong className="text-stone-100 font-semibold">Tatuapé, Mooca e Vila Ema</strong>, unindo alta liquidez, mobilidade urbana e valorização contínua.
          </p>

          {/* Key Specs Bar (Unboxed text with subtle typographic separators) */}
          <div className="mt-6 flex flex-wrap items-center gap-x-3 gap-y-1.5 text-xs sm:text-sm text-stone-300">
            <span className="font-semibold text-stone-100">Plantas de 24m² a 54m²</span>
            <span aria-hidden="true" className="text-amber-400">·</span>
            <span>Eixo Tatuapé · Mooca · Vila Ema</span>
            <span aria-hidden="true" className="text-amber-400">·</span>
            <span>Tour Virtual 360° Disponível</span>
            <span aria-hidden="true" className="text-amber-400">·</span>
            <span>Varandas Integradas</span>
            <span aria-hidden="true" className="text-amber-400">·</span>
            <span>Rooftop com Borda Infinita</span>
          </div>

          {/* Primary Action Buttons */}
          <div className="mt-8 flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 max-w-xl">
            <button
              onClick={onStartTour}
              className="px-5 py-3.5 bg-amber-500 hover:bg-amber-400 text-stone-950 font-bold text-sm rounded-xl shadow-xl hover:shadow-amber-500/25 transition-all flex items-center justify-center gap-2 group whitespace-nowrap"
            >
              <Eye className="w-4 h-4 text-stone-950 group-hover:scale-110 transition-transform" />
              <span>Tour Virtual 360°</span>
            </button>

            <button
              onClick={onScheduleVisit}
              className="px-5 py-3.5 bg-stone-900/90 hover:bg-stone-800 text-stone-100 font-semibold text-sm rounded-xl border border-stone-700/80 backdrop-blur-md transition-all flex items-center justify-center gap-2 whitespace-nowrap"
            >
              <span>Agendar Visita</span>
              <ArrowRight className="w-4 h-4 text-amber-400" />
            </button>
          </div>

          {/* Quick Direct "Tenho Interesse" Buttons for Each Region */}
          <div className="mt-6 pt-5 border-t border-stone-800/80">
            <div className="text-xs font-semibold text-amber-400 uppercase tracking-wider mb-2.5 flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Tenho Interesse · Escolha sua Região:</span>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
              <a
                href="https://docs.google.com/forms/d/e/1FAIpQLScd_tzOAqmJLyutUnYuwrRYYqWHqUsh5LWdEQMAQAsmT47vDw/viewform?usp=dialog"
                target="_blank"
                rel="noopener noreferrer"
                className="py-3 px-3.5 bg-amber-500 hover:bg-amber-400 text-stone-950 font-bold text-xs rounded-xl shadow-lg transition-all flex items-center justify-between group"
              >
                <span>Tenho Interesse · Mooca</span>
                <ExternalLink className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
              </a>
              <a
                href="https://docs.google.com/forms/d/e/1FAIpQLScd_tzOAqmJLyutUnYuwrRYYqWHqUsh5LWdEQMAQAsmT47vDw/viewform?usp=dialog"
                target="_blank"
                rel="noopener noreferrer"
                className="py-3 px-3.5 bg-amber-500 hover:bg-amber-400 text-stone-950 font-bold text-xs rounded-xl shadow-lg transition-all flex items-center justify-between group"
              >
                <span>Tenho Interesse · Tatuapé</span>
                <ExternalLink className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
              </a>
              <a
                href="https://docs.google.com/forms/d/e/1FAIpQLSemHAEVaOna5Ts0fWDyt7-0lMICxS3wfGLfxHaobaQKRIHfwQ/viewform?usp=publish-editor"
                target="_blank"
                rel="noopener noreferrer"
                className="py-3 px-3.5 bg-amber-500 hover:bg-amber-400 text-stone-950 font-bold text-xs rounded-xl shadow-lg transition-all flex items-center justify-between group"
              >
                <span>Tenho Interesse · Vila Ema</span>
                <ExternalLink className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
              </a>
            </div>
          </div>

          {/* Architectural and Quality Trust Signals */}
          <div className="mt-12 pt-8 border-t border-stone-800/80 grid grid-cols-2 sm:grid-cols-3 gap-4 text-left">
            <div>
              <div className="text-xl sm:text-2xl font-bold font-mono text-stone-100 tabular-nums">
                24m² a 54m²
              </div>
              <div className="text-xs text-stone-400 mt-0.5">
                4 opções de plantas inteligentes
              </div>
            </div>

            <div>
              <div className="text-xl sm:text-2xl font-bold font-mono text-amber-400 tabular-nums">
                Até 11,8% a.a.
              </div>
              <div className="text-xs text-stone-400 mt-0.5">
                Projeção líquida de retorno Airbnb
              </div>
            </div>

            <div className="col-span-2 sm:col-span-1">
              <div className="text-xl sm:text-2xl font-bold font-mono text-stone-100">
                100% Acústico
              </div>
              <div className="text-xs text-stone-400 mt-0.5">
                Norma de desempenho NBR 15.575
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

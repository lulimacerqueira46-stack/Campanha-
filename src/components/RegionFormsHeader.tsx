import React, { useState } from 'react';
import { 
  MapPin, 
  ExternalLink, 
  Sparkles, 
  CheckCircle2, 
  ChevronDown, 
  ChevronUp, 
  Maximize2,
  Building2,
  Train,
  Utensils
} from 'lucide-react';
import { REGION_FORMS, RegionFormItem } from '../data/studiosData';

interface RegionFormsHeaderProps {
  onOpenModal?: (tabId: string) => void;
}

export const RegionFormsHeader: React.FC<RegionFormsHeaderProps> = ({ onOpenModal }) => {
  const [activeRegionId, setActiveRegionId] = useState<'mooca' | 'tatuape' | 'vila-ema'>('mooca');
  const [isFormExpanded, setIsFormExpanded] = useState<boolean>(true);
  const [iframeLoaded, setIframeLoaded] = useState<boolean>(false);

  const activeRegion: RegionFormItem = 
    REGION_FORMS.find((r) => r.id === activeRegionId) || REGION_FORMS[0];

  const handleTabChange = (regionId: 'mooca' | 'tatuape' | 'vila-ema') => {
    setActiveRegionId(regionId);
    setIframeLoaded(false);
  };

  const getRegionIcon = (id: string) => {
    if (id === 'mooca') return Utensils;
    if (id === 'tatuape') return Building2;
    return Train;
  };

  return (
    <section id="abas-regioes" className="relative z-20 -mt-8 sm:-mt-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
      <div className="bg-stone-900/95 backdrop-blur-xl rounded-3xl border border-amber-500/40 shadow-2xl overflow-hidden">
        
        {/* Top Header of the Tabs Section */}
        <div className="p-5 sm:p-6 pb-4 border-b border-stone-800 bg-stone-950/70 flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-amber-400">
              <Sparkles className="w-3.5 h-3.5 text-amber-400" />
              <span>Formulários Oficiais por Região</span>
            </div>
            <h2 className="text-xl sm:text-2xl font-bold text-stone-100 mt-1">
              Tem Interesse? Selecione sua Região de Preferência
            </h2>
            <p className="text-xs sm:text-sm text-stone-400 mt-0.5">
              Escolha entre <strong>Mooca</strong>, <strong>Tatuapé</strong> ou <strong>Vila Ema</strong> para preencher o formulário específico e receber o atendimento da equipe local.
            </p>
          </div>

          <div className="flex items-center gap-2 shrink-0">
            <button
              onClick={() => setIsFormExpanded(!isFormExpanded)}
              className="px-3.5 py-2.5 text-xs font-semibold rounded-xl bg-stone-800/80 hover:bg-stone-700 text-stone-200 border border-stone-700 transition-colors flex items-center gap-1.5"
            >
              <span>{isFormExpanded ? 'Recolher Formulário' : 'Visualizar Formulário'}</span>
              {isFormExpanded ? <ChevronUp className="w-3.5 h-3.5" /> : <ChevronDown className="w-3.5 h-3.5" />}
            </button>

            <a
              href={activeRegion.url}
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-2.5 text-xs sm:text-sm font-bold rounded-xl bg-amber-500 hover:bg-amber-400 text-stone-950 transition-all flex items-center gap-2 shadow-lg shadow-amber-500/25"
            >
              <span>Tenho Interesse</span>
              <ExternalLink className="w-4 h-4" />
            </a>
          </div>
        </div>

        {/* 3 Main Interactive Region Tabs */}
        <div className="grid grid-cols-3 border-b border-stone-800 bg-stone-950/90 p-2 sm:p-3 gap-2">
          {REGION_FORMS.map((region) => {
            const Icon = getRegionIcon(region.id);
            const isActive = region.id === activeRegionId;

            return (
              <button
                key={region.id}
                onClick={() => handleTabChange(region.id)}
                className={`py-3 px-3 sm:px-5 rounded-2xl text-left transition-all relative flex flex-col sm:flex-row items-center sm:items-start gap-2 sm:gap-3 border ${
                  isActive
                    ? 'bg-gradient-to-r from-amber-500/20 to-amber-500/10 border-amber-500/60 shadow-lg text-stone-100'
                    : 'bg-stone-900/50 border-stone-800/80 text-stone-400 hover:text-stone-200 hover:bg-stone-900'
                }`}
              >
                <div
                  className={`p-2 rounded-xl shrink-0 ${
                    isActive ? 'bg-amber-500 text-stone-950' : 'bg-stone-800 text-stone-300'
                  }`}
                >
                  <Icon className="w-4 h-4 sm:w-5 sm:h-5" />
                </div>

                <div className="min-w-0 text-center sm:text-left flex-1">
                  <div className="flex items-center justify-center sm:justify-start gap-1.5">
                    <span className="font-bold text-sm sm:text-base tracking-tight truncate">
                      {region.name}
                    </span>
                    {isActive && (
                      <span className="w-2 h-2 rounded-full bg-amber-400 shrink-0 hidden sm:inline-block" />
                    )}
                  </div>
                  <div className="text-[11px] text-stone-400 truncate hidden sm:block">
                    {region.id === 'mooca' && 'Tradição & Gastronomia'}
                    {region.id === 'tatuape' && 'Polo Corporativo & Anália Franco'}
                    {region.id === 'vila-ema' && 'Monotrilho & Alta Mobilidade'}
                  </div>
                </div>
              </button>
            );
          })}
        </div>

        {/* Tab Content Body */}
        <div className="p-5 sm:p-7">
          
          {/* Active Region Highlights Strip */}
          <div className="bg-stone-950/80 rounded-2xl border border-stone-800 p-4 sm:p-5 mb-6">
            <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
              <div>
                <div className="flex items-center gap-2">
                  <span className="text-xs font-mono font-semibold text-amber-400 uppercase bg-amber-500/10 px-2.5 py-0.5 rounded-full border border-amber-500/30">
                    {activeRegion.badge}
                  </span>
                  <span className="text-xs text-stone-400">· Região selecionada</span>
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-stone-100 mt-1.5">
                  Apartamentos Studios na Região: {activeRegion.name}
                </h3>
                <p className="text-xs sm:text-sm text-stone-300 mt-1 max-w-3xl leading-relaxed">
                  {activeRegion.locationDetails}
                </p>
              </div>

              {/* Action Buttons for this specific region */}
              <div className="flex flex-wrap items-center gap-2.5 shrink-0">
                <a
                  href={activeRegion.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-5 py-3 bg-amber-500 hover:bg-amber-400 text-stone-950 font-bold text-sm rounded-xl transition-all shadow-lg hover:shadow-amber-500/25 flex items-center gap-2"
                >
                  <Sparkles className="w-4 h-4 text-stone-950" />
                  <span>Tenho Interesse ({activeRegion.name})</span>
                  <ExternalLink className="w-4 h-4" />
                </a>
              </div>
            </div>

            {/* Bullets */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mt-4 pt-4 border-t border-stone-800/80 text-xs text-stone-300">
              {activeRegion.highlights.map((point, idx) => (
                <div key={idx} className="flex items-start gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-amber-400 shrink-0 mt-0.5" />
                  <span className="leading-snug">{point}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Embedded Google Form when expanded */}
          {isFormExpanded && (
            <div className="rounded-2xl border border-stone-800 bg-stone-950 p-2 sm:p-3 shadow-xl overflow-hidden animate-in fade-in duration-300">
              <div className="flex items-center justify-between px-3 py-2 border-b border-stone-800/80 text-xs text-stone-300 mb-2">
                <div className="flex items-center gap-2 font-medium">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                  <span>Formulário Oficial Google · Região {activeRegion.name}</span>
                </div>

                <a
                  href={activeRegion.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-amber-400 hover:underline flex items-center gap-1 text-[11px]"
                >
                  <span>Abrir em tela cheia</span>
                  <Maximize2 className="w-3 h-3" />
                </a>
              </div>

              <div className="w-full h-[580px] sm:h-[640px] rounded-xl overflow-hidden bg-white">
                <iframe
                  key={activeRegion.id}
                  src={activeRegion.embedUrl}
                  width="100%"
                  height="100%"
                  frameBorder="0"
                  marginHeight={0}
                  marginWidth={0}
                  title={`Formulário da Região ${activeRegion.name}`}
                  className="w-full h-full"
                  onLoad={() => setIframeLoaded(true)}
                >
                  Carregando formulário da {activeRegion.name}...
                </iframe>
              </div>
            </div>
          )}

        </div>

      </div>
    </section>
  );
};

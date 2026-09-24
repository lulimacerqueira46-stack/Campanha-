import React from 'react';
import { 
  Sparkles, 
  ExternalLink, 
  Calendar, 
  MessageSquare, 
  FileText, 
  ArrowRight, 
  CheckCircle2, 
  Check 
} from 'lucide-react';
import { INTEREST_FORMS } from '../data/studiosData';

interface InterestSectionProps {
  onOpenModalWithTab?: (tabId: string) => void;
}

export const InterestSection: React.FC<InterestSectionProps> = ({ onOpenModalWithTab }) => {
  return (
    <section id="tem-interesse" className="py-20 bg-stone-950 text-stone-100 border-b border-stone-800 relative overflow-hidden">
      {/* Subtle glowing amber backdrop accents */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-amber-500/10 blur-[120px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Banner Box */}
        <div className="rounded-3xl border border-amber-500/40 bg-gradient-to-b from-stone-900/90 to-stone-950 p-8 sm:p-12 shadow-2xl">
          
          <div className="text-center max-w-3xl mx-auto mb-10">
            <div className="inline-flex items-center gap-2 text-xs font-semibold tracking-wider text-amber-400 uppercase bg-amber-500/10 px-3 py-1 rounded-full border border-amber-500/30 mb-3">
              <Sparkles className="w-3.5 h-3.5 text-amber-400" />
              <span>Oportunidade de Lançamento</span>
            </div>
            
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-stone-100 text-balance">
              Tem Interesse nos Studios?
            </h2>
            
            <p className="mt-3 text-stone-300 text-sm sm:text-base leading-relaxed">
              Escolha a opção de contato mais conveniente para você. Clique no botão correspondente para agendar sua visita ao modelo decorado ou receber a tabela de valores completa:
            </p>
          </div>

          {/* 3 Buttons / Options Cards with User's Links */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {INTEREST_FORMS.map((item, idx) => {
              const icons = [Calendar, MessageSquare, FileText];
              const Icon = icons[idx % icons.length];
              
              return (
                <div
                  key={item.id}
                  className="bg-stone-900/80 rounded-2xl border border-stone-800 p-6 flex flex-col justify-between hover:border-amber-500/50 hover:bg-stone-900 transition-all group shadow-lg"
                >
                  <div>
                    <div className="flex items-center justify-between gap-2 mb-3">
                      <div className="w-10 h-10 rounded-xl bg-amber-500/10 text-amber-400 flex items-center justify-center group-hover:scale-110 transition-transform">
                        <Icon className="w-5 h-5" />
                      </div>
                      <span className="text-[11px] font-mono font-medium text-amber-400 bg-amber-500/10 px-2.5 py-0.5 rounded-full border border-amber-500/20">
                        {item.badge}
                      </span>
                    </div>

                    <h3 className="text-lg font-bold text-stone-100 group-hover:text-amber-300 transition-colors">
                      {item.label}
                    </h3>

                    <p className="text-xs text-stone-400 mt-2 leading-relaxed">
                      {item.description}
                    </p>
                  </div>

                  <div className="mt-6 pt-4 border-t border-stone-800/80 space-y-2">
                    {/* Primary Button Opening Form Link */}
                    <a
                      href={item.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full py-3.5 px-4 bg-amber-500 hover:bg-amber-400 text-stone-950 font-bold text-sm rounded-xl transition-all shadow-md hover:shadow-amber-500/25 flex items-center justify-center gap-2"
                    >
                      <Sparkles className="w-4 h-4 text-stone-950" />
                      <span>Tenho Interesse</span>
                      <ExternalLink className="w-4 h-4" />
                    </a>

                    {/* Secondary in-page preview button */}
                    {onOpenModalWithTab && (
                      <button
                        type="button"
                        onClick={() => onOpenModalWithTab(item.id)}
                        className="w-full py-2 px-3 bg-stone-950 hover:bg-stone-800 text-stone-300 text-xs font-medium rounded-lg border border-stone-800 transition-colors text-center"
                      >
                        Visualizar aqui na página
                      </button>
                    )}
                  </div>
                </div>
              );
            })}
          </div>

          {/* Quick trust row */}
          <div className="mt-8 pt-6 border-t border-stone-800/80 flex flex-wrap items-center justify-center gap-6 text-xs text-stone-400">
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-emerald-400" />
              <span>Atendimento direto pela equipe da incorporadora</span>
            </span>
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-emerald-400" />
              <span>Sem intermediários ou taxas abusivas</span>
            </span>
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-emerald-400" />
              <span>Região Tatuapé · Mooca · Vila Ema</span>
            </span>
          </div>

        </div>

      </div>
    </section>
  );
};

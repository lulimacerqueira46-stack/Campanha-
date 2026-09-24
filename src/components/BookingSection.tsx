import React, { useState } from 'react';
import { 
  Calendar, 
  MessageSquare,
  FileText, 
  ExternalLink, 
  Clock, 
  MapPin, 
  CheckCircle2, 
  Sparkles 
} from 'lucide-react';
import { 
  INTEREST_FORMS,
  BUILDING_SPECS 
} from '../data/studiosData';

export const BookingSection: React.FC = () => {
  const [selectedFormId, setSelectedFormId] = useState<string>('visit-dialog');
  const [isIframeLoaded, setIsIframeLoaded] = useState(false);

  const currentForm = INTEREST_FORMS.find((f) => f.id === selectedFormId) || INTEREST_FORMS[0];

  return (
    <section id="contato" className="py-20 bg-stone-900/40 text-stone-100 border-b border-stone-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <div className="inline-flex items-center gap-2 text-xs font-medium tracking-wider text-amber-400 uppercase mb-2">
            <Calendar className="w-3.5 h-3.5" />
            <span>Atendimento Exclusivo & Visita Presencial</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-stone-100">
            Conheça o Apartamento Modelo Decorado
          </h2>
          <p className="text-stone-400 text-sm sm:text-base mt-2">
            Agende uma visita guiada com nossos especialistas ou preencha para receber a tabela oficial de valores e o book completo de plantas.
          </p>
        </div>

        {/* Tab switcher: All 3 forms */}
        <div className="flex justify-center mb-8">
          <div className="inline-flex flex-wrap justify-center p-1.5 bg-stone-950 rounded-2xl border border-stone-800 shadow-lg gap-1">
            {INTEREST_FORMS.map((form, idx) => {
              const icons = [Calendar, MessageSquare, FileText];
              const Icon = icons[idx % icons.length];
              const isSelected = form.id === selectedFormId;

              return (
                <button
                  key={form.id}
                  onClick={() => {
                    setSelectedFormId(form.id);
                    setIsIframeLoaded(false);
                  }}
                  className={`px-4 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all flex items-center gap-2 ${
                    isSelected
                      ? 'bg-amber-500 text-stone-950 shadow-md'
                      : 'text-stone-400 hover:text-stone-200'
                  }`}
                >
                  <Icon className="w-4 h-4" />
                  <span>{form.shortLabel}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Integration Card & Google Form Container */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Information & Stand details (col-span-4) */}
          <div className="lg:col-span-4 space-y-5 bg-stone-950 rounded-2xl border border-stone-800 p-6 shadow-xl">
            <div>
              <div className="text-xs font-semibold text-amber-400 uppercase tracking-wider">
                Stand de Vendas & Apartamento Modelo
              </div>
              <h3 className="text-xl font-bold text-stone-100 mt-1">
                Lumina Experience · Eixo Tatuapé / Mooca / Vila Ema
              </h3>
            </div>

            <div className="space-y-3.5 text-xs text-stone-300">
              <div className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                <div>
                  <div className="font-semibold text-stone-200">Localização do Empreendimento</div>
                  <div className="text-stone-300 mt-0.5 font-medium">{BUILDING_SPECS.region}</div>
                  <div className="text-stone-400 text-[11px] mt-0.5">Fácil acesso pelas avenidas Salim Farah Maluf, Paes de Barros, Anhaia Mello e Radial Leste.</div>
                  <div className="text-amber-400/90 text-[11px] mt-1 font-mono">Manobrista gratuito no local</div>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Clock className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                <div>
                  <div className="font-semibold text-stone-200">Horário de Funcionamento</div>
                  <div className="text-stone-400 mt-0.5">Segunda a Domingo: das 09h às 19h</div>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                <div>
                  <div className="font-semibold text-stone-200">Visita Personalizada</div>
                  <div className="text-stone-400 mt-0.5">Tour guiado pelo arquiteto e consultor com café Nespresso de cortesia.</div>
                </div>
              </div>
            </div>

            <div className="pt-4 border-t border-stone-800/80 space-y-2">
              <div className="text-xs text-stone-400 font-medium">
                Links diretos no Google Forms:
              </div>
              <div className="space-y-1.5">
                {INTEREST_FORMS.map((form) => (
                  <a
                    key={form.id}
                    href={form.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`w-full py-2 px-3 text-xs rounded-xl border transition-colors flex items-center justify-between ${
                      form.id === selectedFormId
                        ? 'bg-amber-500/15 border-amber-500/40 text-amber-300'
                        : 'bg-stone-900 hover:bg-stone-800 text-stone-300 border-stone-800'
                    }`}
                  >
                    <span className="truncate mr-2 font-medium">{form.label}</span>
                    <ExternalLink className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                  </a>
                ))}
              </div>
            </div>

            <div className="p-3.5 rounded-xl bg-amber-500/10 border border-amber-500/20 text-xs text-stone-300">
              <div className="font-semibold text-amber-400 flex items-center gap-1.5 mb-1">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Condição Especial de Lançamento</span>
              </div>
              <div>
                Primeiras 15 unidades com kit marcenaria ou pacote de eletrodomésticos incluso sem custo extra.
              </div>
            </div>
          </div>

          {/* Embedded Google Form Container (col-span-8) */}
          <div className="lg:col-span-8 bg-stone-950 rounded-2xl border border-stone-800 p-2 sm:p-4 shadow-2xl overflow-hidden min-h-[640px] relative">
            
            {/* Top Bar with form name and status */}
            <div className="flex items-center justify-between px-3 py-2 border-b border-stone-800/80 text-xs mb-2">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-emerald-400" />
                <span className="font-semibold text-stone-200">
                  {currentForm.label}
                </span>
                <span className="text-[11px] font-mono text-amber-400 hidden sm:inline">
                  ({currentForm.badge})
                </span>
              </div>

              <a
                href={currentForm.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-amber-400 hover:underline flex items-center gap-1 text-[11px]"
              >
                <span>Abrir no Google Forms</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>

            {/* Google Form iFrame */}
            <div className="relative w-full h-[620px] rounded-xl overflow-hidden bg-white/95">
              <iframe
                key={currentForm.id}
                src={currentForm.embedUrl}
                width="100%"
                height="100%"
                frameBorder="0"
                marginHeight={0}
                marginWidth={0}
                title={currentForm.label}
                className="w-full h-full"
                onLoad={() => setIsIframeLoaded(true)}
              >
                Carregando formulário...
              </iframe>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

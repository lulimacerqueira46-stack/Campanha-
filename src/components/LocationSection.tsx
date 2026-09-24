import React from 'react';
import { MapPin, Navigation, Train, ShoppingBag, Utensils, HeartPulse, Building2, CheckCircle2 } from 'lucide-react';
import { BUILDING_SPECS } from '../data/studiosData';

export const LocationSection: React.FC = () => {
  return (
    <section id="localizacao" className="py-20 bg-stone-950 text-stone-100 border-b border-stone-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="flex items-center gap-2 text-xs font-medium tracking-wider text-amber-400 uppercase mb-2">
            <MapPin className="w-3.5 h-3.5" />
            <span>Localização Estratégica & Conectividade</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-stone-100">
            No Triângulo Estratégico do Tatuapé, Mooca e Vila Ema
          </h2>
          <p className="text-stone-400 text-sm sm:text-base mt-2 leading-relaxed">
            Localizado no eixo de maior valorização da Zona Leste de São Paulo, integrando a sofisticação do Tatuapé e Anália Franco, a tradição e vida gastronômica da Mooca, e a rápida expansão e mobilidade da Vila Ema.
          </p>
        </div>

        {/* 3 Neighborhoods Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
          
          {/* Tatuapé Card */}
          <div className="bg-stone-900/60 rounded-2xl border border-stone-800 p-6 flex flex-col justify-between hover:border-amber-500/40 transition-all shadow-xl">
            <div>
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono text-amber-400 font-semibold uppercase">
                  Polo Corporativo & Lifestyle
                </span>
                <span className="text-[11px] text-stone-400 bg-stone-950 px-2 py-0.5 rounded border border-stone-800">
                  5 min
                </span>
              </div>
              <h3 className="text-xl font-bold text-stone-100 mt-2 flex items-center gap-2">
                <span>Tatuapé & Anália Franco</span>
              </h3>
              <p className="text-xs text-stone-400 mt-1.5 leading-relaxed">
                Epicentro econômico da Zona Leste com shoppings de alta renda, complexos de saúde e centros empresariais.
              </p>

              <ul className="mt-4 space-y-2 text-xs text-stone-300">
                <li className="flex items-center gap-2">
                  <ShoppingBag className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                  <span>Shopping Anália Franco & Boulevard Tatuapé</span>
                </li>
                <li className="flex items-center gap-2">
                  <HeartPulse className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                  <span>Hospital e Maternidade São Luiz Anália Franco</span>
                </li>
                <li className="flex items-center gap-2">
                  <Navigation className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                  <span>Parque Esportivo CERET & Rua Itapura</span>
                </li>
                <li className="flex items-center gap-2">
                  <Train className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                  <span>Metrô Tatuapé (Linha 3-Vermelha & CPTM)</span>
                </li>
              </ul>
            </div>
            
            <div className="mt-6 pt-3 border-t border-stone-800/80 text-[11px] text-amber-400/90 font-mono">
              Forte demanda de aluguel por médicos e executivos
            </div>
          </div>

          {/* Mooca Card */}
          <div className="bg-stone-900/60 rounded-2xl border border-stone-800 p-6 flex flex-col justify-between hover:border-amber-500/40 transition-all shadow-xl">
            <div>
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono text-amber-400 font-semibold uppercase">
                  Tradição & Gastronomia
                </span>
                <span className="text-[11px] text-stone-400 bg-stone-950 px-2 py-0.5 rounded border border-stone-800">
                  Acesso Imediato
                </span>
              </div>
              <h3 className="text-xl font-bold text-stone-100 mt-2 flex items-center gap-2">
                <span>Mooca</span>
              </h3>
              <p className="text-xs text-stone-400 mt-1.5 leading-relaxed">
                Um dos bairros mais tradicionais e valorizados de São Paulo, famoso pela qualidade de vida e gastronomia impecável.
              </p>

              <ul className="mt-4 space-y-2 text-xs text-stone-300">
                <li className="flex items-center gap-2">
                  <Utensils className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                  <span>Av. Paes de Barros & Rua da Mooca</span>
                </li>
                <li className="flex items-center gap-2">
                  <ShoppingBag className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                  <span>Mooca Plaza Shopping</span>
                </li>
                <li className="flex items-center gap-2">
                  <HeartPulse className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                  <span>Hospital Villa-Lobos & São Cristóvão</span>
                </li>
                <li className="flex items-center gap-2">
                  <Building2 className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                  <span>Universidade Anhembi Morumbi & São Judas</span>
                </li>
              </ul>
            </div>
            
            <div className="mt-6 pt-3 border-t border-stone-800/80 text-[11px] text-amber-400/90 font-mono">
              Bairro consolidado com altíssima taxa de ocupação
            </div>
          </div>

          {/* Vila Ema Card */}
          <div className="bg-stone-900/60 rounded-2xl border border-stone-800 p-6 flex flex-col justify-between hover:border-amber-500/40 transition-all shadow-xl">
            <div>
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono text-amber-400 font-semibold uppercase">
                  Mobilidade & Expansão
                </span>
                <span className="text-[11px] text-stone-400 bg-stone-950 px-2 py-0.5 rounded border border-stone-800">
                  Conexão Rápida
                </span>
              </div>
              <h3 className="text-xl font-bold text-stone-100 mt-2 flex items-center gap-2">
                <span>Vila Ema & São Lucas</span>
              </h3>
              <p className="text-xs text-stone-400 mt-1.5 leading-relaxed">
                Vetor de grande valorização recente com transporte sobre trilhos de ponta, ciclovias e fácil deslocamento para toda a capital.
              </p>

              <ul className="mt-4 space-y-2 text-xs text-stone-300">
                <li className="flex items-center gap-2">
                  <Train className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                  <span>Estação Vila Ema / São Lucas (Linha 15-Prata)</span>
                </li>
                <li className="flex items-center gap-2">
                  <Navigation className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                  <span>Ligação direta com Linha 2-Verde Paulista</span>
                </li>
                <li className="flex items-center gap-2">
                  <Building2 className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                  <span>Comércio completo na Av. Vila Ema</span>
                </li>
                <li className="flex items-center gap-2">
                  <Navigation className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                  <span>Av. Anhaia Mello & Salim Farah Maluf</span>
                </li>
              </ul>
            </div>
            
            <div className="mt-6 pt-3 border-t border-stone-800/80 text-[11px] text-amber-400/90 font-mono">
              Acesso descomplicado ao centro, Paulista e ABC
            </div>
          </div>

        </div>

        {/* Visual Connectivity Strip */}
        <div className="p-5 rounded-2xl bg-stone-900/40 border border-stone-800 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="p-2.5 rounded-xl bg-amber-500/10 text-amber-400 shrink-0">
              <Navigation className="w-5 h-5" />
            </div>
            <div>
              <div className="text-sm font-semibold text-stone-100">
                Acesso Estratégico pelas Principais Vias Expressas
              </div>
              <div className="text-xs text-stone-400 mt-0.5">
                Av. Salim Farah Maluf · Radial Leste · Av. Paes de Barros · Av. Prof. Luiz Ignácio Anhaia Mello · Av. Vila Ema
              </div>
            </div>
          </div>

          <div className="text-xs text-stone-300 font-mono bg-stone-950 px-3.5 py-2 rounded-xl border border-stone-800 shrink-0">
            Região Tatuapé · Mooca · Vila Ema
          </div>
        </div>

      </div>
    </section>
  );
};

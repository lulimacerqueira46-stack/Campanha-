import React, { useState } from 'react';
import { 
  Calculator, 
  TrendingUp, 
  DollarSign, 
  Percent, 
  ArrowRight, 
  CheckCircle2, 
  BarChart3,
  Sparkles
} from 'lucide-react';
import { STUDIO_PLANS } from '../data/studiosData';

interface InvestmentCalculatorProps {
  onRequestStudy: () => void;
}

export const InvestmentCalculator: React.FC<InvestmentCalculatorProps> = ({ onRequestStudy }) => {
  const [selectedPlanId, setSelectedPlanId] = useState<string>('smart-24');
  const [occupancyRate, setOccupancyRate] = useState<number>(75); // 75% occupancy
  const [dailyRate, setDailyRate] = useState<number>(240); // R$ 240 / night
  const [downPaymentPercent, setDownPaymentPercent] = useState<number>(30); // 30% down payment

  const plan = STUDIO_PLANS.find((p) => p.id === selectedPlanId) || STUDIO_PLANS[0];

  // Adjust default daily rate based on unit size
  const handlePlanChange = (planId: string) => {
    setSelectedPlanId(planId);
    if (planId === 'smart-24') setDailyRate(240);
    else if (planId === 'executive-32') setDailyRate(310);
    else if (planId === 'terrace-42') setDailyRate(420);
    else if (planId === 'duplex-54') setDailyRate(560);
  };

  // Calculations
  const unitPrice = plan.priceFrom;
  const downPayment = unitPrice * (downPaymentPercent / 100);
  const occupiedNights = Math.round(30 * (occupancyRate / 100));
  const grossMonthlyRevenue = occupiedNights * dailyRate;
  
  // Platform & cleaning costs (~18%) + condo + IPTU
  const platformFee = grossMonthlyRevenue * 0.18;
  const netMonthlyRevenue = Math.max(0, grossMonthlyRevenue - platformFee - plan.condoFee - 120);
  const annualNetRevenue = netMonthlyRevenue * 12;
  const annualYield = ((annualNetRevenue / unitPrice) * 100).toFixed(1);

  // Traditional rental comparison
  const traditionalRentMonthly = plan.estimatedRentLongStay;
  const traditionalAnnualYield = (((traditionalRentMonthly * 12) / unitPrice) * 100).toFixed(1);

  return (
    <section id="investimento" className="py-20 bg-stone-950 text-stone-100 border-b border-stone-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="flex items-center gap-2 text-xs font-medium tracking-wider text-amber-400 uppercase mb-2">
            <Calculator className="w-3.5 h-3.5" />
            <span>Inteligência Imobiliária</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-stone-100">
            Simulador de Rentabilidade & Retorno
          </h2>
          <p className="text-stone-400 text-sm sm:text-base mt-2 leading-relaxed">
            Calcule o potencial de renda passiva com locação por temporada (Airbnb) versus aluguel convencional com base nas métricas reais da região do Tatuapé, Mooca e Vila Ema.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Controls Panel (col-span-6) */}
          <div className="lg:col-span-6 bg-stone-900/60 rounded-2xl border border-stone-800 p-6 sm:p-7 space-y-6">
            
            {/* Choose Unit */}
            <div>
              <label className="block text-xs font-semibold text-stone-300 uppercase tracking-wider mb-2">
                1. Escolha a Planta do Studio
              </label>
              <div className="grid grid-cols-2 gap-2">
                {STUDIO_PLANS.map((p) => (
                  <button
                    key={p.id}
                    onClick={() => handlePlanChange(p.id)}
                    className={`p-3 rounded-xl text-left border transition-all text-xs ${
                      p.id === selectedPlanId
                        ? 'bg-amber-500/10 border-amber-500/60 text-stone-100 font-semibold shadow'
                        : 'bg-stone-950/70 border-stone-800 text-stone-400 hover:text-stone-200'
                    }`}
                  >
                    <div className="font-bold text-sm text-stone-100">{p.name}</div>
                    <div className="text-amber-400 font-mono mt-0.5">{p.totalArea} m²</div>
                  </button>
                ))}
              </div>
            </div>

            {/* Slider: Diária Média (R$) */}
            <div>
              <div className="flex justify-between items-center text-xs mb-2">
                <span className="font-semibold text-stone-300 uppercase tracking-wider">
                  2. Diária Média Estimada (Airbnb)
                </span>
                <span className="font-bold text-base text-amber-400 font-mono">
                  R$ {dailyRate} / noite
                </span>
              </div>
              <input
                type="range"
                min="160"
                max="800"
                step="10"
                value={dailyRate}
                onChange={(e) => setDailyRate(Number(e.target.value))}
                className="w-full h-2 bg-stone-800 rounded-lg appearance-none cursor-pointer accent-amber-500"
              />
              <div className="flex justify-between text-[11px] text-stone-500 font-mono mt-1">
                <span>R$ 160</span>
                <span>Média regional: R$ 250 - R$ 450</span>
                <span>R$ 800</span>
              </div>
            </div>

            {/* Slider: Taxa de Ocupação (%) */}
            <div>
              <div className="flex justify-between items-center text-xs mb-2">
                <span className="font-semibold text-stone-300 uppercase tracking-wider">
                  3. Taxa de Ocupação Mensal
                </span>
                <span className="font-bold text-base text-amber-400 font-mono">
                  {occupancyRate}% ({occupiedNights} noites/mês)
                </span>
              </div>
              <input
                type="range"
                min="50"
                max="90"
                step="5"
                value={occupancyRate}
                onChange={(e) => setOccupancyRate(Number(e.target.value))}
                className="w-full h-2 bg-stone-800 rounded-lg appearance-none cursor-pointer accent-amber-500"
              />
              <div className="flex justify-between text-[11px] text-stone-500 font-mono mt-1">
                <span>50% (Conservador)</span>
                <span>75% (Média Tatuapé/Mooca)</span>
                <span>90% (Pico/Eventos)</span>
              </div>
            </div>

            {/* Slider: Entrada / Fluxo de Obra */}
            <div>
              <div className="flex justify-between items-center text-xs mb-2">
                <span className="font-semibold text-stone-300 uppercase tracking-wider">
                  4. Entrada Facilitada durante a Obra
                </span>
                <span className="font-bold text-base text-stone-100 font-mono">
                  {downPaymentPercent}% ({new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL', maximumFractionDigits: 0 }).format(downPayment)})
                </span>
              </div>
              <input
                type="range"
                min="10"
                max="50"
                step="5"
                value={downPaymentPercent}
                onChange={(e) => setDownPaymentPercent(Number(e.target.value))}
                className="w-full h-2 bg-stone-800 rounded-lg appearance-none cursor-pointer accent-amber-500"
              />
              <div className="text-[11px] text-stone-400 mt-1">
                Saldo restante financiado na entrega das chaves em Dezembro/2026.
              </div>
            </div>

          </div>

          {/* Results Comparison Board (col-span-6) */}
          <div className="lg:col-span-6 bg-stone-950 rounded-2xl border border-stone-800 p-6 sm:p-7 shadow-2xl space-y-6">
            
            <div className="border-b border-stone-800 pb-4">
              <span className="text-xs uppercase tracking-wider text-amber-400 font-semibold">
                Resultado da Simulação
              </span>
              <h3 className="text-xl font-bold text-stone-100 mt-1">
                {plan.name} ({plan.totalArea} m²)
              </h3>
              <p className="text-xs text-stone-400 mt-0.5">
                Investimento inicial estimado: {new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL', maximumFractionDigits: 0 }).format(unitPrice)}
              </p>
            </div>

            {/* Main Yield Box */}
            <div className="grid grid-cols-2 gap-4">
              <div className="p-4 rounded-xl bg-amber-500/10 border border-amber-500/30">
                <div className="text-[11px] font-semibold text-amber-400 uppercase">
                  Airbnb / Short Stay
                </div>
                <div className="text-2xl sm:text-3xl font-bold font-mono text-amber-300 mt-1 tabular-nums">
                  {annualYield}% <span className="text-xs font-sans font-normal text-stone-400">a.a.</span>
                </div>
                <div className="text-xs text-stone-300 font-mono mt-1">
                  R$ {Math.round(netMonthlyRevenue).toLocaleString('pt-BR')} / mês líquido
                </div>
              </div>

              <div className="p-4 rounded-xl bg-stone-900 border border-stone-800">
                <div className="text-[11px] font-semibold text-stone-400 uppercase">
                  Locação Tradicional
                </div>
                <div className="text-2xl sm:text-3xl font-bold font-mono text-stone-200 mt-1 tabular-nums">
                  {traditionalAnnualYield}% <span className="text-xs font-sans font-normal text-stone-400">a.a.</span>
                </div>
                <div className="text-xs text-stone-400 font-mono mt-1">
                  R$ {traditionalRentMonthly.toLocaleString('pt-BR')} / mês
                </div>
              </div>
            </div>

            {/* Breakdown itemized list */}
            <div className="space-y-2 text-xs">
              <div className="flex justify-between py-1.5 border-b border-stone-900">
                <span className="text-stone-400">Receita Bruta Airbnb ({occupiedNights} noites x R$ {dailyRate}):</span>
                <span className="font-mono text-stone-200">
                  R$ {grossMonthlyRevenue.toLocaleString('pt-BR')}
                </span>
              </div>
              <div className="flex justify-between py-1.5 border-b border-stone-900 text-stone-400">
                <span>Custos de Plataforma & Gestão (~18%):</span>
                <span className="font-mono text-rose-400">
                  - R$ {Math.round(platformFee).toLocaleString('pt-BR')}
                </span>
              </div>
              <div className="flex justify-between py-1.5 border-b border-stone-900 text-stone-400">
                <span>Condomínio Estimado:</span>
                <span className="font-mono text-rose-400">
                  - R$ {plan.condoFee.toLocaleString('pt-BR')}
                </span>
              </div>
              <div className="flex justify-between py-2 border-t border-stone-800 font-semibold text-sm">
                <span className="text-stone-100">Resultado Líquido Anual:</span>
                <span className="font-mono text-emerald-400 text-base">
                  R$ {Math.round(annualNetRevenue).toLocaleString('pt-BR')} / ano
                </span>
              </div>
            </div>

            {/* Action CTA */}
            <button
              onClick={onRequestStudy}
              className="w-full py-3.5 px-4 bg-amber-500 hover:bg-amber-400 text-stone-950 font-bold text-xs sm:text-sm rounded-xl shadow-xl hover:shadow-amber-500/20 transition-all flex items-center justify-center gap-2"
            >
              <span>Receber Estudo de Viabilidade Completo em PDF</span>
              <ArrowRight className="w-4 h-4" />
            </button>

          </div>

        </div>

      </div>
    </section>
  );
};

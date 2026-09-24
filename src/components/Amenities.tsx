import React from 'react';
import { 
  Waves, 
  Briefcase, 
  Dumbbell, 
  Shirt, 
  Package, 
  Bike, 
  ShieldCheck, 
  SunMedium,
  Check
} from 'lucide-react';
import { BUILDING_SPECS } from '../data/studiosData';

interface AmenitiesProps {
  onScheduleVisit: () => void;
}

export const Amenities: React.FC<AmenitiesProps> = ({ onScheduleVisit }) => {
  const items = [
    {
      icon: Waves,
      title: 'Rooftop Sky Pool',
      desc: 'Piscina aquecida no 24º andar com borda infinita e vista 360° panorâmica da cidade.'
    },
    {
      icon: Briefcase,
      title: 'Coworking & Call Pods',
      desc: 'Estações de trabalho silenciosas, internet corporativa de alta velocidade e salas de reunião.'
    },
    {
      icon: Dumbbell,
      title: 'Academia Life Fitness',
      desc: 'Espaço fitness completo com equipamentos importados, esteiras interativas e área para treino funcional.'
    },
    {
      icon: Shirt,
      title: 'Lavanderia Compartilhada OMO',
      desc: 'Máquinas profissionais dosadas automaticamente via aplicativo, com lounge de espera aconchegante.'
    },
    {
      icon: Package,
      title: 'Delivery Room Refrigerado',
      desc: 'Armários inteligentes para recebimento de encomendas secas e refrigeradas a qualquer hora.'
    },
    {
      icon: Bike,
      title: 'Bicicletário & Oficina',
      desc: 'Tomadas para recarga de patinetes e e-bikes, com bancada de ferramentas para manutenção rápida.'
    }
  ];

  return (
    <section id="lazer" className="py-20 bg-stone-900/60 text-stone-100 border-b border-stone-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
          <div>
            <div className="flex items-center gap-2 text-xs font-medium tracking-wider text-amber-400 uppercase mb-2">
              <SunMedium className="w-3.5 h-3.5" />
              <span>Condomínio Inteligente & Completo</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-stone-100">
              Áreas de Lazer & Serviços Compartilhados
            </h2>
            <p className="text-stone-400 text-sm sm:text-base mt-2 max-w-2xl">
              Projetado para reduzir os custos fixos de condomínio e oferecer uma extensão natural do seu apartamento no topo da cidade.
            </p>
          </div>

          <button
            onClick={onScheduleVisit}
            className="px-4 py-2.5 bg-stone-900 hover:bg-stone-800 text-stone-200 text-xs font-semibold rounded-xl border border-stone-800 transition-colors whitespace-nowrap self-start md:self-auto"
          >
            Conhecer Estrutura Completa
          </button>
        </div>

        {/* Feature Hero Banner: Rooftop */}
        <div className="rounded-2xl overflow-hidden border border-stone-800 bg-stone-950 relative mb-10 shadow-2xl group">
          <div className="aspect-[16/9] sm:aspect-[21/9] w-full relative">
            <img
              src="/src/assets/images/rooftop_pool_lounge_1790208606995.jpg"
              alt="Piscina de borda infinita no rooftop"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000 brightness-90"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-stone-950/40 to-transparent" />
          </div>

          <div className="absolute bottom-6 left-6 right-6 flex flex-col sm:flex-row sm:items-end justify-between gap-4">
            <div>
              <div className="flex items-center gap-2 text-xs font-semibold text-amber-400 uppercase">
                <span>Pavimento 24º Rooftop</span>
                <span aria-hidden="true" className="text-stone-500">·</span>
                <span className="text-stone-300">Piscina Climatizada & Fire Pit</span>
              </div>
              <h3 className="text-xl sm:text-3xl font-bold text-stone-100 mt-1">
                Lounge Panorâmico Acima da Cidade
              </h3>
            </div>
            <div className="text-xs text-stone-300 font-mono bg-stone-900/80 backdrop-blur-md px-3 py-1.5 rounded-lg border border-stone-800">
              Uso exclusivo dos condôminos e hóspedes
            </div>
          </div>
        </div>

        {/* 6 Amenities Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {items.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="p-5 rounded-xl bg-stone-950/80 border border-stone-800/90 hover:border-amber-500/40 transition-all group"
              >
                <div className="w-10 h-10 rounded-xl bg-amber-500/10 text-amber-400 flex items-center justify-center mb-3.5 group-hover:scale-110 transition-transform">
                  <Icon className="w-5 h-5" />
                </div>
                <h4 className="text-base font-semibold text-stone-100">
                  {item.title}
                </h4>
                <p className="text-xs text-stone-400 mt-1.5 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

import React from 'react';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';
import { BUILDING_SPECS } from '../data/studiosData';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-stone-950 text-stone-400 py-14 border-t border-stone-800/80 text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 pb-12 border-b border-stone-800/80">
          
          {/* Col 1: Wordmark & Architecture */}
          <div className="md:col-span-1 space-y-3">
            <span className="text-xl font-bold tracking-tight text-stone-100 block">
              LUMINA STUDIOS
            </span>
            <p className="text-stone-400 text-xs leading-relaxed">
              Studios inteligentes de 24m² a 54m² no eixo de maior valorização da Zona Leste: Tatuapé, Mooca e Vila Ema. Arquitetura autoral com foco em sustentabilidade, bem-estar e máxima rentabilidade.
            </p>
            <div className="text-[11px] text-stone-500 font-mono">
              RI: Registro de Incorporação sob o nº R-4 na matrícula 148.922 do 4º Cartório de Registro de Imóveis de SP.
            </div>
          </div>

          {/* Col 2: Navigation Mirror */}
          <div className="space-y-2">
            <span className="text-xs font-semibold uppercase tracking-wider text-stone-200 block mb-3">
              Navegação Rápida
            </span>
            <ul className="space-y-2">
              <li>
                <a href="#tour-360" className="hover:text-amber-400 transition-colors">
                  Tour Virtual 360°
                </a>
              </li>
              <li>
                <a href="#plantas" className="hover:text-amber-400 transition-colors">
                  Plantas & Metragens (m²)
                </a>
              </li>
              <li>
                <a href="#acabamentos" className="hover:text-amber-400 transition-colors">
                  Acabamentos & Tecnologia
                </a>
              </li>
              <li>
                <a href="#lazer" className="hover:text-amber-400 transition-colors">
                  Rooftop & Áreas Comuns
                </a>
              </li>
              <li>
                <a href="#investimento" className="hover:text-amber-400 transition-colors">
                  Simulador de Rentabilidade
                </a>
              </li>
            </ul>
          </div>

          {/* Col 3: Technical Details & Partners */}
          <div className="space-y-2">
            <span className="text-xs font-semibold uppercase tracking-wider text-stone-200 block mb-3">
              Ficha Técnica
            </span>
            <ul className="space-y-1.5 text-stone-400">
              <li><strong className="text-stone-300">Projeto Arquitetônico:</strong> {BUILDING_SPECS.architect}</li>
              <li><strong className="text-stone-300">Paisagismo:</strong> {BUILDING_SPECS.landscaping}</li>
              <li><strong className="text-stone-300">Total de Unidades:</strong> {BUILDING_SPECS.unitsTotal} studios</li>
              <li><strong className="text-stone-300">Previsão de Entrega:</strong> {BUILDING_SPECS.deliveryDate}</li>
              <li><strong className="text-stone-300">Garagem:</strong> {BUILDING_SPECS.parkingSpaces}</li>
            </ul>
          </div>

          {/* Col 4: Stand & Contact */}
          <div className="space-y-2">
            <span className="text-xs font-semibold uppercase tracking-wider text-stone-200 block mb-3">
              Stand & Visitas
            </span>
            <div className="space-y-2 text-stone-400">
              <div className="flex items-start gap-2">
                <MapPin className="w-3.5 h-3.5 text-amber-400 shrink-0 mt-0.5" />
                <span>{BUILDING_SPECS.region}</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                <span>Diariamente das 09h às 19h</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                <span>(11) 3982-1400 / WhatsApp</span>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-stone-500">
          <div>
            © {new Date().getFullYear()} Lumina Studios Empreendimentos Imobiliários SPE Ltda. Todos os direitos reservados.
          </div>
          <div className="flex items-center gap-4">
            <a href="#" className="hover:text-stone-300">Termos de Uso</a>
            <span>·</span>
            <a href="#" className="hover:text-stone-300">Política de Privacidade LGPD</a>
            <span>·</span>
            <a href="#contato" className="hover:text-stone-300">Agendar Atendimento</a>
          </div>
        </div>

      </div>
    </footer>
  );
};

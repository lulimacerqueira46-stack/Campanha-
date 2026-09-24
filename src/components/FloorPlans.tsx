import React, { useState } from 'react';
import { 
  Maximize2, 
  Download, 
  Eye, 
  CheckCircle2, 
  TrendingUp, 
  FileText, 
  Ruler, 
  Compass,
  Building,
  Sparkles,
  ArrowRight
} from 'lucide-react';
import { STUDIO_PLANS, StudioPlan, RoomDetail } from '../data/studiosData';

interface FloorPlansProps {
  onSelectPlanForTour?: (roomIndex: number) => void;
  onRequestCatalog?: () => void;
  onScheduleVisit?: () => void;
}

export const FloorPlans: React.FC<FloorPlansProps> = ({
  onSelectPlanForTour,
  onRequestCatalog,
  onScheduleVisit
}) => {
  const [selectedPlanId, setSelectedPlanId] = useState<string>('smart-24');
  const [hoveredRoom, setHoveredRoom] = useState<RoomDetail | null>(null);
  const [viewMode, setViewMode] = useState<'blueprint' | 'render'>('blueprint');

  const selectedPlan = STUDIO_PLANS.find((p) => p.id === selectedPlanId) || STUDIO_PLANS[0];

  return (
    <section id="plantas" className="py-20 bg-stone-900/60 text-stone-100 border-b border-stone-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 text-xs font-medium tracking-wider text-amber-400 uppercase mb-2">
            <Ruler className="w-3.5 h-3.5" />
            <span>Engenharia & Aproveitamento de Espaço</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-stone-100">
            Plantas Disponíveis & Metragens Detalhadas
          </h2>
          <p className="text-stone-400 text-sm sm:text-base mt-3 leading-relaxed">
            Projetadas ao milímetro para conciliar iluminação natural, circulação ergonômica e alta rentabilidade. Escolha a metragem ideal para o seu perfil:
          </p>
        </div>

        {/* Plan Selector Navigation Tabs */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-2 sm:gap-3 p-1.5 bg-stone-950/80 rounded-2xl border border-stone-800/90 mb-10 max-w-4xl mx-auto">
          {STUDIO_PLANS.map((plan) => {
            const isSelected = plan.id === selectedPlan.id;
            return (
              <button
                key={plan.id}
                onClick={() => {
                  setSelectedPlanId(plan.id);
                  setHoveredRoom(null);
                }}
                className={`py-3.5 px-4 rounded-xl text-left transition-all relative ${
                  isSelected
                    ? 'bg-stone-900 border border-amber-500/50 shadow-lg text-stone-100'
                    : 'text-stone-400 hover:text-stone-200 hover:bg-stone-900/40 border border-transparent'
                }`}
              >
                {isSelected && (
                  <div className="absolute top-2 right-2 w-2 h-2 rounded-full bg-amber-400" />
                )}
                <div className="text-xs font-mono text-amber-400 font-bold tracking-tight">
                  {plan.totalArea.toFixed(1).replace('.', ',')} m²
                </div>
                <div className="font-semibold text-sm sm:text-base truncate mt-0.5">
                  {plan.name}
                </div>
                <div className="text-[11px] text-stone-500 truncate mt-0.5">
                  Privativo: {plan.privateArea.toFixed(1).replace('.', ',')}m²
                </div>
              </button>
            );
          })}
        </div>

        {/* Main Floor Plan Showcase Card */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left / Center: Interactive Visual Blueprint or Render View (col-span-7) */}
          <div className="lg:col-span-7 bg-stone-950 rounded-2xl border border-stone-800 p-5 sm:p-6 relative overflow-hidden shadow-2xl">
            
            {/* View switcher header */}
            <div className="flex items-center justify-between border-b border-stone-800/80 pb-4 mb-5">
              <div>
                <div className="flex items-center gap-2">
                  <h3 className="text-xl font-bold text-stone-100">
                    {selectedPlan.name}
                  </h3>
                  <span className="text-xs font-mono font-bold px-2 py-0.5 rounded bg-amber-400/10 text-amber-300 border border-amber-400/30">
                    {selectedPlan.totalArea.toFixed(1).replace('.', ',')} m² Totais
                  </span>
                </div>
                <p className="text-xs text-stone-400 mt-1">
                  {selectedPlan.subtitle}
                </p>
              </div>

              {/* Blueprint / 3D Render toggle */}
              <div className="flex items-center bg-stone-900 p-1 rounded-lg border border-stone-800 text-xs">
                <button
                  onClick={() => setViewMode('blueprint')}
                  className={`px-3 py-1 rounded-md transition-colors ${
                    viewMode === 'blueprint' 
                      ? 'bg-amber-500/20 text-amber-300 font-medium' 
                      : 'text-stone-400 hover:text-stone-200'
                  }`}
                >
                  Planta Cota (m²)
                </button>
                <button
                  onClick={() => setViewMode('render')}
                  className={`px-3 py-1 rounded-md transition-colors ${
                    viewMode === 'render' 
                      ? 'bg-amber-500/20 text-amber-300 font-medium' 
                      : 'text-stone-400 hover:text-stone-200'
                  }`}
                >
                  Visual 3D
                </button>
              </div>
            </div>

            {/* Blueprint SVG Graphic (Accurate architectural layout with hoverable zones) */}
            <div className="relative w-full aspect-[4/3] sm:aspect-[16/11] bg-stone-900/40 rounded-xl border border-stone-800/80 p-4 flex items-center justify-center overflow-hidden">
              
              {/* Subtle Grid blueprint background */}
              <div 
                className="absolute inset-0 opacity-15 pointer-events-none"
                style={{
                  backgroundImage: `radial-gradient(circle, #f59e0b 1px, transparent 1px)`,
                  backgroundSize: '24px 24px'
                }}
              />

              {viewMode === 'blueprint' ? (
                /* Interactive Vector Blueprint */
                <svg
                  viewBox="0 0 600 450"
                  className="w-full h-full max-h-[420px] transition-all duration-300 select-none"
                >
                  {/* Outer Walls & Dimensions */}
                  <rect
                    x="50"
                    y="40"
                    width="500"
                    height="360"
                    fill="#171513"
                    stroke="#57534e"
                    strokeWidth="6"
                    rx="6"
                  />

                  {/* Room Zone 1: Varanda / Terraço */}
                  <g
                    className="cursor-pointer transition-all duration-200"
                    onMouseEnter={() => setHoveredRoom(selectedPlan.rooms[3] || selectedPlan.rooms[0])}
                    onMouseLeave={() => setHoveredRoom(null)}
                  >
                    <rect
                      x="400"
                      y="46"
                      width="144"
                      height="348"
                      fill={hoveredRoom?.name.includes('Varanda') || hoveredRoom?.name.includes('Terraço') ? '#d9770633' : '#1c1917'}
                      stroke="#d97706"
                      strokeWidth="1.5"
                      strokeDasharray="4 4"
                    />
                    {/* Sliding glass door line */}
                    <line x1="400" y1="46" x2="400" y2="394" stroke="#38bdf8" strokeWidth="4" />
                    {/* Deck slats or plants */}
                    <line x1="420" y1="60" x2="520" y2="60" stroke="#78716c" strokeWidth="1" strokeDasharray="3 3" />
                    <line x1="420" y1="120" x2="520" y2="120" stroke="#78716c" strokeWidth="1" strokeDasharray="3 3" />
                    <line x1="420" y1="180" x2="520" y2="180" stroke="#78716c" strokeWidth="1" strokeDasharray="3 3" />
                    <text x="470" y="210" fill="#f59e0b" fontSize="13" fontWeight="bold" textAnchor="middle">
                      {selectedPlan.rooms[3]?.name.split(' ')[0] || 'Varanda'}
                    </text>
                    <text x="470" y="230" fill="#a8a29e" fontSize="11" textAnchor="middle" fontFamily="monospace">
                      {selectedPlan.balconyArea.toFixed(1).replace('.', ',')} m²
                    </text>
                  </g>

                  {/* Room Zone 2: Dormitório & Living */}
                  <g
                    className="cursor-pointer transition-all duration-200"
                    onMouseEnter={() => setHoveredRoom(selectedPlan.rooms[0])}
                    onMouseLeave={() => setHoveredRoom(null)}
                  >
                    <rect
                      x="180"
                      y="46"
                      width="216"
                      height="348"
                      fill={hoveredRoom?.name.includes('Dormitório') || hoveredRoom?.name.includes('Living') ? '#fbbf2422' : '#292524'}
                      stroke="#78716c"
                      strokeWidth="1.5"
                    />
                    
                    {/* Bed Graphic */}
                    <rect x="210" y="70" width="130" height="150" fill="#44403c" stroke="#a8a29e" strokeWidth="1.5" rx="4" />
                    {/* Pillows */}
                    <rect x="225" y="78" width="40" height="25" fill="#e7e5e4" rx="2" />
                    <rect x="285" y="78" width="40" height="25" fill="#e7e5e4" rx="2" />
                    {/* Bed throw line */}
                    <line x1="210" y1="170" x2="340" y2="170" stroke="#a8a29e" strokeWidth="1" strokeDasharray="2 2" />
                    
                    {/* Sofa / Home Office desk */}
                    <rect x="200" y="290" width="140" height="45" fill="#3f3f46" stroke="#71717a" strokeWidth="1" rx="3" />
                    
                    <text x="288" y="250" fill="#f5f5f4" fontSize="13" fontWeight="bold" textAnchor="middle">
                      {selectedPlan.rooms[0].name.split(' ')[0]} & Estar
                    </text>
                    <text x="288" y="270" fill="#d6d3d1" fontSize="11" textAnchor="middle" fontFamily="monospace">
                      {selectedPlan.rooms[0].area.toFixed(1).replace('.', ',')} m²
                    </text>
                  </g>

                  {/* Room Zone 3: Cozinha Gourmet */}
                  <g
                    className="cursor-pointer transition-all duration-200"
                    onMouseEnter={() => setHoveredRoom(selectedPlan.rooms[1])}
                    onMouseLeave={() => setHoveredRoom(null)}
                  >
                    <rect
                      x="56"
                      y="46"
                      width="120"
                      height="180"
                      fill={hoveredRoom?.name.includes('Cozinha') ? '#fbbf2422' : '#1c1917'}
                      stroke="#78716c"
                      strokeWidth="1.5"
                    />
                    {/* Countertop & Sink */}
                    <rect x="62" y="52" width="108" height="35" fill="#52525b" stroke="#a1a1aa" strokeWidth="1" />
                    <circle cx="85" cy="70" r="10" fill="#71717a" />
                    <rect x="120" y="62" width="22" height="15" fill="#27272a" stroke="#d4d4d8" strokeWidth="1" />
                    
                    <text x="116" y="130" fill="#f5f5f4" fontSize="12" fontWeight="bold" textAnchor="middle">
                      Cozinha
                    </text>
                    <text x="116" y="148" fill="#d6d3d1" fontSize="11" textAnchor="middle" fontFamily="monospace">
                      {selectedPlan.rooms[1].area.toFixed(1).replace('.', ',')} m²
                    </text>
                  </g>

                  {/* Room Zone 4: Banheiro Completo */}
                  <g
                    className="cursor-pointer transition-all duration-200"
                    onMouseEnter={() => setHoveredRoom(selectedPlan.rooms[2])}
                    onMouseLeave={() => setHoveredRoom(null)}
                  >
                    <rect
                      x="56"
                      y="230"
                      width="120"
                      height="164"
                      fill={hoveredRoom?.name.includes('Banheiro') || hoveredRoom?.name.includes('Banho') ? '#fbbf2422' : '#262626'}
                      stroke="#78716c"
                      strokeWidth="1.5"
                    />
                    {/* Shower Box with glass line */}
                    <rect x="62" y="315" width="60" height="70" fill="#1e293b" stroke="#38bdf8" strokeWidth="1" />
                    <circle cx="92" cy="350" r="5" fill="#38bdf8" />
                    {/* Basin */}
                    <rect x="126" y="240" width="38" height="24" rx="3" fill="#e2e8f0" />
                    {/* Toilet */}
                    <ellipse cx="90" cy="265" rx="12" ry="16" fill="#cbd5e1" />
                    
                    <text x="116" y="295" fill="#f5f5f4" fontSize="12" fontWeight="bold" textAnchor="middle">
                      Banheiro
                    </text>
                    <text x="116" y="312" fill="#d6d3d1" fontSize="11" textAnchor="middle" fontFamily="monospace">
                      {selectedPlan.rooms[2].area.toFixed(1).replace('.', ',')} m²
                    </text>
                  </g>

                  {/* Main Entry Door Swing Indicator */}
                  <path
                    d="M 56 226 A 40 40 0 0 1 96 186"
                    fill="none"
                    stroke="#a8a29e"
                    strokeWidth="1.5"
                    strokeDasharray="3 3"
                  />
                  <line x1="56" y1="226" x2="56" y2="186" stroke="#fbbf24" strokeWidth="2.5" />
                  <text x="40" y="210" fill="#fbbf24" fontSize="9" textAnchor="end">
                    Entrada
                  </text>

                  {/* Architectural Dimension Markers */}
                  <line x1="50" y1="420" x2="550" y2="420" stroke="#78716c" strokeWidth="1" />
                  <line x1="50" y1="415" x2="50" y2="425" stroke="#78716c" strokeWidth="1" />
                  <line x1="550" y1="415" x2="550" y2="425" stroke="#78716c" strokeWidth="1" />
                  <text x="300" y="435" fill="#a8a29e" fontSize="11" textAnchor="middle" fontFamily="monospace">
                    Dimensão Total: {selectedPlan.dimensions}
                  </text>
                </svg>
              ) : (
                /* 3D Render preview container */
                <div className="relative w-full h-full rounded-lg overflow-hidden flex items-center justify-center">
                  <img
                    src="/src/assets/images/studio_interior_panorama_1790208568970.jpg"
                    alt={`Render 3D do ${selectedPlan.name}`}
                    className="w-full h-full object-cover rounded-lg"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-stone-950/30 backdrop-blur-[1px] flex items-center justify-center">
                    <div className="bg-stone-900/90 p-4 rounded-xl border border-amber-500/40 text-center max-w-xs shadow-2xl">
                      <Sparkles className="w-6 h-6 text-amber-400 mx-auto mb-2" />
                      <p className="text-xs font-semibold text-stone-100">
                        Layout Decorado - {selectedPlan.name}
                      </p>
                      <p className="text-[11px] text-stone-400 mt-1">
                        Visualize em 360° com rotação panorâmica completa.
                      </p>
                      {onSelectPlanForTour && (
                        <button
                          onClick={() => onSelectPlanForTour(selectedPlan.virtualTourRoomIndex)}
                          className="mt-3 px-3 py-1.5 bg-amber-500 hover:bg-amber-400 text-stone-950 font-semibold text-xs rounded-lg transition-colors inline-flex items-center gap-1.5"
                        >
                          <Eye className="w-3.5 h-3.5" />
                          <span>Abrir no Tour 360°</span>
                        </button>
                      )}
                    </div>
                  </div>
                </div>
              )}

              {/* Hover indicator alert */}
              <div className="absolute bottom-3 right-3 bg-stone-900/90 px-3 py-1.5 rounded-lg border border-stone-800 text-[11px] text-stone-400 flex items-center gap-1.5">
                <Compass className="w-3.5 h-3.5 text-amber-400" />
                <span>Passe o cursor sobre os cômodos para inspecionar</span>
              </div>
            </div>

            {/* Quick action bar below blueprint */}
            <div className="mt-5 flex flex-wrap items-center justify-between gap-3 pt-4 border-t border-stone-800/80">
              <div className="flex items-center gap-2 text-xs text-stone-400">
                <Building className="w-4 h-4 text-amber-400" />
                <span>Pé-direito livre: <strong>2,70m</strong> (Duplex: <strong>4,50m</strong>)</span>
              </div>

              <div className="flex items-center gap-2">
                {onSelectPlanForTour && (
                  <button
                    onClick={() => onSelectPlanForTour(selectedPlan.virtualTourRoomIndex)}
                    className="px-3.5 py-1.5 bg-stone-900 hover:bg-stone-800 text-stone-200 text-xs font-medium rounded-lg border border-stone-700 transition-colors flex items-center gap-1.5"
                  >
                    <Eye className="w-3.5 h-3.5 text-amber-400" />
                    <span>Ver no Tour 360°</span>
                  </button>
                )}

                {onRequestCatalog && (
                  <button
                    onClick={onRequestCatalog}
                    className="px-3.5 py-1.5 bg-amber-500/10 hover:bg-amber-500/20 text-amber-300 text-xs font-semibold rounded-lg border border-amber-500/30 transition-colors flex items-center gap-1.5"
                  >
                    <Download className="w-3.5 h-3.5" />
                    <span>Baixar Book em PDF</span>
                  </button>
                )}
              </div>
            </div>

          </div>

          {/* Right Column: Room-by-room m² Breakdown & Investment Metrics (col-span-5) */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Active / Hovered Room Spotlight Card */}
            <div className="bg-stone-950 rounded-2xl border border-stone-800 p-6 shadow-xl">
              <div className="flex items-center justify-between">
                <span className="text-xs uppercase tracking-wider text-amber-400 font-semibold">
                  Detalhamento de Cômodos
                </span>
                <span className="text-xs font-mono text-stone-400">
                  {selectedPlan.rooms.length} Ambientes
                </span>
              </div>

              {/* Room items list with exact square meters */}
              <div className="mt-4 space-y-3">
                {selectedPlan.rooms.map((room, idx) => {
                  const isHovered = hoveredRoom?.name === room.name;
                  return (
                    <div
                      key={idx}
                      onMouseEnter={() => setHoveredRoom(room)}
                      onMouseLeave={() => setHoveredRoom(null)}
                      className={`p-3 rounded-xl border transition-all cursor-pointer ${
                        isHovered
                          ? 'bg-amber-500/10 border-amber-500/50 shadow-md translate-x-1'
                          : 'bg-stone-900/60 border-stone-800/80 hover:bg-stone-900'
                      }`}
                    >
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <span className={`w-1.5 h-1.5 rounded-full ${isHovered ? 'bg-amber-400' : 'bg-stone-600'}`} />
                          <span className="text-sm font-semibold text-stone-200">
                            {room.name}
                          </span>
                        </div>
                        <div className="text-right">
                          <span className="text-sm font-bold font-mono text-amber-400 tabular-nums">
                            {room.area.toFixed(1).replace('.', ',')} m²
                          </span>
                          <span className="block text-[10px] text-stone-500 font-mono">
                            {room.dimensions}
                          </span>
                        </div>
                      </div>

                      {/* Room features */}
                      <div className="mt-2.5 flex flex-wrap gap-1.5">
                        {room.features.slice(0, 2).map((feat, fIdx) => (
                          <span
                            key={fIdx}
                            className="text-[11px] text-stone-400 bg-stone-950/80 px-2 py-0.5 rounded border border-stone-800"
                          >
                            {feat}
                          </span>
                        ))}
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Total area summary footer */}
              <div className="mt-4 pt-4 border-t border-stone-800/80 grid grid-cols-2 gap-2 text-center text-xs">
                <div className="p-2.5 rounded-lg bg-stone-900/80 border border-stone-800">
                  <span className="text-stone-400 block text-[11px]">Área Privativa</span>
                  <span className="text-base font-bold font-mono text-stone-100 tabular-nums">
                    {selectedPlan.privateArea.toFixed(1).replace('.', ',')} m²
                  </span>
                </div>
                <div className="p-2.5 rounded-lg bg-stone-900/80 border border-stone-800">
                  <span className="text-stone-400 block text-[11px]">Varanda / Terraço</span>
                  <span className="text-base font-bold font-mono text-amber-400 tabular-nums">
                    {selectedPlan.balconyArea.toFixed(1).replace('.', ',')} m²
                  </span>
                </div>
              </div>
            </div>

            {/* Financial & Rental Potential Card */}
            <div className="bg-stone-950 rounded-2xl border border-stone-800 p-6 shadow-xl">
              <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-emerald-400 mb-2">
                <TrendingUp className="w-4 h-4" />
                <span>Potencial de Valorização & Retorno</span>
              </div>

              <div className="mt-3 flex items-baseline justify-between">
                <span className="text-xs text-stone-400">Valor a partir de</span>
                <span className="text-2xl font-bold text-stone-100 font-mono">
                  {new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL', maximumFractionDigits: 0 }).format(selectedPlan.priceFrom)}
                </span>
              </div>

              <div className="mt-4 space-y-2 text-xs">
                <div className="flex justify-between py-1.5 border-b border-stone-800/60">
                  <span className="text-stone-400">Projeção Airbnb (Short Stay):</span>
                  <span className="font-semibold text-emerald-400 font-mono">
                    R$ {selectedPlan.estimatedRentShortStay.min.toLocaleString('pt-BR')} a R$ {selectedPlan.estimatedRentShortStay.max.toLocaleString('pt-BR')}/mês
                  </span>
                </div>
                <div className="flex justify-between py-1.5 border-b border-stone-800/60">
                  <span className="text-stone-400">Locação Tradicional (Long Stay):</span>
                  <span className="font-semibold text-stone-200 font-mono">
                    R$ {selectedPlan.estimatedRentLongStay.toLocaleString('pt-BR')}/mês
                  </span>
                </div>
                <div className="flex justify-between py-1.5 border-b border-stone-800/60">
                  <span className="text-stone-400">Condomínio Estimado:</span>
                  <span className="font-semibold text-stone-300 font-mono">
                    R$ {selectedPlan.condoFee.toLocaleString('pt-BR')}/mês
                  </span>
                </div>
              </div>

              {/* Quick booking CTA */}
              <div className="mt-6 flex flex-col gap-2">
                <a
                  href="#tem-interesse"
                  className="w-full py-3 px-4 bg-amber-500 hover:bg-amber-400 text-stone-950 font-bold text-xs sm:text-sm rounded-xl transition-all shadow-lg hover:shadow-amber-500/25 flex items-center justify-center gap-2"
                >
                  <Sparkles className="w-4 h-4 text-stone-950" />
                  <span>Tem Interesse? Preencher Formulário Oficial</span>
                </a>

                {onScheduleVisit && (
                  <button
                    onClick={onScheduleVisit}
                    className="w-full py-2.5 px-4 bg-stone-900 hover:bg-stone-800 text-stone-200 text-xs font-semibold rounded-xl border border-stone-800 transition-colors flex items-center justify-center gap-2"
                  >
                    <span>Agendar Visita ao Modelo {selectedPlan.name}</span>
                    <ArrowRight className="w-4 h-4 text-amber-400" />
                  </button>
                )}

                {onRequestCatalog && (
                  <button
                    onClick={onRequestCatalog}
                    className="w-full py-2 px-4 bg-stone-950 hover:bg-stone-900 text-stone-400 hover:text-stone-200 text-[11px] font-medium rounded-lg transition-colors flex items-center justify-center gap-1.5"
                  >
                    <FileText className="w-3 h-3 text-amber-400" />
                    <span>Receber Tabela de Preços & Condições</span>
                  </button>
                )}
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

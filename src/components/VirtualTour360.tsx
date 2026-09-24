import React, { useState, useRef, useEffect, useCallback } from 'react';
import { 
  Maximize2, 
  Minimize2, 
  Compass, 
  RotateCw, 
  Plus, 
  Minus, 
  Eye, 
  Sparkles, 
  Layers, 
  Check, 
  ChevronRight, 
  X,
  Info
} from 'lucide-react';
import { TOUR_ROOMS, TourRoom, TourHotspot } from '../data/studiosData';

interface VirtualTour360Props {
  onScheduleVisit?: () => void;
  selectedRoomIndex?: number;
}

export const VirtualTour360: React.FC<VirtualTour360Props> = ({ 
  onScheduleVisit,
  selectedRoomIndex = 0 
}) => {
  const [activeRoomIndex, setActiveRoomIndex] = useState(selectedRoomIndex);
  const [isDragging, setIsDragging] = useState(false);
  const [rotationX, setRotationX] = useState(0); // in degrees: 0 to 360
  const [rotationY, setRotationY] = useState(0); // tilt up/down: -20 to 20
  const [zoom, setZoom] = useState(1); // 1.0 to 1.8
  const [isAutoRotate, setIsAutoRotate] = useState(true);
  const [activeHotspot, setActiveHotspot] = useState<TourHotspot | null>(null);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [showHint, setShowHint] = useState(true);

  const containerRef = useRef<HTMLDivElement>(null);
  const lastMousePos = useRef<{ x: number; y: number }>({ x: 0, y: 0 });
  const velocity = useRef<{ x: number; y: number }>({ x: 0, y: 0 });
  const animationFrameRef = useRef<number | null>(null);

  const activeRoom = TOUR_ROOMS[activeRoomIndex];

  // Sync external index change if prop changes
  useEffect(() => {
    if (selectedRoomIndex >= 0 && selectedRoomIndex < TOUR_ROOMS.length) {
      setActiveRoomIndex(selectedRoomIndex);
      setRotationX(0);
      setRotationY(0);
      setActiveHotspot(null);
    }
  }, [selectedRoomIndex]);

  // Hide hint after 6 seconds or interaction
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowHint(false);
    }, 6000);
    return () => clearTimeout(timer);
  }, []);

  // Continuous auto-rotation or inertia loop
  useEffect(() => {
    let lastTime = performance.now();

    const loop = (time: number) => {
      const delta = (time - lastTime) / 1000;
      lastTime = time;

      if (!isDragging) {
        if (isAutoRotate) {
          setRotationX((prev) => (prev + 10 * delta) % 360);
        } else if (Math.abs(velocity.current.x) > 0.1 || Math.abs(velocity.current.y) > 0.1) {
          // Inertia decay
          setRotationX((prev) => (prev + velocity.current.x * delta * 20) % 360);
          setRotationY((prev) => Math.max(-18, Math.min(18, prev + velocity.current.y * delta * 20)));
          velocity.current.x *= 0.92;
          velocity.current.y *= 0.92;
        }
      }

      animationFrameRef.current = requestAnimationFrame(loop);
    };

    animationFrameRef.current = requestAnimationFrame(loop);

    return () => {
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, [isDragging, isAutoRotate]);

  // Mouse & touch handlers
  const handlePointerDown = (clientX: number, clientY: number) => {
    setIsDragging(true);
    setIsAutoRotate(false);
    setShowHint(false);
    lastMousePos.current = { x: clientX, y: clientY };
    velocity.current = { x: 0, y: 0 };
  };

  const handlePointerMove = (clientX: number, clientY: number) => {
    if (!isDragging) return;

    const dx = clientX - lastMousePos.current.x;
    const dy = clientY - lastMousePos.current.y;

    lastMousePos.current = { x: clientX, y: clientY };

    // Record velocity for release inertia
    velocity.current = { x: -dx * 0.4, y: dy * 0.2 };

    // Invert X for natural panoramic pull
    setRotationX((prev) => {
      const next = prev - dx * 0.25;
      return next < 0 ? 360 + next : next % 360;
    });

    setRotationY((prev) => {
      const next = prev + dy * 0.15;
      return Math.max(-20, Math.min(20, next));
    });
  };

  const handlePointerUp = () => {
    setIsDragging(false);
  };

  const handleZoom = (direction: 'in' | 'out') => {
    setZoom((prev) => {
      if (direction === 'in') return Math.min(1.8, prev + 0.2);
      return Math.max(1.0, prev - 0.2);
    });
  };

  const toggleFullscreen = () => {
    if (!containerRef.current) return;
    if (!document.fullscreenElement) {
      containerRef.current.requestFullscreen().then(() => setIsFullscreen(true)).catch(() => {});
    } else {
      document.exitFullscreen().then(() => setIsFullscreen(false)).catch(() => {});
    }
  };

  // Convert rotation to panoramic background position
  const bgOffsetX = (rotationX / 360) * 100;
  const currentAngleDisplay = Math.round(rotationX);

  return (
    <section id="tour-360" className="relative py-16 bg-stone-950 text-stone-100 border-b border-stone-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
          <div>
            <div className="flex items-center gap-2 text-xs font-medium tracking-wider text-amber-400 uppercase">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Experiência Imersiva Interativa</span>
              <span aria-hidden="true" className="text-stone-600">·</span>
              <span className="text-stone-400">Giro 360° em Alta Definição</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-stone-100 mt-2">
              Tour Virtual pelo Apartamento Modelo
            </h2>
            <p className="text-stone-400 text-sm sm:text-base mt-2 max-w-2xl">
              Navegue livremente em 360 graus por cada detalhe da marcenaria inteligente, iluminação cênica e bancadas nobres antes mesmo da entrega.
            </p>
          </div>

          {/* Room switcher buttons */}
          <div className="flex flex-wrap items-center gap-2 bg-stone-900/90 p-1.5 rounded-xl border border-stone-800">
            {TOUR_ROOMS.map((room, idx) => (
              <button
                key={room.id}
                onClick={() => {
                  setActiveRoomIndex(idx);
                  setActiveHotspot(null);
                  setRotationX(0);
                }}
                className={`px-3 py-1.5 text-xs font-medium rounded-lg transition-all flex items-center gap-1.5 ${
                  activeRoomIndex === idx
                    ? 'bg-amber-500/20 text-amber-300 border border-amber-500/40 shadow-sm'
                    : 'text-stone-400 hover:text-stone-200 hover:bg-stone-800/60'
                }`}
              >
                <span className="w-1.5 h-1.5 rounded-full bg-amber-400" />
                <span>{room.name.split(' - ')[0]}</span>
              </button>
            ))}
          </div>
        </div>

        {/* 360 Interactive Viewer Canvas Container */}
        <div 
          ref={containerRef}
          className={`relative w-full rounded-2xl overflow-hidden border border-stone-800 bg-stone-900 select-none shadow-2xl transition-all duration-300 ${
            isFullscreen ? 'fixed inset-0 z-50 rounded-none h-screen' : 'h-[540px] sm:h-[620px]'
          }`}
          onMouseDown={(e) => handlePointerDown(e.clientX, e.clientY)}
          onMouseMove={(e) => handlePointerMove(e.clientX, e.clientY)}
          onMouseUp={handlePointerUp}
          onMouseLeave={handlePointerUp}
          onTouchStart={(e) => handlePointerDown(e.touches[0].clientX, e.touches[0].clientY)}
          onTouchMove={(e) => handlePointerMove(e.touches[0].clientX, e.touches[0].clientY)}
          onTouchEnd={handlePointerUp}
        >
          {/* Panoramic Image Wrapper with Drag Transform */}
          <div
            className={`w-full h-full relative overflow-hidden ${isDragging ? 'cursor-grabbing' : 'cursor-grab'}`}
            style={{
              backgroundImage: `url(${activeRoom.image})`,
              backgroundSize: `${zoom * 260}% ${zoom * 115}%`,
              backgroundPosition: `${bgOffsetX}% ${50 + rotationY}%`,
              backgroundRepeat: 'repeat-x',
              transition: isDragging ? 'none' : 'background-position 0.15s ease-out, background-size 0.25s ease',
            }}
          >
            {/* Luminous, light-preserving edge shading */}
            <div className="absolute inset-0 pointer-events-none bg-gradient-to-t from-stone-950/25 via-transparent to-stone-950/15" />

            {/* Interactive Hotspots overlaid on the current panorama view */}
            {activeRoom.hotspots.map((hs) => {
              // Calculate screen X relative to current 360 rotation
              // When panorama rotates, hotspots shift horizontally
              const relativeX = (hs.xPercent - (rotationX / 360) * 100);
              const normalizedX = ((relativeX % 100) + 100) % 100;
              const isVisibleInView = normalizedX > 8 && normalizedX < 92;

              if (!isVisibleInView) return null;

              const isSelected = activeHotspot?.id === hs.id;

              return (
                <div
                  key={hs.id}
                  className="absolute transform -translate-x-1/2 -translate-y-1/2 z-20 cursor-pointer group"
                  style={{
                    left: `${normalizedX}%`,
                    top: `${Math.max(15, Math.min(85, hs.yPercent - rotationY * 0.7))}%`,
                    transform: `scale(${zoom > 1.2 ? 1.15 : 1.0})`,
                  }}
                  onClick={(e) => {
                    e.stopPropagation();
                    setActiveHotspot(isSelected ? null : hs);
                    setIsAutoRotate(false);
                  }}
                >
                  {/* Glowing Radar Pulse */}
                  <span className="absolute -inset-2 rounded-full bg-amber-400/30 animate-ping duration-1000" />
                  
                  {/* Core Hotspot Button */}
                  <div className={`relative flex items-center justify-center w-8 h-8 rounded-full border transition-all duration-300 ${
                    isSelected 
                      ? 'bg-amber-400 text-stone-950 border-amber-300 ring-4 ring-amber-400/30 scale-110' 
                      : 'bg-stone-900/90 text-amber-300 border-amber-400/70 hover:scale-110 shadow-lg'
                  }`}>
                    <Info className="w-4 h-4" />
                  </div>

                  {/* Hover tooltip label */}
                  <div className={`hidden group-hover:block absolute left-1/2 bottom-full mb-2 -translate-x-1/2 whitespace-nowrap px-2.5 py-1 bg-stone-900/95 text-stone-200 text-xs rounded-md border border-stone-700 shadow-xl pointer-events-none z-30 transition-opacity`}>
                    {hs.title}
                  </div>
                </div>
              );
            })}
          </div>

          {/* Active Hotspot Modal Detail Card */}
          {activeHotspot && (
            <div 
              className="absolute left-4 sm:left-8 bottom-20 z-30 max-w-sm sm:max-w-md bg-stone-900/95 backdrop-blur-md p-5 rounded-xl border border-amber-500/40 shadow-2xl animate-in fade-in slide-in-from-bottom-3 duration-200"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex items-start justify-between gap-3">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-amber-400 animate-pulse" />
                  <span className="text-xs uppercase tracking-wider text-amber-400 font-semibold">Detalhe Técnico & Acabamento</span>
                </div>
                <button
                  onClick={() => setActiveHotspot(null)}
                  className="text-stone-400 hover:text-stone-100 p-1 rounded-md hover:bg-stone-800"
                  aria-label="Fechar detalhe"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>

              <h3 className="text-base sm:text-lg font-bold text-stone-100 mt-2">
                {activeHotspot.title}
              </h3>

              <p className="text-stone-300 text-xs sm:text-sm mt-1.5 leading-relaxed">
                {activeHotspot.description}
              </p>

              <div className="mt-3 pt-3 border-t border-stone-800 flex items-center justify-between text-xs">
                <span className="text-stone-400 font-mono">{activeHotspot.spec}</span>
                <span className="text-amber-400 font-medium flex items-center gap-1">
                  Padrão Lumina <Check className="w-3.5 h-3.5" />
                </span>
              </div>
            </div>
          )}

          {/* Floating Instructions / Hint on first load */}
          {showHint && (
            <div className="absolute top-6 left-1/2 -translate-x-1/2 z-20 bg-stone-950/80 backdrop-blur-md px-4 py-2 rounded-full border border-stone-700/80 text-xs text-stone-300 flex items-center gap-2 pointer-events-none shadow-xl">
              <Eye className="w-4 h-4 text-amber-400 animate-bounce" />
              <span>Arraste para girar em 360° · Clique nos pontos para inspecionar</span>
            </div>
          )}

          {/* Top Control Overlay: Room Info & Angle Compass */}
          <div className="absolute top-4 left-4 right-4 z-20 flex items-center justify-between pointer-events-none">
            <div className="bg-stone-900/85 backdrop-blur-md px-3.5 py-2 rounded-xl border border-stone-800 pointer-events-auto">
              <div className="flex items-center gap-2 text-xs">
                <span className="text-stone-400">{activeRoom.category}</span>
                <span className="text-stone-600">·</span>
                <span className="font-semibold text-stone-100">{activeRoom.name}</span>
              </div>
            </div>

            {/* Compass degree indicator */}
            <div className="bg-stone-900/85 backdrop-blur-md px-3 py-1.5 rounded-xl border border-stone-800 flex items-center gap-2 text-xs font-mono tabular-nums text-stone-300 pointer-events-auto">
              <Compass 
                className="w-4 h-4 text-amber-400 transition-transform" 
                style={{ transform: `rotate(${rotationX}deg)` }}
              />
              <span>{currentAngleDisplay}° Azimute</span>
            </div>
          </div>

          {/* Bottom Control Bar: Zoom, Auto-rotate, Fullscreen & CTA */}
          <div className="absolute bottom-4 left-4 right-4 z-20 flex items-center justify-between gap-2">
            
            {/* Left controls: Auto rotate & Zoom */}
            <div className="flex items-center gap-1 bg-stone-900/90 backdrop-blur-md p-1 rounded-xl border border-stone-800 shadow-lg">
              <button
                onClick={() => setIsAutoRotate(!isAutoRotate)}
                className={`p-2 text-xs font-medium rounded-lg transition-colors flex items-center gap-1.5 ${
                  isAutoRotate 
                    ? 'bg-amber-500/20 text-amber-300 border border-amber-500/40' 
                    : 'text-stone-400 hover:text-stone-100 hover:bg-stone-800'
                }`}
                title={isAutoRotate ? 'Pausar rotação automática' : 'Giro contínuo 360°'}
              >
                <RotateCw className={`w-4 h-4 ${isAutoRotate ? 'animate-spin' : ''}`} style={{ animationDuration: '6s' }} />
                <span className="hidden sm:inline text-xs">{isAutoRotate ? 'Auto-Giro Ativo' : 'Giro Pausado'}</span>
              </button>

              <div className="w-px h-5 bg-stone-800 mx-1" />

              <button
                onClick={() => handleZoom('out')}
                disabled={zoom <= 1.0}
                className="p-2 text-stone-400 hover:text-stone-100 disabled:opacity-30 rounded-lg hover:bg-stone-800"
                title="Diminuir Zoom"
              >
                <Minus className="w-4 h-4" />
              </button>

              <span className="text-[11px] font-mono tabular-nums text-stone-400 px-1">
                {Math.round(zoom * 100)}%
              </span>

              <button
                onClick={() => handleZoom('in')}
                disabled={zoom >= 1.8}
                className="p-2 text-stone-400 hover:text-stone-100 disabled:opacity-30 rounded-lg hover:bg-stone-800"
                title="Aumentar Zoom"
              >
                <Plus className="w-4 h-4" />
              </button>
            </div>

            {/* Right controls: Schedule visit & Fullscreen */}
            <div className="flex items-center gap-2">
              {onScheduleVisit && (
                <button
                  onClick={onScheduleVisit}
                  className="px-4 py-2 bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-stone-950 font-semibold text-xs rounded-xl shadow-lg hover:shadow-amber-500/20 transition-all flex items-center gap-1.5 whitespace-nowrap"
                >
                  <span>Agendar Visita Presencial</span>
                  <ChevronRight className="w-3.5 h-3.5" />
                </button>
              )}

              <button
                onClick={toggleFullscreen}
                className="p-2.5 bg-stone-900/90 backdrop-blur-md hover:bg-stone-800 text-stone-300 hover:text-stone-100 rounded-xl border border-stone-800 shadow-lg transition-colors"
                title={isFullscreen ? 'Sair da tela cheia' : 'Ver em tela cheia'}
              >
                {isFullscreen ? <Minimize2 className="w-4 h-4" /> : <Maximize2 className="w-4 h-4" />}
              </button>
            </div>

          </div>

        </div>

        {/* Room description and highlights footer */}
        <div className="mt-4 p-4 rounded-xl bg-stone-900/60 border border-stone-800/80 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div className="flex items-start gap-3">
            <div className="p-2 rounded-lg bg-amber-500/10 text-amber-400 shrink-0 mt-0.5">
              <Layers className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-sm font-semibold text-stone-200">
                {activeRoom.name}
              </h4>
              <p className="text-xs text-stone-400 mt-0.5">
                {activeRoom.description}
              </p>
            </div>
          </div>

          <div className="flex items-center gap-4 text-xs text-stone-400 shrink-0">
            <div className="flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-emerald-400" />
              <span>Tour em Alta Resolução</span>
            </div>
            <div className="flex items-center gap-1.5 font-mono">
              <span className="text-amber-400 font-bold">{activeRoom.hotspots.length}</span>
              <span>pontos de detalhe</span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

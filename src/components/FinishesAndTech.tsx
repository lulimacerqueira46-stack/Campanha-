import React from 'react';
import { 
  Sparkles, 
  Cpu, 
  VolumeX, 
  Droplet, 
  Layers, 
  Shield, 
  Sliders, 
  CheckCircle2 
} from 'lucide-react';

export const FinishesAndTech: React.FC = () => {
  const specs = [
    {
      title: 'Atenuação Acústica NBR 15.575',
      desc: 'Manta de polietileno expandido sob o contrapiso de todas as unidades, garantindo isolamento de impacto entre lajes e descanso sem ruídos.',
      badge: 'Silêncio Garantido'
    },
    {
      title: 'Bancadas em Quartzo & Revestimentos Nobres',
      desc: 'Cozinha e banheiro entregues com bancada usinada em quartzo branco e pisos em porcelanato retificado 84x84cm de alta durabilidade.',
      badge: 'Durabilidade Superior'
    },
    {
      title: 'Automação & Fechadura Biométrica',
      desc: 'Acesso sem chaves por biometria e senha, com infraestrutura pronta para controle de climatização e iluminação via smartphone.',
      badge: 'Smart Living'
    },
    {
      title: 'Aquecimento Central de Água',
      desc: 'Água quente em todas as torneiras e chuveiros por sistema central solar a gás, sem necessidade de aquecedores individuais ocupando espaço.',
      badge: 'Economia & Espaço'
    }
  ];

  return (
    <section id="acabamentos" className="py-20 bg-stone-950 text-stone-100 border-b border-stone-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-14">
          <div className="flex items-center gap-2 text-xs font-medium tracking-wider text-amber-400 uppercase mb-2">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Padrão Construtivo & Tecnologia</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-stone-100">
            Acabamentos Projetados para Durar e Encantar
          </h2>
          <p className="text-stone-400 text-sm sm:text-base mt-3 leading-relaxed">
            Cada material foi selecionado com rigor arquitetônico para proporcionar sofisticação visual, resistência ao uso contínuo e facilidade de manutenção.
          </p>
        </div>

        {/* Bento Grid layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          
          {/* Bento Card 1: Cozinha & Bancada (col-span-7) */}
          <div className="lg:col-span-7 bg-stone-900/60 rounded-2xl border border-stone-800 p-6 sm:p-8 flex flex-col justify-between overflow-hidden relative group">
            <div className="relative z-10">
              <div className="flex items-center gap-2 text-xs font-semibold text-amber-400 uppercase">
                <span>Cozinha & Gourmet Integrado</span>
              </div>
              <h3 className="text-2xl font-bold text-stone-100 mt-2">
                Bancadas em Quartzo & Metais Acetinados
              </h3>
              <p className="text-stone-300 text-sm mt-2 max-w-xl leading-relaxed">
                Superfície contínua de alta densidade sem juntas visíveis, cuba em inox embutida e torneira gourmet flexível com controle monocomando.
              </p>
            </div>

            <div className="mt-6 rounded-xl overflow-hidden aspect-[16/9] border border-stone-800 relative">
              <img
                src="/src/assets/images/studio_kitchenette_modern_1790208584664.jpg"
                alt="Bancada da cozinha modelo studio"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-stone-950/70 via-transparent to-transparent" />
              <div className="absolute bottom-3 left-4 text-xs font-mono text-stone-300">
                Padrão entregue com cooktop e cuba profunda
              </div>
            </div>
          </div>

          {/* Bento Card 2: Varanda & Conforto Térmico (col-span-5) */}
          <div className="lg:col-span-5 bg-stone-900/60 rounded-2xl border border-stone-800 p-6 sm:p-8 flex flex-col justify-between overflow-hidden relative group">
            <div className="relative z-10">
              <div className="flex items-center gap-2 text-xs font-semibold text-amber-400 uppercase">
                <span>Espaço Aberto & Bem-estar</span>
              </div>
              <h3 className="text-2xl font-bold text-stone-100 mt-2">
                Varanda Nivelada com a Sala
              </h3>
              <p className="text-stone-300 text-sm mt-2 leading-relaxed">
                Piso contínuo sem degraus entre o estar e a varanda, permitindo amplitude visual e integração completa quando as portas são recolhidas.
              </p>
            </div>

            <div className="mt-6 rounded-xl overflow-hidden aspect-[4/3] border border-stone-800 relative">
              <img
                src="/src/assets/images/studio_terrace_view_1790208594420.jpg"
                alt="Varanda gourmet integrada com deck"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-stone-950/70 via-transparent to-transparent" />
              <div className="absolute bottom-3 left-4 text-xs font-mono text-stone-300">
                Guarda-corpo 100% envidraçado
              </div>
            </div>
          </div>

        </div>

        {/* Technical Specs List */}
        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {specs.map((item, idx) => (
            <div
              key={idx}
              className="bg-stone-900/40 p-5 rounded-xl border border-stone-800/80 hover:border-amber-500/40 transition-colors"
            >
              <div className="text-xs font-mono font-medium text-amber-400 mb-1.5">
                {item.badge}
              </div>
              <h4 className="text-sm font-semibold text-stone-100">
                {item.title}
              </h4>
              <p className="text-xs text-stone-400 mt-2 leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

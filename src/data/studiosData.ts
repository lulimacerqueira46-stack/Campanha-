export interface RoomDetail {
  name: string;
  area: number; // in m²
  dimensions: string; // e.g. "3.20m x 4.30m"
  features: string[];
}

export interface StudioPlan {
  id: string;
  name: string;
  subtitle: string;
  totalArea: number; // in m²
  privateArea: number;
  balconyArea: number;
  dimensions: string;
  priceFrom: number; // in BRL
  condoFee: number;
  estimatedRentShortStay: { min: number; max: number };
  estimatedRentLongStay: number;
  idealFor: string;
  highlights: string[];
  rooms: RoomDetail[];
  blueprintSvgType: 'smart' | 'executive' | 'terrace' | 'duplex';
  virtualTourRoomIndex: number;
}

export interface TourHotspot {
  id: string;
  xPercent: number; // 0 to 100 on the panorama width
  yPercent: number; // 0 to 100 on height
  title: string;
  description: string;
  spec: string;
}

export interface TourRoom {
  id: string;
  name: string;
  category: 'Apartamento' | 'Área Comum' | 'Fachada';
  image: string;
  description: string;
  degreeAngle: number;
  hotspots: TourHotspot[];
}

export const TOUR_ROOMS: TourRoom[] = [
  {
    id: 'studio-decorado',
    name: 'Studio Modelo - Living & Suíte',
    category: 'Apartamento',
    image: '/src/assets/images/studio_interior_bright_1790209567824.jpg',
    description: 'Ambiente multifuncional decorado banhado em luz natural matinal com cama queen integrada, marcenaria sob medida em carvalho nobre e janela piso-teto.',
    degreeAngle: 360,
    hotspots: [
      {
        id: 'hs-bed',
        xPercent: 48,
        yPercent: 54,
        title: 'Cama Queen com Cabeceira Ripada',
        description: 'Estrutura com baú hidráulico de grande capacidade para malas e roupas de cama, otimizando 100% do espaço.',
        spec: '1,58m x 1,98m · Painel acústico ripado'
      },
      {
        id: 'hs-window',
        xPercent: 78,
        yPercent: 44,
        title: 'Esquadrias Acústicas Piso-Teto',
        description: 'Vidros laminados acústicos com filtro solar que atenuam até 32dB dos ruídos urbanos e reduzem calor em 45%.',
        spec: 'Atenuação acústica NBR 15.575'
      },
      {
        id: 'hs-desk',
        xPercent: 22,
        yPercent: 52,
        title: 'Bancada Home Office & Living',
        description: 'Mobiliário multifuncional com pontos de rede cabeada Cat6, tomadas USB-C e iluminação direta para trabalho.',
        spec: 'Tampo em madeira maciça com passa-fios'
      },
      {
        id: 'hs-automation',
        xPercent: 36,
        yPercent: 40,
        title: 'Automação Iluminação & Clima',
        description: 'Cenas pré-programadas para leitura, relaxamento e trabalho via smartphone ou comando de voz Alexa/Siri.',
        spec: 'Interruptores touch dimerizáveis zigbee'
      }
    ]
  },
  {
    id: 'cozinha-gourmet',
    name: 'Cozinha & Bancada Waterfall',
    category: 'Apartamento',
    image: '/src/assets/images/studio_kitchenette_modern_1790208584664.jpg',
    description: 'Cozinha compacta de alta performance com bancada em quartzo branco puro, cooktop elétrico por indução e armários com amortecimento suave.',
    degreeAngle: 300,
    hotspots: [
      {
        id: 'hs-quartz',
        xPercent: 50,
        yPercent: 58,
        title: 'Bancada Waterfall em Quartzo',
        description: 'Material nobre não poroso, antibacteriano e ultra resistente a manchas e riscos térmicos.',
        spec: 'Espessura 20mm com acabamento meia-esquadria'
      },
      {
        id: 'hs-cooktop',
        xPercent: 30,
        yPercent: 48,
        title: 'Cooktop de Indução Embutido',
        description: 'Cozimento ultrarrápido com máxima segurança, trava para crianças e desligamento automático timer.',
        spec: '2 zonas rápidas · 3000W'
      },
      {
        id: 'hs-cabinetry',
        xPercent: 68,
        yPercent: 35,
        title: 'Marcenaria Anti-impacto',
        description: 'Dobradiças e corrediças austríacas com amortecimento Blum, puxadores em perfil cava preto fosco.',
        spec: 'MDF naval resistente à umidade'
      }
    ]
  },
  {
    id: 'varanda-terrace',
    name: 'Varanda Integrada & Deck Sunset',
    category: 'Apartamento',
    image: '/src/assets/images/studio_terrace_view_1790208594420.jpg',
    description: 'Nivelamento total do piso com a sala, guarda-corpo 100% envidraçado e espaço para lounge privativo com vista panorâmica.',
    degreeAngle: 320,
    hotspots: [
      {
        id: 'hs-deck',
        xPercent: 52,
        yPercent: 68,
        title: 'Deck em Madeira Teca Sustentável',
        description: 'Tratamento hidrorrepelente de fábrica com drenagem oculta e toque atérmico descalço.',
        spec: 'Madeira certificada FSC'
      },
      {
        id: 'hs-rail',
        xPercent: 70,
        yPercent: 48,
        title: 'Guarda-corpo Panorâmico sem Colunas',
        description: 'Vidro temperado laminado extra-clear de 16mm ancorado por perfil inferior embutido no piso.',
        spec: 'Carga de teste 2,5kN/m NBR 14.718'
      },
      {
        id: 'hs-grill',
        xPercent: 28,
        yPercent: 58,
        title: 'Ponto para Churrasqueira Ecológica',
        description: 'Tomada dedicada 20A e tubulação de exaustão para churrasqueira elétrica ou a carvão sem fumaça.',
        spec: 'Ponto elétrico 220V / 20A dedicado'
      }
    ]
  },
  {
    id: 'rooftop-pool',
    name: 'Rooftop Sky Pool & Solarium',
    category: 'Área Comum',
    image: '/src/assets/images/rooftop_pool_lounge_1790208606995.jpg',
    description: 'Lazer panorâmico no topo do edifício com piscina aquecida de borda infinita, lounge com fire pit e solarium com espreguiçadeiras anatômicas.',
    degreeAngle: 360,
    hotspots: [
      {
        id: 'hs-pool',
        xPercent: 50,
        yPercent: 52,
        title: 'Piscina com Borda Infinita',
        description: 'Espelho d’água contínuo que se funde com a linha do horizonte da cidade, com iluminação em fibra ótica.',
        spec: 'Comprimento 18m · Climatizada o ano inteiro'
      },
      {
        id: 'hs-firepit',
        xPercent: 82,
        yPercent: 58,
        title: 'Lounge com Lareira Ecológica',
        description: 'Área de convivência com lareira embutida a bioetanol, perfeita para encontros noturnos e contemplação.',
        spec: 'Capacidade 12 pessoas · Assentos estofados Sunbrella'
      }
    ]
  },
  {
    id: 'fachada-noturna',
    name: 'Fachada & Arquitetura Diurna',
    category: 'Fachada',
    image: '/src/assets/images/studio_facade_bright_1790209555863.jpg',
    description: 'Arquitetura contemporânea assinada com fachada em travertino claro, brises verticais em alumínio amadeirado e amplas varandas envidraçadas sob a luz natural.',
    degreeAngle: 300,
    hotspots: [
      {
        id: 'hs-facade-brise',
        xPercent: 44,
        yPercent: 42,
        title: 'Brises Móveis Bioclimáticos',
        description: 'Controle dinâmico da insolação nas fachadas leste e oeste, diminuindo o consumo de ar-condicionado em até 30%.',
        spec: 'Alumínio de alta durabilidade com textura amadeirada'
      },
      {
        id: 'hs-lobby',
        xPercent: 48,
        yPercent: 78,
        title: 'Eclusa Segura com Biometria Facial',
        description: 'Reconhecimento facial com inteligência artificial para moradores e chave virtual com QR code temporário para visitantes.',
        spec: 'Fechadura eletromagnética 500kgf'
      }
    ]
  }
];

export const STUDIO_PLANS: StudioPlan[] = [
  {
    id: 'smart-24',
    name: 'Studio Smart 24',
    subtitle: 'Eficiência milimétrica & campeão em retorno de locação',
    totalArea: 24.5,
    privateArea: 21.5,
    balconyArea: 3.0,
    dimensions: '3,80m x 6,45m',
    priceFrom: 289000,
    condoFee: 320,
    estimatedRentShortStay: { min: 3800, max: 4600 },
    estimatedRentLongStay: 2450,
    idealFor: 'Investidores com foco em Airbnb/Short Stay e jovens profissionais que priorizam localização e mobilidade.',
    highlights: [
      'Ambiente único otimizado com integração cama, estar e cozinha',
      'Janela com peitoril baixo e atenuação acústica NBR',
      'Banheiro com iluminação zenital indireta e ventilação natural',
      'Ponto elétrico para ar-condicionado inverter já tubulado',
      'Fechadura digital com senha e biometria'
    ],
    rooms: [
      {
        name: 'Dormitório & Living Integrado',
        area: 13.8,
        dimensions: '3,80m x 3,63m',
        features: ['Espaço para Cama Queen (1,58m)', 'Armário embutido 3 portas', 'Ponto para Smart TV 55"', 'Mesa retrátil 2 lugares']
      },
      {
        name: 'Cozinha Linear & Área Técnica',
        area: 4.2,
        dimensions: '1,60m x 2,62m',
        features: ['Bancada em granito São Gabriel', 'Espaço para cooktop 2 bocas', 'Nicho para micro-ondas e frigobar alto', 'Água quente na torneira']
      },
      {
        name: 'Banheiro Social Completo',
        area: 3.5,
        dimensions: '1,45m x 2,41m',
        features: ['Bancada em mármore sintético', 'Box até o teto preparado', 'Bacia com duplo fluxo ecológico', 'Nicho embutido para shampoos']
      },
      {
        name: 'Varanda / Janelão Acústico',
        area: 3.0,
        dimensions: '1,00m x 3,00m',
        features: ['Vidro duplo laminado acústico', 'Guarda-corpo de segurança', 'Espaço para poltrona de leitura']
      }
    ],
    blueprintSvgType: 'smart',
    virtualTourRoomIndex: 0
  },
  {
    id: 'executive-32',
    name: 'Studio Executive 32',
    subtitle: 'Conforto estendido para moradia com home office e closet planejado',
    totalArea: 32.0,
    privateArea: 27.5,
    balconyArea: 4.5,
    dimensions: '4,20m x 7,62m',
    priceFrom: 375000,
    condoFee: 390,
    estimatedRentShortStay: { min: 4900, max: 5900 },
    estimatedRentLongStay: 3300,
    idealFor: 'Moradia definitiva para solteiros ou casais que trabalham em modelo híbrido e valorizam ergonomia.',
    highlights: [
      'Divisória móvel ou painel ripado entre o dormitório e a área social',
      'Bancada gourmet tipo península para 4 lugares',
      'Estação dedicada de Home Office com luz natural',
      'Varanda espaçosa com integração nivelada',
      'Infraestrutura para máquina lava e seca sob a bancada'
    ],
    rooms: [
      {
        name: 'Living & Estação Home Office',
        area: 12.5,
        dimensions: '4,20m x 2,98m',
        features: ['Mesa de trabalho ergonômica com tomada USB-C', 'Sofá de 3 lugares', 'Painel de correr deslizante', 'Iluminação direta e difusa']
      },
      {
        name: 'Suíte / Dormitório Privativo',
        area: 9.8,
        dimensions: '3,10m x 3,16m',
        features: ['Cama King ou Queen com mesas laterais', 'Armário planejado de 4 portas com espelho', 'Circulação fluida nos dois lados da cama']
      },
      {
        name: 'Cozinha Gourmet Península',
        area: 4.8,
        dimensions: '2,20m x 2,18m',
        features: ['Ilha com banquetas para refeições', 'Espaço para geladeira duplex', 'Ponto para lava-louças compacta', 'Torneira gourmet flexível']
      },
      {
        name: 'Varanda Integrada Nivelada',
        area: 4.5,
        dimensions: '1,40m x 3,21m',
        features: ['Piso contínuo sem ressalto', 'Ponto elétrico para grill', 'Área de descompressão verde']
      }
    ],
    blueprintSvgType: 'executive',
    virtualTourRoomIndex: 1
  },
  {
    id: 'terrace-42',
    name: 'Studio Terrace & Garden 42',
    subtitle: 'Terraço privativo ao ar livre com deck e lounge sob o céu aberto',
    totalArea: 42.5,
    privateArea: 31.0,
    balconyArea: 11.5,
    dimensions: '5,10m x 8,33m',
    priceFrom: 498000,
    condoFee: 460,
    estimatedRentShortStay: { min: 6400, max: 7600 },
    estimatedRentLongStay: 4200,
    idealFor: 'Quem busca a sensação de casa com quintal privativo, pets e reuniões ao ar livre com vista para o pôr do sol.',
    highlights: [
      'Terraço aberto de 11,5 m² com deck de madeira e floreiras',
      'Ponto hidráulico e elétrico para jacuzzi ou SPA privativo',
      'Portas de correr panorâmicas com abertura total dos vãos',
      'Cozinha com balcão bar e integração com o deck externo',
      'Unidade exclusiva localizada em pavimentos especiais'
    ],
    rooms: [
      {
        name: 'Terraço Outdoor Privativo',
        area: 11.5,
        dimensions: '3,60m x 3,20m',
        features: ['Deck de teca com ralo oculto', 'Espaço para espreguiçadeira e mesa bistro', 'Ponto para ducha e paisagismo', 'Tomadas externas com tampa IP66']
      },
      {
        name: 'Suíte Living Integrada',
        area: 18.2,
        dimensions: '4,50m x 4,04m',
        features: ['Amplo espaço para cama super king', 'Living com poltrona de design', 'Amplo armário com closet aberto', 'Piso porcelanato 84x84']
      },
      {
        name: 'Cozinha & Espaço Café Bar',
        area: 5.6,
        dimensions: '2,60m x 2,15m',
        features: ['Bancada em L com ilha funcional', 'Coifa de teto instalável', 'Armários aéreos com amortecedor a gás']
      },
      {
        name: 'Banheiro Spa Master',
        area: 4.2,
        dimensions: '1,80m x 2,33m',
        features: ['Chuveiro de teto com vazão pressurizada', 'Cuba dupla ou bancada alongada', 'Paredes revestidas até o teto']
      },
      {
        name: 'Hall & Despensa Oculta',
        area: 3.0,
        dimensions: '1,50m x 2,00m',
        features: ['Sapateira vertical', 'Espelho de corpo inteiro', 'Quadro de automação de fácil acesso']
      }
    ],
    blueprintSvgType: 'terrace',
    virtualTourRoomIndex: 2
  },
  {
    id: 'duplex-54',
    name: 'Studio Duplex Loft 54',
    subtitle: 'Pé-direito duplo de 4,5m com mezanino íntimo e amplitude monumental',
    totalArea: 54.0,
    privateArea: 48.0,
    balconyArea: 6.0,
    dimensions: '4,80m x 7,10m (2 pisos)',
    priceFrom: 640000,
    condoFee: 580,
    estimatedRentShortStay: { min: 8500, max: 10500 },
    estimatedRentLongStay: 5600,
    idealFor: 'Público que busca sofisticação arquitetônica, pé-direito imponente e divisão clara entre recepção e dormitório.',
    highlights: [
      'Pé-direito monumental de 4,50 metros com fachada envidraçada',
      'Mezanino metálico com piso acústico para o dormitório',
      'Lavabo no pavimento térreo + suíte completa no mezanino',
      'Escada escultural flutuante em aço corten e madeira',
      'Varanda dupla com vista em dobro'
    ],
    rooms: [
      {
        name: 'Living com Pé-Direito Duplo (Térreo)',
        area: 21.0,
        dimensions: '4,80m x 4,37m',
        features: ['Paredes de vidro de 4,5m de altura', 'Espaço para adega vertical', 'Lareira ecológica suspensa opcional']
      },
      {
        name: 'Suíte Master no Mezanino (Superior)',
        area: 18.5,
        dimensions: '4,80m x 3,85m',
        features: ['Guarda-corpo em vidro com vista para o living', 'Closet walk-in planejado', 'Quarto isolado acusticamente']
      },
      {
        name: 'Cozinha Gourmet Aberta (Térreo)',
        area: 5.5,
        dimensions: '2,50m x 2,20m',
        features: ['Ilha central com bancada em Dekton', 'Espaço para torre quente (forno + micro)']
      },
      {
        name: 'Banheiro Master Superior + Lavabo Térreo',
        area: 5.0,
        dimensions: 'Múltiplos ambientes',
        features: ['Banho da suíte com 3,6m²', 'Lavabo social com 1,4m² no térreo para visitantes']
      },
      {
        name: 'Varanda Dupla Envidraçada',
        area: 4.0,
        dimensions: '1,20m x 3,33m',
        features: ['Fechamento em cortina de vidro retrátil', 'Ponto elétrico e luminária de design']
      }
    ],
    blueprintSvgType: 'duplex',
    virtualTourRoomIndex: 3
  }
];

export const BUILDING_SPECS = {
  region: 'Região Tatuapé · Mooca · Vila Ema - São Paulo / SP',
  address: 'Eixo Estratégico Tatuapé · Mooca · Vila Ema, São Paulo / SP',
  floors: 24,
  unitsTotal: 120,
  parkingSpaces: 'Vagas rotativas com manobrista e estações elétricas Wallbox',
  deliveryDate: 'Dezembro / 2026',
  architect: 'Studio Jacobsen & Arquitetos Associados',
  landscaping: 'Burle Marx Paisagismo & Jardins Urbanos',
  locationHighlights: [
    {
      neighborhood: 'Tatuapé & Anália Franco',
      distance: 'A poucos minutos',
      points: [
        'Shopping Anália Franco & Shopping Boulevard Tatuapé',
        'Hospital São Luiz Anália Franco',
        'Parque CERET & polo gastronômico da Rua Itapura',
        'Estação Tatuapé do Metrô (Linha 3-Vermelha e CPTM)'
      ]
    },
    {
      neighborhood: 'Mooca',
      distance: 'Acesso direto',
      points: [
        'Av. Paes de Barros & Rua da Mooca',
        'Mooca Plaza Shopping',
        'Tradição gastronômica, pizzarias e bistrôs premiados',
        'Hospital e Maternidade São Cristóvão & Villa-Lobos'
      ]
    },
    {
      neighborhood: 'Vila Ema & São Lucas',
      distance: 'Conexão rápida',
      points: [
        'Estação Vila Ema / São Lucas do Monotrilho (Linha 15-Prata integrada à Linha 2-Verde Paulista)',
        'Eixo comercial dinâmico da Av. Vila Ema',
        'Fácil acesso à Av. Professor Luiz Ignácio Anhaia Mello e Av. Salim Farah Maluf',
        'Ciclovia e mobilidade urbana ágil'
      ]
    }
  ],
  amenities: [
    { title: 'Rooftop Infinity Pool', desc: 'Piscina de 18m aquecida no 24º andar com vista 360°' },
    { title: 'Coworking 24h & Meeting Rooms', desc: 'Estações individuais, fibra óptica dedicada e salas de reunião acústicas' },
    { title: 'Academia Life Fitness', desc: 'Aparelhos de última geração, área funcional e esteiras conectadas' },
    { title: 'Lavanderia OMO & Lounge', desc: 'Máquinas inteligentes dosadas automaticamente com app de monitoramento' },
    { title: 'Delivery Room & Smart Lockers', desc: 'Espaço refrigerado para compras de mercado e armários digitais' },
    { title: 'Bicicletário & Oficina', desc: 'Vagas com recarga para e-bikes e ferramentas de manutenção rápida' }
  ]
};

export interface RegionFormItem {
  id: 'mooca' | 'tatuape' | 'vila-ema';
  name: string;
  tagline: string;
  locationDetails: string;
  highlights: string[];
  url: string;
  embedUrl: string;
  badge: string;
}

export const REGION_FORMS: RegionFormItem[] = [
  {
    id: 'mooca',
    name: 'Mooca',
    tagline: 'Tradição, Gastronomia & Alta Procura Residencial',
    locationDetails: 'Próximo à Av. Paes de Barros, Rua da Mooca, Mooca Plaza Shopping e hospitais Villa-Lobos e São Cristóvão.',
    highlights: [
      'Bairro consagrado com altíssima demanda de aluguel por famílias e profissionais',
      'Polo gastronômico premiado de São Paulo e proximidade de universidades (São Judas, Anhembi Morumbi)',
      'Mobilidade ágil com conexão expressa ao centro e à Radial Leste'
    ],
    url: 'https://docs.google.com/forms/d/e/1FAIpQLScd_tzOAqmJLyutUnYuwrRYYqWHqUsh5LWdEQMAQAsmT47vDw/viewform?usp=publish-editor',
    embedUrl: 'https://docs.google.com/forms/d/e/1FAIpQLScd_tzOAqmJLyutUnYuwrRYYqWHqUsh5LWdEQMAQAsmT47vDw/viewform?embedded=true',
    badge: 'Formulário Oficial Mooca'
  },
  {
    id: 'tatuape',
    name: 'Tatuapé',
    tagline: 'Polo Corporativo, Lifestyle & Anália Franco',
    locationDetails: 'Ao lado do Shopping Anália Franco, Parque CERET, Hospital São Luiz e polo gastronômico da Rua Itapura.',
    highlights: [
      'O m² mais desejado e valorizado da Zona Leste de São Paulo',
      'Excelente liquidez para locação short stay (Airbnb) para médicos, congressos e executivos',
      'Estação Tatuapé do Metrô (Linha 3-Vermelha e CPTM com conexão direta ao Aeroporto de Guarulhos)'
    ],
    url: 'https://docs.google.com/forms/d/e/1FAIpQLScd_tzOAqmJLyutUnYuwrRYYqWHqUsh5LWdEQMAQAsmT47vDw/viewform?usp=dialog',
    embedUrl: 'https://docs.google.com/forms/d/e/1FAIpQLScd_tzOAqmJLyutUnYuwrRYYqWHqUsh5LWdEQMAQAsmT47vDw/viewform?usp=dialog&embedded=true',
    badge: 'Formulário Oficial Tatuapé'
  },
  {
    id: 'vila-ema',
    name: 'Vila Ema',
    tagline: 'Mobilidade Urbana, Monotrilho & Alta Expansão',
    locationDetails: 'Conexão com a Estação Vila Ema / São Lucas do Monotrilho (Linha 15-Prata integrada à Linha 2-Verde Paulista).',
    highlights: [
      'Transporte sobre trilhos veloz com acesso direto à Avenida Paulista e estações da Linha Verde',
      'Eixo em constante valorização patrimonial com excelente preço por metro quadrado',
      'Comércio pulsante na Av. Vila Ema e acesso rápido à Av. Professor Luiz Ignácio Anhaia Mello'
    ],
    url: 'https://docs.google.com/forms/d/e/1FAIpQLSemHAEVaOna5Ts0fWDyt7-0lMICxS3wfGLfxHaobaQKRIHfwQ/viewform?usp=publish-editor',
    embedUrl: 'https://docs.google.com/forms/d/e/1FAIpQLSemHAEVaOna5Ts0fWDyt7-0lMICxS3wfGLfxHaobaQKRIHfwQ/viewform?embedded=true',
    badge: 'Formulário Oficial Vila Ema'
  }
];

// Form links provided by user
export const INTEREST_FORMS = [
  {
    id: 'visit-editor',
    label: 'Agendar Visita ao Modelo Decorado',
    shortLabel: 'Agendamento de Visita',
    description: 'Preencha para receber atendimento exclusivo e visita guiada no stand do Tatuapé / Mooca.',
    url: 'https://docs.google.com/forms/d/e/1FAIpQLScd_tzOAqmJLyutUnYuwrRYYqWHqUsh5LWdEQMAQAsmT47vDw/viewform?usp=publish-editor',
    embedUrl: 'https://docs.google.com/forms/d/e/1FAIpQLScd_tzOAqmJLyutUnYuwrRYYqWHqUsh5LWdEQMAQAsmT47vDw/viewform?embedded=true',
    badge: 'Visita Presencial ou Virtual'
  },
  {
    id: 'visit-dialog',
    label: 'Atendimento Rápido (Modo Diálogo)',
    shortLabel: 'Atendimento Direto',
    description: 'Abertura em formato de diálogo rápido para envio de dados e contato prioritário do corretor.',
    url: 'https://docs.google.com/forms/d/e/1FAIpQLScd_tzOAqmJLyutUnYuwrRYYqWHqUsh5LWdEQMAQAsmT47vDw/viewform?usp=dialog',
    embedUrl: 'https://docs.google.com/forms/d/e/1FAIpQLScd_tzOAqmJLyutUnYuwrRYYqWHqUsh5LWdEQMAQAsmT47vDw/viewform?usp=dialog&embedded=true',
    badge: 'Formato Janela Rápida'
  },
  {
    id: 'catalog-pricing',
    label: 'Tabela de Preços & Book de Plantas',
    shortLabel: 'Tabela de Valores & Plantas',
    description: 'Receba a tabela atualizada de valores, metragens quadradas e condições facilitadas de lançamento.',
    url: 'https://docs.google.com/forms/d/e/1FAIpQLSemHAEVaOna5Ts0fWDyt7-0lMICxS3wfGLfxHaobaQKRIHfwQ/viewform?usp=publish-editor',
    embedUrl: 'https://docs.google.com/forms/d/e/1FAIpQLSemHAEVaOna5Ts0fWDyt7-0lMICxS3wfGLfxHaobaQKRIHfwQ/viewform?embedded=true',
    badge: 'Valores & Memorial Técnico'
  }
];

export const GOOGLE_FORM_VISIT = 'https://docs.google.com/forms/d/e/1FAIpQLScd_tzOAqmJLyutUnYuwrRYYqWHqUsh5LWdEQMAQAsmT47vDw/viewform?usp=publish-editor';
export const GOOGLE_FORM_VISIT_DIRECT = 'https://docs.google.com/forms/d/e/1FAIpQLScd_tzOAqmJLyutUnYuwrRYYqWHqUsh5LWdEQMAQAsmT47vDw/viewform?usp=dialog';
export const GOOGLE_FORM_CATALOG = 'https://docs.google.com/forms/d/e/1FAIpQLSemHAEVaOna5Ts0fWDyt7-0lMICxS3wfGLfxHaobaQKRIHfwQ/viewform?usp=publish-editor';
export const GOOGLE_FORM_CATALOG_DIRECT = 'https://docs.google.com/forms/d/e/1FAIpQLSemHAEVaOna5Ts0fWDyt7-0lMICxS3wfGLfxHaobaQKRIHfwQ/viewform?usp=publish-editor';

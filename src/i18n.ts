export type Language = 'en' | 'ar' | 'ru' | 'fa' | 'tr' | 'ur';

import { OverviewTranslations, overviewTranslations } from './i18n/overview';

export interface Translations {
  nav: {
    home: string;
    about: string;
    projects: string;
    whyInvest: string;
    contact: string;
    process: string;
    gallery: string;
  };
  about: {
    badge: string;
    title: string;
    description1: string;
    description2: string;
    description3: string;
    description4: string;
    imageAlt: string;
    cta: string;
    stats: {
      years: string;
      projects: string;
      clients: string;
      success: string;
    };
  };
  hero: {
    title: string;
    subtitle: string;
    tagline: string;
    cta: string;
    secondaryCta: string;
    badge: string;
  };
  stats: {
    projects: string;
    investors: string;
    countries: string;
    satisfaction: string;
  };
  projects: {
    title: string;
    subtitle: string;
    viewDetails: string;
    starting: string;
    location: string;
  };
  process: {
    title: string;
    subtitle: string;
    step1: {
      title: string;
      description: string;
    };
    step2: {
      title: string;
      description: string;
    };
    step3: {
      title: string;
      description: string;
    };
    step4: {
      title: string;
      description: string;
    };
  };
  features: {
    title: string;
    feature1: {
      title: string;
      description: string;
    };
    feature2: {
      title: string;
      description: string;
    };
    feature3: {
      title: string;
      description: string;
    };
    feature4: {
      title: string;
      description: string;
    };
  };
  whyInvest: {
    title: string;
    subtitle: string;
    citizenship: {
      title: string;
      description: string;
    };
    roi: {
      title: string;
      description: string;
    };
    location: {
      title: string;
      description: string;
    };
    lifestyle: {
      title: string;
      description: string;
    };
  };
  contact: {
    title: string;
    subtitle: string;
    name: string;
    email: string;
    phone: string;
    message: string;
    submit: string;
    whatsappLabels: {
      name: string;
      email: string;
      phone: string;
      message: string;
    };
    info: {
      title: string;
      address: string;
      email: string;
      phone: string;
    };
  };
  footer: {
    rights: string;
    intro: string;
    about: string;
    aboutText: string;
    quickLinks: string;
    contact: string;
    address: string;
    phone: string;
    email: string;
    followUs: string;
    privacyPolicy: string;
    termsOfService: string;
    whatsappAria: string;
  };
  projectModal: {
    startingFrom: string;
    bedrooms: string;
    bathrooms: string;
    area: string;
    type: string;
    propertyTypeApartment: string;
    contactUs: string;
  };
  gallery: {
    title: string;
    subtitle: string;
    imageAlt: string;
  };
  overview: OverviewTranslations;
}

export const translations: Record<Language, Translations> = {
  en: {
    nav: {
      home: 'Home',
      about: 'About Us',
      projects: 'Projects',
      whyInvest: 'Why Istanbul',
      contact: 'Contact',
      process: 'How It Works',
      gallery: 'Gallery',
    },
    about: {
      badge: 'Residence Istanbul',
      title: 'Istanbul\'s Premier Real Estate Investment Consultancy',
      description1:
        'Welcome to Residence Istanbul — a premium real estate investment company specializing in luxury apartments, high-yield investment properties, modern residences, and exclusive real estate opportunities across Istanbul\'s most desirable districts.',
      description2:
        'We do not simply sell properties. We strategically guide Middle Eastern, Gulf, international investors, and global homebuyers toward carefully selected real estate opportunities that combine capital growth, lifestyle excellence, Turkish citizenship potential, and long-term investment security.',
      description3:
        'Whether you are searching for a luxury residence, a profitable real estate investment, Turkish citizenship through property investment, move-in-ready apartments, brand-new residential developments, or commercial or residential buildings — Residence Istanbul delivers expert, personalized, and trust-driven solutions designed around your goals.',
      description4:
        'Real estate consultancy fees are refundable if you are not satisfied. We stand by you at every stage of residence, purchase, rental, and legal processes. Our goal is to be the investment partner you can trust in Istanbul.',
      imageAlt: 'Residence Istanbul luxury real estate',
      cta: 'Start Your Investment Journey',
      stats: {
        years: 'Years of Excellence',
        projects: 'Completed Projects',
        clients: 'Happy Investors',
        success: 'Client Satisfaction',
      },
    },
    hero: {
      title: 'Residence Istanbul',
      subtitle: 'Istanbul\'s Premier Real Estate Investment & Luxury Property Consultancy',
      tagline:
        'Your Trusted Partner for Smart Property Investment, Luxury Living, Turkish Citizenship, and High-Value Real Estate Opportunities in Istanbul',
      cta: 'View Properties',
      secondaryCta: 'Contact Us',
      badge: 'Trusted by 500+ International Investors',
    },
    stats: {
      projects: 'Luxury Projects',
      investors: 'Happy Investors',
      countries: 'Countries',
      satisfaction: 'Satisfaction Rate',
    },
    projects: {
      title: 'Premium Investment Opportunities',
      subtitle: 'Hand-picked luxury developments in Istanbul\'s most sought-after locations',
      viewDetails: 'Learn More',
      starting: 'From',
      location: 'Location',
    },
    process: {
      title: 'Simple 4-Step Process',
      subtitle: 'From initial consultation to Turkish citizenship - we guide you every step of the way',
      step1: {
        title: 'Free Consultation',
        description: 'Connect with our expert team to discuss your investment goals and citizenship requirements',
      },
      step2: {
        title: 'Property Selection',
        description: 'Tour hand-picked properties that match your preferences and investment criteria',
      },
      step3: {
        title: 'Legal Process',
        description: 'Our legal team handles all paperwork, title deeds, and documentation seamlessly',
      },
      step4: {
        title: 'Citizenship Application',
        description: 'We manage your Turkish citizenship application from start to finish',
      },
    },
    features: {
      title: 'Why Choose Us',
      feature1: {
        title: 'End-to-End Service',
        description: 'Complete support from property search to citizenship application',
      },
      feature2: {
        title: 'Legal Expertise',
        description: 'Licensed lawyers and real estate experts at your service',
      },
      feature3: {
        title: 'After-Sales Support',
        description: 'Property management, rental services, and ongoing assistance',
      },
      feature4: {
        title: 'Transparent Pricing',
        description: 'No hidden fees - clear pricing and cost breakdown from day one',
      },
    },
    whyInvest: {
      title: 'Why Istanbul Real Estate?',
      subtitle: 'Discover why smart investors from around the world choose Istanbul',
      citizenship: {
        title: 'Fast-Track Citizenship',
        description: '$400K investment grants you and your family Turkish citizenship in 3-6 months',
      },
      roi: {
        title: '8-12% Annual Returns',
        description: 'Strong rental demand and property appreciation in prime Istanbul locations',
      },
      location: {
        title: 'Strategic Gateway',
        description: 'Connect Europe, Asia, and the Middle East - world-class airports and infrastructure',
      },
      lifestyle: {
        title: 'Exceptional Lifestyle',
        description: 'Rich culture, stunning nature, Mediterranean climate, and modern amenities',
      },
    },
    contact: {
      title: 'Start Your Investment Journey',
      subtitle: 'Book a free consultation with our investment experts today',
      name: 'Full Name',
      email: 'Email Address',
      phone: 'Phone Number',
      message: 'Tell us about your investment goals',
      submit: 'Schedule Free Consultation',
      whatsappLabels: {
        name: 'Name',
        email: 'Email',
        phone: 'Phone',
        message: 'Message',
      },
      info: {
        title: 'Get in Touch',
        address: 'Istanbul, Turkey',
        email: 'info@residenceistanbul.com',
        phone: '+90 506 969 1161',
      },
    },
    footer: {
      rights: '© 2026 Residence Istanbul. All rights reserved.',
      intro: 'Premier real estate investment consultancy for luxury living, Turkish citizenship, and high-value opportunities in Istanbul.',
      about: 'About',
      aboutText: 'Residence Istanbul is always with you and will be in solidarity.',
      quickLinks: 'Quick Links',
      contact: 'Contact Us',
      address: 'Istanbul, Turkey',
      phone: '+90 506 969 1161',
      email: 'info@residenceistanbul.com',
      followUs: 'Follow Us',
      privacyPolicy: 'Privacy Policy',
      termsOfService: 'Terms of Service',
      whatsappAria: 'Contact us on WhatsApp',
    },
    projectModal: {
      startingFrom: 'Starting from',
      bedrooms: 'Bedrooms',
      bathrooms: 'Bathrooms',
      area: 'Area',
      type: 'Type',
      propertyTypeApartment: 'Apartment',
      contactUs: 'Contact Us via WhatsApp',
    },
    gallery: {
      title: 'Premium Investment Opportunities',
      subtitle: 'Explore our stunning properties and developments',
      imageAlt: 'Gallery image',
    },
    overview: overviewTranslations.en,
  },
  ar: {
    nav: {
      home: 'الرئيسية',
      about: 'من نحن',
      projects: 'المشاريع',
      whyInvest: 'لماذا اسطنبول',
      contact: 'اتصل بنا',
      process: 'كيف يعمل',
      gallery: 'المعرض',
    },
    about: {
      badge: 'Residence Istanbul',
      title: 'الشركة الرائدة في الاستثمار العقاري الفاخر في إسطنبول',
      description1:
        'Residence Istanbul شركة متخصصة في الاستثمار العقاري في إسطنبول، تركز على المشاريع السكنية العصرية والفاخرة. نسعد بمساعدتكم في إيجاد المنزل أو الشقة أو المبنى الأمثل لكم.',
      description2:
        'انطلاقًا من التزامنا بالثقة ورضا العملاء، نربط الباحثين عن سكن بمساكنهم المثالية، موفرين أحدث تقنيات البناء وأرقى الخدمات.',
      description3:
        'نرافقكم طوال رحلة استثماركم. نقدم مشاريع جديدة، وشققًا حديثة، ومبانٍ سكنية عصرية. ما عليكم سوى إخبارنا بالمنطقة والحي المفضلين لديكم، ومدى قربها من المطار، والميزات المطلوبة، والنطاق السعري.',
      description4:
        'رسوم الاستشارات العقارية قابلة للاسترداد في حال عدم رضاكم. نرافقكم في كل مرحلة من مراحل معاملاتكم—السكن والإقامة والشراء والإيجار. هدفنا أن نكون شريككم الاستثماري الموثوق في إسطنبول.',
      imageAlt: 'Residence Istanbul عقارات فاخرة',
      cta: 'ابدأ رحلة استثمارك',
      stats: {
        years: 'سنوات من التميز',
        projects: 'مشروع مكتمل',
        clients: 'مستثمر سعيد',
        success: 'رضا العملاء',
      },
    },
    hero: {
      title: 'Residence Istanbul',
      subtitle: 'الشركة الرائدة في الاستثمار العقاري الفاخر واستشارات العقارات في إسطنبول',
      tagline:
        'شريككم الموثوق للاستثمار العقاري الذكي، والحياة الفاخرة، والجنسية التركية، وفرص العقارات عالية القيمة في إسطنبول',
      cta: 'عرض العقارات',
      secondaryCta: 'اتصل بنا',
      badge: 'موثوق من قبل أكثر من 500 مستثمر دولي',
    },
    stats: {
      projects: 'مشاريع فاخرة',
      investors: 'مستثمرون راضون',
      countries: 'دولة',
      satisfaction: 'معدل الرضا',
    },
    projects: {
      title: 'فرص استثمارية متميزة',
      subtitle: 'مشاريع فاخرة مختارة بعناية في أكثر المواقع المرغوبة في اسطنبول',
      viewDetails: 'اعرف المزيد',
      starting: 'من',
      location: 'الموقع',
    },
    process: {
      title: 'عملية بسيطة من 4 خطوات',
      subtitle: 'من الاستشارة الأولية إلى الجنسية التركية - نرشدك في كل خطوة',
      step1: {
        title: 'استشارة مجانية',
        description: 'تواصل مع فريق الخبراء لدينا لمناقشة أهداف الاستثمار ومتطلبات الجنسية',
      },
      step2: {
        title: 'اختيار العقار',
        description: 'جولة في العقارات المختارة التي تتناسب مع تفضيلاتك ومعايير الاستثمار',
      },
      step3: {
        title: 'العملية القانونية',
        description: 'فريقنا القانوني يتعامل مع جميع الأوراق والسندات والوثائق بسلاسة',
      },
      step4: {
        title: 'طلب الجنسية',
        description: 'نحن ندير طلب الجنسية التركية الخاص بك من البداية إلى النهاية',
      },
    },
    features: {
      title: 'لماذا تختارنا',
      feature1: {
        title: 'خدمة شاملة',
        description: 'دعم كامل من البحث عن العقار إلى طلب الجنسية',
      },
      feature2: {
        title: 'خبرة قانونية',
        description: 'محامون مرخصون وخبراء عقاريون في خدمتك',
      },
      feature3: {
        title: 'دعم ما بعد البيع',
        description: 'إدارة الممتلكات وخدمات التأجير والمساعدة المستمرة',
      },
      feature4: {
        title: 'أسعار شفافة',
        description: 'بدون رسوم مخفية - أسعار واضحة وتفصيل للتكاليف من اليوم الأول',
      },
    },
    whyInvest: {
      title: 'لماذا عقارات اسطنبول؟',
      subtitle: 'اكتشف لماذا يختار المستثمرون الأذكياء من جميع أنحاء العالم اسطنبول',
      citizenship: {
        title: 'جنسية سريعة',
        description: 'استثمار بقيمة 400 ألف دولار يمنحك أنت وعائلتك الجنسية التركية في 3-6 أشهر',
      },
      roi: {
        title: 'عوائد سنوية 8-12%',
        description: 'طلب قوي على الإيجار وارتفاع قيمة العقارات في المواقع الرئيسية باسطنبول',
      },
      location: {
        title: 'بوابة استراتيجية',
        description: 'اربط أوروبا وآسيا والشرق الأوسط - مطارات وبنية تحتية عالمية',
      },
      lifestyle: {
        title: 'أسلوب حياة استثنائي',
        description: 'ثقافة غنية، طبيعة خلابة، مناخ متوسطي، ووسائل راحة حديثة',
      },
    },
    contact: {
      title: 'ابدأ رحلة الاستثمار الخاصة بك',
      subtitle: 'احجز استشارة مجانية مع خبراء الاستثمار لدينا اليوم',
      name: 'الاسم الكامل',
      email: 'البريد الإلكتروني',
      phone: 'رقم الهاتف',
      message: 'أخبرنا عن أهدافك الاستثمارية',
      submit: 'حدد استشارة مجانية',
      whatsappLabels: {
        name: 'الاسم',
        email: 'البريد',
        phone: 'الهاتف',
        message: 'الرسالة',
      },
      info: {
        title: 'تواصل معنا',
        address: 'اسطنبول، تركيا',
        email: 'info@residenceistanbul.com',
        phone: '+90 506 969 1161',
      },
    },
    footer: {
      rights: '© 2026 Residence Istanbul. جميع الحقوق محفوظة.',
      intro: 'استشارات عقارية موثوقة للمساكن الفاخرة والمشاريع الجديدة في إسطنبول.',
      about: 'حول',
      aboutText: 'Residence Istanbul دائماً معك وسيكون في تضامن.',
      quickLinks: 'روابط سريعة',
      contact: 'اتصل بنا',
      address: 'اسطنبول، تركيا',
      phone: '+90 506 969 1161',
      email: 'info@residenceistanbul.com',
      followUs: 'تابعنا',
      privacyPolicy: 'سياسة الخصوصية',
      termsOfService: 'شروط الاستخدام',
      whatsappAria: 'تواصل معنا عبر واتساب',
    },
    projectModal: {
      startingFrom: 'يبدأ من',
      bedrooms: 'غرف النوم',
      bathrooms: 'الحمامات',
      area: 'المساحة',
      type: 'النوع',
      propertyTypeApartment: 'شقة',
      contactUs: 'تواصل معنا عبر الواتساب',
    },
    gallery: {
      title: 'معرض الصور والمشاريع',
      subtitle: 'اطلع على صور عقاراتنا ومشاريعنا',
      imageAlt: 'صورة المعرض',
    },
    overview: overviewTranslations.ar,
  },
  ru: {
    nav: {
      home: 'Главная',
      about: 'О нас',
      projects: 'Проекты',
      whyInvest: 'Почему Стамбул',
      contact: 'Контакты',
      process: 'Как это работает',
      gallery: 'Галерея',
    },
    about: {
      badge: 'Кто мы',
      title: 'Создаем современную архитектуру в Стамбуле',
      description1: 'Мы - ведущая компания по развитию недвижимости, специализирующаяся на современных роскошных жилых проектах по всему Стамбулу. Имея более 15 лет опыта, мы зарекомендовали себя как лидеры отрасли в создании архитектурных шедевров, сочетающих современный дизайн с турецким наследием.',
      description2: 'Наша приверженность совершенству движет каждым проектом, который мы осуществляем. От концепции до завершения мы поддерживаем самые высокие стандарты качества, используя передовые строительные технологии и премиальные материалы. Каждый проект тщательно спроектирован, чтобы предложить жителям непревзойденный опыт жизни в самых желанных местах Стамбула.',
      description3: 'Мы гордимся нашим клиентоориентированным подходом, обеспечивая всестороннюю поддержку на протяжении всего инвестиционного пути. Наша команда опытных архитекторов, инженеров и профессионалов в сфере недвижимости работает вместе, чтобы предоставить объекты, которые не только соответствуют, но и превосходят международные стандарты, что делает нас надежным выбором для взыскательных инвесторов по всему миру.',
      description4:
        'Комиссия за консультации по недвижимости возвращается, если вы не удовлетворены. Мы рядом на каждом этапе—вид на жительство, прописка, покупка и аренда. Наша цель — быть надёжным инвестиционным партнёром в Стамбуле.',
      imageAlt: 'Современная архитектура в Стамбуле',
      cta: 'Узнайте нашу историю',
      stats: {
        years: 'Лет совершенства',
        projects: 'Завершенных проектов',
        clients: 'Довольных инвесторов',
        success: 'Удовлетворенность клиентов',
      },
    },
    hero: {
      title: 'Residence Istanbul',
      subtitle: 'Ведущая компания по инвестициям в элитную недвижимость Стамбула',
      tagline:
        'Ваш надежный партнер для умных инвестиций, роскошной жизни, турецкого гражданства и высокодоходной недвижимости в Стамбуле',
      cta: 'Посмотреть недвижимость',
      secondaryCta: 'Связаться с нами',
      badge: 'Нам доверяют более 500 международных инвесторов',
    },
    stats: {
      projects: 'Роскошных проектов',
      investors: 'Довольных инвесторов',
      countries: 'Стран',
      satisfaction: 'Уровень удовлетворенности',
    },
    projects: {
      title: 'Премиальные инвестиционные возможности',
      subtitle: 'Тщательно отобранные роскошные объекты в самых востребованных районах Стамбула',
      viewDetails: 'Узнать больше',
      starting: 'От',
      location: 'Расположение',
    },
    process: {
      title: 'Простой процесс из 4 шагов',
      subtitle: 'От первой консультации до турецкого гражданства - мы проводим вас на каждом этапе',
      step1: {
        title: 'Бесплатная консультация',
        description: 'Свяжитесь с нашей командой экспертов для обсуждения ваших инвестиционных целей',
      },
      step2: {
        title: 'Выбор недвижимости',
        description: 'Осмотр тщательно отобранных объектов, соответствующих вашим критериям',
      },
      step3: {
        title: 'Юридический процесс',
        description: 'Наша юридическая команда занимается всеми документами и оформлением',
      },
      step4: {
        title: 'Заявка на гражданство',
        description: 'Мы управляем вашей заявкой на турецкое гражданство от начала до конца',
      },
    },
    features: {
      title: 'Почему выбирают нас',
      feature1: {
        title: 'Полный сервис',
        description: 'Полная поддержка от поиска недвижимости до получения гражданства',
      },
      feature2: {
        title: 'Юридическая экспертиза',
        description: 'Лицензированные юристы и эксперты по недвижимости к вашим услугам',
      },
      feature3: {
        title: 'Послепродажная поддержка',
        description: 'Управление недвижимостью, услуги аренды и постоянная помощь',
      },
      feature4: {
        title: 'Прозрачные цены',
        description: 'Никаких скрытых платежей - четкие цены и разбивка затрат с первого дня',
      },
    },
    whyInvest: {
      title: 'Почему недвижимость Стамбула?',
      subtitle: 'Узнайте, почему умные инвесторы со всего мира выбирают Стамбул',
      citizenship: {
        title: 'Быстрое гражданство',
        description: 'Инвестиция $400K дает вам и вашей семье турецкое гражданство за 3-6 месяцев',
      },
      roi: {
        title: '8-12% годовой доход',
        description: 'Высокий спрос на аренду и рост стоимости в престижных районах Стамбула',
      },
      location: {
        title: 'Стратегические ворота',
        description: 'Связь Европы, Азии и Ближнего Востока - аэропорты и инфраструктура мирового класса',
      },
      lifestyle: {
        title: 'Исключительный образ жизни',
        description: 'Богатая культура, потрясающая природа, средиземноморский климат и современные удобства',
      },
    },
    contact: {
      title: 'Начните свой путь инвестора',
      subtitle: 'Запишитесь на бесплатную консультацию с нашими экспертами уже сегодня',
      name: 'Полное имя',
      email: 'Электронная почта',
      phone: 'Номер телефона',
      message: 'Расскажите о ваших инвестиционных целях',
      submit: 'Записаться на консультацию',
      whatsappLabels: {
        name: 'Имя',
        email: 'Email',
        phone: 'Телефон',
        message: 'Сообщение',
      },
      info: {
        title: 'Связаться с нами',
        address: 'Стамбул, Турция',
        email: 'info@residenceistanbul.com',
        phone: '+90 506 969 1161',
      },
    },
    footer: {
      rights: '© 2026 Residence Istanbul. Все права защищены.',
      intro: 'Надёжные консультации по элитной недвижимости и новым проектам в Стамбуле.',
      about: 'О нас',
      aboutText: 'Residence Istanbul всегда с вами и будет в солидарности.',
      quickLinks: 'Быстрые ссылки',
      contact: 'Свяжитесь с нами',
      address: 'Стамбул, Турция',
      phone: '+90 506 969 1161',
      email: 'info@residenceistanbul.com',
      followUs: 'Следите за нами',
      privacyPolicy: 'Политика конфиденциальности',
      termsOfService: 'Условия использования',
      whatsappAria: 'Связаться с нами в WhatsApp',
    },
    projectModal: {
      startingFrom: 'Начиная от',
      bedrooms: 'Спальни',
      bathrooms: 'Ванные',
      area: 'Площадь',
      type: 'Тип',
      propertyTypeApartment: 'Квартира',
      contactUs: 'Свяжитесь с нами через WhatsApp',
    },
    gallery: {
      title: 'Премиальные инвестиционные возможности',
      subtitle: 'Изучите наши потрясающие объекты и проекты',
      imageAlt: 'Изображение галереи',
    },
    overview: overviewTranslations.ru,
  },
  fa: {
    nav: {
      home: 'خانه',
      about: 'درباره ما',
      projects: 'پروژه‌ها',
      whyInvest: 'چرا استانبول',
      contact: 'تماس با ما',
      process: 'چگونه کار می‌کند',
      gallery: 'گالری',
    },
    about: {
      badge: 'Residence Istanbul',
      title: 'شرکت پیشرو سرمایه‌گذاری املاک لوکس در استانبول',
      description1:
        'رزیدنس استانبول شرکتی متخصص در سرمایه‌گذاری املاک و مستغلات در استانبول است که بر پروژه‌های مسکونی مدرن و لوکس تمرکز دارد. ما خوشحالیم که در یافتن خانه، آپارتمان یا ساختمان ایده‌آل به شما کمک کنیم.',
      description2:
        'با تعهد به اعتماد و رضایت مشتری، کسانی را که به دنبال مکانی برای زندگی هستند با اقامتگاه‌های ایده‌آلشان مرتبط می‌کنیم و تکنیک‌های ساخت و ساز پیشرفته و امکانات رفاهی درجه یک را ارائه می‌دهیم.',
      description3:
        'ما در طول مسیر سرمایه‌گذاری شما در کنار شما هستیم. ما پروژه‌های جدید، آپارتمان‌های نوساز و ساختمان‌های قابل سکونت ارائه می‌دهیم. کافیست منطقه، محله، نزدیکی به فرودگاه، ویژگی‌های مورد نظر و محدوده قیمت خود را به ما اطلاع دهید.',
      description4:
        'در صورت عدم رضایت مشتری، هزینه سرمایه‌گذاری املاک و مستغلات قابل استرداد است. ما در هر مرحله از معاملات شما، از جمله سکونت، خرید و اجاره، در کنار شما هستیم. هدف ما این است که شریک سرمایه‌گذاری مورد اعتماد شما در استانبول باشیم.',
      imageAlt: 'Residence Istanbul املاک لوکس',
      cta: 'سفر سرمایه‌گذاری خود را آغاز کنید',
      stats: {
        years: 'سال تعالی',
        projects: 'پروژه تکمیل شده',
        clients: 'سرمایه‌گذار راضی',
        success: 'رضایت مشتری',
      },
    },
    hero: {
      title: 'Residence Istanbul',
      subtitle: 'شرکت پیشرو سرمایه‌گذاری املاک لوکس و مشاوره املاک در استانبول',
      tagline:
        'شریک مورد اعتماد شما برای سرمایه‌گذاری هوشمند، زندگی لوکس، تابعیت ترکیه و فرصت‌های املاک با ارزش بالا در استانبول',
      cta: 'مشاهده املاک',
      secondaryCta: 'تماس با ما',
      badge: 'مورد اعتماد بیش از 500 سرمایه‌گذار بین‌المللی',
    },
    stats: {
      projects: 'پروژه لوکس',
      investors: 'سرمایه‌گذار راضی',
      countries: 'کشور',
      satisfaction: 'نرخ رضایت',
    },
    projects: {
      title: 'فرصت‌های سرمایه‌گذاری ممتاز',
      subtitle: 'پروژه‌های لوکس منتخب در محبوب‌ترین مکان‌های استانبول',
      viewDetails: 'بیشتر بدانید',
      starting: 'از',
      location: 'موقعیت',
    },
    process: {
      title: 'فرآیند ساده ۴ مرحله‌ای',
      subtitle: 'از مشاوره اولیه تا تابعیت ترکیه - ما شما را در هر مرحله راهنمایی می‌کنیم',
      step1: {
        title: 'مشاوره رایگان',
        description: 'با تیم متخصص ما ارتباط برقرار کنید تا درباره اهداف سرمایه‌گذاری بحث کنید',
      },
      step2: {
        title: 'انتخاب ملک',
        description: 'بازدید از املاک منتخب که با ترجیحات و معیارهای سرمایه‌گذاری شما مطابقت دارد',
      },
      step3: {
        title: 'فرآیند حقوقی',
        description: 'تیم حقوقی ما تمام مدارک، اسناد و مستندات را بدون دردسر مدیریت می‌کند',
      },
      step4: {
        title: 'درخواست تابعیت',
        description: 'ما درخواست تابعیت ترکیه شما را از ابتدا تا انتها مدیریت می‌کنیم',
      },
    },
    features: {
      title: 'چرا ما را انتخاب کنید',
      feature1: {
        title: 'خدمات کامل',
        description: 'پشتیبانی کامل از جستجوی ملک تا درخواست تابعیت',
      },
      feature2: {
        title: 'تخصص حقوقی',
        description: 'وکلای دارای مجوز و کارشناسان املاک در خدمت شما',
      },
      feature3: {
        title: 'پشتیبانی پس از فروش',
        description: 'مدیریت املاک، خدمات اجاره و کمک مداوم',
      },
      feature4: {
        title: 'قیمت‌گذاری شفاف',
        description: 'بدون هزینه پنهان - قیمت شفاف و جزئیات هزینه از روز اول',
      },
    },
    whyInvest: {
      title: 'چرا املاک استانبول؟',
      subtitle: 'کشف کنید چرا سرمایه‌گذاران هوشمند از سراسر جهان استانبول را انتخاب می‌کنند',
      citizenship: {
        title: 'تابعیت سریع',
        description: 'سرمایه‌گذاری 400 هزار دلار به شما و خانواده‌تان تابعیت ترکیه در 3-6 ماه می‌دهد',
      },
      roi: {
        title: 'بازده سالانه 8-12%',
        description: 'تقاضای قوی اجاره و افزایش ارزش ملک در مناطق اصلی استانبول',
      },
      location: {
        title: 'دروازه استراتژیک',
        description: 'اتصال اروپا، آسیا و خاورمیانه - فرودگاه‌ها و زیرساخت‌های جهانی',
      },
      lifestyle: {
        title: 'سبک زندگی استثنایی',
        description: 'فرهنگ غنی، طبیعت خیره‌کننده، آب و هوای مدیترانه‌ای و امکانات مدرن',
      },
    },
    contact: {
      title: 'سفر سرمایه‌گذاری خود را آغاز کنید',
      subtitle: 'همین امروز یک مشاوره رایگان با کارشناسان سرمایه‌گذاری ما رزرو کنید',
      name: 'نام کامل',
      email: 'آدرس ایمیل',
      phone: 'شماره تلفن',
      message: 'درباره اهداف سرمایه‌گذاری خود به ما بگویید',
      submit: 'مشاوره رایگان رزرو کنید',
      whatsappLabels: {
        name: 'نام',
        email: 'ایمیل',
        phone: 'تلفن',
        message: 'پیام',
      },
      info: {
        title: 'تماس با ما',
        address: 'استانبول، ترکیه',
        email: 'info@residenceistanbul.com',
        phone: '+90 506 969 1161',
      },
    },
    footer: {
      rights: '© 2026 Residence Istanbul. تمامی حقوق محفوظ است.',
      intro: 'مشاوره املاک معتبر برای اقامتگاه‌های لوکس و پروژه‌های جدید در استانبول.',
      about: 'درباره',
      aboutText: 'Residence Istanbul همیشه با شماست و در همبستگی خواهد بود.',
      quickLinks: 'لینک‌های سریع',
      contact: 'با ما تماس بگیرید',
      address: 'استانبول، ترکیه',
      phone: '+90 506 969 1161',
      email: 'info@residenceistanbul.com',
      followUs: 'ما را دنبال کنید',
      privacyPolicy: 'حریم خصوصی',
      termsOfService: 'شرایط استفاده',
      whatsappAria: 'تماس با ما از طریق واتساپ',
    },
    projectModal: {
      startingFrom: 'شروع از',
      bedrooms: 'اتاق‌های خواب',
      bathrooms: 'حمام‌ها',
      area: 'مساحت',
      type: 'نوع',
      propertyTypeApartment: 'آپارتمان',
      contactUs: 'از طریق واتساپ با ما تماس بگیرید',
    },
    gallery: {
      title: 'گالری تصاویر و پروژه‌ها',
      subtitle: 'نماهایی از املاک و پروژه‌های ما را ببینید',
      imageAlt: 'تصویر گالری',
    },
    overview: overviewTranslations.fa,
  },
  tr: {
    nav: {
      home: 'Ana Sayfa',
      about: 'Hakkımızda',
      projects: 'Projeler',
      whyInvest: 'Neden İstanbul',
      contact: 'İletişim',
      process: 'Nasıl Çalışır',
      gallery: 'Galeri',
    },
    about: {
      badge: 'Residence Istanbul',
      title: 'İstanbul\'da Lüks Gayrimenkul Yatırım Danışmanlığı',
      description1: 'Residence İstanbul, İstanbul\'da gayrimenkul danışmanlığı yapan, modern ve lüks konut projelerinde uzmanlaşmış bir firmadır. Aradığınız residans, daire ve apartman konusunda size yardımcı olmaktan mutluluk duyuyoruz.',
      description2: 'Güvene dayalı ticaret anlayışımız ve müşteri memnuniyetine bağlılığımızla, son teknoloji inşaat teknikleri ve premium olanaklar sunarak güvenle ikamet edeceğiniz konutları sizlerle buluşturuyoruz.',
      description3: 'Yatırım yolculuğunuz boyunca yanınızdayız. Yeni projeler, sıfır daireler ve yaşanabilir apartmanları sizlere sunuyoruz. Beğendiğiniz bölge, semt, havalimanına yakınlık ve istediğiniz özellikler ile fiyat aralığınızı bize bildirmeniz yeterlidir.',
      description4:
        'Gayrimenkul danışmanlığı ücreti, müşteri memnuniyeti olmadığında iade edilir. Oturum, ikametgah, satın alma, kiraya verme gibi işlerinizin her aşamasında istediğinizde yanınızda olacağız. İstanbul’da güveneceğiniz bir yatırım ortağınız olmak hedefimizdir.',
      imageAlt: 'İstanbul’da modern mimari',
      cta: 'Yatırım Yolculuğunuza Başlayın',
      stats: {
        years: 'Yıllık Mükemmellik',
        projects: 'Tamamlanmış Proje',
        clients: 'Mutlu Yatırımcı',
        success: 'Müşteri Memnuniyeti',
      },
    },
    hero: {
      title: 'Residence Istanbul',
      subtitle: 'İstanbul\'da Lüks Gayrimenkul Yatırım ve Danışmanlık',
      tagline:
        'Akıllı yatırım, lüks yaşam, Türk vatandaşlığı ve yüksek değerli gayrimenkul fırsatları için güvenilir ortağınız',
      cta: 'Projeleri Görüntüle',
      secondaryCta: 'İletişime Geçin',
      badge: '500+ Uluslararası Yatırımcının Güvendiği',
    },
    stats: {
      projects: 'Lüks Proje',
      investors: 'Mutlu Yatırımcı',
      countries: 'Ülke',
      satisfaction: 'Memnuniyet Oranı',
    },
    projects: {
      title: 'Premium Yatırım Fırsatları',
      subtitle: 'İstanbul\'un en gözde lokasyonlarında özenle seçilmiş lüks projeler',
      viewDetails: 'Daha Fazla Bilgi',
      starting: 'Başlangıç',
      location: 'Konum',
    },
    process: {
      title: 'Basit 4 Adımlı Süreç',
      subtitle: 'İlk görüşmeden Türk vatandaşlığına kadar - her adımda yanınızdayız',
      step1: {
        title: 'Ücretsiz Danışmanlık',
        description: 'Yatırım hedeflerinizi ve vatandaşlık gereksinimlerinizi görüşmek için uzman ekibimizle iletişime geçin',
      },
      step2: {
        title: 'Emlak Seçimi',
        description: 'Tercihlerinize ve yatırım kriterlerinize uygun özenle seçilmiş gayrimenkulleri gezin',
      },
      step3: {
        title: 'Yasal Süreç',
        description: 'Hukuk ekibimiz tüm evrakları, tapu işlemlerini ve belgeleri sorunsuz bir şekilde halleder',
      },
      step4: {
        title: 'Vatandaşlık Başvurusu',
        description: 'Türk vatandaşlığı başvurunuzu baştan sona yönetiyoruz',
      },
    },
    features: {
      title: 'Neden Bizi Seçmelisiniz',
      feature1: {
        title: 'Kapsamlı Hizmet',
        description: 'Emlak araştırmasından vatandaşlık başvurusuna kadar tam destek',
      },
      feature2: {
        title: 'Hukuki Uzmanlık',
        description: 'Lisanslı avukatlar ve gayrimenkul uzmanları hizmetinizde',
      },
      feature3: {
        title: 'Satış Sonrası Destek',
        description: 'Emlak yönetimi, kiralama hizmetleri ve sürekli yardım',
      },
      feature4: {
        title: 'Şeffaf Fiyatlandırma',
        description: 'Gizli ücret yok - ilk günden itibaren net fiyatlandırma ve maliyet dökümü',
      },
    },
    whyInvest: {
      title: 'Neden İstanbul Emlak?',
      subtitle: 'Dünyanın dört bir yanından akıllı yatırımcıların neden İstanbul\'u seçtiğini keşfedin',
      citizenship: {
        title: 'Hızlı Vatandaşlık',
        description: '400 bin $ yatırım, size ve ailenize 3-6 ayda Türk vatandaşlığı kazandırır',
      },
      roi: {
        title: '%8-12 Yıllık Getiri',
        description: 'İstanbul\'un prestijli lokasyonlarında güçlü kiralama talebi ve emlak değer artışı',
      },
      location: {
        title: 'Stratejik Köprü',
        description: 'Avrupa, Asya ve Orta Doğu\'yu birleştiren dünya standartlarında havalimanları ve altyapı',
      },
      lifestyle: {
        title: 'Olağanüstü Yaşam Tarzı',
        description: 'Zengin kültür, muhteşem doğa, Akdeniz iklimi ve modern olanaklar',
      },
    },
    contact: {
      title: 'Yatırım Yolculuğunuza Başlayın',
      subtitle: 'Yatırım uzmanlarımızla bugün ücretsiz bir görüşme ayarlayın',
      name: 'Ad Soyad',
      email: 'E-posta Adresi',
      phone: 'Telefon Numarası',
      message: 'Yatırım hedefleriniz hakkında bize bilgi verin',
      submit: 'Ücretsiz Görüşme Planla',
      whatsappLabels: {
        name: 'Ad',
        email: 'E-posta',
        phone: 'Telefon',
        message: 'Mesaj',
      },
      info: {
        title: 'İletişime Geçin',
        address: 'İstanbul, Türkiye',
        email: 'info@residenceistanbul.com',
        phone: '+90 506 969 1161',
      },
    },
    footer: {
      rights: '© 2026 Residence Istanbul. Tüm hakları saklıdır.',
      intro: 'İstanbul’da lüks konut ve yeni projeler için güvenilir gayrimenkul danışmanlığı.',
      about: 'Hakkımızda',
      aboutText: 'Residence İstanbul sizin her zaman yanınızda ve dayanışma içinde olacaktır.',
      quickLinks: 'Hızlı Bağlantılar',
      contact: 'İletişim',
      address: 'İstanbul, Türkiye',
      phone: '+90 506 969 1161',
      email: 'info@residenceistanbul.com',
      followUs: 'Bizi Takip Edin',
      privacyPolicy: 'Gizlilik Politikası',
      termsOfService: 'Kullanım Şartları',
      whatsappAria: 'WhatsApp üzerinden bize ulaşın',
    },
    projectModal: {
      startingFrom: 'Başlangıç fiyatı',
      bedrooms: 'Yatak Odası',
      bathrooms: 'Banyo',
      area: 'Alan',
      type: 'Tip',
      propertyTypeApartment: 'Daire',
      contactUs: 'WhatsApp ile İletişime Geçin',
    },
    gallery: {
      title: 'Premium Yatırım Fırsatları',
      subtitle: 'Muhteşem mülklerimizi ve projelerimizi keşfedin',
      imageAlt: 'Galeri görseli',
    },
    overview: overviewTranslations.tr,
  },
  ur: {
    nav: {
      home: 'ہوم',
      about: 'ہمارے بارے میں',
      projects: 'منصوبے',
      whyInvest: 'استنبول کیوں',
      contact: 'رابطہ',
      process: 'یہ کیسے کام کرتا ہے',
      gallery: 'گیلری',
    },
    about: {
      badge: 'Residence Istanbul',
      title: 'استنبول میں لگژری رئیل اسٹیٹ سرمایہ کاری مشاورت',
      description1:
        'Residence Istanbul استنبول میں رئیل اسٹیٹ کی سرمایہ کاری میں ماہر رکھنے والی کمپنی ہے، جو جدید اور لگژری رہائشی منصوبوں پر توجہ مرکوز کرتی ہے۔ ہمیں مکمل گھر، اپارٹمنٹ، یا عمارت تلاش کرنے میں آپ کی مدد کرنے پر خوشی ہے۔',
      description2:
        'اعتماد اور گاہک کی اطمینان کے عزم کے ساتھ، ہم جدید ترین تعمیراتی تکنیک اور پریمیم سہولیات پیش کرتے ہوئے، رہائش تلاش کرنے والوں کو ان کی مثالی رہائش گاہوں سے جوڑتے ہیں۔',
      description3:
        'ہم آپ کے سرمایہ کاری کے سفر کے دوران آپ کے ساتھ ہیں۔ ہم نئے منصوبے، بالکل نئے اپارٹمنٹس، اور رہائش کے قابل عمارتیں پیش کرتے ہیں۔ بس ہمیں اپنا پسندیدہ علاقہ، پڑوس، ہوائی اڈے کی قربت، مطلوبہ خصوصیات اور قیمت کی حد سے آگاہ کریں۔',
      description4:
        'رئیل اسٹیٹ کی سرمایہ کاری مشاورت کی فیس اگر آپ مطمئن نہ ہوں تو واپس کی جاتی ہے۔ ہم آپ کے ہر مرحلے میں— سکونت، خرید، اور کرایے میں— ساتھ ہیں۔ ہمارا مقصد استنبول میں آپ کا قابلِ اعتماد سرمایہ کاری پارٹنر بننا ہے۔',
      imageAlt: 'Residence Istanbul لگژری جائیداد',
      cta: 'اپنے سرمایہ کاری کے سفر کا آغاز کریں',
      stats: {
        years: 'سال کی بہترین کارکردگی',
        projects: 'مکمل منصوبے',
        clients: 'خوش سرمایہ کار',
        success: 'کلائنٹ کی اطمینان',
      },
    },
    hero: {
      title: 'Residence Istanbul',
      subtitle: 'استنبول میں لگژری رئیل اسٹیٹ سرمایہ کاری اور مشاورت',
      tagline:
        'سمارٹ سرمایہ کاری، لگژری زندگی، ترک شہریت اور اعلیٰ قدر کی جائیداد کے مواقع کے لیے آپ کا قابلِ اعتماد پارٹنر',
      cta: 'جائیدادیں دیکھیں',
      secondaryCta: 'رابطہ کریں',
      badge: '500+ بین الاقوامی سرمایہ کاروں کا اعتماد',
    },
    stats: {
      projects: 'لگژری منصوبے',
      investors: 'خوش سرمایہ کار',
      countries: 'ممالک',
      satisfaction: 'اطمینان کی شرح',
    },
    projects: {
      title: 'پریمیم سرمایہ کاری کے مواقع',
      subtitle: 'استنبول کے انتہائی مطلوبہ مقامات میں منتخب لگژری ترقیات',
      viewDetails: 'مزید جانیں',
      starting: 'سے',
      location: 'مقام',
    },
    process: {
      title: 'آسان 4 مرحلہ عمل',
      subtitle: 'ابتدائی مشاورت سے ترک شہریت تک - ہم ہر قدم پر آپ کی رہنمائی کرتے ہیں',
      step1: {
        title: 'مفت مشاورت',
        description: 'اپنے سرمایہ کاری کے اہداف اور شہریت کی ضروریات پر بات کرنے کے لیے ہماری ماہر ٹیم سے رابطہ کریں',
      },
      step2: {
        title: 'جائیداد کا انتخاب',
        description: 'منتخب جائیدادوں کا دورہ کریں جو آپ کی ترجیحات اور سرمایہ کاری کے معیار سے مطابقت رکھتی ہیں',
      },
      step3: {
        title: 'قانونی عمل',
        description: 'ہماری قانونی ٹیم تمام کاغذات، ٹائٹل ڈیڈز اور دستاویزات کو بغیر کسی رکاوٹ کے سنبھالتی ہے',
      },
      step4: {
        title: 'شہریت کی درخواست',
        description: 'ہم شروع سے آخر تک آپ کی ترک شہریت کی درخواست کا انتظام کرتے ہیں',
      },
    },
    features: {
      title: 'ہمیں کیوں منتخب کریں',
      feature1: {
        title: 'مکمل سروس',
        description: 'جائیداد کی تلاش سے شہریت کی درخواست تک مکمل معاونت',
      },
      feature2: {
        title: 'قانونی مہارت',
        description: 'لائسنس یافتہ وکیل اور رئیل اسٹیٹ ماہرین آپ کی خدمت میں',
      },
      feature3: {
        title: 'فروخت کے بعد معاونت',
        description: 'جائیداد کا انتظام، کرایہ کی خدمات اور مسلسل مدد',
      },
      feature4: {
        title: 'شفاف قیمت',
        description: 'کوئی خفیہ فیس نہیں - پہلے دن سے واضح قیمت اور لاگت کی تفصیل',
      },
    },
    whyInvest: {
      title: 'استنبول رئیل اسٹیٹ کیوں؟',
      subtitle: 'دریافت کریں کہ دنیا بھر کے ہوشیار سرمایہ کار استنبول کیوں منتخب کرتے ہیں',
      citizenship: {
        title: 'تیز رفتار شہریت',
        description: '$400K کی سرمایہ کاری آپ کو اور آپ کے خاندان کو 3-6 ماہ میں ترک شہریت فراہم کرتی ہے',
      },
      roi: {
        title: 'سالانہ 8-12% واپسی',
        description: 'استنبول کے اہم مقامات میں مضبوط کرایہ کی طلب اور جائیداد کی قدر میں اضافہ',
      },
      location: {
        title: 'اسٹریٹجک گیٹ وے',
        description: 'یورپ، ایشیا اور مشرق وسطیٰ کو جوڑنا - عالمی معیار کے ہوائی اڈے اور انفراسٹرکچر',
      },
      lifestyle: {
        title: 'غیر معمولی طرز زندگی',
        description: 'بھرپور ثقافت، شاندار فطرت، بحیرہ روم کی آب و ہوا اور جدید سہولیات',
      },
    },
    contact: {
      title: 'اپنے سرمایہ کاری کے سفر کا آغاز کریں',
      subtitle: 'آج ہی ہمارے سرمایہ کاری کے ماہرین کے ساتھ مفت مشاورت بک کریں',
      name: 'پورا نام',
      email: 'ای میل ایڈریس',
      phone: 'فون نمبر',
      message: 'ہمیں اپنے سرمایہ کاری کے اہداف کے بارے میں بتائیں',
      submit: 'مفت مشاورت شیڈول کریں',
      whatsappLabels: {
        name: 'نام',
        email: 'ای میل',
        phone: 'فون',
        message: 'پیغام',
      },
      info: {
        title: 'رابطہ کریں',
        address: 'استنبول، ترکی',
        email: 'info@residenceistanbul.com',
        phone: '+90 506 969 1161',
      },
    },
    footer: {
      rights: '© 2026 Residence Istanbul. تمام حقوق محفوظ ہیں۔',
      intro: 'استنبول میں لگژری رہائش اور نئے منصوبوں کے لیے قابل اعتماد رئیل اسٹیٹ مشاورت۔',
      about: 'بارے میں',
      aboutText: 'Residence Istanbul ہمیشہ آپ کے ساتھ ہے اور یکجہتی میں رہے گا۔',
      quickLinks: 'فوری لنکس',
      contact: 'ہم سے رابطہ کریں',
      address: 'استنبول، ترکی',
      phone: '+90 506 969 1161',
      email: 'info@residenceistanbul.com',
      followUs: 'ہمیں فالو کریں',
      privacyPolicy: 'رازداری کی پالیسی',
      termsOfService: 'استعمال کی شرائط',
      whatsappAria: 'واٹس ایپ پر ہم سے رابطہ کریں',
    },
    projectModal: {
      startingFrom: 'سے شروع',
      bedrooms: 'بیڈ رومز',
      bathrooms: 'باتھ رومز',
      area: 'رقبہ',
      type: 'قسم',
      propertyTypeApartment: 'اپارٹمنٹ',
      contactUs: 'واٹس ایپ کے ذریعے ہم سے رابطہ کریں',
    },
    gallery: {
      title: 'پریمیم سرمایہ کاری کے مواقع',
      subtitle: 'ہماری شاندار جائیدادیں اور ترقیات دریافت کریں',
      imageAlt: 'گیلری تصویر',
    },
    overview: overviewTranslations.ur,
  },
};

export const projectsData = [
  {
    id: 1,
    image: 'https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg?auto=compress&cs=tinysrgb&w=1200',
    images: [
      'https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg?auto=compress&cs=tinysrgb&w=1200',
      'https://images.pexels.com/photos/323775/pexels-photo-323775.jpeg?auto=compress&cs=tinysrgb&w=1200',
      'https://images.pexels.com/photos/276724/pexels-photo-276724.jpeg?auto=compress&cs=tinysrgb&w=1200',
      'https://images.pexels.com/photos/1457842/pexels-photo-1457842.jpeg?auto=compress&cs=tinysrgb&w=1200',
    ],
    titleEn: 'Bosphorus Residence',
    titleAr: 'إقامة البوسفور',
    titleRu: 'Резиденция Босфор',
    titleFa: 'اقامتگاه بسفر',
    titleTr: 'Boğaz Rezidans',
    titleUr: 'باسفورس رہائش',
    descriptionEn: 'Exclusive waterfront living with panoramic Bosphorus views. These luxurious apartments feature floor-to-ceiling windows, premium finishes, and direct access to waterfront promenades. Located in one of Istanbul\'s most prestigious neighborhoods with easy access to shopping, dining, and cultural attractions.',
    descriptionAr: 'حياة حصرية على الواجهة البحرية مع إطلالات بانورامية على البوسفور. تتميز هذه الشقق الفاخرة بنوافذ ممتدة من الأرض إلى السقف وتشطيبات فاخرة ووصول مباشر إلى الممشى المائي.',
    descriptionRu: 'Эксклюзивная жизнь на берегу с панорамным видом на Босфор. Эти роскошные квартиры имеют панорамные окна, премиальную отделку и прямой доступ к набережной.',
    descriptionFa: 'زندگی منحصر به فرد در کنار آب با چشم‌انداز پانورامای بسفر. این آپارتمان‌های لوکس دارای پنجره‌های کف تا سقف، تزئینات ممتاز و دسترسی مستقیم به گردشگاه ساحلی هستند.',
    descriptionTr: 'Panoramik Boğaz manzaralı özel sahil yaşamı. Bu lüks daireler, tavandan tabana pencereler, premium bitişler ve sahil yürüyüş yollarına doğrudan erişim sunmaktadır. İstanbul\'un en prestijli mahallelerinden birinde yer alır, alışveriş, yemek ve kültürel cazibe merkezlerine kolay erişim sağlar.',
    descriptionUr: 'پینورامک باسفورس کے نظاروں کے ساتھ خصوصی واٹر فرنٹ رہائش۔ یہ لگژری اپارٹمنٹس فرش سے چھت تک کھڑکیاں، پریمیم فنشنگ، اور واٹر فرنٹ پرومینیڈز تک براہ راست رسائی کی خصوصیت رکھتے ہیں۔ استنبول کے انتہائی معزز محلوں میں سے ایک میں واقع ہے جہاں خریداری، کھانے پینے اور ثقافتی پرکشش مقامات تک آسان رسائی ہے۔',
    locationEn: 'Beşiktaş, Istanbul',
    locationAr: 'بشيكتاش، اسطنبول',
    locationRu: 'Бешикташ, Стамбул',
    locationFa: 'بشیکتاش، استانبول',
    locationTr: 'Beşiktaş, İstanbul',
    locationUr: 'بشیکتاش، استنبول',
    priceEn: '$850,000',
    priceAr: '$850,000',
    priceRu: '$850,000',
    priceFa: '$850,000',
    priceTr: '$850,000',
    priceUr: '$850,000',
    bedrooms: '3+1',
    bathrooms: '2',
    area: '165 m²',
    type: 'Apartment',
  },
  {
    id: 2,
    image: 'https://images.pexels.com/photos/1732414/pexels-photo-1732414.jpeg?auto=compress&cs=tinysrgb&w=1200',
    images: [
      'https://images.pexels.com/photos/1732414/pexels-photo-1732414.jpeg?auto=compress&cs=tinysrgb&w=1200',
      'https://images.pexels.com/photos/1918291/pexels-photo-1918291.jpeg?auto=compress&cs=tinysrgb&w=1200',
      'https://images.pexels.com/photos/2635038/pexels-photo-2635038.jpeg?auto=compress&cs=tinysrgb&w=1200',
      'https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=1200',
    ],
    titleEn: 'Maslak Heights',
    titleAr: 'مرتفعات ماسلاك',
    titleRu: 'Маслак Хайтс',
    titleFa: 'ارتفاعات ماسلاک',
    titleTr: 'Maslak Heights',
    titleUr: 'ماسلاک ہائٹس',
    descriptionEn: 'Modern architectural masterpiece in Istanbul\'s financial district. This luxury residence offers smart home technology, state-of-the-art amenities, and proximity to major business centers. Perfect for professionals seeking an upscale urban lifestyle with easy access to transportation networks.',
    descriptionAr: 'تحفة معمارية حديثة في المنطقة المالية باسطنبول. يوفر هذا المسكن الفاخر تقنية المنزل الذكي ووسائل راحة حديثة وقربًا من مراكز الأعمال الرئيسية.',
    descriptionRu: 'Современный архитектурный шедевр в финансовом районе Стамбула. Эта роскошная резиденция предлагает технологию умного дома, современные удобства и близость к основным бизнес-центрам.',
    descriptionFa: 'شاهکار معماری مدرن در منطقه مالی استانبول. این اقامتگاه لوکس فناوری خانه هوشمند، امکانات پیشرفته و نزدیکی به مراکز تجاری اصلی را ارائه می‌دهد.',
    descriptionTr: 'İstanbul\'un finans bölgesinde modern mimari başyapıt. Bu lüks rezidans akıllı ev teknolojisi, son teknoloji olanaklarve büyük iş merkezlerine yakınlık sunar. Ulaşım ağlarına kolay erişim ile üst düzey şehir yaşamı arayan profesyoneller için mükemmel.',
    descriptionUr: 'استنبول کے مالیاتی ضلع میں جدید تعمیراتی شاہکار۔ یہ لگژری رہائش اسمارٹ ہوم ٹیکنالوجی، جدید ترین سہولیات، اور بڑے کاروباری مراکز سے قربت پیش کرتی ہے۔ نقل و حمل کے نیٹ ورکس تک آسان رسائی کے ساتھ اعلیٰ شہری طرز زندگی کی تلاش میں پیشہ ور افراد کے لیے بہترین۔',
    locationEn: 'Maslak, Istanbul',
    locationAr: 'ماسلاك، اسطنبول',
    locationRu: 'Маслак, Стамбул',
    locationFa: 'ماسلاک، استانبول',
    locationTr: 'Maslak, İstanbul',
    locationUr: 'ماسلاک، استنبول',
    priceEn: '$650,000',
    priceAr: '$650,000',
    priceRu: '$650,000',
    priceFa: '$650,000',
    priceTr: '$650,000',
    priceUr: '$650,000',
    bedrooms: '2+1',
    bathrooms: '2',
    area: '135 m²',
    type: 'Apartment',
  },
  {
    id: 3,
    image: 'https://images.pexels.com/photos/1438832/pexels-photo-1438832.jpeg?auto=compress&cs=tinysrgb&w=1200',
    images: [
      'https://images.pexels.com/photos/1438832/pexels-photo-1438832.jpeg?auto=compress&cs=tinysrgb&w=1200',
      'https://images.pexels.com/photos/1571468/pexels-photo-1571468.jpeg?auto=compress&cs=tinysrgb&w=1200',
      'https://images.pexels.com/photos/1648776/pexels-photo-1648776.jpeg?auto=compress&cs=tinysrgb&w=1200',
      'https://images.pexels.com/photos/279719/pexels-photo-279719.jpeg?auto=compress&cs=tinysrgb&w=1200',
    ],
    titleEn: 'Nişantaşı Luxury',
    titleAr: 'نيشانتاشي الفاخرة',
    titleRu: 'Нишанташи Люкс',
    titleFa: 'لوکس نیشانتاشی',
    titleTr: 'Nişantaşı Lüks',
    titleUr: 'نیشان تاشی لگژری',
    descriptionEn: 'Boutique apartments in Istanbul\'s most prestigious shopping district. Experience refined living surrounded by designer boutiques, gourmet restaurants, and art galleries. Each apartment features high-end Italian kitchen, marble bathrooms, and elegant interiors designed by renowned architects.',
    descriptionAr: 'شقق بوتيك في أرقى منطقة تسوق في اسطنبول. استمتع بحياة راقية محاطة ببوتيكات المصممين والمطاعم الذواقة وصالات العرض الفنية.',
    descriptionRu: 'Бутик-апартаменты в самом престижном торговом районе Стамбула. Наслаждайтесь изысканной жизнью в окружении дизайнерских бутиков, ресторанов для гурманов и художественных галерей.',
    descriptionFa: 'آپارتمان‌های بوتیک در معتبرترین منطقه خرید استانبول. زندگی تصفیه شده را در احاطه بوتیک‌های طراح، رستوران‌های لذیذ و گالری‌های هنری تجربه کنید.',
    descriptionTr: 'İstanbul\'un en prestijli alışveriş bölgesinde butik daireler. Tasarımcı butikleri, gurme restoranlar ve sanat galerileri ile çevrili rafine yaşamı deneyimleyin. Her daire üst düzey İtalyan mutfağı, mermer banyolar ve ünlü mimarlar tarafından tasarlanmış zarif iç mekanlara sahiptir.',
    descriptionUr: 'استنبول کے انتہائی معزز شاپنگ ڈسٹرکٹ میں بوتیک اپارٹمنٹس۔ ڈیزائنر بوتیکس، گورمے ریستوراں اور آرٹ گیلریوں سے گھری ہوئی بہتر زندگی کا تجربہ کریں۔ ہر اپارٹمنٹ میں اعلیٰ معیار کا اطالوی کچن، سنگ مرمر کے باتھ روم، اور مشہور معماروں کی طرف سے ڈیزائن کیے گئے خوبصورت اندرونی حصے ہیں۔',
    locationEn: 'Nişantaşı, Istanbul',
    locationAr: 'نيشانتاشي، اسطنبول',
    locationRu: 'Нишанташи, Стамбул',
    locationFa: 'نیشانتاشی، استانبول',
    locationTr: 'Nişantaşı, İstanbul',
    locationUr: 'نیشان تاشی، استنبول',
    priceEn: '$750,000',
    priceAr: '$750,000',
    priceRu: '$750,000',
    priceFa: '$750,000',
    priceTr: '$750,000',
    priceUr: '$750,000',
    bedrooms: '3+1',
    bathrooms: '3',
    area: '180 m²',
    type: 'Apartment',
  },
];

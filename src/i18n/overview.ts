import { Language } from '../i18n';

export interface OverviewTranslations {
  whyGlobalTitle: string;
  whyGlobalIntro: string;
  pillars: { title: string; description: string }[];
  servicesTitle: string;
  services: { title: string; description: string }[];
  promiseTitle: string;
  promiseItems: string[];
  promiseClosing: string;
  differenceTitle: string;
  differenceLines: string[];
  mission: string;
}

export const overviewTranslations: Record<Language, OverviewTranslations> = {
  en: {
    whyGlobalTitle: 'Why Global Investors Choose Residence Istanbul',
    whyGlobalIntro:
      'At Residence Istanbul, we understand that purchasing property in Turkey is more than a transaction — it is a strategic life decision.',
    pillars: [
      {
        title: 'Market Intelligence',
        description:
          'Deep knowledge of Istanbul\'s fastest-growing districts, luxury developments, airport-connected zones, and high-demand investment corridors.',
      },
      {
        title: 'Tailored Property Matching',
        description:
          'We select properties based on your preferred district, investment objective, citizenship eligibility, rental expectations, airport proximity, lifestyle priorities, and budget strategy.',
      },
      {
        title: 'Full-Spectrum Investment Support',
        description:
          'From your first consultation to title deed, residency registration, legal documentation, rental management, and post-purchase support — we stand beside you at every stage.',
      },
    ],
    servicesTitle: 'Our Specialized Real Estate Services',
    services: [
      {
        title: 'Luxury Apartments & Premium Residences',
        description: 'Exclusive homes in Istanbul\'s most strategic and prestigious locations.',
      },
      {
        title: 'Turkish Citizenship by Real Estate Investment',
        description: 'Professional guidance for investors seeking Turkish nationality through qualifying property opportunities.',
      },
      {
        title: 'High-Yield Investment Properties',
        description: 'Projects selected for strong rental returns, appreciation potential, and long-term market positioning.',
      },
      {
        title: 'Ready-to-Move Properties',
        description: 'Modern apartments and buildings available for immediate occupancy or rental activation.',
      },
      {
        title: 'End-to-End Legal & Residency Assistance',
        description: 'Purchase procedures, title deed processing, occupancy permits, residence registration, and rental support.',
      },
    ],
    promiseTitle: 'Our Trust-Based Promise',
    promiseItems: [
      'Transparency',
      'Investor Protection',
      'Strategic Property Selection',
      'Customer Satisfaction',
      'Refundable Consultancy Confidence',
    ],
    promiseClosing:
      'We are committed to delivering not just property options, but clarity, security, and confidence.',
    differenceTitle: 'The Residence Istanbul Difference',
    differenceLines: [
      'We are not brokers.',
      'We are not sales agents.',
      'We are strategic real estate investment advisors.',
    ],
    mission:
      'Our mission is simple: to help you secure the right property, in the right location, for the right purpose — with confidence.',
  },
  tr: {
    whyGlobalTitle: 'Küresel Yatırımcılar Neden Residence Istanbul\'u Seçiyor',
    whyGlobalIntro:
      'Residence Istanbul olarak Türkiye\'de gayrimenkul satın almanın bir işlemden fazlası — stratejik bir yaşam kararı olduğunu biliyoruz.',
    pillars: [
      {
        title: 'Pazar Bilgisi',
        description:
          'İstanbul\'un en hızlı büyüyen bölgeleri, lüks projeleri, havalimanına bağlı bölgeler ve yüksek talepli yatırım koridorları hakkında derin bilgi.',
      },
      {
        title: 'Kişiye Özel Emlak Eşleştirme',
        description:
          'Tercih ettiğiniz bölge, yatırım hedefi, vatandaşlık uygunluğu, kira beklentisi, havalimanı yakınlığı, yaşam tarzı öncelikleri ve bütçe stratejinize göre emlak seçiyoruz.',
      },
      {
        title: 'Uçtan Uca Yatırım Desteği',
        description:
          'İlk görüşmeden tapuya, ikamet kaydından hukuki evraklara, kiralama yönetiminden satış sonrası desteğe kadar her aşamada yanınızdayız.',
      },
    ],
    servicesTitle: 'Uzmanlaştığımız Gayrimenkul Hizmetleri',
    services: [
      {
        title: 'Lüks Daireler ve Premium Rezidanslar',
        description: 'İstanbul\'un en stratejik ve prestijli lokasyonlarında seçkin konutlar.',
      },
      {
        title: 'Gayrimenkul Yatırımı ile Türk Vatandaşlığı',
        description: 'Uygun gayrimenkul fırsatlarıyla Türk vatandaşlığı hedefleyen yatırımcılara profesyonel rehberlik.',
      },
      {
        title: 'Yüksek Getirili Yatırım Gayrimenkulleri',
        description: 'Güçlü kira getirisi, değer artışı ve uzun vadeli pazar konumlandırması için seçilmiş projeler.',
      },
      {
        title: 'Oturuma Hazır Gayrimenkuller',
        description: 'Hemen taşınmaya veya kiraya vermeye uygun modern daireler ve binalar.',
      },
      {
        title: 'Uçtan Uca Hukuki ve İkamet Desteği',
        description: 'Satın alma süreçleri, tapu işlemleri, iskan belgeleri, ikamet kaydı ve kiralama desteği.',
      },
    ],
    promiseTitle: 'Güvene Dayalı Taahhüdümüz',
    promiseItems: [
      'Şeffaflık',
      'Yatırımcı Koruması',
      'Stratejik Emlak Seçimi',
      'Müşteri Memnuniyeti',
      'İade Edilebilir Danışmanlık Güvencesi',
    ],
    promiseClosing:
      'Sadece emlak seçenekleri değil; netlik, güvenlik ve emin adımlarla ilerlemenizi sağlamaya kararlıyız.',
    differenceTitle: 'Residence Istanbul Farkı',
    differenceLines: [
      'Biz emlak komisyoncusu değiliz.',
      'Biz satış temsilcisi değiliz.',
      'Biz stratejik gayrimenkul yatırım danışmanlarıyız.',
    ],
    mission:
      'Misyonumuz basit: doğru amaç için, doğru lokasyonda, doğru gayrimenkulü güvenle edinmenize yardımcı olmak.',
  },
  ar: {
    whyGlobalTitle: 'لماذا يختار المستثمرون العالميون Residence Istanbul',
    whyGlobalIntro:
      'في Residence Istanbul، ندرك أن شراء العقار في تركيا ليس مجرد معاملة — بل قرار حياتي استراتيجي.',
    pillars: [
      {
        title: 'ذكاء السوق',
        description:
          'معرفة عميقة بأسرع مناطق إسطنبول نموًا، والمشاريع الفاخرة، والمناطق المرتبطة بالمطارات، وممرات الاستثمار عالية الطلب.',
      },
      {
        title: 'مطابقة عقارية مخصصة',
        description:
          'نختار العقارات بناءً على منطقتك المفضلة، وهدف الاستثمار، وأهلية الجنسية، وتوقعات الإيجار، والقرب من المطار، وأولويات نمط الحياة، واستراتيجية الميزانية.',
      },
      {
        title: 'دعم استثماري شامل',
        description:
          'من أول استشارة حتى سند الملكية، وتسجيل الإقامة، والوثائق القانونية، وإدارة الإيجار، والدعم بعد الشراء — نحن بجانبك في كل مرحلة.',
      },
    ],
    servicesTitle: 'خدماتنا العقارية المتخصصة',
    services: [
      {
        title: 'شقق فاخرة ومساكن متميزة',
        description: 'منازل حصرية في أكثر مواقع إسطنبول استراتيجية وبرستيجًا.',
      },
      {
        title: 'الجنسية التركية عبر الاستثمار العقاري',
        description: 'إرشاد مهني للمستثمرين الباحثين عن الجنسية التركية من خلال فرص عقارية مؤهلة.',
      },
      {
        title: 'عقارات استثمارية عالية العائد',
        description: 'مشاريع مختارة لعوائد إيجار قوية، وإمكانات ارتفاع القيمة، وموقع طويل الأمد في السوق.',
      },
      {
        title: 'عقارات جاهزة للسكن',
        description: 'شقق ومباني حديثة متاحة للسكن الفوري أو التأجير مباشرة.',
      },
      {
        title: 'مساعدة قانونية وإقامة شاملة',
        description: 'إجراءات الشراء، ومعاملات سند الملكية، وتصاريح السكن، وتسجيل الإقامة، ودعم التأجير.',
      },
    ],
    promiseTitle: 'وعدنا القائم على الثقة',
    promiseItems: [
      'الشفافية',
      'حماية المستثمر',
      'اختيار عقاري استراتيجي',
      'رضا العملاء',
      'ثقة استشارية قابلة للاسترداد',
    ],
    promiseClosing:
      'نلتزم بتقديم أكثر من خيارات عقارية — بل الوضوح والأمان والثقة.',
    differenceTitle: 'فرق Residence Istanbul',
    differenceLines: [
      'لسنا وسطاء.',
      'لسنا وكلاء مبيعات.',
      'نحن مستشارون استراتيجيون للاستثمار العقاري.',
    ],
    mission:
      'مهمتنا بسيطة: مساعدتك في الحصول على العقار المناسب، في المكان المناسب، للغرض المناسب — بثقة.',
  },
  fa: {
    whyGlobalTitle: 'چرا سرمایه‌گذاران جهانی Residence Istanbul را انتخاب می‌کنند',
    whyGlobalIntro:
      'در Residence Istanbul می‌دانیم که خرید ملک در ترکیه بیش از یک معامله است — یک تصمیم استراتژیک زندگی است.',
    pillars: [
      {
        title: 'آگاهی بازار',
        description:
          'دانش عمیق از سریع‌ترین مناطق در حال رشد استانبول، پروژه‌های لوکس، مناطق متصل به فرودگاه و کریدورهای سرمایه‌گذاری پرتقاضا.',
      },
      {
        title: 'تطبیق ملک شخصی‌سازی‌شده',
        description:
          'املاک را بر اساس منطقه مورد نظر، هدف سرمایه‌گذاری، واجد شرایط بودن تابعیت، انتظارات اجاره، نزدیکی فرودگاه، اولویت‌های سبک زندگی و استراتژی بودجه انتخاب می‌کنیم.',
      },
      {
        title: 'پشتیبانی سرمایه‌گذاری جامع',
        description:
          'از اولین مشاوره تا سند مالکیت، ثبت اقامت، مدارک حقوقی، مدیریت اجاره و پشتیبانی پس از خرید — در هر مرحله در کنار شما هستیم.',
      },
    ],
    servicesTitle: 'خدمات تخصصی املاک ما',
    services: [
      {
        title: 'آپارتمان‌های لوکس و اقامتگاه‌های ممتاز',
        description: 'خانه‌های انحصاری در استراتژیک‌ترین و معتبرترین مناطق استانبول.',
      },
      {
        title: 'تابعیت ترکیه از طریق سرمایه‌گذاری املاک',
        description: 'راهنمایی حرفه‌ای برای سرمایه‌گذارانی که از طریق فرصت‌های واجد شرایط به تابعیت ترکیه می‌رسند.',
      },
      {
        title: 'املاک سرمایه‌گذاری با بازده بالا',
        description: 'پروژه‌هایی انتخاب‌شده برای بازده اجاره قوی، پتانسیل افزایش ارزش و موقعیت بلندمدت بازار.',
      },
      {
        title: 'املاک آماده سکونت',
        description: 'آپارتمان‌ها و ساختمان‌های مدرن برای سکونت فوری یا فعال‌سازی اجاره.',
      },
      {
        title: 'کمک حقوقی و اقامت از ابتدا تا انتها',
        description: 'فرآیندهای خرید، صدور سند، مجوز سکونت، ثبت اقامت و پشتیبانی اجاره.',
      },
    ],
    promiseTitle: 'وعده مبتنی بر اعتماد ما',
    promiseItems: [
      'شفافیت',
      'حفاظت از سرمایه‌گذار',
      'انتخاب استراتژیک ملک',
      'رضایت مشتری',
      'اطمینان مشاوره قابل استرداد',
    ],
    promiseClosing:
      'متعهدیم نه تنها گزینه‌های ملکی، بلکه وضوح، امنیت و اطمینان ارائه دهیم.',
    differenceTitle: 'تفاوت Residence Istanbul',
    differenceLines: [
      'ما کارگزار نیستیم.',
      'ما نماینده فروش نیستیم.',
      'ما مشاوران استراتژیک سرمایه‌گذاری املاک هستیم.',
    ],
    mission:
      'ماموریت ما ساده است: کمک به شما برای به دست آوردن ملک مناسب، در مکان مناسب، برای هدف مناسب — با اطمینان.',
  },
  ur: {
    whyGlobalTitle: 'عالمی سرمایہ کار Residence Istanbul کیوں منتخب کرتے ہیں',
    whyGlobalIntro:
      'Residence Istanbul میں ہم سمجھتے ہیں کہ ترکی میں جائیداد خریدنا صرف ایک لین دین نہیں — یہ ایک اسٹریٹجک زندگی کا فیصلہ ہے۔',
    pillars: [
      {
        title: 'مارکیٹ انٹیلیجنس',
        description:
          'استنبول کے تیزی سے بڑھتے علاقوں، لگژری منصوبوں، ہوائی اڈے سے منسلک زونز اور اعلیٰ طلب والے سرمایہ کاری راستوں کا گہرا علم۔',
      },
      {
        title: 'ذاتی نوعیت کی جائیداد میچنگ',
        description:
          'ہم آپ کے پسندیدہ علاقے، سرمایہ کاری کے مقصد، شہریت کی اہلیت، کرایے کی توقعات، ہوائی اڈے کی قربت، طرز زندگی کی ترجیحات اور بجٹ کی حکمت عملی کے مطابق جائیداد منتخب کرتے ہیں۔',
      },
      {
        title: 'مکمل سرمایہ کاری سپورٹ',
        description:
          'پہلی مشاورت سے لے کر ٹائٹل ڈیڈ، رہائش کی رجسٹریشن، قانونی دستاویزات، کرایہ انتظام اور خرید کے بعد کی مدد تک — ہر مرحلے پر آپ کے ساتھ۔',
      },
    ],
    servicesTitle: 'ہماری مخصوص رئیل اسٹیٹ خدمات',
    services: [
      {
        title: 'لگژری اپارٹمنٹس اور پریمیم رہائش',
        description: 'استنبول کے سب سے اسٹریٹجک اور معزز مقامات میں خصوصی گھر۔',
      },
      {
        title: 'جائیداد کی سرمایہ کاری سے ترک شہریت',
        description: 'اہل جائیداد کے مواقع کے ذریعے ترک شہریت چاہنے والے سرمایہ کاروں کے لیے پیشہ ورانہ رہنمائی۔',
      },
      {
        title: 'اعلیٰ منافع والی سرمایہ کاری جائیدادیں',
        description: 'مضبوط کرایے، قدر میں اضافے اور طویل مدتی مارکیٹ پوزیشن کے لیے منتخب منصوبے۔',
      },
      {
        title: 'فوری رہائش کے قابل جائیدادیں',
        description: 'فوری رہائش یا کرایے کے لیے دستیاب جدید اپارٹمنٹس اور عمارتیں۔',
      },
      {
        title: 'مکمل قانونی اور رہائش کی مدد',
        description: 'خریداری کے طریقے، ٹائٹل ڈیڈ، رہائش کے پرمٹ، رہائش کی رجسٹریشن اور کرایہ سپورٹ۔',
      },
    ],
    promiseTitle: 'ہمارا اعتماد پر مبنی وعدہ',
    promiseItems: [
      'شفافیت',
      'سرمایہ کار کا تحفظ',
      'اسٹریٹجک جائیداد کا انتخاب',
      'گاہک کی اطمینان',
      'واپس کی جانے والی مشاورت کا اعتماد',
    ],
    promiseClosing:
      'ہم صرف جائیداد کے اختیارات نہیں — وضاحت، سلامتی اور اعتماد فراہم کرنے کے پابند ہیں۔',
    differenceTitle: 'Residence Istanbul کا فرق',
    differenceLines: [
      'ہم بروکر نہیں ہیں۔',
      'ہم سیلز ایجنٹ نہیں ہیں۔',
      'ہم اسٹریٹجک رئیل اسٹیٹ سرمایہ کاری مشیر ہیں۔',
    ],
    mission:
      'ہمارا مشن سادہ ہے: صحیح مقصد کے لیے، صحیح جگہ پر، صحیح جائیداد حاصل کرنے میں آپ کی مدد — اعتماد کے ساتھ۔',
  },
  ru: {
    whyGlobalTitle: 'Почему мировые инвесторы выбирают Residence Istanbul',
    whyGlobalIntro:
      'В Residence Istanbul мы понимаем, что покупка недвижимости в Турции — это не просто сделка, а стратегическое жизненное решение.',
    pillars: [
      {
        title: 'Аналитика рынка',
        description:
          'Глубокое знание самых быстрорастущих районов Стамбула, роскошных проектов, зон у аэропортов и востребованных инвестиционных коридоров.',
      },
      {
        title: 'Индивидуальный подбор недвижимости',
        description:
          'Мы подбираем объекты по вашему району, инвестиционной цели, гражданству, арендным ожиданиям, близости к аэропорту, образу жизни и бюджету.',
      },
      {
        title: 'Комплексная инвестиционная поддержка',
        description:
          'От первой консультации до tapu, регистрации проживания, документов, управления арендой и постпродажной поддержки — мы рядом на каждом этапе.',
      },
    ],
    servicesTitle: 'Наши специализированные услуги',
    services: [
      {
        title: 'Люксовые квартиры и премиальные резиденции',
        description: 'Эксклюзивные дома в самых стратегических и престижных локациях Стамбула.',
      },
      {
        title: 'Турецкое гражданство через инвестиции',
        description: 'Профессиональное сопровождение для инвесторов, стремящихся получить гражданство через квалифицированные объекты.',
      },
      {
        title: 'Высокодоходные инвестиционные объекты',
        description: 'Проекты с сильной арендной доходностью, потенциалом роста и долгосрочной позицией на рынке.',
      },
      {
        title: 'Готовые к заселению объекты',
        description: 'Современные квартиры и здания для немедленного проживания или сдачи в аренду.',
      },
      {
        title: 'Полное юридическое и миграционное сопровождение',
        description: 'Покупка, оформление tapu, разрешения на проживание, регистрация и арендная поддержка.',
      },
    ],
    promiseTitle: 'Наше обещание, основанное на доверии',
    promiseItems: [
      'Прозрачность',
      'Защита инвестора',
      'Стратегический подбор недвижимости',
      'Удовлетворенность клиентов',
      'Возврат консультационных услуг при неудовлетворенности',
    ],
    promiseClosing:
      'Мы обязуемся предоставлять не только варианты недвижимости, но и ясность, безопасность и уверенность.',
    differenceTitle: 'Отличие Residence Istanbul',
    differenceLines: [
      'Мы не брокеры.',
      'Мы не агенты по продажам.',
      'Мы стратегические консультанты по инвестициям в недвижимость.',
    ],
    mission:
      'Наша миссия проста: помочь вам получить правильный объект в правильном месте для правильной цели — с уверенностью.',
  },
};

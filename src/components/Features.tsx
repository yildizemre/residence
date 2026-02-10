import React from 'react';
import { Users, Scale, HeadphonesIcon, DollarSign } from 'lucide-react';
import { useLanguage } from '../LanguageContext';

const Features: React.FC = () => {
  const { t } = useLanguage();

  const features = [
    {
      icon: Users,
      title: t.features.feature1.title,
      description: t.features.feature1.description,
      gradient: 'from-blue-500 to-cyan-500',
    },
    {
      icon: Scale,
      title: t.features.feature2.title,
      description: t.features.feature2.description,
      gradient: 'from-purple-500 to-pink-500',
    },
    {
      icon: HeadphonesIcon,
      title: t.features.feature3.title,
      description: t.features.feature3.description,
      gradient: 'from-green-500 to-emerald-500',
    },
    {
      icon: DollarSign,
      title: t.features.feature4.title,
      description: t.features.feature4.description,
      gradient: 'from-amber-500 to-orange-500',
    },
  ];

  return (
    <section className="py-16 md:py-20 bg-gradient-to-b from-slate-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10 md:mb-12">
          <h2 className="text-xl md:text-2xl lg:text-3xl font-bold text-slate-800 mb-3">{t.features.title}</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group relative bg-white rounded-2xl p-6 hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-slate-100 overflow-hidden"
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}></div>

              <div className="relative z-10">
                <div className={`w-12 h-12 md:w-14 md:h-14 rounded-xl bg-gradient-to-br ${feature.gradient} flex items-center justify-center mb-4 shadow-lg transform group-hover:scale-110 group-hover:rotate-12 transition-all duration-500`}>
                  <feature.icon size={24} className="text-white" />
                </div>

                <h3 className="text-base md:text-lg font-bold text-slate-800 mb-2 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:${feature.gradient} transition-all duration-300">
                  {feature.title}
                </h3>

                <p className="text-xs md:text-sm text-slate-600 leading-relaxed">{feature.description}</p>
              </div>

              <div className={`absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r ${feature.gradient} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left`}></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;

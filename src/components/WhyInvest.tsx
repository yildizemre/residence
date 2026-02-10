import React from 'react';
import { Shield, TrendingUp, MapPinned, Sparkles } from 'lucide-react';
import { useLanguage } from '../LanguageContext';

const WhyInvest: React.FC = () => {
  const { t } = useLanguage();

  const benefits = [
    {
      icon: Shield,
      title: t.whyInvest.citizenship.title,
      description: t.whyInvest.citizenship.description,
      color: 'from-blue-500 to-blue-600',
    },
    {
      icon: TrendingUp,
      title: t.whyInvest.roi.title,
      description: t.whyInvest.roi.description,
      color: 'from-amber-500 to-amber-600',
    },
    {
      icon: MapPinned,
      title: t.whyInvest.location.title,
      description: t.whyInvest.location.description,
      color: 'from-green-500 to-green-600',
    },
  ];

  return (
    <section
      id="why-invest"
      className="relative py-24 md:py-40 text-white overflow-hidden"
      style={{
        backgroundImage: 'url(https://images.pexels.com/photos/2064827/pexels-photo-2064827.jpeg?auto=compress&cs=tinysrgb&w=1920)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed',
      }}
    >
      <div className="absolute inset-0 bg-slate-900/85 backdrop-blur-sm"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold tracking-tight mb-3">{t.whyInvest.title}</h2>
          <div className="w-20 h-1 bg-amber-500 mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-16">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="group text-center"
            >
              <div
                className={`w-16 h-16 mx-auto rounded-xl bg-gradient-to-br ${benefit.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500 shadow-2xl`}
              >
                <benefit.icon size={28} className="text-white" />
              </div>
              <h3 className="text-lg md:text-xl font-bold mb-4 tracking-tight">{benefit.title}</h3>
              <p className="text-sm md:text-base text-slate-300 leading-relaxed">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyInvest;

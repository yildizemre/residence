import React from 'react';
import { BarChart3, Target, ShieldCheck, Building2, Landmark, TrendingUp, Key, Scale, Check } from 'lucide-react';
import { useLanguage } from '../LanguageContext';

const pillarIcons = [BarChart3, Target, ShieldCheck];
const serviceIcons = [Building2, Landmark, TrendingUp, Key, Scale];

const CompanyOverview: React.FC = () => {
  const { t, isRTL } = useLanguage();
  const o = t.overview;

  return (
    <section id="services" className="py-24 md:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 max-w-4xl mx-auto">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-slate-900 tracking-tight mb-4">
            {o.whyGlobalTitle}
          </h2>
          <div className="w-20 h-1 bg-amber-500 mx-auto rounded-full mb-6"></div>
          <p className="text-base md:text-lg text-slate-600 leading-relaxed">{o.whyGlobalIntro}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          {o.pillars.map((pillar, index) => {
            const Icon = pillarIcons[index] ?? BarChart3;
            return (
              <div
                key={index}
                className="bg-slate-50 rounded-2xl p-8 border border-slate-100 hover:shadow-xl transition-all duration-300"
              >
                <div className="w-14 h-14 bg-amber-500/10 rounded-xl flex items-center justify-center mb-5">
                  <Icon className="text-amber-600" size={28} />
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-3">{pillar.title}</h3>
                <p className="text-sm md:text-base text-slate-600 leading-relaxed">{pillar.description}</p>
              </div>
            );
          })}
        </div>

        <div className="mb-20">
          <h3 className="text-xl md:text-2xl font-bold text-slate-900 text-center mb-10">{o.servicesTitle}</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {o.services.map((service, index) => {
              const Icon = serviceIcons[index] ?? Building2;
              return (
                <div
                  key={index}
                  className="group p-6 rounded-2xl border border-slate-200 hover:border-amber-400 hover:shadow-lg transition-all duration-300"
                >
                  <Icon className="text-amber-600 mb-4 group-hover:scale-110 transition-transform" size={26} />
                  <h4 className="font-bold text-slate-900 mb-2">{service.title}</h4>
                  <p className="text-sm text-slate-600 leading-relaxed">{service.description}</p>
                </div>
              );
            })}
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <div className="bg-slate-900 text-white rounded-3xl p-8 md:p-10">
            <h3 className="text-xl md:text-2xl font-bold mb-6">{o.promiseTitle}</h3>
            <ul className="space-y-3 mb-6">
              {o.promiseItems.map((item, index) => (
                <li key={index} className="flex items-start gap-3">
                  <Check className="text-amber-400 flex-shrink-0 mt-0.5" size={20} />
                  <span className="text-slate-200">{item}</span>
                </li>
              ))}
            </ul>
            <p className="text-slate-300 leading-relaxed">{o.promiseClosing}</p>
          </div>

          <div className={isRTL ? 'text-right' : ''}>
            <h3 className="text-xl md:text-2xl font-bold text-slate-900 mb-6">{o.differenceTitle}</h3>
            <div className="space-y-3 mb-8">
              {o.differenceLines.map((line, index) => (
                <p key={index} className="text-lg text-slate-700 font-medium">
                  {line}
                </p>
              ))}
            </div>
            <p className={`text-base md:text-lg text-slate-600 leading-relaxed ${isRTL ? 'border-r-4 border-amber-500 pr-5' : 'border-l-4 border-amber-500 pl-5'}`}>
              {o.mission}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CompanyOverview;

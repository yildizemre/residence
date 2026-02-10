import React from 'react';
import { Search, Home, FileCheck, Award } from 'lucide-react';
import { useLanguage } from '../LanguageContext';

const Process: React.FC = () => {
  const { t } = useLanguage();

  const steps = [
    {
      icon: Search,
      title: t.process.step1.title,
      description: t.process.step1.description,
      number: '01',
      color: 'from-blue-500 to-blue-600',
    },
    {
      icon: Home,
      title: t.process.step2.title,
      description: t.process.step2.description,
      number: '02',
      color: 'from-green-500 to-green-600',
    },
    {
      icon: FileCheck,
      title: t.process.step3.title,
      description: t.process.step3.description,
      number: '03',
      color: 'from-amber-500 to-amber-600',
    },
    {
      icon: Award,
      title: t.process.step4.title,
      description: t.process.step4.description,
      number: '04',
      color: 'from-purple-500 to-purple-600',
    },
  ];

  return (
    <section id="process" className="py-16 md:py-20 bg-white relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-amber-50 via-transparent to-transparent opacity-50"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10 md:mb-12">
          <h2 className="text-xl md:text-2xl lg:text-3xl font-bold text-slate-800 mb-3">{t.process.title}</h2>
          <p className="text-xs md:text-sm text-slate-600 max-w-2xl mx-auto">{t.process.subtitle}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, index) => (
            <div
              key={index}
              className="relative group"
            >
              <div className="absolute top-12 left-0 w-full h-1 bg-gradient-to-r from-transparent via-amber-200 to-transparent hidden lg:block"></div>

              <div className="relative bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-slate-100">
                <div className="absolute -top-5 left-6">
                  <div className={`w-12 h-12 md:w-14 md:h-14 rounded-xl bg-gradient-to-br ${step.color} flex items-center justify-center shadow-xl transform group-hover:scale-110 group-hover:rotate-6 transition-all duration-300`}>
                    <step.icon size={24} className="text-white" />
                  </div>
                </div>

                <div className="mt-10">
                  <div className="text-3xl md:text-4xl font-bold text-slate-100 mb-2">{step.number}</div>
                  <h3 className="text-base md:text-lg font-bold text-slate-800 mb-2">{step.title}</h3>
                  <p className="text-xs md:text-sm text-slate-600 leading-relaxed">{step.description}</p>
                </div>

                <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-amber-500 to-transparent transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-10 md:mt-12 text-center">
          <a
            href="https://wa.me/905069691161"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-5 md:px-6 py-2.5 md:py-3 bg-gradient-to-r from-amber-500 to-amber-600 text-white font-semibold text-xs md:text-sm rounded-lg hover:from-amber-600 hover:to-amber-700 transition-all duration-300 transform hover:scale-105 shadow-xl hover:shadow-2xl"
          >
            Start Your Journey Today
          </a>
        </div>
      </div>
    </section>
  );
};

export default Process;

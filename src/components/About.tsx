import React from 'react';
import { Building2, Award, Users, TrendingUp } from 'lucide-react';
import { useLanguage } from '../LanguageContext';

const About: React.FC = () => {
  const { t, isRTL } = useLanguage();

  const stats = [
    { icon: Building2, value: '15+', label: t.about.stats.years },
    { icon: Award, value: '50+', label: t.about.stats.projects },
    { icon: Users, value: '500+', label: t.about.stats.clients },
    { icon: TrendingUp, value: '%98', label: t.about.stats.success },
  ];

  return (
    <section id="about" className="py-24 md:py-32 bg-gradient-to-br from-slate-50 via-white to-amber-50/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className={isRTL ? 'lg:order-2' : ''}>
            <div className="mb-6">
              <span className="text-amber-600 font-semibold text-sm tracking-wider uppercase">{t.about.badge}</span>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 mt-3 mb-6 leading-tight">
                {t.about.title}
              </h2>
              <div className="w-20 h-1 bg-amber-500 rounded-full mb-8"></div>
            </div>

            <div className="space-y-5 text-slate-600 leading-relaxed">
              <p className="text-base md:text-lg">
                {t.about.description1}
              </p>
              <p className="text-base md:text-lg">
                {t.about.description2}
              </p>
              <p className="text-base md:text-lg">
                {t.about.description3}
              </p>
            </div>

            <div className="mt-10">
              <a
                href="https://wa.me/905069691161"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-8 py-4 bg-slate-900 text-white font-semibold rounded-xl hover:bg-amber-600 transition-all duration-300 shadow-lg hover:shadow-2xl hover:scale-105"
              >
                {t.about.cta}
              </a>
            </div>
          </div>

          <div className={isRTL ? 'lg:order-1' : ''}>
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-amber-500/20 to-slate-900/20 rounded-3xl blur-2xl"></div>
              <img
                src="https://images.pexels.com/photos/3760263/pexels-photo-3760263.jpeg?auto=compress&cs=tinysrgb&w=1200"
                alt="Modern Architecture Istanbul"
                className="relative rounded-2xl shadow-2xl w-full h-[500px] object-cover"
              />
            </div>

            <div className="grid grid-cols-2 gap-6 mt-12">
              {stats.map((stat, index) => (
                <div
                  key={index}
                  className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-slate-100"
                >
                  <stat.icon className="text-amber-600 mb-3" size={32} />
                  <div className="text-3xl font-bold text-slate-900 mb-1">{stat.value}</div>
                  <div className="text-sm text-slate-600">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

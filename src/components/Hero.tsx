import React, { useEffect, useState } from 'react';
import { ChevronDown, Star } from 'lucide-react';
import { useLanguage } from '../LanguageContext';

const Hero: React.FC = () => {
  const { t } = useLanguage();
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToProjects = () => {
    const element = document.getElementById('projects');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="home"
      className="relative h-screen flex items-center justify-center overflow-hidden"
      style={{
        backgroundImage: 'url(/1.jpeg)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed',
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/70"></div>

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1
          className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-5 leading-[1.1] tracking-tight animate-slide-up"
          style={{
            textShadow: '0 8px 32px rgba(0,0,0,0.6)',
          }}
        >
          {t.hero.title}
        </h1>

        <p className="text-base md:text-lg text-white/90 mb-10 max-w-3xl mx-auto font-light animate-slide-up animation-delay-200">
          {t.hero.subtitle}
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-slide-up animation-delay-400">
          <button
            onClick={scrollToProjects}
            className="px-7 md:px-8 py-3.5 bg-white text-slate-900 font-semibold text-base rounded-full hover:bg-amber-500 hover:text-white transition-all duration-500 shadow-2xl hover:shadow-amber-500/50 hover:scale-105"
          >
            {t.hero.cta}
          </button>

          <a
            href="https://wa.me/905069691161"
            target="_blank"
            rel="noopener noreferrer"
            className="px-7 md:px-8 py-3.5 bg-white/10 backdrop-blur-md text-white font-semibold text-base rounded-full border-2 border-white/30 hover:bg-white/20 hover:border-white/50 transition-all duration-500 hover:scale-105"
          >
            Contact Us
          </a>
        </div>
      </div>

      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ChevronDown className="text-white/60" size={48} />
      </div>

      <style>{`
        @keyframes fade-in {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

        @keyframes slide-up {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fade-in {
          animation: fade-in 0.8s ease-out forwards;
        }

        .animate-slide-up {
          animation: slide-up 0.8s ease-out forwards;
          opacity: 0;
        }

        .animation-delay-200 {
          animation-delay: 200ms;
        }

        .animation-delay-400 {
          animation-delay: 400ms;
        }
      `}</style>
    </section>
  );
};

export default Hero;

import React, { useState } from 'react';
import { Menu, X, Globe } from 'lucide-react';
import { useLanguage } from '../LanguageContext';
import { Language } from '../i18n';

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLangMenuOpen, setIsLangMenuOpen] = useState(false);
  const { language, setLanguage, t, isRTL } = useLanguage();

  const languages: { code: Language; name: string; flag: string }[] = [
    { code: 'en', name: 'English', flag: '🇬🇧' },
    { code: 'tr', name: 'Türkçe', flag: '🇹🇷' },
    { code: 'ar', name: 'العربية', flag: '🇸🇦' },
    { code: 'ru', name: 'Русский', flag: '🇷🇺' },
    { code: 'fa', name: 'فارسی', flag: '🇮🇷' },
    { code: 'ur', name: 'اردو', flag: '🇵🇰' },
  ];

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-xl shadow-sm border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-24">
          <div className="flex items-center">
            <div className="flex items-center space-x-3">
              <img
                src="/residence-removebg-preview.png"
                alt="Residence Istanbul"
                className="h-12 sm:h-14 w-auto object-contain"
              />
            </div>
          </div>

          <div className="hidden md:flex items-center space-x-8">
            <button
              onClick={() => scrollToSection('home')}
              className="text-slate-700 hover:text-amber-600 transition-colors font-medium"
            >
              {t.nav.home}
            </button>
            <button
              onClick={() => scrollToSection('about')}
              className="text-slate-700 hover:text-amber-600 transition-colors font-medium"
            >
              {t.nav.about}
            </button>
            <button
              onClick={() => scrollToSection('projects')}
              className="text-slate-700 hover:text-amber-600 transition-colors font-medium"
            >
              {t.nav.projects}
            </button>
            <button
              onClick={() => scrollToSection('gallery')}
              className="text-slate-700 hover:text-amber-600 transition-colors font-medium"
            >
              {t.nav.gallery}
            </button>
            <button
              onClick={() => scrollToSection('why-invest')}
              className="text-slate-700 hover:text-amber-600 transition-colors font-medium"
            >
              {t.nav.whyInvest}
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="text-slate-700 hover:text-amber-600 transition-colors font-medium"
            >
              {t.nav.contact}
            </button>

            <div className="relative">
              <button
                onClick={() => setIsLangMenuOpen(!isLangMenuOpen)}
                className="flex items-center space-x-2 px-4 py-2 rounded-lg border border-slate-300 hover:border-amber-600 transition-colors"
              >
                <Globe size={20} className="text-amber-600" />
                <span className="text-sm font-medium text-slate-700">
                  {languages.find((l) => l.code === language)?.flag}
                </span>
              </button>

              {isLangMenuOpen && (
                <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-xl border border-slate-200 overflow-hidden">
                  {languages.map((lang) => (
                    <button
                      key={lang.code}
                      onClick={() => {
                        setLanguage(lang.code);
                        setIsLangMenuOpen(false);
                      }}
                      className={`w-full px-4 py-3 text-left hover:bg-amber-50 transition-colors flex items-center space-x-3 ${
                        language === lang.code ? 'bg-amber-100' : ''
                      }`}
                    >
                      <span className="text-xl">{lang.flag}</span>
                      <span className="text-sm font-medium text-slate-700">{lang.name}</span>
                    </button>
                  ))}
                </div>
              )}
            </div>
          </div>

          <div className="md:hidden flex items-center space-x-2">
            <button
              onClick={() => setIsLangMenuOpen(!isLangMenuOpen)}
              className="p-2 rounded-lg border border-slate-300"
            >
              <Globe size={20} className="text-amber-600" />
            </button>
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 rounded-lg border border-slate-300"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {isMenuOpen && (
        <div className="md:hidden bg-white border-t border-slate-200">
          <div className="px-4 py-4 space-y-3">
            <button
              onClick={() => scrollToSection('home')}
              className="block w-full text-left px-4 py-2 text-slate-700 hover:bg-amber-50 rounded-lg"
            >
              {t.nav.home}
            </button>
            <button
              onClick={() => scrollToSection('about')}
              className="block w-full text-left px-4 py-2 text-slate-700 hover:bg-amber-50 rounded-lg"
            >
              {t.nav.about}
            </button>
            <button
              onClick={() => scrollToSection('projects')}
              className="block w-full text-left px-4 py-2 text-slate-700 hover:bg-amber-50 rounded-lg"
            >
              {t.nav.projects}
            </button>
            <button
              onClick={() => scrollToSection('gallery')}
              className="block w-full text-left px-4 py-2 text-slate-700 hover:bg-amber-50 rounded-lg"
            >
              {t.nav.gallery}
            </button>
            <button
              onClick={() => scrollToSection('why-invest')}
              className="block w-full text-left px-4 py-2 text-slate-700 hover:bg-amber-50 rounded-lg"
            >
              {t.nav.whyInvest}
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="block w-full text-left px-4 py-2 text-slate-700 hover:bg-amber-50 rounded-lg"
            >
              {t.nav.contact}
            </button>
          </div>
        </div>
      )}

      {isLangMenuOpen && (
        <div className="md:hidden bg-white border-t border-slate-200">
          <div className="px-4 py-4 grid grid-cols-2 gap-2">
            {languages.map((lang) => (
              <button
                key={lang.code}
                onClick={() => {
                  setLanguage(lang.code);
                  setIsLangMenuOpen(false);
                }}
                className={`px-4 py-3 rounded-lg border transition-colors flex items-center justify-center space-x-2 ${
                  language === lang.code
                    ? 'bg-amber-100 border-amber-600'
                    : 'border-slate-300 hover:bg-amber-50'
                }`}
              >
                <span className="text-xl">{lang.flag}</span>
                <span className="text-sm font-medium">{lang.name}</span>
              </button>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;

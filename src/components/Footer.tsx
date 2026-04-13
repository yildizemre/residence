import React from 'react';
import { MapPin, Phone, Mail, Instagram, Facebook, Linkedin } from 'lucide-react';
import { useLanguage } from '../LanguageContext';

const Footer: React.FC = () => {
  const { t, isRTL } = useLanguage();
  const contactEmail = 'residenceistanbulturkey@gmail.com';

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const quickLinks = [
    { label: t.nav.home, id: 'home' },
    { label: t.nav.about, id: 'about' },
    { label: t.nav.projects, id: 'projects' },
    { label: t.nav.whyInvest, id: 'why-invest' },
    { label: t.nav.contact, id: 'contact' },
  ];

  const socialLinks = [
    { icon: Instagram, url: 'https://instagram.com', label: 'Instagram' },
    { icon: Facebook, url: 'https://facebook.com', label: 'Facebook' },
    { icon: Linkedin, url: 'https://linkedin.com', label: 'LinkedIn' },
  ];

  return (
    <footer className="bg-slate-950 text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          <div>
            <div className="flex items-center space-x-3 mb-6">
              <img
                src="/residence-removebg-preview.png"
                alt="Residence Istanbul"
                className="h-12 w-auto object-contain"
              />
            </div>
            <p className="text-slate-400 text-sm leading-relaxed mb-6">
              {t.about.badge}
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-slate-900 rounded-lg flex items-center justify-center hover:bg-amber-600 transition-colors duration-300"
                  aria-label={social.label}
                >
                  <social.icon size={18} />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-6">{t.footer.quickLinks}</h3>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <button
                    onClick={() => scrollToSection(link.id)}
                    className="text-slate-400 hover:text-amber-500 transition-colors duration-300 text-sm"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-6">{t.footer.contact}</h3>
            <ul className="space-y-4">
              <li className="flex items-start space-x-3">
                <MapPin size={18} className="text-amber-500 mt-1 flex-shrink-0" />
                <span className="text-slate-400 text-sm">{t.footer.address}</span>
              </li>
              <li className="flex items-start space-x-3">
                <Phone size={18} className="text-amber-500 mt-1 flex-shrink-0" />
                <a
                  href={`tel:${t.footer.phone}`}
                  className="text-slate-400 hover:text-amber-500 transition-colors duration-300 text-sm"
                >
                  {t.footer.phone}
                </a>
              </li>
              <li className="flex items-start space-x-3">
                <Mail size={18} className="text-amber-500 mt-1 flex-shrink-0" />
                <a
                  href={`mailto:${contactEmail}`}
                  className="text-slate-400 hover:text-amber-500 transition-colors duration-300 text-sm"
                >
                  {contactEmail}
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-6">{t.footer.about}</h3>
            <p className="text-slate-400 text-sm leading-relaxed">
              {t.footer.aboutText}
            </p>
          </div>
        </div>

        <div className="border-t border-slate-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-slate-500 text-sm mb-4 md:mb-0">{t.footer.rights}</div>
            <div className="flex space-x-6">
              <a
                href="#"
                className="text-slate-500 hover:text-amber-500 transition-colors duration-300 text-sm"
              >
                Privacy Policy
              </a>
              <a
                href="#"
                className="text-slate-500 hover:text-amber-500 transition-colors duration-300 text-sm"
              >
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

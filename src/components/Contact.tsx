import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import { useLanguage } from '../LanguageContext';

const Contact: React.FC = () => {
  const { t, isRTL } = useLanguage();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const w = t.contact.whatsappLabels;
    const whatsappMessage = `${w.name}: ${formData.name}%0A${w.email}: ${formData.email}%0A${w.phone}: ${formData.phone}%0A${w.message}: ${formData.message}`;
    window.open(`https://wa.me/905069691161?text=${whatsappMessage}`, '_blank');
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section id="contact" className="py-24 md:py-40 bg-slate-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-slate-900 tracking-tight mb-3">{t.contact.title}</h2>
          <div className="w-20 h-1 bg-amber-500 mx-auto rounded-full"></div>
        </div>

        <div className="max-w-2xl mx-auto">
          <form onSubmit={handleSubmit} className="space-y-7">
                <div>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    placeholder={t.contact.name}
                    className="w-full px-6 py-3.5 bg-white border-2 border-slate-200 rounded-xl focus:border-amber-500 focus:outline-none transition-all text-base shadow-sm"
                  />
                </div>

                <div>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder={t.contact.email}
                    className="w-full px-6 py-3.5 bg-white border-2 border-slate-200 rounded-xl focus:border-amber-500 focus:outline-none transition-all text-base shadow-sm"
                  />
                </div>

                <div>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    placeholder={t.contact.phone}
                    className="w-full px-6 py-3.5 bg-white border-2 border-slate-200 rounded-xl focus:border-amber-500 focus:outline-none transition-all text-base shadow-sm"
                  />
                </div>

                <div>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    placeholder={t.contact.message}
                    className="w-full px-6 py-3.5 bg-white border-2 border-slate-200 rounded-xl focus:border-amber-500 focus:outline-none transition-all resize-none text-base shadow-sm"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full px-7 py-4 bg-slate-900 text-white font-bold text-base rounded-xl hover:bg-amber-500 transition-all duration-500 shadow-xl hover:shadow-2xl hover:scale-105"
                >
                  <span>{t.contact.submit}</span>
                  <Send size={18} className={isRTL ? 'mr-2 inline' : 'ml-2 inline'} />
                </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;

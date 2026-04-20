import React from 'react';
import { MessageCircle } from 'lucide-react';
import { useLanguage } from '../LanguageContext';

const WhatsAppButton: React.FC = () => {
  const { t } = useLanguage();

  const handleClick = () => {
    window.open('https://wa.me/905069691161', '_blank');
  };

  return (
    <button
      onClick={handleClick}
      className="fixed bottom-6 right-6 z-50 w-16 h-16 bg-green-500 hover:bg-green-600 text-white rounded-full shadow-2xl hover:shadow-3xl transition-all duration-300 transform hover:scale-110 flex items-center justify-center group"
      aria-label={t.footer.whatsappAria}
    >
      <MessageCircle size={28} className="group-hover:scale-110 transition-transform" />
      <span className="absolute -top-2 -right-2 w-6 h-6 bg-red-500 rounded-full flex items-center justify-center text-xs font-bold animate-pulse">
        1
      </span>
    </button>
  );
};

export default WhatsAppButton;

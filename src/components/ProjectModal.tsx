import React, { useEffect, useState } from 'react';
import { X, MapPin, Home, Maximize, Bath, Bed, ChevronLeft, ChevronRight } from 'lucide-react';
import { useLanguage } from '../LanguageContext';

interface ProjectModalProps {
  project: any;
  isOpen: boolean;
  onClose: () => void;
}

const ProjectModal: React.FC<ProjectModalProps> = ({ project, isOpen, onClose }) => {
  const { language, t, isRTL } = useLanguage();
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  if (!isOpen || !project) return null;

  const getProjectTitle = () => {
    switch (language) {
      case 'ar':
        return project.titleAr;
      case 'ru':
        return project.titleRu;
      case 'fa':
        return project.titleFa;
      case 'tr':
        return project.titleTr;
      case 'ur':
        return project.titleUr;
      default:
        return project.titleEn;
    }
  };

  const getProjectDescription = () => {
    switch (language) {
      case 'ar':
        return project.descriptionAr;
      case 'ru':
        return project.descriptionRu;
      case 'fa':
        return project.descriptionFa;
      case 'tr':
        return project.descriptionTr;
      case 'ur':
        return project.descriptionUr;
      default:
        return project.descriptionEn;
    }
  };

  const getProjectLocation = () => {
    switch (language) {
      case 'ar':
        return project.locationAr;
      case 'ru':
        return project.locationRu;
      case 'fa':
        return project.locationFa;
      case 'tr':
        return project.locationTr;
      case 'ur':
        return project.locationUr;
      default:
        return project.locationEn;
    }
  };

  const images = project.images || [project.image];

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/90 backdrop-blur-sm animate-fade-in">
      <div className="relative w-full max-w-6xl max-h-[90vh] bg-white rounded-3xl overflow-hidden shadow-2xl animate-scale-up">
        <button
          onClick={onClose}
          className="absolute top-6 right-6 z-50 w-12 h-12 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white transition-all shadow-lg hover:scale-110"
        >
          <X size={24} className="text-slate-900" />
        </button>

        <div className="overflow-y-auto max-h-[90vh]">
          <div className="relative h-[300px] md:h-[400px]">
            <img
              src={images[currentImageIndex]}
              alt={getProjectTitle()}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>

            {images.length > 1 && (
              <>
                <button
                  onClick={prevImage}
                  className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white transition-all shadow-lg hover:scale-110"
                >
                  <ChevronLeft size={24} className="text-slate-900" />
                </button>
                <button
                  onClick={nextImage}
                  className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white transition-all shadow-lg hover:scale-110"
                >
                  <ChevronRight size={24} className="text-slate-900" />
                </button>

                <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2">
                  {images.map((_, idx) => (
                    <button
                      key={idx}
                      onClick={() => setCurrentImageIndex(idx)}
                      className={`w-2 h-2 rounded-full transition-all ${
                        idx === currentImageIndex ? 'bg-white w-8' : 'bg-white/50'
                      }`}
                    />
                  ))}
                </div>
              </>
            )}
          </div>

          <div className="p-6 md:p-8">
            <div className="flex items-start justify-between mb-6">
              <div>
                <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-3 tracking-tight">
                  {getProjectTitle()}
                </h2>
                <div className="flex items-center text-base text-slate-600">
                  <MapPin size={18} className={isRTL ? 'ml-2' : 'mr-2'} />
                  <span>{getProjectLocation()}</span>
                </div>
              </div>
              <div className="text-right">
                <div className="text-xs text-slate-500 mb-1">{t.projectModal.startingFrom}</div>
                <div className="text-2xl md:text-3xl font-bold text-amber-500">{project.priceEn}</div>
              </div>
            </div>

            <p className="text-base text-slate-700 leading-relaxed mb-6">
              {getProjectDescription()}
            </p>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
              {project.bedrooms && (
                <div className="flex items-center gap-2">
                  <div className="w-10 h-10 bg-slate-100 rounded-lg flex items-center justify-center">
                    <Bed size={20} className="text-slate-700" />
                  </div>
                  <div>
                    <div className="text-xs text-slate-500">{t.projectModal.bedrooms}</div>
                    <div className="text-base font-bold text-slate-900">{project.bedrooms}</div>
                  </div>
                </div>
              )}

              {project.bathrooms && (
                <div className="flex items-center gap-2">
                  <div className="w-10 h-10 bg-slate-100 rounded-lg flex items-center justify-center">
                    <Bath size={20} className="text-slate-700" />
                  </div>
                  <div>
                    <div className="text-xs text-slate-500">{t.projectModal.bathrooms}</div>
                    <div className="text-base font-bold text-slate-900">{project.bathrooms}</div>
                  </div>
                </div>
              )}

              {project.area && (
                <div className="flex items-center gap-2">
                  <div className="w-10 h-10 bg-slate-100 rounded-lg flex items-center justify-center">
                    <Maximize size={20} className="text-slate-700" />
                  </div>
                  <div>
                    <div className="text-xs text-slate-500">{t.projectModal.area}</div>
                    <div className="text-base font-bold text-slate-900">{project.area}</div>
                  </div>
                </div>
              )}

              {project.type && (
                <div className="flex items-center gap-2">
                  <div className="w-10 h-10 bg-slate-100 rounded-lg flex items-center justify-center">
                    <Home size={20} className="text-slate-700" />
                  </div>
                  <div>
                    <div className="text-xs text-slate-500">{t.projectModal.type}</div>
                    <div className="text-base font-bold text-slate-900">{project.type}</div>
                  </div>
                </div>
              )}
            </div>

            <a
              href="https://wa.me/905069691161"
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full px-6 py-4 bg-slate-900 text-white text-center font-bold text-base rounded-xl hover:bg-amber-500 transition-all duration-500 shadow-xl hover:shadow-2xl hover:scale-105"
            >
              {t.projectModal.contactUs}
            </a>
          </div>
        </div>
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

        @keyframes scale-up {
          from {
            opacity: 0;
            transform: scale(0.95);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }

        .animate-fade-in {
          animation: fade-in 0.2s ease-out;
        }

        .animate-scale-up {
          animation: scale-up 0.3s ease-out;
        }
      `}</style>
    </div>
  );
};

export default ProjectModal;

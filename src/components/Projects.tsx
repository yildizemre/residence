import React, { useState } from 'react';
import { MapPin, ArrowRight } from 'lucide-react';
import { useLanguage } from '../LanguageContext';
import { projectsData } from '../i18n';
import ProjectModal from './ProjectModal';

const Projects: React.FC = () => {
  const { language, t, isRTL } = useLanguage();
  const [selectedProject, setSelectedProject] = useState<any>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = (project: any) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setTimeout(() => setSelectedProject(null), 300);
  };

  const getProjectTitle = (project: typeof projectsData[0]) => {
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

  const getProjectDescription = (project: typeof projectsData[0]) => {
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

  const getProjectLocation = (project: typeof projectsData[0]) => {
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

  const getProjectPrice = (project: typeof projectsData[0]) => {
    switch (language) {
      case 'ar':
        return project.priceAr;
      case 'ru':
        return project.priceRu;
      case 'fa':
        return project.priceFa;
      case 'tr':
        return project.priceTr;
      case 'ur':
        return project.priceUr;
      default:
        return project.priceEn;
    }
  };

  return (
    <section id="projects" className="py-24 md:py-40 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-slate-900 tracking-tight mb-3">{t.projects.title}</h2>
          <div className="w-20 h-1 bg-amber-500 mx-auto rounded-full mb-4"></div>
          <p className="text-base md:text-lg text-slate-600 max-w-3xl mx-auto">{t.projects.subtitle}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10">
          {projectsData.map((project, index) => (
            <div
              key={project.id}
              className="group cursor-pointer"
              onClick={() => openModal(project)}
              style={{
                animation: `fadeInUp 0.6s ease-out ${index * 0.1}s both`,
              }}
            >
              <div className="relative h-[500px] overflow-hidden rounded-3xl shadow-2xl hover:shadow-amber-500/20 transition-shadow duration-500">
                <img
                  src={project.image}
                  alt={getProjectTitle(project)}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent"></div>

                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h3 className="text-xl font-bold text-white mb-2 tracking-tight">
                    {getProjectTitle(project)}
                  </h3>
                  <div className="flex items-center text-sm text-gray-200 mb-3">
                    <MapPin size={16} className={isRTL ? 'ml-2' : 'mr-2'} />
                    <span>{getProjectLocation(project)}</span>
                  </div>
                  <div className="text-xl font-bold text-amber-400">
                    {getProjectPrice(project)}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <ProjectModal
        project={selectedProject}
        isOpen={isModalOpen}
        onClose={closeModal}
      />
    </section>
  );
};

export default Projects;

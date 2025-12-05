// components/ProjectCard.tsx

import Image from 'next/image';
import Link from 'next/link'; 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IconDefinition } from '@fortawesome/fontawesome-svg-core'; 
import { ElementType } from 'react'; // Importar ElementType para tipar componentes React

export interface TechIcon {
  icon: IconDefinition | ElementType; 
  name: string;
}

export interface ProjectCardProps {
  title: string;
  description: string;
  imageSrc: string;
  liveLink: string;
  techStack: TechIcon[];
}

export function ProjectCard({ 
  title, 
  description, 
  imageSrc, 
  liveLink, 
  techStack 
}: ProjectCardProps) {
  
  const renderIcon = (icon: IconDefinition | ElementType) => {
    if (typeof icon === 'object' && 'iconName' in icon) {
      return <FontAwesomeIcon icon={icon as IconDefinition} className="text-xl" />;
    }
    
    const CustomIcon = icon as ElementType;
    return <CustomIcon className="text-xl" />;
  };

  return (
    <Link 
      href={liveLink} 
      target="_blank" 
      rel="noopener noreferrer" 
      className="block w-full max-w-sm mx-auto group"
    >
      <div 
        className="backdrop-blur-xl bg-white/5 dark:bg-black/40 
                   border border-white/10
                   rounded-3xl shadow-2xl 
                   transition-all duration-300 
                   transform hover:scale-[1.02] 
                   hover:bg-white/10 hover:border-white/20 
                   overflow-hidden cursor-pointer"
      >
        <div className="relative w-full h-48 overflow-hidden">
          <Image 
            src={imageSrc} 
            alt={`Imagen de ${title}`}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-105"
          />
        </div>

        <div className="p-6">
          
          <h3 className="text-2xl font-bold mb-2 text-transparent bg-clip-text bg-linear-to-r from-violet-400 to-amber-200">
            {title}
          </h3>
          <p className="text-gray-300 text-sm mb-4">
            {description}
          </p>

          <div className="flex flex-wrap gap-4 pt-3 border-t border-white/10 mt-4">
            {techStack.map((tech, index) => (
              <div 
                key={index} 
                className="flex items-center text-gray-400 hover:text-white transition duration-200"
                title={tech.name} 
              >
                {renderIcon(tech.icon)}
              </div>
            ))}
          </div>

        </div>
      </div>
    </Link>
  );
}
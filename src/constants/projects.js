/**
 * Datos de los proyectos del portafolio con soporte para i18n
 */
export const projectsData = {
  cerocinco: {
    id: 'cerocinco',
    name: 'Cerocinco',
    imageUrl: '/img/ss-cerocinco-home.png',
    technologies: ['React', 'Bootstrap', 'JavaScript'],
    github: 'https://github.com/Pierex99/cerocinco-Gallo',
    liveUrl: 'https://eloquent-noether-43b4ff.netlify.app/',
    descriptions: {
      es: 'Aplicación web de una tienda de ropa virtual. Se utilizó React y Bootstrap.',
      en: 'Web application for a virtual clothing store. React and Bootstrap were used.'
    }
  },
  frutiexpress: {
    id: 'frutiexpress',
    name: 'FrutiExpress',
    imageUrl: '/img/fe-home.png',
    technologies: ['JavaScript', 'EJS', 'HTML', 'CSS'],
    github: 'https://github.com/Pierex99/Web-FrutiExpress',
    liveUrl: '',
    descriptions: {
      es: 'Aplicación web de un minimarket virtual que vende productos cotidianos. Incluye sección de login. Se utilizó JavaScript y EJS.',
      en: 'Web application for a virtual minimarket that sells everyday products. Includes login section. JavaScript and EJS were used.'
    }
  }
};

// Esta función es para mantener compatibilidad con el código existente
export const getProjects = (locale = 'es') => {
  return Object.values(projectsData).map(project => ({
    ...project,
    description: project.descriptions[locale] || project.descriptions.es
  }));
};

// Para compatibilidad con el código existente
export const projects = getProjects();

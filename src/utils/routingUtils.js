/**
 * Funciones de utilidad para manejar los enlaces a proyectos
 */

/**
 * Navega a la página de detalle de un proyecto
 * @param {object} router - La instancia del router de Vue
 * @param {string} projectId - El ID del proyecto
 */
export const goToProjectDetail = (router, projectId) => {
  if (router && projectId) {
    router.push({
      name: 'project-detail',
      params: { id: projectId }
    });
  }
};

/**
 * Obtiene la URL de un proyecto según su ID
 * @param {string} projectId - El ID del proyecto
 * @returns {string} - La URL del proyecto
 */
export const getProjectUrl = (projectId) => {
  return `/project/${projectId}`;
};

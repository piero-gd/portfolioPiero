/**
 * Utilidades relacionadas con el scroll
 */

/**
 * Comprueba si un elemento está en el viewport
 * @param {HTMLElement} element - El elemento a comprobar
 * @param {number} offset - Offset opcional para activar antes de que el elemento esté completamente visible
 * @returns {boolean} - True si el elemento está visible en el viewport
 */
export const isElementInViewport = (element, offset = 0) => {
  if (!element) return false;
  
  const rect = element.getBoundingClientRect();
  
  return (
    rect.top - offset <= window.innerHeight &&
    rect.bottom + offset >= 0
  );
};

/**
 * Agrega un listener para detectar cuando un elemento entra en el viewport
 * @param {HTMLElement} element - El elemento a observar
 * @param {Function} callback - Función a ejecutar cuando el elemento entra en el viewport
 * @returns {Function} - Función para eliminar el observer
 */
export const observeElementInViewport = (element, callback) => {
  if (!element || !callback) return () => {};
  
  const observer = new IntersectionObserver((entries) => {
    if (entries[0].isIntersecting) {
      callback();
    }
  });
  
  observer.observe(element);
  
  return () => observer.disconnect();
};

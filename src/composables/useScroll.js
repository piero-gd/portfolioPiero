/**
 * Composable para manejar la funcionalidad de scroll a elementos
 * @returns {Object} - Métodos para manejar scrolls
 */
export default function useScroll() {
  /**
   * Hace scroll suave a un elemento por su ID
   * @param {string} elementId - El ID del elemento al que hacer scroll
   */
  const scrollToElement = (elementId) => {
    const element = document.getElementById(elementId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  /**
   * Hace scroll suave a una posición específica
   * @param {number} yPosition - Posición Y a la que hacer scroll
   */
  const scrollToPosition = (yPosition) => {
    window.scrollTo({
      top: yPosition,
      behavior: 'smooth'
    });
  };

  return {
    scrollToElement,
    scrollToPosition
  };
}

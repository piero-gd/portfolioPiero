/**
 * Composable para manejar media queries y responsive design
 * @returns {Object} - Métodos para manejar media queries
 */
export default function useMediaQuery() {
  /**
   * Verifica si la pantalla es de tamaño móvil
   * @returns {boolean} - True si la pantalla es móvil
   */
  const isMobile = () => {
    return window.innerWidth < 600;
  };

  /**
   * Verifica si la pantalla es de tamaño tablet
   * @returns {boolean} - True si la pantalla es tablet
   */
  const isTablet = () => {
    return window.innerWidth >= 600 && window.innerWidth < 960;
  };

  /**
   * Verifica si la pantalla es de tamaño desktop
   * @returns {boolean} - True si la pantalla es desktop
   */
  const isDesktop = () => {
    return window.innerWidth >= 960;
  };

  return {
    isMobile,
    isTablet,
    isDesktop
  };
}

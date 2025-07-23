/**
 * Utilidades para validación
 */

/**
 * Valida si un email tiene formato correcto
 * @param {string} email - El email a validar
 * @returns {boolean} - True si el email es válido
 */
export const isValidEmail = (email) => {
  const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
};

/**
 * Valida que un texto no esté vacío
 * @param {string} text - El texto a validar
 * @returns {boolean} - True si el texto no está vacío
 */
export const isNotEmpty = (text) => {
  return text && text.trim().length > 0;
};

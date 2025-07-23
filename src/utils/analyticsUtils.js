/**
 * Utility functions for Google Analytics event tracking
 */

/**
 * Track a custom event in Google Analytics
 * @param {string} category - Event category
 * @param {string} action - Event action
 * @param {string} label - Event label (optional)
 * @param {any} value - Event value (optional)
 */
export const trackEvent = (category, action, label = null, value = null) => {
  if (window.$gtag) {
    const eventParams = {
      event_category: category,
      event_label: label,
      value: value
    };
    
    window.$gtag.event(action, eventParams);
  }
};

/**
 * Track outbound links
 * @param {string} url - URL being visited
 * @param {string} linkType - Type of link (e.g., 'project', 'social', 'download')
 */
export const trackOutboundLink = (url, linkType = 'external') => {
  if (window.$gtag) {
    window.$gtag.event('click', {
      event_category: 'outbound',
      event_label: url,
      link_type: linkType,
      transport_type: 'beacon'
    });
  }
};

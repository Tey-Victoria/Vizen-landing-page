const measurementId = import.meta.env.VITE_GA_MEASUREMENT_ID?.trim();
const validMeasurementId = /^G-[A-Z0-9]+$/i.test(measurementId || '');
export const analyticsEnabled = validMeasurementId;

if (validMeasurementId && typeof window !== 'undefined' && !window.gtag) {
  window.dataLayer = window.dataLayer || [];
  window.gtag = function gtag() {
    window.dataLayer.push(arguments);
  };
  window.gtag('js', new Date());
  window.gtag('config', measurementId);

  const script = document.createElement('script');
  script.async = true;
  script.src = `https://www.googletagmanager.com/gtag/js?id=${measurementId}`;
  document.head.appendChild(script);
}

export function trackConversion(location, method = 'Telegram') {
  if (validMeasurementId && typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', 'generate_lead', {
      method,
      link_location: location,
    });
  }
}

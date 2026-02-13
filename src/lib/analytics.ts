
declare global {
  interface Window {
    dataLayer: any[];
    gtag: (...args: any[]) => void;
  }
}

export const trackDownload = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
  // Prevent default navigation to allow tracking to fire
  e.preventDefault();
  const link = e.currentTarget.href;

  // Track the event if gtag is available
  if (typeof window.gtag === 'function') {
    window.gtag('event', 'download', {
      'event_category': 'eBook',
      'event_label': 'eBook_Download',
      'value': 1
    });
  }
  
  // Small delay to ensure tracking fires before navigation
  setTimeout(() => {
    window.location.href = link;
  }, 300);
};

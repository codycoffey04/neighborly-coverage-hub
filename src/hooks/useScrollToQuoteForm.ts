import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export const useScrollToQuoteForm = () => {
  const { hash } = useLocation();
  
  useEffect(() => {
    if (hash === '#quote-form') {
      setTimeout(() => {
        const element = document.getElementById('quote-form');
        if (element) {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }, 100);
    }
  }, [hash]);
};

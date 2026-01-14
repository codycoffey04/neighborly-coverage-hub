import { ReactNode } from "react";

interface TrackedPhoneProps {
  phone: string; // Display format: "(256) 927-6287"
  phoneRaw: string; // Raw format for tel: link: "2569276287"
  location?: string; // "Centre, AL" or "Rome, GA" or city name
  office?: "centre" | "rome" | "city"; // Office type
  pageType?: string; // "homepage", "service", "city", "contact", etc.
  pageUrl?: string; // Current page URL
  className?: string;
  children?: ReactNode;
  ariaLabel?: string;
}

declare global {
  interface Window {
    dataLayer?: Array<Record<string, unknown>>;
    gtag?: (...args: unknown[]) => void;
  }
}

export const TrackedPhone = ({
  phone,
  phoneRaw,
  location,
  office,
  pageType,
  pageUrl,
  className,
  children,
  ariaLabel,
}: TrackedPhoneProps) => {
  const handleClick = () => {
    // Push event to dataLayer for GTM
    if (window.dataLayer) {
      window.dataLayer.push({
        event: "phone_click",
        phone_number: phone,
        phone_raw: phoneRaw,
        location: location || "Unknown",
        office: office || "unknown",
        page_type: pageType || "unknown",
        page_url: pageUrl || window.location.href,
        timestamp: new Date().toISOString(),
      });
    }
    
    // Direct GA4 tracking via gtag
    if (window.gtag) {
      window.gtag('event', 'click_to_call', {
        event_category: 'engagement',
        event_label: phone,
        phone_number: phone,
        location: location || "Unknown",
        office: office || "unknown",
        page_type: pageType || "unknown"
      });
    }
  };

  const telLink = `tel:+1${phoneRaw}`;

  return (
    <a
      href={telLink}
      onClick={handleClick}
      className={className}
      aria-label={ariaLabel || `Call ${location || phone}`}
    >
      {children || phone}
    </a>
  );
};


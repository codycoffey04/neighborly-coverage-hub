import { useState, useEffect } from "react";
import { ArrowUp } from "lucide-react";

export const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  return (
    <button
      onClick={scrollToTop}
      aria-label="Scroll to top"
      className={`
        fixed bottom-24 right-6 z-40
        w-12 h-12 rounded-full
        bg-primary text-white
        shadow-lg
        flex items-center justify-center
        transition-all duration-300 ease-in-out
        hover:bg-primary/90 hover:scale-110
        ${isVisible 
          ? "opacity-100 translate-y-0" 
          : "opacity-0 translate-y-4 pointer-events-none"
        }
      `}
    >
      <ArrowUp className="h-5 w-5" />
    </button>
  );
};

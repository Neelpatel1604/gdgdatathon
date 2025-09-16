import { useState, useEffect } from 'react';

export function useMobile() {
  const [isMobile, setIsMobile] = useState(false);
  const [isTablet, setIsTablet] = useState(false);
  const [isDesktop, setIsDesktop] = useState(false);
  const [screenSize, setScreenSize] = useState<'mobile' | 'tablet' | 'desktop'>('mobile');

  useEffect(() => {
    const checkScreenSize = () => {
      const width = window.innerWidth;
      
      if (width < 640) {
        setIsMobile(true);
        setIsTablet(false);
        setIsDesktop(false);
        setScreenSize('mobile');
      } else if (width >= 640 && width < 1024) {
        setIsMobile(false);
        setIsTablet(true);
        setIsDesktop(false);
        setScreenSize('tablet');
      } else {
        setIsMobile(false);
        setIsTablet(false);
        setIsDesktop(true);
        setScreenSize('desktop');
      }
    };

    // Check on mount
    checkScreenSize();

    // Add event listener
    window.addEventListener('resize', checkScreenSize);

    // Cleanup
    return () => window.removeEventListener('resize', checkScreenSize);
  }, []);

  return {
    isMobile,
    isTablet,
    isDesktop,
    screenSize,
    // Convenience methods
    isMobileOrTablet: isMobile || isTablet,
    isTabletOrDesktop: isTablet || isDesktop,
  };
}

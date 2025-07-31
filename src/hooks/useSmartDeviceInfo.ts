// src/hooks/useSmartDeviceInfo.ts
import { useEffect, useState } from "react";
import Bowser from "bowser";

interface SmartDeviceInfo {
  browser: string;
  os: string;
  isTouchDevice: boolean;
  isProbablyMobile: boolean;
  isProbablyTablet: boolean;
  isProbablyDesktop: boolean;
  screenWidth: number;
  screenHeight: number;
  devToolsOpen: boolean;
}

const detectDevTools = () => {
  const threshold = 160;
  return (
    window.outerWidth - window.innerWidth > threshold ||
    window.outerHeight - window.innerHeight > threshold
  );
};

export const useSmartDeviceInfo = (): SmartDeviceInfo => {
  const [info, setInfo] = useState<SmartDeviceInfo>(() => {
    const parser = Bowser.getParser(window.navigator.userAgent);
    const browser = parser.getBrowserName() ?? "Desconocido";
    const os = parser.getOSName() ?? "Desconocido";
    const hasTouch = "ontouchstart" in window || navigator.maxTouchPoints > 0;
    const screenWidth = window.innerWidth;
    const screenHeight = window.innerHeight;
    const devToolsOpen = detectDevTools();

    const isProbablyMobile = hasTouch && screenWidth < 768 && !devToolsOpen;
    const isProbablyTablet = hasTouch && screenWidth >= 768 && screenWidth <= 1024 && !devToolsOpen;
    const isProbablyDesktop = !hasTouch || screenWidth > 1024 || devToolsOpen;

    return {
      browser,
      os,
      isTouchDevice: hasTouch,
      isProbablyMobile,
      isProbablyTablet,
      isProbablyDesktop,
      screenWidth,
      screenHeight,
      devToolsOpen,
    };
  });

  useEffect(() => {
    const handleResize = () => {
      const hasTouch = "ontouchstart" in window || navigator.maxTouchPoints > 0;
      const screenWidth = window.innerWidth;
      const screenHeight = window.innerHeight;
      const devToolsOpen = detectDevTools();

      const isProbablyMobile = hasTouch && screenWidth < 768 && !devToolsOpen;
      const isProbablyTablet = hasTouch && screenWidth >= 768 && screenWidth <= 1024 && !devToolsOpen;
      const isProbablyDesktop = !hasTouch || screenWidth > 1024 || devToolsOpen;

      setInfo((prev) => ({
        ...prev,
        isTouchDevice: hasTouch,
        isProbablyMobile,
        isProbablyTablet,
        isProbablyDesktop,
        screenWidth,
        screenHeight,
        devToolsOpen,
      }));
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return info;
};

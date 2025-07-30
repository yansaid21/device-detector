
import { useEffect, useState } from "react";
import Bowser from "bowser";

interface DeviceInfo {
  browser: string;
  os: string;
  platform: string;
  isMobile: boolean;
  isTablet: boolean;
  isDesktop: boolean;
}

export const useDeviceInfo = (): DeviceInfo => {
  const [deviceInfo, setDeviceInfo] = useState<DeviceInfo>({
    browser: "",
    os: "",
    platform: "",
    isMobile: false,
    isTablet: false,
    isDesktop: false,
  });

  useEffect(() => {
    const parser = Bowser.getParser(window.navigator.userAgent);
    const browser = parser.getBrowserName() ?? "";
    const os = parser.getOSName() ?? "";
    const platform = parser.getPlatformType() ?? "";

    setDeviceInfo({
      browser,
      os,
      platform,
      isMobile: platform === "mobile",
      isTablet: platform === "tablet",
      isDesktop: platform === "desktop",
    });
  }, []);

  return deviceInfo;
};

// src/App.tsx
import React from "react";
import { useDeviceInfo } from "./hooks/useDeviceInfo";

function App() {
  const { browser, os, platform, isMobile, isTablet, isDesktop } = useDeviceInfo();

  return (
    <div style={{ padding: "2rem", fontFamily: "sans-serif" }}>
      <h1>🧭 Información del Dispositivo</h1>
      <ul>
        <li><strong>Navegador:</strong> {browser}</li>
        <li><strong>Sistema Operativo:</strong> {os}</li>
        <li><strong>Plataforma:</strong> {platform}</li>
        <li><strong>¿Es móvil?</strong> {isMobile ? "Sí" : "No"}</li>
        <li><strong>¿Es tablet?</strong> {isTablet ? "Sí" : "No"}</li>
        <li><strong>¿Es escritorio?</strong> {isDesktop ? "Sí" : "No"}</li>
      </ul>
    </div>
  );
}

export default App;

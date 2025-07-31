// src/App.tsx
import React from "react";
import { useSmartDeviceInfo } from "./hooks/useSmartDeviceInfo";

function App() {
  const {
    browser,
    os,
    isTouchDevice,
    isProbablyMobile,
    isProbablyTablet,
    isProbablyDesktop,
    screenWidth,
    screenHeight,
    devToolsOpen,
  } = useSmartDeviceInfo();

  return (
    <div style={{ padding: "2rem", fontFamily: "Arial, sans-serif" }}>
      <h1>🧠 Información del Dispositivo</h1>

      {devToolsOpen && (
        <p style={{ color: "orange", fontWeight: "bold" }}>
          ⚠️ Detectamos que las herramientas de desarrollo están abiertas. El comportamiento del dispositivo puede ser simulado.
        </p>
      )}

      <ul style={{ listStyle: "none", padding: 0, fontSize: "1.1rem" }}>
        <li><strong>Navegador:</strong> {browser}</li>
        <li><strong>Sistema Operativo:</strong> {os}</li>
        <li><strong>¿Soporta táctil?:</strong> {isTouchDevice ? "Sí" : "No"}</li>
        <li><strong>¿Es móvil?:</strong> {isProbablyMobile ? "Sí" : "No"}</li>
        <li><strong>¿Es tablet?:</strong> {isProbablyTablet ? "Sí" : "No"}</li>
        <li><strong>¿Es escritorio?:</strong> {isProbablyDesktop ? "Sí" : "No"}</li>
        <li><strong>Resolución:</strong> {screenWidth}px  {screenHeight}px</li>
      </ul>
    </div>
  );
}

export default App;

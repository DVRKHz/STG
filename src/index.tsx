import React from "react";
import ReactDOM from "react-dom/client";
import { App } from "./App";

/**
 * ReactDOM.createRoot:
 * Crea la raíz de la aplicación en el elemento del DOM con el id "app".
 * El símbolo '!' al final de getElementById le dice a TypeScript que 
 * estamos seguros de que ese elemento existe en el HTML.
 */
ReactDOM.createRoot(document.getElementById("app")!).render(
  /**
   * <React.StrictMode>:
   * Es una herramienta de desarrollo que ayuda a identificar problemas potenciales. 
   * Ejecuta ciclos de renderizado doble para detectar efectos secundarios inesperados.
   */
  <React.StrictMode>
    {/* El componente raíz que contiene todo el sistema de navegación y lógica */}
    <App />
  </React.StrictMode>,
);
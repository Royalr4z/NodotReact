import React, { createContext, useContext } from 'react';

// Cria o contexto
const RouterValueContext = createContext(null);

// Define o provedor de contexto
export function RouterValueProvider({ value, children }) {
  return <RouterValueContext.Provider value={value}>{children}</RouterValueContext.Provider>;
}

// Define o hook de acesso ao valor do contexto
export function useRouterValue() {
  return useContext(RouterValueContext);
}
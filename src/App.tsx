import React from "react";
import { BrowserRouter } from "react-router-dom";
import Router from "./Router";
import { CurrentAccountProvider } from "./hooks/useCurrentAccount";
import { EnvironmentProvider } from "./hooks/useEnvironment";

export const App: React.FC = () => {
  return (
    <BrowserRouter>
      <CurrentAccountProvider>
        <EnvironmentProvider>
          <Router />
        </EnvironmentProvider>
      </CurrentAccountProvider>
    </BrowserRouter>
  );
};

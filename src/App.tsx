import React, { useEffect } from "react";
import { BrowserRouter } from "react-router-dom";
import Router from "./Router";
import { CurrentAccountProvider } from "./hooks/useCurrentAccount";

export const App: React.FC = () => {
  const resize = (): void => {
    const element = document?.querySelector(":root") as HTMLElement;
    element.style?.setProperty("--vh", `${window.innerHeight}px`);
  };

  const callSizeChanged = () => setTimeout(resize, 500);

  useEffect(() => {
    callSizeChanged();
    window.addEventListener("resize", () => callSizeChanged());
    return () => {
      window.removeEventListener("resize", callSizeChanged);
    };
  }, []);

  return (
    <BrowserRouter>
      <CurrentAccountProvider>
        <Router />
      </CurrentAccountProvider>
    </BrowserRouter>
  );
};

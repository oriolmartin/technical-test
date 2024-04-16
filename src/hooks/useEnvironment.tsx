import React, { useState, createContext, useContext, useEffect } from "react";

interface EnvironmentContextState {
  isMobile: boolean;
  isMenuOpen: boolean;
  setIsMenuOpen: (isMenuOpen: boolean) => void;
}

const EnvironmentContext = createContext<EnvironmentContextState>({
  isMobile: false,
  isMenuOpen: false,
  setIsMenuOpen: () => undefined,
});

interface Props {
  children: React.ReactNode;
}

export const EnvironmentProvider: React.FC<Props> = ({ children }: Props) => {
  const [isMobile, setIsMobile] = useState<boolean>(window.innerWidth < 576);
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

  const resize = (): void => {
    const element = document?.querySelector(":root") as HTMLElement;
    element.style?.setProperty("--vh", `${window.innerHeight}px`);

    setIsMobile(window.innerWidth < 576);
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
    <EnvironmentContext.Provider
      value={{
        isMobile,
        isMenuOpen,
        setIsMenuOpen,
      }}
    >
      {children}
    </EnvironmentContext.Provider>
  );
};

export default function useEnvironment(): EnvironmentContextState {
  return useContext(EnvironmentContext);
}

"use client";

import { createContext, useContext, useState, useEffect, ReactNode, useCallback } from "react";

type Theme = "glass" | "professional";

interface ThemeContextType {
  theme: Theme;
  setTheme: (t: Theme) => void;
  toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextType>({
  theme: "glass",
  setTheme: () => {},
  toggleTheme: () => {},
});

export function useTheme() {
  return useContext(ThemeContext);
}

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [theme, setThemeState] = useState<Theme>("glass");

  useEffect(() => {
    const saved = localStorage.getItem("cg-theme") as Theme | null;
    const initialTheme = saved === "glass" || saved === "professional" ? saved : "glass";
    setThemeState(initialTheme);
    document.documentElement.setAttribute("data-theme", initialTheme);
    document.body.setAttribute("data-theme", initialTheme);
  }, []);

  const setTheme = useCallback((t: Theme) => {
    setThemeState(t);
    localStorage.setItem("cg-theme", t);
    document.documentElement.setAttribute("data-theme", t);
    document.body.setAttribute("data-theme", t);
  }, []);

  const toggleTheme = useCallback(() => {
    const nextTheme = theme === "glass" ? "professional" : "glass";
    setTheme(nextTheme);
  }, [theme, setTheme]);

  return (
    <ThemeContext.Provider value={{ theme, setTheme, toggleTheme }}>
      <div data-theme={theme} className="min-h-screen bg-background text-foreground transition-colors duration-200">
        {children}
      </div>
    </ThemeContext.Provider>
  );
}

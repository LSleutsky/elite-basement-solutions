import { useEffect, useSyncExternalStore, useCallback } from "react";

type Theme = "dark" | "light";

const getTheme = (): Theme => {
  if (typeof window === "undefined") {
    return "dark";
  }

  return (
    (localStorage.getItem("theme") as Theme) ||
    (window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light")
  );
};

const subscribe = (callback: () => void) => {
  window.addEventListener("storage", callback);

  return () => window.removeEventListener("storage", callback);
};

export const useTheme = () => {
  const theme = useSyncExternalStore(subscribe, getTheme, () => "dark");

  useEffect(() => {
    document.documentElement.classList.toggle("dark", theme === "dark");
  }, [theme]);

  const toggle = useCallback(() => {
    const next = getTheme() === "dark" ? "light" : "dark";
    localStorage.setItem("theme", next);
    window.dispatchEvent(new Event("storage"));
  }, []);

  return { theme, toggle };
};

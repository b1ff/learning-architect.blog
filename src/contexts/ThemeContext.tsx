import React, {
  createContext,
  useContext,
  useState,
  useEffect,
  ReactNode,
} from "react";

export type Theme = "dark" | "light";

interface ThemeContextType {
  theme: Theme;
  toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

interface ThemeProviderProps {
  children: ReactNode;
}

export const ThemeProvider: React.FC<ThemeProviderProps> = ({ children }) => {
  const [theme, setTheme] = useState<Theme>("dark"); // Default to dark mode
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    // Check localStorage for saved theme preference
    const savedTheme = localStorage.getItem("theme") as Theme | null;
    if (savedTheme && (savedTheme === "dark" || savedTheme === "light")) {
      setTheme(savedTheme);
    }
    setMounted(true);
  }, []);

  useEffect(() => {
    // Save theme preference to localStorage
    localStorage.setItem("theme", theme);

    // Apply theme class to document
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "dark" ? "light" : "dark"));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    // ReturnReturn default values during SSR and hydration
    return { theme: "dark" as Theme, toggleTheme: () => {} };
  }
  return context;
};

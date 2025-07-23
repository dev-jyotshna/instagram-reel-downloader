import React, { useEffect, useState, createContext, useContext } from 'react';
type Theme = 'light' | 'dark' | 'system';
interface ThemeContextType {
  theme: Theme;
  setTheme: (theme: Theme) => void;
  resolvedTheme: 'light' | 'dark';
}
const ThemeContext = createContext<ThemeContextType | undefined>(undefined);
export function ThemeProvider({
  children
}: {
  children: React.ReactNode;
}) {
  const [theme, setTheme] = useState<Theme>(() => {
    if (typeof window !== 'undefined') {
      const savedTheme = localStorage.getItem('theme') as Theme;
      return savedTheme || 'system';
    }
    return 'system';
  });
  const [resolvedTheme, setResolvedTheme] = useState<'light' | 'dark'>('light');
  // Update the theme when it changes
  useEffect(() => {
    const root = window.document.documentElement;
    if (theme === 'system') {
      const systemTheme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
      root.classList.remove('light', 'dark');
      root.classList.add(systemTheme);
      setResolvedTheme(systemTheme);
    } else {
      root.classList.remove('light', 'dark');
      root.classList.add(theme);
      setResolvedTheme(theme);
    }
    localStorage.setItem('theme', theme);
  }, [theme]);
  // Listen for system theme changes
  useEffect(() => {
    if (theme !== 'system') return;
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    const handleChange = () => {
      const newTheme = mediaQuery.matches ? 'dark' : 'light';
      document.documentElement.classList.remove('light', 'dark');
      document.documentElement.classList.add(newTheme);
      setResolvedTheme(newTheme);
    };
    mediaQuery.addEventListener('change', handleChange);
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, [theme]);
  return <ThemeContext.Provider value={{
    theme,
    setTheme,
    resolvedTheme
  }}>
      {children}
    </ThemeContext.Provider>;
}
export function useTheme() {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
}
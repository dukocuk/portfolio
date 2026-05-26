import { useCallback, useEffect, useState } from 'react';

type Theme = 'dark' | 'light';

// The initial theme class is applied by the inline script in index.html
// before paint. This hook keeps React in sync and handles toggling.
function getCurrentTheme(): Theme {
  if (typeof document === 'undefined') return 'dark';
  return document.documentElement.classList.contains('light') ? 'light' : 'dark';
}

export function useTheme() {
  const [theme, setTheme] = useState<Theme>(getCurrentTheme);

  useEffect(() => {
    const root = document.documentElement;
    root.classList.toggle('light', theme === 'light');
    try {
      localStorage.setItem('theme', theme);
    } catch {
      /* storage unavailable — ignore */
    }
  }, [theme]);

  const toggleTheme = useCallback(() => {
    setTheme((t) => (t === 'dark' ? 'light' : 'dark'));
  }, []);

  return { theme, toggleTheme };
}

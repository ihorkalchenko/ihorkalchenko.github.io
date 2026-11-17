import React, { useEffect, useState } from 'react';

export const ThemeToggle: React.FC = () => {
  const [isDark, setIsDark] = useState<boolean>(false);

  useEffect(() => {
    const saved = localStorage.getItem('theme');
    const prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
    const initialDark = saved === 'dark' || (!saved && prefersDark);
    setIsDark(initialDark);
    document.body.classList.toggle('dark-theme', initialDark);
  }, []);

  const handleToggle = (e: React.ChangeEvent<HTMLInputElement>) => {
    const checked = e.target.checked;
    setIsDark(checked);
    document.body.classList.toggle('dark-theme', checked);
    if (checked) {
      localStorage.setItem('theme', 'dark');
    } else {
      localStorage.removeItem('theme');
    }
  };

  return (
    <div className="switch-wrapper">
      <div className="switch-button">
        <input
          type="checkbox"
          className="switch-checkbox"
          checked={isDark}
          onChange={handleToggle}
          aria-label="Toggle dark mode"
        />
        <div className="switch-knob">
          <span></span>
        </div>
      </div>
    </div>
  );
};

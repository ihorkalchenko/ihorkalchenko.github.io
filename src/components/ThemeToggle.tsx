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
          <div className="switch-icon switch-icon-sun" aria-hidden="true">
            <svg viewBox="0 0 512 512" width="17" height="17" fill="currentColor">
              <path d="M361.5 1.2c5 2.1 8.6 6.6 9.6 11.9L391 121l107.9 19.8c5.3 1 9.8 4.6 11.9 9.6s1.5 10.7-1.6 15.2L446.9 256l62.3 90.3c3.1 4.5 3.7 10.2 1.6 15.2s-6.6 8.6-11.9 9.6L391 391 371.1 498.9c-1 5.3-4.6 9.8-9.6 11.9s-10.7 1.5-15.2-1.6L256 446.9l-90.3 62.3c-4.5 3.1-10.2 3.7-15.2 1.6s-8.6-6.6-11.9-9.6L121 391 13.1 371.1c-5.3-1-9.8-4.6-11.9-9.6s-1.5-10.7 1.6-15.2L65.1 256 2.8 165.7c-3.1-4.5-3.7-10.2-1.6-15.2s6.6-8.6 11.9-9.6L121 121 140.9 13.1c1-5.3 4.6-9.8 9.6-11.9s10.7-1.5 15.2 1.6L256 65.1 346.3 2.8c4.5-3.1 10.2-3.7 15.2-1.6zM160 256a96 96 0 1 0 192 0 96 96 0 1 0 -192 0z" />
            </svg>
          </div>
          <div className="switch-icon switch-icon-moon" aria-hidden="true">
            <svg viewBox="0 0 512 512" width="17" height="17" fill="currentColor">
              <path d="M283.211 512c78.962 0 151.079-35.925 198.857-94.792 7.068-8.708-.639-21.43-11.562-19.35-124.203 23.654-238.262-71.576-238.262-196.954 0-72.222 38.662-138.635 101.498-174.394 9.686-5.512 7.25-20.197-3.756-22.23A258.156 258.156 0 0 0 283.211 0c-141.309 0-256 114.511-256 256 0 141.309 114.511 256 256 256z" />
            </svg>
          </div>
          <span></span>
        </div>
      </div>
    </div>
  );
};

'use client';
import { useTheme } from '@/contexts/ThemeContext';
import { ToggleButton, IconWrapper } from './styles';

const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <ToggleButton onClick={toggleTheme} aria-label="Toggle theme">
      <IconWrapper>
        {theme === 'light' ? (
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
            <path
              d="M10 15C12.7614 15 15 12.7614 15 10C15 7.23858 12.7614 5 10 5C7.23858 5 5 7.23858 5 10C5 12.7614 7.23858 15 10 15Z"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M10 1V3"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M10 17V19"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M3.93 3.93L5.34 5.34"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M14.66 14.66L16.07 16.07"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M1 10H3"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M17 10H19"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M3.93 16.07L5.34 14.66"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M14.66 5.34L16.07 3.93"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        ) : (
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
            <path
              d="M17 10.79C16.7348 12.4922 15.9183 14.0535 14.6788 15.2354C13.4393 16.4173 11.8467 17.1558 10.1387 17.3426C8.43064 17.5294 6.70493 17.1541 5.22896 16.2715C3.75299 15.3889 2.60481 14.0456 1.9577 12.4378C1.31059 10.83 1.19793 9.04663 1.63474 7.36377C2.07155 5.6809 3.03292 4.18953 4.38287 3.10005C5.73282 2.01058 7.39978 1.38555 9.13655 1.31604C10.8733 1.24654 12.5881 1.73588 14.03 2.71L10 10.79H17Z"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        )}
      </IconWrapper>
    </ToggleButton>
  );
};

export default ThemeToggle;


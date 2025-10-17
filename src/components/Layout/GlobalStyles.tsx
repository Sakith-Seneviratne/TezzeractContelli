import { createGlobalStyle } from 'styled-components';

const styled = { createGlobalStyle };

interface GlobalStylesProps {
  $themeMode: 'light' | 'dark';
}

export const GlobalStyles = styled.createGlobalStyle<GlobalStylesProps>`
  :root {
    --Background: ${props => props.$themeMode === 'light' ? '#FFFFFF' : '#070606'};
    --white: #fff;
    --text-primary: ${props => props.$themeMode === 'light' ? '#070606' : '#fff'};
    --text-secondary: ${props => props.$themeMode === 'light' ? '#4a5568' : '#bdbdbd'};
    --light-gray: #dcdcdc;
    --link-color: ${props => props.$themeMode === 'light' ? '#4a5568' : '#bdbdbd'};
    --border-color: ${props => props.$themeMode === 'light' ? '#e2e8f0' : '#3d3d3d'};
    --card-background: ${props => props.$themeMode === 'light' ? '#f7fafc' : '#131313'};
    --green: #00378A;
    --emerald: #00A9EE;
    --gradient: linear-gradient(135deg, #00378A 0%, #00A9EE 100%);
  }

  * {
    box-sizing: border-box;
    padding: 0;
    margin: 0;
    -webkit-font-smoothing: antialiased;
  }

  html,
  body {
    max-width: 100vw;
    overflow-x: hidden;
    font-family: 'Figtree', sans-serif;
    background-color: var(--Background);
    color: var(--text-primary);
    scroll-snap-type: y mandatory;
    transition: background-color 0.3s ease, color 0.3s ease;

    &::-webkit-scrollbar {
      width: 0.5rem;
      border-radius: 0.5rem;
      &-thumb {
        background: var(--text-secondary);
        border-radius: 0.5rem;
      }

      &-track {
        background: var(--Background);
      }
    }
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  .parallax {
    overflow: hidden;
    margin: 0;
    white-space: nowrap;
    display: flex;
    flex-wrap: nowrap;
  }

  .parallax .scroller {
    display: flex;
    white-space: nowrap;
    display: flex;
    flex-wrap: nowrap;
  }

  .scroller span {
    display: block;
    margin-right: 5rem;
  }

  .not_complete {
    display: none;
  }

  .complete {
  }
`;

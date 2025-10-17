'use client';
import { styled } from 'styled-components';

export const ToggleButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 2.5rem;
  height: 2.5rem;
  border-radius: 50%;
  background: var(--card-background);
  border: 1px solid var(--border-color);
  cursor: pointer;
  transition: all 0.3s ease;
  color: var(--text-primary);

  &:hover {
    background: var(--gradient);
    border-color: var(--emerald);
    color: var(--white);
    transform: scale(1.05);
  }

  @media (max-width: 768px) {
    width: 2rem;
    height: 2rem;
  }
`;

export const IconWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;

  svg {
    width: 1.25rem;
    height: 1.25rem;
  }
`;


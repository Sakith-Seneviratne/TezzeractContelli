'use client';
import { styled } from 'styled-components';

export const StyledButton = styled.div`
  position: relative;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  border-radius: 0.75rem; /* rounded-xl */
  padding: 0.75rem 1.5rem; /* py-3 px-6 */
  max-height: 2.5rem; /* max-h-10 */
  font-size: 0.875rem; /* 14px */
  font-weight: 300; /* font-thin */
  border: 1px solid rgba(255, 255, 255, 0.4); /* border border-white/40 */
  color: var(--white); /* text-white */
  background: radial-gradient(64.46% 80% at 50.53% 0%, #009BE9 0%, #00378A 100%);
  transition: box-shadow 0.4s ease-in-out;
  overflow: hidden;
  cursor: pointer;
  text-decoration: none;
  
  &::before {
    content: '';
    position: absolute;
    inset: 0;
    border-radius: 0.75rem;
    opacity: 0;
    transition: opacity 0.3s ease-in-out;
    background: radial-gradient(93.12% 100% at 50.53% 0%, #009BE9 0%, #00378A 100%);
    z-index: 0;
  }
  
  &:hover {
    box-shadow: 0 0 10px 0 rgba(0, 169, 238, 0.40);
    
    &::before {
      opacity: 1;
    }
  }
  
  .button-content {
    position: relative;
    z-index: 1;
    display: inline-flex;
    align-items: center;
    gap: 0.5rem;
  }
`;


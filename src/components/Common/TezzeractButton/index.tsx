'use client';
import React from 'react';
import { StyledButton } from './styles';

interface TezzeractButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  href?: string;
  target?: string;
  rel?: string;
  type?: 'button' | 'submit' | 'reset';
  className?: string;
}

const TezzeractButton: React.FC<TezzeractButtonProps> = ({
  children,
  onClick,
  href,
  target,
  rel,
  type = 'button',
  className,
}) => {
  if (href) {
    return (
      <StyledButton
        as="a"
        href={href}
        target={target}
        rel={rel}
        className={className}
      >
        <div className="button-content">{children}</div>
      </StyledButton>
    );
  }

  return (
    <StyledButton
      as="button"
      type={type}
      onClick={onClick}
      className={className}
    >
      <div className="button-content">{children}</div>
    </StyledButton>
  );
};

export default TezzeractButton;


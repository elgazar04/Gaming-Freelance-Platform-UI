import React from 'react';

export interface GlowButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'tertiary' | 'outline-primary' | 'outline-secondary' | 'ghost' | 'danger' | 'success';
  size?: 'sm' | 'md' | 'lg' | 'xl';
  fullWidth?: boolean;
  children?: React.ReactNode;
}

export function GlowButton({ 
  variant = 'primary', 
  size = 'lg',
  fullWidth = false,
  children, 
  className = '', 
  ...props 
}: GlowButtonProps) {
  const variantClasses = {
    primary: 'btn-primary',
    secondary: 'btn-secondary',
    tertiary: 'btn-tertiary',
    'outline-primary': 'btn-outline-primary',
    'outline-secondary': 'btn-outline-secondary',
    ghost: 'btn-ghost',
    danger: 'btn-danger',
    success: 'btn-success',
  };

  const sizeClasses = {
    sm: 'btn-sm',
    md: 'btn-md',
    lg: 'btn-lg',
    xl: 'btn-xl',
  };

  const classes = [
    'btn',
    variantClasses[variant],
    sizeClasses[size],
    fullWidth && 'btn-block',
    className
  ].filter(Boolean).join(' ');

  return (
    <button
      className={classes}
      {...props}
    >
      {children}
    </button>
  );
}

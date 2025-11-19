import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline';
  fullWidth?: boolean;
  children: React.ReactNode;
}

export const Button: React.FC<ButtonProps> = ({ 
  variant = 'primary', 
  fullWidth = false, 
  className = '', 
  children, 
  ...props 
}) => {
  const baseStyles = "inline-flex items-center justify-center font-medium transition-all duration-300 ease-out active:scale-95";
  const radiusStyles = "rounded-[10px]";
  
  const variants = {
    primary: "bg-acid text-black hover:shadow-[0_0_20px_rgba(207,255,0,0.3)] hover:scale-[1.02]",
    secondary: "bg-white/10 text-white hover:bg-white/20 backdrop-blur-sm",
    outline: "border border-neutral-800 text-white hover:border-acid hover:text-acid",
  };

  const widthStyles = fullWidth ? "w-full" : "";
  const paddingStyles = "px-8 py-4 text-base md:text-lg";

  return (
    <button
      className={`${baseStyles} ${radiusStyles} ${variants[variant]} ${widthStyles} ${paddingStyles} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};
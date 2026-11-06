import React from 'react';

export default function Button({
  children,
  variant = 'primary',
  size = 'md',
  className = '',
  onClick,
  href,
  type = 'button',
  icon: Icon,
  iconPosition = 'right',
  ...props
}) {
  const baseStyles = "inline-flex items-center justify-center font-medium tracking-wide transition-all duration-300 rounded-sm focus:outline-none focus:ring-2 focus:ring-gold-400 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed select-none group";

  const sizeStyles = {
    sm: "px-3.5 py-1.5 text-xs tracking-wider uppercase",
    md: "px-6 py-2.5 text-sm tracking-wider uppercase",
    lg: "px-8 py-3.5 text-base tracking-wider uppercase",
  };

  const variantStyles = {
    primary: "bg-gradient-to-r from-gold-400 via-gold-500 to-gold-600 text-forest-950 font-semibold shadow-luxury-gold hover:shadow-lg hover:from-gold-300 hover:to-gold-500 hover:-translate-y-0.5 active:translate-y-0",
    forest: "bg-forest-900 text-cream-100 border border-gold-500/40 hover:bg-forest-800 hover:border-gold-400 hover:shadow-luxury hover:-translate-y-0.5 active:translate-y-0",
    outlineGold: "border border-gold-500 text-gold-500 hover:bg-gold-500 hover:text-forest-950 hover:shadow-luxury-gold hover:-translate-y-0.5 active:translate-y-0",
    outlineForest: "border border-forest-800 text-forest-900 hover:bg-forest-900 hover:text-cream-100 hover:shadow-luxury hover:-translate-y-0.5 active:translate-y-0",
    outlineLight: "border border-cream-200/40 text-cream-100 hover:border-gold-400 hover:text-gold-300 hover:bg-white/5 hover:-translate-y-0.5 active:translate-y-0",
    ghost: "text-forest-800 hover:text-gold-600 hover:bg-cream-200/50",
  };

  const combinedClasses = `${baseStyles} ${sizeStyles[size]} ${variantStyles[variant] || variantStyles.primary} ${className}`;

  const content = (
    <>
      {Icon && iconPosition === 'left' && (
        <Icon className="w-4 h-4 mr-2 transition-transform duration-300 group-hover:-translate-x-0.5" />
      )}
      <span>{children}</span>
      {Icon && iconPosition === 'right' && (
        <Icon className="w-4 h-4 ml-2 transition-transform duration-300 group-hover:translate-x-1" />
      )}
    </>
  );

  if (href) {
    return (
      <a href={href} className={combinedClasses} {...props}>
        {content}
      </a>
    );
  }

  return (
    <button type={type} onClick={onClick} className={combinedClasses} {...props}>
      {content}
    </button>
  );
}

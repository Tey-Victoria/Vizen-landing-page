import React from 'react';

export default function Badge({
  children,
  variant = 'gold',
  className = '',
  icon: Icon
}) {
  const variants = {
    gold: "bg-gold-500/15 text-gold-600 border-gold-500/30",
    forest: "bg-forest-900/10 text-forest-800 border-forest-800/20",
    festive: "bg-red-950/20 text-red-700 border-red-800/30",
    cream: "bg-cream-200/80 text-forest-900 border-cream-300",
    darkGold: "bg-forest-950/80 text-gold-400 border-gold-400/40 backdrop-blur-sm",
  };

  return (
    <span className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold tracking-wider uppercase border ${variants[variant] || variants.gold} ${className}`}>
      {Icon && <Icon className="w-3.5 h-3.5" />}
      {children}
    </span>
  );
}

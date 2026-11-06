import React from 'react';
import Badge from './Badge';

export default function SectionTitle({
  badge,
  badgeIcon,
  title,
  subtitle,
  centered = true,
  theme = 'light', // 'light' or 'dark'
  className = ''
}) {
  const isDark = theme === 'dark';

  return (
    <div className={`max-w-3xl mb-12 lg:mb-16 ${centered ? 'mx-auto text-center' : 'text-left'} ${className}`}>
      {badge && (
        <div className="mb-4">
          <Badge
            variant={isDark ? 'darkGold' : 'gold'}
            icon={badgeIcon}
          >
            {badge}
          </Badge>
        </div>
      )}

      <h2 className={`font-serif text-3xl sm:text-4xl lg:text-5xl font-normal tracking-tight leading-tight mb-4 ${
        isDark ? 'text-cream-50' : 'text-forest-950'
      }`}>
        {title}
      </h2>

      <div className={`h-0.5 w-16 mb-5 bg-gradient-to-r from-gold-400 to-gold-600 ${centered ? 'mx-auto' : ''}`} />

      {subtitle && (
        <p className={`text-base sm:text-lg leading-relaxed font-light ${
          isDark ? 'text-cream-200/80' : 'text-forest-800/80'
        }`}>
          {subtitle}
        </p>
      )}
    </div>
  );
}

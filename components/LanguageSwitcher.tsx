import React from 'react';
import { useTranslation } from 'react-i18next';

const FranceFlag: React.FC<{ className?: string }> = ({ className }) => (
  <svg viewBox="0 0 36 24" className={className} aria-hidden="true">
    <rect width="12" height="24" fill="#002395" />
    <rect x="12" width="12" height="24" fill="#fff" />
    <rect x="24" width="12" height="24" fill="#ED2939" />
  </svg>
);

const USAFlag: React.FC<{ className?: string }> = ({ className }) => (
  <svg viewBox="0 0 36 24" className={className} aria-hidden="true">
    <rect width="36" height="24" fill="#B22234" />
    {[1, 3, 5, 7, 9, 11].map((i) => (
      <rect key={i} y={i * (24 / 13)} width="36" height={24 / 13} fill="#fff" />
    ))}
    <rect width="14.4" height={24 * 7 / 13} fill="#3C3B6E" />
  </svg>
);

const LanguageSwitcher: React.FC = () => {
  const { i18n } = useTranslation();
  const isEn = i18n.language === 'en';

  const toggle = () => {
    const next = isEn ? 'fr' : 'en';
    i18n.changeLanguage(next);
    localStorage.setItem('lang', next);
  };

  return (
    <button
      onClick={toggle}
      className="w-7 h-5 rounded-sm overflow-hidden shadow-sm hover:scale-110 transition-transform border border-taupe/10"
      title={isEn ? 'Voir en français' : 'View in English'}
    >
      {isEn ? <FranceFlag className="w-full h-full" /> : <USAFlag className="w-full h-full" />}
    </button>
  );
};

export default LanguageSwitcher;

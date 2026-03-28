import React, { useState, useEffect } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Menu, X, Instagram, Facebook, Mail } from 'lucide-react';
import { NAV_ITEMS, LOGO } from '../constants';
import ScrollLogo from './ScrollLogo';
import LanguageSwitcher from './LanguageSwitcher';

const SCROLL_DISTANCE = 300; // must match ScrollLogo

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const { t } = useTranslation();
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrollProgress(Math.min(1, Math.max(0, window.scrollY / SCROLL_DISTANCE)));
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location]);

  const isHome = location.pathname === '/' || location.pathname === '';

  return (
    <div className="flex flex-col min-h-screen font-sans text-taupe">
      {/* Navigation */}
      <nav
        className="fixed w-full z-50"
        style={isHome ? {
          backgroundColor: `rgba(255, 248, 243, ${scrollProgress * 0.95})`,
          boxShadow: scrollProgress > 0.5 ? `0 1px 2px rgba(0,0,0,${(scrollProgress - 0.5) * 0.1})` : 'none',
          paddingTop: `${24 - 16 * scrollProgress}px`,
          paddingBottom: `${24 - 16 * scrollProgress}px`,
        } : {
          backgroundColor: scrollProgress > 0.05 ? 'rgba(255, 248, 243, 0.95)' : 'transparent',
          boxShadow: scrollProgress > 0.05 ? '0 1px 2px rgba(0,0,0,0.05)' : 'none',
          paddingTop: scrollProgress > 0.05 ? '8px' : '24px',
          paddingBottom: scrollProgress > 0.05 ? '8px' : '24px',
          transition: 'all 0.3s',
        }}
      >
        <div className="container mx-auto px-6 flex justify-between items-center">
          {isHome ? (
            <ScrollLogo />
          ) : (
            <NavLink to="/" className="group">
              <img src={LOGO} alt="Bonjour Bébé - Infant Massage" className="h-20 md:h-20 w-auto" />
            </NavLink>
          )}

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8 items-center">
            {NAV_ITEMS.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                className={({ isActive }) =>
                  `text-sm font-medium uppercase tracking-widest hover:text-pacific transition-colors ${
                    isActive ? 'text-pacific border-b border-pacific pb-1' : 'text-taupe'
                  }`
                }
              >
                {t(item.labelKey)}
              </NavLink>
            ))}
            <LanguageSwitcher />
            <NavLink
              to="/contact"
              className="bg-pacific text-white px-5 py-2 rounded-full font-serif italic hover:bg-opacity-90 transition-all shadow-md hover:shadow-lg text-sm"
            >
              {t('nav.bookNow')}
            </NavLink>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden text-taupe hover:text-pacific"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Dropdown */}
        <div
          className={`md:hidden absolute top-full left-0 w-full bg-cream border-t border-sage transition-all duration-300 overflow-hidden ${
            isMobileMenuOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'
          }`}
        >
          <div className="flex flex-col items-center py-8 space-y-6">
            {NAV_ITEMS.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                className="text-lg font-medium text-taupe hover:text-pacific"
              >
                {t(item.labelKey)}
              </NavLink>
            ))}
            <LanguageSwitcher />
            <NavLink
              to="/contact"
              className="bg-pacific text-white px-8 py-3 rounded-full font-serif italic text-lg shadow-sm"
            >
              {t('nav.bookSession')}
            </NavLink>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="flex-grow pt-0">
        {children}
      </main>

      {/* Footer */}
      <footer className="bg-sage/30 pt-16 pb-8">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
            <div className="col-span-1 md:col-span-2">
              <img src={LOGO} alt="Bonjour Bébé" className="h-24 w-auto mb-4" />
              <p className="text-taupe/80 mb-6 max-w-md leading-relaxed">
                {t('footer.tagline')}
              </p>
              <div className="flex space-x-4">
                <a href="https://www.instagram.com/bonjourbebe.infantmassage/" target="_blank" rel="noopener noreferrer" className="text-pacific hover:text-taupe transition-colors"><Instagram size={20} /></a>
                <a href="https://www.facebook.com/share/1KD5eGJCFu/" target="_blank" rel="noopener noreferrer" className="text-pacific hover:text-taupe transition-colors"><Facebook size={20} /></a>
                <a href="mailto:marion.infantmassage@gmail.com" className="text-pacific hover:text-taupe transition-colors"><Mail size={20} /></a>
              </div>
            </div>
            <div>
              <h3 className="font-serif font-semibold text-lg mb-4">{t('footer.quickLinks')}</h3>
              <ul className="space-y-2 text-sm text-taupe/80">
                <li><NavLink to="/about" className="hover:text-pacific">{t('footer.aboutMe')}</NavLink></li>
                <li><NavLink to="/services" className="hover:text-pacific">{t('footer.services')}</NavLink></li>
                <li><NavLink to="/contact" className="hover:text-pacific">{t('footer.contact')}</NavLink></li>
              </ul>
            </div>
            <div>
              <h3 className="font-serif font-semibold text-lg mb-4">{t('footer.location')}</h3>
              <p className="text-sm text-taupe/80 mb-2">{t('footer.bellevue')}</p>
              <p className="text-sm text-taupe/80 mb-2">{t('footer.servingSeattle')}</p>
              <p className="text-sm text-taupe/80 italic mt-4">{t('footer.bilingualNote')}</p>
            </div>
          </div>
          <div className="border-t border-taupe/10 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-taupe/60">
            <p>{t('footer.copyright', { year: new Date().getFullYear() })}</p>
            <p className="mt-2 md:mt-0">{t('footer.madeWith')}</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;

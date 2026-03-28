import React, { useState, useEffect } from 'react';
import { useTranslation, Trans } from 'react-i18next';
import { Heart, CheckCircle } from 'lucide-react';
import { FOUNDER_IMAGE_FUN, FOUNDER_IMAGE_PRO } from '../constants';

const ElfsightInstagram: React.FC = () => {
  useEffect(() => {
    if (!document.querySelector('script[src="https://elfsightcdn.com/platform.js"]')) {
      const script = document.createElement('script');
      script.src = 'https://elfsightcdn.com/platform.js';
      script.async = true;
      document.body.appendChild(script);
    }
  }, []);

  return <div className="elfsight-app-9b94480d-8541-43d3-bf22-a59446692e10" data-elfsight-app-lazy></div>;
};

const About: React.FC = () => {
  const { t } = useTranslation();
  const [showFun, setShowFun] = useState(false);

  return (
    <div className="pt-24 animate-fade-in">
      <div className="container mx-auto px-6 py-12">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="font-serif text-5xl text-taupe mb-4">{t('about.title')}</h1>
            <p className="text-xl text-pacific font-light italic">{t('about.subtitle')}</p>
          </div>

          {/* Main Content */}
          <div className="flex flex-col md:flex-row gap-12 items-start mb-20">
             <div className="w-full md:w-1/2 relative cursor-pointer group" onClick={() => setShowFun(!showFun)}>
                <img
                  src={showFun ? FOUNDER_IMAGE_FUN : FOUNDER_IMAGE_PRO}
                  alt="Marion, Founder of Bonjour Bébé"
                  className="rounded-2xl shadow-lg w-full object-cover transition-opacity duration-500"
                />
                <div className="absolute inset-0 flex items-end justify-center pb-4 opacity-0 group-hover:opacity-100 transition-opacity">
                  <span className="bg-white/80 backdrop-blur-sm text-taupe text-xs px-3 py-1 rounded-full">
                    {showFun ? t('about.seeProSide') : t('about.seeFunSide')}
                  </span>
                </div>
             </div>
             <div className="w-full md:w-1/2 space-y-6 text-lg text-taupe/80 leading-relaxed">
                <p>
                  <span className="font-serif text-3xl text-pacific mr-2">{t('about.greeting')}</span>
                  {t('about.bio1')}
                </p>
                <p>{t('about.bio2')}</p>
                <p>
                  <Trans i18nKey="about.bio3" components={{ italic: <span className="font-serif italic" /> }} />
                </p>
             </div>
          </div>

          {/* Certification & Philosophy */}
          <div className="bg-white rounded-3xl p-10 shadow-sm mb-20">
             <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                <div>
                   <h2 className="font-serif text-2xl mb-6 flex items-center gap-2">
                     <CheckCircle className="text-pacific" /> {t('about.credentialsTitle')}
                   </h2>
                   <ul className="space-y-4 text-taupe/80 list-none">
                      {['about.credential1', 'about.credential2'].map((key) => (
                        <li key={key} className="flex items-start gap-3">
                          <span className="inline-block h-2.5 w-2.5 min-h-2.5 min-w-2.5 rounded-full bg-pacific mt-1.5 flex-shrink-0"></span>
                          <span>{t(key)}</span>
                        </li>
                      ))}
                   </ul>
                </div>
                <div>
                   <h2 className="font-serif text-2xl mb-6 flex items-center gap-2">
                     <Heart className="text-pacific" /> {t('about.philosophyTitle')}
                   </h2>
                   <p className="text-taupe/80 italic">
                     <Trans i18nKey="about.philosophyQuote" components={{ bold: <span className="font-bold not-italic" /> }} />
                   </p>
                   <p className="mt-4 text-taupe/80">
                     {t('about.philosophyDesc')}
                   </p>
                </div>
             </div>
          </div>

          {/* Instagram Feed (Elfsight Widget) */}
          <ElfsightInstagram />
        </div>
      </div>
    </div>
  );
};

export default About;

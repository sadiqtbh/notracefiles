import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { InteractiveScanner } from './components/InteractiveScanner';
import { BeforeAfterSlider } from './components/BeforeAfterSlider';
import { FirefoxFeatures } from './components/FirefoxFeatures';
import { ComparisonMatrix } from './components/ComparisonMatrix';
import { AnatomySection } from './components/AnatomySection';
import { WorkflowSection } from './components/WorkflowSection';
import { DownloadSection } from './components/DownloadSection';
import { FaqSection } from './components/FaqSection';
import { Footer } from './components/Footer';
import { AboutPage } from './components/AboutPage';
import { PrivacyPolicyPage } from './components/PrivacyPolicyPage';

export type PageRoute = 'home' | 'about' | 'privacy';

export function App() {
  const getPageFromHash = (): PageRoute => {
    const hash = window.location.hash.toLowerCase();
    if (hash.includes('about')) return 'about';
    if (hash.includes('privacy') || hash.includes('policy')) return 'privacy';
    return 'home';
  };

  const [currentPage, setCurrentPage] = useState<PageRoute>(getPageFromHash);

  useEffect(() => {
    const handleHashChange = () => {
      const page = getPageFromHash();
      setCurrentPage(page);
    };

    window.addEventListener('hashchange', handleHashChange);
    window.addEventListener('popstate', handleHashChange);

    return () => {
      window.removeEventListener('hashchange', handleHashChange);
      window.removeEventListener('popstate', handleHashChange);
    };
  }, []);

  const handleNavigate = (page: PageRoute) => {
    setCurrentPage(page);
    if (page === 'home') {
      window.location.hash = '';
    } else if (page === 'about') {
      window.location.hash = '#/about';
    } else if (page === 'privacy') {
      window.location.hash = '#/privacy-policy';
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen w-full max-w-full overflow-x-hidden bg-white text-slate-900 flex flex-col selection:bg-[#00253f] selection:text-white font-sans">
      <Navbar activePage={currentPage} onNavigate={handleNavigate} />
      
      <main className="flex-1 w-full max-w-full overflow-x-hidden">
        {currentPage === 'about' && (
          <AboutPage onNavigate={handleNavigate} />
        )}

        {currentPage === 'privacy' && (
          <PrivacyPolicyPage onNavigate={handleNavigate} />
        )}

        {currentPage === 'home' && (
          <>
            <Hero />
            <InteractiveScanner />
            <BeforeAfterSlider />
            <FirefoxFeatures />
            <ComparisonMatrix />
            <AnatomySection />
            <WorkflowSection />
            <DownloadSection />
            <FaqSection />
          </>
        )}
      </main>

      <Footer onNavigate={handleNavigate} />
    </div>
  );
}

export default App;

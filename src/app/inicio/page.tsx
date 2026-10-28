import type { Metadata } from 'next';

import { CareersSection, LandingFooter, LandingHeader, LandingHero } from '@/modules/landing';

export const metadata: Metadata = {
  title: 'Aula FCG - Entorno Virtual de Aprendizaje | Facultad Calixto García',
  description:
    'Entorno Virtual de Aprendizaje de la Facultad de Ciencias Médicas "Calixto García" - Universidad de Ciencias Médicas de La Habana.'
};

const LandingPage = () => (
  <div className="flex min-h-screen flex-col bg-gray-50 text-gray-800 antialiased">
    <LandingHeader />
    <LandingHero />
    <CareersSection />
    <LandingFooter />
  </div>
);

export default LandingPage;

import type { Metadata } from 'next';

import { LoginCard, LoginFooter, LoginHeader } from '@/modules/login';

export const metadata: Metadata = {
  title: 'Aula FCG - Entorno Virtual de Aprendizaje | Facultad Calixto García',
  description:
    'Entorno Virtual de Aprendizaje de la Facultad de Ciencias Médicas "Calixto García" - Universidad de Ciencias Médicas de La Habana.'
};

const LoginPage = () => (
  <div className="flex min-h-screen flex-col justify-between bg-gray-100 text-gray-800 antialiased">
    <LoginHeader />
    <LoginCard />
    <LoginFooter />
  </div>
);

export default LoginPage;

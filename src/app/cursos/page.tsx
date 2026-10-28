import type { Metadata } from 'next';

import { CursosBreadcrumb, CursosContent, CursosFooter, CursosHeader } from '@/modules/cursos';

export const metadata: Metadata = {
  title: 'Cursos | Aula FCG - Facultad Calixto García',
  description:
    'Programas de estudio, asignaturas curriculares y recursos docentes de las ciencias de la salud de la Facultad de Ciencias Médicas "Calixto García".'
};

const CursosPage = () => (
  <div className="flex min-h-screen flex-col bg-gray-50 text-slate-800 antialiased">
    <CursosHeader />
    <CursosBreadcrumb />
    <CursosContent />
    <CursosFooter />
  </div>
);

export default CursosPage;

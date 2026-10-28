import { LayoutGrid } from 'lucide-react';
import Link from 'next/link';

import { careers } from '../data/careers';
import { CareerCard } from './CareerCard';

export const CareersSection = () => (
  <main
    className="scroll-mt-24 flex-grow scroll-smooth bg-white px-4 py-16 sm:px-6 lg:px-8 lg:py-20"
    id="carreras"
  >
    <div className="mx-auto max-w-7xl">
      <div className="mx-auto mb-14 max-w-2xl text-center">
        <h2 className="text-3xl font-bold tracking-tight text-[#228b44] sm:text-4xl">Carreras</h2>
        <div className="mx-auto mt-4 h-1 w-16 rounded-full bg-[#228b44]" />
        <p className="mt-5 text-sm text-gray-600 sm:text-base">
          Explora nuestros programas de formación médica superior y especialidades de pregrado.
        </p>
      </div>

      <div className="grid grid-cols-1 items-stretch gap-8 md:grid-cols-2 lg:grid-cols-3">
        {careers.map((career) => (
          <CareerCard career={career} href={`/cursos#${career.id}`} key={career.id} />
        ))}
      </div>

      <div className="mt-16 mb-14 text-center">
        <Link
          className="inline-flex items-center justify-center gap-2 rounded-lg bg-[#228b44] px-9 py-3.5 text-sm font-bold tracking-wider text-white uppercase shadow-md transition-all duration-200 hover:-translate-y-0.5 hover:bg-[#2e6b30] hover:shadow-lg focus:ring-2 focus:ring-[#228b44] focus:ring-offset-2 focus:outline-none"
          href="/cursos"
        >
          <span>Ver todos los cursos</span>
          <LayoutGrid aria-hidden="true" className="h-5 w-5" strokeWidth={2} />
        </Link>
      </div>
    </div>
  </main>
);

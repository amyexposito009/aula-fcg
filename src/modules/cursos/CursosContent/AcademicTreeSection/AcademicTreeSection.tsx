'use client';

import { ChevronDown, GraduationCap, Search } from 'lucide-react';
import { useState } from 'react';

import { careerPrograms } from '../../data/cursos';
import { CareerBlock } from './CareerBlock';

const allYearIds = careerPrograms.flatMap((program) => program.years.map((year) => year.id));

export const AcademicTreeSection = () => {
  const [query, setQuery] = useState('');
  const [openYears, setOpenYears] = useState<Record<string, boolean>>({});
  const [allExpanded, setAllExpanded] = useState(false);

  const normalizedQuery = query.trim().toLowerCase();
  const isFiltering = normalizedQuery.length > 0;

  const filteredPrograms = careerPrograms
    .map((program) => ({
      ...program,
      years: program.years
        .map((year) => ({
          ...year,
          subjects: year.subjects.filter(
            (subject) =>
              !isFiltering ||
              [subject.name, subject.description, subject.area].some((field) =>
                field.toLowerCase().includes(normalizedQuery)
              )
          )
        }))
        .filter((year) => year.subjects.length > 0)
    }))
    .filter((program) => program.years.length > 0);

  const isYearOpen = (id: string) => (isFiltering ? true : Boolean(openYears[id]));

  const handleToggleYear = (id: string, open: boolean) => {
    setOpenYears((prev) => ({ ...prev, [id]: open }));
  };

  const handleToggleAll = () => {
    const next = !allExpanded;
    const nextOpenYears: Record<string, boolean> = {};

    allYearIds.forEach((id) => {
      nextOpenYears[id] = next;
    });

    setAllExpanded(next);
    setOpenYears(nextOpenYears);
  };

  return (
    <section className="space-y-6" data-purpose="academic-tree">
      <div className="mt-8">
        <div className="flex items-center gap-3">
          <GraduationCap
            aria-hidden="true"
            className="h-7 w-7 shrink-0 text-green-600 md:h-8 md:w-8"
            strokeWidth={2}
          />
          <h2 className="text-2xl font-bold tracking-tight text-[#0b3c68] md:text-3xl">
            Carreras y Asignaturas
          </h2>
        </div>
        <p className="mt-2 text-left text-sm text-gray-500">
          Explora los programas y asignaturas por año académico
        </p>

        <div className="mt-6 flex flex-col items-center justify-between gap-4 sm:flex-row">
          <form className="w-full sm:max-w-md sm:flex-1" onSubmit={(e) => e.preventDefault()}>
            <label className="sr-only" htmlFor="course-search-input">
              Buscar cursos
            </label>
            <div className="relative">
              <input
                className="peer w-full rounded-lg border border-gray-300 bg-gray-50 py-2.5 pr-4 pl-10 text-sm text-slate-800 shadow-sm transition-colors placeholder:text-gray-400 hover:bg-white focus:border-green-600 focus:bg-white focus:ring-2 focus:ring-green-500/20 focus:outline-none"
                id="course-search-input"
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Buscar cursos..."
                type="search"
                value={query}
              />
              <Search
                aria-hidden="true"
                className="pointer-events-none absolute top-1/2 left-3.5 h-4 w-4 -translate-y-1/2 text-green-600 transition-colors peer-hover:text-green-700 peer-focus:text-green-700"
                strokeWidth={2.2}
              />
            </div>
          </form>
          <button
            className="shrink-0 self-end rounded-lg px-2 py-2 text-xs font-semibold text-[#0b3c68] transition-colors hover:bg-emerald-50 hover:text-[#16a34a] focus:outline-none sm:self-center sm:text-sm"
            id="btn-toggle-all"
            onClick={handleToggleAll}
            type="button"
          >
            <ChevronDown
              aria-hidden="true"
              className={`mr-1 inline h-4 w-4 text-[#16a34a] transition-transform duration-200 ${
                allExpanded ? 'rotate-180' : ''
              }`}
              strokeWidth={2}
            />
            <span id="toggle-all-label">{allExpanded ? 'Colapsar todo' : 'Expandir todo'}</span>
          </button>
        </div>
      </div>

      {filteredPrograms.length === 0 ? (
        <p className="rounded-xl border border-dashed border-slate-200 bg-slate-50/60 px-4 py-10 text-center text-sm text-slate-500">
          No se encontraron asignaturas para &quot;{query}&quot;.
        </p>
      ) : (
        <div className="space-y-5">
          {filteredPrograms.map((program) => (
            <div
              className={`scroll-mt-28 overflow-hidden rounded-xl border border-t-4 border-gray-200 bg-white p-4 shadow-sm transition-shadow duration-200 hover:shadow-md sm:p-5 ${
                program.tone === 'green' ? 'border-t-green-600' : 'border-t-blue-600'
              }`}
              id={program.id}
              key={program.id}
            >
              <CareerBlock
                isYearOpen={isYearOpen}
                onToggleYear={handleToggleYear}
                program={program}
                visibleYears={program.years}
              />
            </div>
          ))}
        </div>
      )}
    </section>
  );
};

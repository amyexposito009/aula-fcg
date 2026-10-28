import { FolderOpen } from 'lucide-react';
import type { SyntheticEvent } from 'react';

import type { AcademicYear } from '../../../data/cursos';
import { SubjectCard } from '../SubjectCard';

interface YearAccordionProps {
  year: AcademicYear;
  open: boolean;
  onToggle: (id: string, open: boolean) => void;
}

export const YearAccordion = ({ year, open, onToggle }: YearAccordionProps) => {
  const handleToggle = (event: SyntheticEvent<HTMLDetailsElement>) => {
    onToggle(year.id, event.currentTarget.open);
  };

  const subjectCount = year.subjects.length;

  return (
    <details
      className={`academic-year group cursor-pointer overflow-hidden rounded-lg border border-gray-200 border-l-4 border-l-[#0b3c68] shadow-sm transition-colors duration-200 hover:border-emerald-300 hover:border-l-[#0b3c68] hover:shadow-md ${
        open ? 'bg-white' : 'bg-gray-50 hover:bg-gray-100'
      }`}
      onToggle={handleToggle}
      open={open}
    >
      <summary className="flex cursor-pointer select-none items-center justify-between px-5 py-3.5 transition-colors hover:bg-slate-50/70">
        <div className="flex items-center gap-3">
          <svg
            aria-hidden="true"
            className="chevron-icon h-4 w-4 text-[#16a34a] transition-transform duration-200"
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path
              clipRule="evenodd"
              d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 010-1.414z"
              fillRule="evenodd"
            />
          </svg>
          <FolderOpen
            aria-hidden="true"
            className="h-4 w-4 text-[#0b3c68] transition-colors group-hover:text-[#16a34a]"
            strokeWidth={2}
          />
          <span className="text-sm font-bold text-[#0b3c68] transition-colors group-hover:text-[#16a34a]">
            {year.name}
          </span>
        </div>
        {year.badge ? (
          <span className="inline-flex items-center rounded-full border border-emerald-200/80 bg-emerald-50 px-2.5 py-0.5 text-xs font-semibold text-emerald-700 shadow-2xs">
            {year.badge}
          </span>
        ) : (
          <span className="inline-flex items-center rounded-full border border-blue-200 bg-blue-50 px-2.5 py-0.5 text-xs font-medium text-blue-700">
            {subjectCount} asignaturas
          </span>
        )}
      </summary>
      <div className="grid gap-3 border-t border-slate-100 bg-slate-50/50 p-4 sm:grid-cols-2 lg:grid-cols-3">
        {year.subjects.map((subject) => (
          <SubjectCard key={subject.id} subject={subject} />
        ))}
      </div>
    </details>
  );
};

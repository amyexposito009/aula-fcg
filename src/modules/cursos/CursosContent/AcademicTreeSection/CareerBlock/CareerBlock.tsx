import type { CareerProgram } from '../../../data/cursos';
import { YearAccordion } from '../YearAccordion';

interface CareerBlockProps {
  program: CareerProgram;
  visibleYears: CareerProgram['years'];
  isYearOpen: (id: string) => boolean;
  onToggleYear: (id: string, open: boolean) => void;
}

export const CareerBlock = ({
  program,
  visibleYears,
  isYearOpen,
  onToggleYear
}: CareerBlockProps) => {
  const Icon = program.icon;
  const isGreen = program.tone === 'green';

  return (
    <div className="space-y-3 pt-2">
      <div className="flex items-center justify-between rounded-xl border border-slate-200/90 bg-slate-50/80 p-4">
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-emerald-100 bg-emerald-50 text-[#16a34a] shadow-2xs">
            <Icon aria-hidden="true" className="h-5 w-5" strokeWidth={2} />
          </div>
          <div>
            <h3 className="text-base font-bold text-[#0b3c68]">{program.name}</h3>
            <p className="text-xs font-medium text-slate-500">{program.description}</p>
          </div>
        </div>
        <span
          className={`inline-flex items-center gap-1.5 rounded-full border px-3 py-1 text-xs font-semibold shadow-2xs ${
            isGreen
              ? 'border-emerald-200/80 bg-emerald-50 text-emerald-700'
              : 'border-blue-100 bg-blue-50 text-[#0b3c68]'
          }`}
        >
          <span
            className={`h-1.5 w-1.5 rounded-full ${isGreen ? 'bg-[#16a34a]' : 'bg-[#0b3c68]'}`}
          />
          {program.duration}
        </span>
      </div>

      {visibleYears.map((year) => (
        <YearAccordion
          key={year.id}
          onToggle={onToggleYear}
          open={isYearOpen(year.id)}
          year={year}
        />
      ))}
    </div>
  );
};

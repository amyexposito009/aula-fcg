import { AcademicTreeSection } from './AcademicTreeSection';
import { DepartmentBanner } from './DepartmentBanner';

export const CursosContent = () => (
  <main className="mx-auto w-full max-w-7xl flex-grow px-4 py-8 sm:px-6 lg:px-8">
    <div className="space-y-8 rounded-xl border border-slate-200/80 bg-white p-6 shadow-xs md:p-8">
      <DepartmentBanner />
      <AcademicTreeSection />
    </div>
  </main>
);

import Link from 'next/link';

import type { Subject } from '../../../data/cursos';

interface SubjectCardProps {
  subject: Subject;
}

export const SubjectCard = ({ subject }: SubjectCardProps) => (
  <div className="flex flex-col justify-between rounded-xl border border-slate-200/90 bg-white p-3.5">
    <div>
      {subject.semester && (
        <span
          className={`rounded px-2 py-0.5 text-[10px] font-bold uppercase ${
            subject.semesterTone === 'blue'
              ? 'bg-blue-50 text-[#0b3c68]'
              : 'bg-emerald-50 text-[#16a34a]'
          }`}
        >
          {subject.semester}
        </span>
      )}
      <h4 className={`text-xs font-bold text-[#0b3c68] ${subject.semester ? 'mt-1.5' : ''}`}>
        {subject.name}
      </h4>
      <p className="mt-0.5 text-[11px] text-slate-500">{subject.description}</p>
    </div>
    <Link
      className="mt-3 flex items-center justify-between border-t border-slate-100 pt-2 text-xs font-bold text-[#16a34a] hover:underline"
      href="#"
    >
      <span>{subject.actionLabel ?? 'Ver cursos'}</span>
      <span className="font-normal text-slate-400">{subject.area}</span>
    </Link>
  </div>
);

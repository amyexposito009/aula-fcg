import Link from 'next/link';

export const CursosBreadcrumb = () => (
  <nav
    aria-label="Migas de pan"
    className="border-b border-slate-200 bg-white shadow-2xs"
    data-purpose="breadcrumb-bar"
  >
    <div className="mx-auto max-w-7xl px-4 py-2.5 sm:px-6 lg:px-8">
      <ol className="flex flex-wrap items-center gap-1.5 text-sm text-slate-500">
        <li>
          <Link
            className="font-medium text-[#0b3c68] transition-colors hover:text-[#16a34a] hover:underline"
            href="#"
          >
            Área personal
          </Link>
        </li>
        <li className="text-slate-400">/</li>
        <li>
          <Link
            className="font-medium text-[#0b3c68] transition-colors hover:text-[#16a34a] hover:underline"
            href="#"
          >
            Cursos
          </Link>
        </li>
      </ol>
    </div>
  </nav>
);

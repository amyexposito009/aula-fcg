import { ArrowRight, Clock } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

import type { Career } from '../../data/careers';

interface CareerCardProps {
  career: Career;
  href: string;
}

export const CareerCard = ({ career, href }: CareerCardProps) => {
  const { id, category, title, description, duration, badge, icon: Icon, image, imageAlt } = career;

  return (
    <Link
      aria-label={`Ver cursos de ${title} en /cursos#${id}`}
      className="group flex h-full flex-col overflow-hidden rounded-xl border border-gray-200/70 bg-white shadow-sm transition-all duration-200 hover:-translate-y-1.5 hover:shadow-xl"
      href={href}
    >
      <div className="relative aspect-[16/10] overflow-hidden bg-gray-100">
        <Image
          alt={imageAlt}
          className="object-cover object-center transition-transform duration-300 group-hover:scale-105"
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
          src={image}
        />
        <div className="absolute top-3 left-3 flex items-center gap-2 rounded-full border border-gray-200/40 bg-white/90 px-3 py-1 shadow-sm backdrop-blur-sm">
          <Icon aria-hidden="true" className="h-4 w-4 text-[#228b44]" strokeWidth={2} />
          <span className="text-xs font-semibold uppercase tracking-wide text-gray-800">
            {badge}
          </span>
        </div>
      </div>

      <div className="flex flex-1 flex-col p-6">
        <div className="flex-grow">
          <span className="mb-1.5 inline-block text-xs font-semibold tracking-wider text-[#0b4386] uppercase">
            {category}
          </span>
          <h3 className="text-lg font-bold text-gray-900 transition-colors group-hover:text-[#0b4386]">
            {title}
          </h3>
          <p className="mt-3 text-sm leading-relaxed text-gray-600">{description}</p>
        </div>

        <div className="mt-6 flex items-center justify-between border-t border-gray-200/50 pt-6">
          <span className="flex items-center gap-1.5 text-xs font-medium text-gray-800">
            <Clock aria-hidden="true" className="h-5 w-5 text-[#0b4386]" strokeWidth={2} />
            {duration}
          </span>
          <span className="inline-flex items-center gap-1.5 text-xs font-bold text-[#0b4386] group-hover:text-[#1a6b34]">
            <span>Ver cursos</span>
            <ArrowRight
              aria-hidden="true"
              className="h-4 w-4 text-[#228b44] transition-transform group-hover:translate-x-1"
              strokeWidth={2}
            />
          </span>
        </div>
      </div>
    </Link>
  );
};

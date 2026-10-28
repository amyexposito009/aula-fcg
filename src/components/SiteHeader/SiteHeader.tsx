'use client';

import { ChevronDown, Menu, UserCircle, X } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useRef, useState } from 'react';

interface NavItem {
  label: string;
  href: string;
}

const pregradoLinks: NavItem[] = [
  { label: 'Medicina', href: '/carreras/medicina' },
  { label: 'Enfermería', href: '/carreras/enfermeria' },
  { label: 'Tecnología de la Salud', href: '/carreras/tecnologia' }
];

const postgradoLinks: NavItem[] = [
  { label: 'Cursos', href: '/cursos' },
  { label: 'Especialidades', href: '#' },
  { label: 'Maestrías', href: '#' },
  { label: 'Doctorados', href: '#' }
];

export const SiteHeader = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<'pregrado' | 'postgrado' | null>(null);
  const [openAccordion, setOpenAccordion] = useState<'pregrado' | 'postgrado' | null>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setOpenDropdown(null);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);

    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <header
      className="sticky top-0 z-50 w-full border-b border-gray-200/70 bg-white shadow-sm"
      data-purpose="site-header"
    >
      <div className="mx-auto flex min-h-[4.5rem] w-full max-w-7xl items-center justify-between px-4 py-2 lg:px-8">
        <div className="flex items-center gap-3 md:gap-4">
          <button
            aria-label="Abrir menú"
            className="text-on-surface flex items-center justify-center rounded-lg p-2 transition-colors hover:bg-gray-100 focus:outline-none"
            onClick={() => setIsOpen(true)}
            type="button"
          >
            <Menu aria-hidden="true" className="h-6 w-6 text-[#228b44]" strokeWidth={2} />
          </button>

          <Link className="group flex items-center gap-3.5" href="/inicio">
            <div className="flex h-20 w-20 shrink-0 items-center justify-center rounded-lg border border-gray-200/60 bg-white p-1.5 shadow-sm">
              <Image
                alt="Escudo Facultad Calixto García"
                className="h-full w-full object-contain"
                height={331}
                priority
                src="/images/cg.jpeg"
                width={334}
              />
            </div>
            <div className="flex flex-col justify-center">
              <div className="flex items-center gap-1.5 leading-none">
                <span className="text-2xl font-bold tracking-tight text-[#0b4386]">Aula</span>
                <span className="text-2xl font-bold tracking-tight text-[#228b44]">FCG</span>
              </div>
              <span className="mt-1 hidden text-xs font-medium tracking-wider text-gray-500 uppercase sm:inline">
                Facultad de Ciencias Médicas &quot;Calixto García&quot;
              </span>
            </div>
          </Link>
        </div>

        <div className="flex items-center gap-2 sm:gap-3">
          <div className="mr-2 hidden items-center gap-4 md:flex" ref={dropdownRef}>
            <div className="relative">
              <button
                aria-expanded={openDropdown === 'pregrado'}
                aria-haspopup="true"
                className="flex cursor-pointer items-center gap-1 text-sm font-semibold text-[#228b44] transition-opacity hover:opacity-80"
                onClick={() => setOpenDropdown(openDropdown === 'pregrado' ? null : 'pregrado')}
                type="button"
              >
                <span>Pregrado</span>
                <ChevronDown
                  aria-hidden="true"
                  className={`h-4 w-4 transition-transform duration-200 ${
                    openDropdown === 'pregrado' ? 'rotate-180' : ''
                  }`}
                  strokeWidth={2}
                />
              </button>
              <div
                className={`absolute top-full left-0 mt-2 w-56 origin-top-left rounded-md border border-gray-200 bg-white p-1 shadow-lg transition-all duration-200 ${
                  openDropdown === 'pregrado'
                    ? 'visible translate-y-0 opacity-100'
                    : 'invisible -translate-y-1 opacity-0'
                }`}
              >
                {pregradoLinks.map((item) => (
                  <Link
                    className="block rounded-md px-3 py-2 text-sm font-medium text-[#0b4386] transition-colors hover:bg-gray-100"
                    href={item.href}
                    key={item.label}
                    onClick={() => setOpenDropdown(null)}
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            </div>

            <div className="relative">
              <button
                aria-expanded={openDropdown === 'postgrado'}
                aria-haspopup="true"
                className="flex cursor-pointer items-center gap-1 text-sm font-semibold text-[#228b44] transition-opacity hover:opacity-80"
                onClick={() => setOpenDropdown(openDropdown === 'postgrado' ? null : 'postgrado')}
                type="button"
              >
                <span>Postgrado</span>
                <ChevronDown
                  aria-hidden="true"
                  className={`h-4 w-4 transition-transform duration-200 ${
                    openDropdown === 'postgrado' ? 'rotate-180' : ''
                  }`}
                  strokeWidth={2}
                />
              </button>
              <div
                className={`absolute top-full left-0 mt-2 w-56 origin-top-left rounded-md border border-gray-200 bg-white p-1 shadow-lg transition-all duration-200 ${
                  openDropdown === 'postgrado'
                    ? 'visible translate-y-0 opacity-100'
                    : 'invisible -translate-y-1 opacity-0'
                }`}
              >
                {postgradoLinks.map((item) => (
                  <Link
                    className="block rounded-md px-3 py-2 text-sm font-medium text-[#0b4386] transition-colors hover:bg-gray-100"
                    href={item.href}
                    key={item.label}
                    onClick={() => setOpenDropdown(null)}
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            </div>
          </div>

          <Link
            className="flex items-center gap-2 rounded-full border border-gray-200 px-2.5 py-1.5 transition-colors hover:bg-gray-50"
            href="/login"
          >
            <UserCircle aria-hidden="true" className="h-5 w-5 text-[#0b4386]" strokeWidth={1.8} />
            <span className="hidden text-xs font-semibold tracking-tight text-gray-800 sm:inline">
              Ingresar
            </span>
          </Link>
        </div>
      </div>

      {isOpen && (
        <div
          aria-hidden="true"
          className="fixed inset-0 z-40 bg-black/50 transition-opacity duration-300"
          onClick={() => setIsOpen(false)}
        />
      )}

      <aside
        aria-label="Menú lateral"
        className={`fixed top-0 left-0 z-50 h-full w-72 transform bg-white shadow-xl transition-transform duration-300 ease-out ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <div className="flex items-center justify-between border-b border-gray-200 p-4">
          <div className="flex items-center gap-2">
            <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-lg border border-gray-200/60 bg-white p-1.5">
              <Image
                alt="Escudo Facultad Calixto García"
                className="h-full w-full object-contain"
                height={331}
                src="/images/cg.jpeg"
                width={334}
              />
            </div>
            <span className="text-xl font-bold text-[#0b4386]">
              Aula <span className="text-[#228b44]">FCG</span>
            </span>
          </div>
          <button
            aria-label="Cerrar menú"
            className="flex items-center justify-center rounded-lg p-2 text-gray-600 transition-colors hover:bg-gray-100 hover:text-gray-900 focus:outline-none"
            onClick={() => setIsOpen(false)}
            type="button"
          >
            <X aria-hidden="true" className="h-5 w-5" strokeWidth={2} />
          </button>
        </div>

        <nav className="flex flex-col gap-2 p-4">
          <Link
            className="rounded-lg px-3 py-2 text-sm font-semibold text-[#0b4386] transition-colors hover:bg-blue-50 hover:text-[#062d5c]"
            href="/inicio"
            onClick={() => setIsOpen(false)}
          >
            Inicio
          </Link>

          <Link
            className="rounded-lg px-3 py-2 text-sm font-semibold text-[#0b4386] transition-colors hover:bg-blue-50 hover:text-[#062d5c]"
            href="/cursos"
            onClick={() => setIsOpen(false)}
          >
            Cursos
          </Link>

          <div>
            <button
              aria-expanded={openAccordion === 'pregrado'}
              className="flex w-full items-center justify-between rounded-lg px-3 py-2 text-sm font-semibold text-[#0b4386] transition-colors hover:bg-blue-50 hover:text-[#062d5c]"
              onClick={() => setOpenAccordion(openAccordion === 'pregrado' ? null : 'pregrado')}
              type="button"
            >
              <span>Pregrado</span>
              <ChevronDown
                aria-hidden="true"
                className={`h-4 w-4 transition-transform duration-200 ${
                  openAccordion === 'pregrado' ? 'rotate-180' : ''
                }`}
                strokeWidth={2}
              />
            </button>
            <div
              className={`grid transition-all duration-200 ease-out ${
                openAccordion === 'pregrado'
                  ? 'grid-rows-[1fr] opacity-100'
                  : 'grid-rows-[0fr] opacity-0'
              }`}
            >
              <div className="overflow-hidden">
                <div className="flex flex-col gap-0.5 py-1">
                  {pregradoLinks.map((item) => (
                    <Link
                      className="rounded-lg py-1.5 pr-3 pl-8 text-sm font-medium text-[#0b4386] transition-colors hover:bg-gray-100"
                      href={item.href}
                      key={item.label}
                      onClick={() => {
                        setOpenAccordion(null);
                        setIsOpen(false);
                      }}
                    >
                      {item.label}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div>
            <button
              aria-expanded={openAccordion === 'postgrado'}
              className="flex w-full items-center justify-between rounded-lg px-3 py-2 text-sm font-semibold text-[#0b4386] transition-colors hover:bg-blue-50 hover:text-[#062d5c]"
              onClick={() => setOpenAccordion(openAccordion === 'postgrado' ? null : 'postgrado')}
              type="button"
            >
              <span>Postgrado</span>
              <ChevronDown
                aria-hidden="true"
                className={`h-4 w-4 transition-transform duration-200 ${
                  openAccordion === 'postgrado' ? 'rotate-180' : ''
                }`}
                strokeWidth={2}
              />
            </button>
            <div
              className={`grid transition-all duration-200 ease-out ${
                openAccordion === 'postgrado'
                  ? 'grid-rows-[1fr] opacity-100'
                  : 'grid-rows-[0fr] opacity-0'
              }`}
            >
              <div className="overflow-hidden">
                <div className="flex flex-col gap-0.5 py-1">
                  {postgradoLinks.map((item) => (
                    <Link
                      className="rounded-lg py-1.5 pr-3 pl-8 text-sm font-medium text-[#0b4386] transition-colors hover:bg-gray-100"
                      href={item.href}
                      key={item.label}
                      onClick={() => {
                        setOpenAccordion(null);
                        setIsOpen(false);
                      }}
                    >
                      {item.label}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <Link
            className="rounded-lg px-3 py-2 text-sm font-semibold text-[#0b4386] transition-colors hover:bg-blue-50 hover:text-[#062d5c]"
            href="#"
            onClick={() => setIsOpen(false)}
          >
            Área Personal
          </Link>
          <Link
            className="rounded-lg px-3 py-2 text-sm font-semibold text-[#0b4386] transition-colors hover:bg-blue-50 hover:text-[#062d5c]"
            href="#"
            onClick={() => setIsOpen(false)}
          >
            Mis Cursos
          </Link>
        </nav>
      </aside>
    </header>
  );
};

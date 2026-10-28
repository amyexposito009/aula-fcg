import { Facebook, GraduationCap, Linkedin, Send, Twitter, Youtube } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

const socialLinks = [
  { label: 'Twitter', href: '#', icon: Twitter, className: 'bg-[#1DA1F2]' },
  { label: 'Facebook', href: '#', icon: Facebook, className: 'bg-[#1877F2]' },
  { label: 'YouTube', href: '#', icon: Youtube, className: 'bg-[#CD201F]' },
  { label: 'LinkedIn', href: '#', icon: Linkedin, className: 'bg-[#0A66C2]' },
  { label: 'Telegram', href: '#', icon: Send, className: 'bg-[#229ED9]' }
];

const interestSites = [
  { label: 'Aplicación Móvil', href: '#' },
  { label: 'Infomed Red de Salud', href: '#' },
  { label: 'Biblioteca Virtual', href: '#' },
  { label: 'Portal UCMH', href: '#' },
  { label: 'Intranet Institucional', href: '#' }
];

const otherSites = [
  { label: 'Cubadebate', href: '#' },
  { label: 'Granma', href: '#' },
  { label: 'Juventud Rebelde', href: '#' },
  { label: 'Bohemia', href: '#' },
  { label: 'Minsap Cuba', href: '#' }
];

export const LandingFooter = () => (
  <footer className="bg-brand-blue-dark pt-14 pb-8 text-white" id="footer">
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 gap-10 border-b border-white/10 pb-12 md:grid-cols-2 lg:grid-cols-12">
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:col-span-4">
          <div className="flex flex-col gap-3">
            <div className="flex h-20 w-20 shrink-0 items-center justify-center rounded-xl border border-white/20 bg-white p-2.5 shadow-lg transition-transform hover:scale-105">
              <div className="relative h-full w-full">
                <Image
                  alt="Escudo Facultad Calixto García"
                  className="object-contain"
                  fill
                  sizes="80px"
                  src="/images/aula-fcg-escudo.jpg"
                />
              </div>
            </div>
            <div>
              <h4 className="text-lg leading-snug font-semibold text-white">
                Facultad de Ciencias Médicas &quot;Calixto García&quot;
              </h4>
              <p className="mt-1 text-xs text-blue-100">
                Universidad de Ciencias Médicas de La Habana
              </p>
            </div>
            <p className="text-xs leading-relaxed text-blue-100/80">
              Entorno virtual docente de apoyo a las actividades académicas, asistenciales e
              investigativas en el ámbito de las ciencias de la salud.
            </p>
          </div>

          <div className="flex flex-col gap-3">
            <Link
              className="transition-opacity hover:opacity-80 focus:outline-none"
              href="https://uvs.sld.cu"
              rel="noopener noreferrer"
              target="_blank"
            >
              <div className="flex h-20 w-20 shrink-0 items-center justify-center rounded-xl border border-white/20 bg-white p-2.5 shadow-lg transition-transform hover:scale-105">
                <div className="relative h-full w-full">
                  <Image
                    alt="Logo de la Universidad Virtual de Salud (UVS)"
                    className="object-contain"
                    fill
                    sizes="80px"
                    src="/images/cienciasmedicas.jpeg"
                  />
                </div>
              </div>
            </Link>
            <h4 className="text-lg leading-snug font-semibold text-white">
              Universidad Virtual de Salud
            </h4>
            <Link
              className="mt-1 inline-flex items-center gap-2 text-xs font-semibold tracking-wide text-blue-100 uppercase transition-opacity hover:opacity-80"
              href="https://uvs.sld.cu"
              rel="noopener noreferrer"
              target="_blank"
            >
              <span className="flex items-center justify-center rounded-full bg-[#009068] p-2">
                <GraduationCap aria-hidden="true" className="h-5 w-5 text-white" strokeWidth={2} />
              </span>
              Portal UVS
            </Link>
          </div>
        </div>

        <div className="flex flex-col gap-3 lg:col-span-3">
          <h4 className="text-lg font-bold text-white">Síguenos</h4>
          <p className="text-xs text-blue-100">
            Mantente informado, síguenos a través de nuestras redes sociales
          </p>
          <div className="flex items-center gap-2 pt-2">
            {socialLinks.map(({ label, href, icon: Icon, className }) => (
              <a
                aria-label={label}
                className={`flex h-8 w-8 items-center justify-center rounded text-white shadow-sm transition-opacity hover:opacity-90 ${className}`}
                href={href}
                key={label}
              >
                <Icon aria-hidden="true" className="h-4 w-4" strokeWidth={2} />
              </a>
            ))}
          </div>
        </div>

        <div className="flex flex-col gap-3 sm:col-span-1 lg:col-span-2">
          <h4 className="text-lg font-bold text-white">Sitios de interés</h4>
          <ul className="flex flex-col gap-2 text-xs text-blue-100">
            {interestSites.map(({ label, href }) => (
              <li key={label}>
                <a className="transition-colors hover:text-amber-200 hover:underline" href={href}>
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div className="flex flex-col gap-3 sm:col-span-1 lg:col-span-3">
          <h4 className="text-lg font-bold text-white">Otros sitios</h4>
          <ul className="flex flex-col gap-2 text-xs text-blue-100">
            {otherSites.map(({ label, href }) => (
              <li key={label}>
                <a className="transition-colors hover:text-amber-200 hover:underline" href={href}>
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="flex flex-col items-center justify-between gap-4 border-b border-white/10 py-6 text-center text-xs sm:flex-row sm:text-left">
        <div className="text-blue-100">
          <span>Usted se ha identificado como </span>
          <span className="font-semibold text-white">Usuario</span>
          <span> (</span>
          <Link className="font-semibold text-[#79db8d] hover:underline" href="/login">
            Cerrar sesión
          </Link>
          <span>)</span>
        </div>
      </div>

      <div className="flex flex-col items-center justify-between gap-2 pt-6 text-xs text-blue-100/70 sm:flex-row">
        <p>Desarrollado para: Facultad de Ciencias Médicas Calixto García</p>
        <p>
          © {new Date().getFullYear()} Facultad de Ciencias Médicas Calixto García. Universidad de
          Ciencias Médicas de La Habana. Todos los derechos reservados.
        </p>
      </div>
    </div>
  </footer>
);

import { Facebook, Linkedin, Send, Twitter, Youtube } from 'lucide-react';
import Image from 'next/image';

const socialLinks = [
  { label: 'Twitter', href: '#', icon: Twitter, className: 'bg-[#0284c7] hover:bg-sky-600' },
  { label: 'Facebook', href: '#', icon: Facebook, className: 'bg-[#1877f2] hover:bg-blue-600' },
  { label: 'YouTube', href: '#', icon: Youtube, className: 'bg-[#dc2626] hover:bg-red-600' },
  { label: 'LinkedIn', href: '#', icon: Linkedin, className: 'bg-[#0077b5] hover:bg-blue-700' },
  { label: 'Telegram', href: '#', icon: Send, className: 'bg-[#0088cc] hover:bg-sky-500' }
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

export const CursosFooter = () => (
  <footer
    className="mt-auto border-t border-[#0b3c68] bg-[#002743] pt-10 pb-6 text-sm text-white"
    data-purpose="site-footer"
  >
    <div className="mx-auto max-w-7xl space-y-8 px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 gap-8 border-b border-blue-900/40 pb-8 md:grid-cols-2 lg:grid-cols-5">
        <div className="space-y-3 lg:col-span-2">
          <div className="flex items-center gap-3">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-white p-1.5">
              <Image
                alt="Escudo FCG"
                className="h-full w-auto object-contain"
                height={331}
                src="/images/cg.jpeg"
                width={334}
              />
            </div>
            <div>
              <h4 className="text-base font-bold text-white">
                Facultad de Ciencias Médicas &quot;Calixto García&quot;
              </h4>
              <p className="text-xs text-blue-200">Universidad de Ciencias Médicas de La Habana</p>
            </div>
          </div>
          <p className="max-w-sm pt-2 text-xs leading-relaxed text-slate-300">
            Entorno virtual docente de apoyo a las actividades académicas, asistenciales e
            investigativas en el ámbito de las ciencias de la salud.
          </p>
        </div>

        <div className="space-y-3">
          <h4 className="text-sm font-bold tracking-wide text-white">Síguenos</h4>
          <p className="text-xs text-slate-300">
            Mantente informado, síguenos a través de nuestras redes sociales
          </p>
          <div className="flex items-center space-x-2 pt-1">
            {socialLinks.map(({ label, href, icon: Icon, className }) => (
              <a
                aria-label={label}
                className={`flex h-8 w-8 items-center justify-center rounded-lg text-white transition-colors ${className}`}
                href={href}
                key={label}
              >
                <Icon aria-hidden="true" className="h-4 w-4" strokeWidth={2} />
              </a>
            ))}
          </div>
        </div>

        <div className="space-y-2.5">
          <h4 className="text-sm font-bold tracking-wide text-white">Sitios de interés</h4>
          <ul className="space-y-1.5 text-xs text-slate-300">
            {interestSites.map(({ label, href }) => (
              <li key={label}>
                <a className="transition-colors hover:text-emerald-400" href={href}>
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div className="space-y-2.5">
          <h4 className="text-sm font-bold tracking-wide text-white">Otros sitios</h4>
          <ul className="space-y-1.5 text-xs text-slate-300">
            {otherSites.map(({ label, href }) => (
              <li key={label}>
                <a className="transition-colors hover:text-emerald-400" href={href}>
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="flex flex-col items-center justify-between gap-3 pt-2 text-xs text-slate-400 sm:flex-row">
        <p>Desarrollado para: Facultad de Ciencias Médicas Calixto García</p>
        <p>
          © {new Date().getFullYear()} Facultad de Ciencias Médicas Calixto García. Universidad de
          Ciencias Médicas de La Habana. Todos los derechos reservados.
        </p>
      </div>
    </div>
  </footer>
);

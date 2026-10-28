import { ArrowDown } from 'lucide-react';
import Image from 'next/image';

import { heroBadgeIcon, heroImage } from '../data/careers';

export const LandingHero = () => (
  <section
    className="relative flex min-h-[480px] w-full items-center justify-center overflow-hidden text-center lg:min-h-[580px]"
    id="hero"
  >
    <div className="absolute inset-0 z-0">
      <Image
        alt="Fachada de la Facultad de Ciencias Médicas Calixto García"
        className="object-cover object-center"
        fill
        priority
        sizes="100vw"
        src={heroImage}
      />
      <div className="from-brand-blue-dark to-brand-blue-dark/60 via-brand-blue-dark/85 absolute inset-0 bg-gradient-to-t mix-blend-multiply" />
      <div className="bg-brand-blue-dark/30 absolute inset-0" />
    </div>

    <div className="relative z-10 mx-auto flex max-w-4xl flex-col items-center px-4 py-16 sm:px-6">
      <div
        className="motion-safe:animate-fade-in-up mb-6 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/15 px-3.5 py-1 text-xs font-semibold tracking-wider text-blue-100 uppercase backdrop-blur-sm"
        style={{ animationDelay: '0ms' }}
      >
        <Image
          alt=""
          aria-hidden="true"
          className="h-5 w-5 rounded-full object-contain"
          height={200}
          src={heroBadgeIcon}
          width={200}
        />
        <span>Universidad de Ciencias Médicas de La Habana</span>
      </div>

      <h1
        className="motion-safe:animate-fade-in-up max-w-3xl text-3xl leading-tight font-extrabold tracking-widest text-white uppercase drop-shadow-md md:text-5xl"
        style={{ animationDelay: '150ms' }}
      >
        Entorno Virtual de Aprendizaje
      </h1>

      <div
        className="motion-safe:animate-fade-in-up mx-auto my-4 h-1 w-36 rounded-full bg-[#228b44] shadow-sm"
        style={{ animationDelay: '300ms' }}
      />

      <p
        className="motion-safe:animate-fade-in-up mb-9 max-w-2xl text-lg font-medium tracking-wide text-blue-100 drop-shadow-sm md:text-xl"
        style={{ animationDelay: '300ms' }}
      >
        Facultad de Ciencias Médicas &quot;Calixto García&quot;
      </p>

      <div
        className="motion-safe:animate-fade-in-up flex flex-col items-center gap-4 sm:flex-row"
        style={{ animationDelay: '450ms' }}
      >
        <a
          className="inline-flex items-center justify-center gap-2.5 rounded-lg border border-white/20 bg-[#0b4386] px-8 py-3.5 text-sm font-bold tracking-wider text-white uppercase shadow-lg transition-all duration-200 hover:-translate-y-0.5 hover:bg-[#072f5f] hover:shadow-xl focus:ring-2 focus:ring-[#0b4386] focus:ring-offset-2 focus:outline-none active:scale-95"
          href="#carreras"
        >
          <span>Ver carreras</span>
          <ArrowDown aria-hidden="true" className="h-4 w-4" strokeWidth={2} />
        </a>
      </div>
    </div>
  </section>
);

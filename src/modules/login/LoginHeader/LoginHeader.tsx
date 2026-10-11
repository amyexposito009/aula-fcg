import Image from 'next/image';

export const LoginHeader = () => (
  <header
    className="sticky top-0 z-20 border-b border-gray-200 bg-white/95 shadow-sm backdrop-blur-sm"
    data-purpose="site-header"
  >
    <div className="mx-auto flex h-18 max-w-7xl items-center justify-between px-4 py-2.5 sm:px-6 lg:px-8">
      <div className="flex items-center space-x-3.5">
        <Image
          alt="Escudo Oficial FCG - Facultad Calixto García"
          className="h-16 w-16 object-contain brightness-125 drop-shadow-sm"
          height={331}
          priority
          src="/images/cg.jpeg"
          width={334}
        />
        <div className="border-brand-blue/20 border-l-2 pl-3.5">
          <span className="text-brand-blue block text-xl leading-tight font-bold tracking-tight">
            Aula <span className="text-brand-green">FCG</span>
          </span>
          <span className="block text-xs font-semibold tracking-wide text-gray-600 uppercase">
            Facultad de Ciencias Médicas &quot;Calixto García&quot;
          </span>
        </div>
      </div>
    </div>
  </header>
);

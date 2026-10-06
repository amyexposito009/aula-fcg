import { BookOpen } from 'lucide-react';

import { LoginForm } from './LoginForm';

export const LoginCard = () => (
  <main
    className="bg-facultad relative flex flex-grow items-center justify-center p-4 sm:p-6 lg:p-8"
    data-purpose="authentication-section"
  >
    <div className="pointer-events-none absolute inset-0 bg-slate-900/20 backdrop-blur-[2px]" />
    <div
      className="login-box-shadow relative my-6 w-full max-w-[480px] overflow-hidden rounded-2xl border border-white/80 bg-white transition-all"
      data-purpose="login-modal-card"
    >
      <div className="flex h-2 w-full">
        <div className="bg-brand-blue w-1/2" />
        <div className="bg-brand-green w-1/2" />
      </div>
      <div className="px-7 pt-8 pb-7 sm:px-9">
        <div className="mb-7 text-center">
          <div className="mb-3 inline-flex items-center justify-center rounded-xl border border-blue-100 bg-blue-50/80 p-2">
            <BookOpen aria-hidden="true" className="h-7 w-7 text-brand-blue" strokeWidth={2} />
          </div>
          <h1 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-2xl">
            Entorno Virtual de Aprendizaje
          </h1>
          <p className="text-brand-blue mt-1.5 text-xs font-semibold tracking-wider uppercase">
            Universidad de Ciencias Médicas de La Habana
          </p>
        </div>
        <LoginForm />
        <div className="mt-6 flex flex-col space-y-3.5 border-t border-gray-100 pt-5">
          <button
            className="text-brand-blue w-full cursor-pointer rounded-lg border border-gray-300 bg-white px-3 py-2 text-center text-xs font-semibold text-gray-700 shadow-sm transition-colors hover:bg-gray-50"
            type="button"
          >
            Acceder como invitado
          </button>
          <div className="flex items-center justify-center space-x-1.5 text-center text-xs text-gray-500">
            <span>Las &apos;Cookies&apos; deben estar habilitadas en su navegador</span>
            <button
              className="text-brand-blue hover:text-brand-blue-dark cursor-pointer focus:outline-none"
              title="Información sobre las cookies necesarias para la sesión"
              type="button"
            >
              <svg
                aria-hidden="true"
                className="text-brand-blue inline h-4 w-4"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  clipRule="evenodd"
                  d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
                  fillRule="evenodd"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  </main>
);

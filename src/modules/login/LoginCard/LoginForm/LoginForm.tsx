import { ArrowRight, Lock, User } from 'lucide-react';

import { LoginFormField } from './LoginFormField';

export const LoginForm = () => (
  <form action="#" className="space-y-4" data-purpose="login-form" method="POST">
    <LoginFormField
      icon={User}
      id="username"
      label="Usuario institucional o correo"
      placeholder="usuario@infomed.sld.cu"
    />
    <LoginFormField
      icon={Lock}
      id="password"
      label="Contraseña"
      placeholder="••••••••••••"
      type="password"
    />
    <div className="flex items-center justify-between pt-1 text-xs">
      <div className="flex items-center">
        <input
          className="border-gray-300 text-brand-blue focus:ring-brand-blue h-4 w-4 cursor-pointer rounded"
          id="remember-me"
          name="remember-me"
          type="checkbox"
        />
        <label
          className="ml-2 block cursor-pointer text-gray-700 select-none"
          htmlFor="remember-me"
        >
          Recordar usuario
        </label>
      </div>
      <div>
        <a
          className="text-brand-blue hover:text-brand-blue-dark font-medium transition-colors hover:underline"
          href="#olvido"
        >
          ¿Olvidó su contraseña?
        </a>
      </div>
    </div>
    <div className="pt-2">
      <button
        className="text-brand-blue-dark focus:ring-brand-blue active:scale-[0.99] flex w-full cursor-pointer items-center justify-center rounded-lg border border-transparent bg-brand-blue px-4 py-3 text-sm font-semibold text-white shadow-md transition-all hover:bg-brand-blue-dark hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-offset-2"
        type="submit"
      >
        <span>ACCEDER AL AULA</span>
        <ArrowRight aria-hidden="true" className="-mr-0.5 ml-2 h-4 w-4" strokeWidth={2} />
      </button>
    </div>
  </form>
);

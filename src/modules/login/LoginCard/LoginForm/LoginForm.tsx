'use client';

import { ArrowRight, Loader2, Lock, User } from 'lucide-react';
import type { ChangeEvent, FormEvent } from 'react';
import { useState } from 'react';

import { LoginFormField } from './LoginFormField';

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const MIN_PASSWORD_LENGTH = 6;

interface FormErrors {
  usuario?: string;
  password?: string;
}

export const LoginForm = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState<FormErrors>({});

  const handleUsernameChange = (event: ChangeEvent<HTMLInputElement>) => {
    setUsername(event.target.value);
    setErrors((prev) => (prev.usuario ? { ...prev, usuario: undefined } : prev));
  };

  const handlePasswordChange = (event: ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
    setErrors((prev) => (prev.password ? { ...prev, password: undefined } : prev));
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const nextErrors: FormErrors = {};
    const trimmedUsername = username.trim();

    if (!trimmedUsername) {
      nextErrors.usuario = 'El usuario es obligatorio';
    } else if (!EMAIL_REGEX.test(trimmedUsername)) {
      nextErrors.usuario = 'Ingresa un correo válido';
    }

    if (!password) {
      nextErrors.password = 'La contraseña es obligatoria';
    } else if (password.length < MIN_PASSWORD_LENGTH) {
      nextErrors.password = `La contraseña debe tener al menos ${MIN_PASSWORD_LENGTH} caracteres`;
    }

    setErrors(nextErrors);

    if (nextErrors.usuario || nextErrors.password) {
      return;
    }

    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  };

  return (
    <form
      action="#"
      className="space-y-4"
      data-purpose="login-form"
      method="POST"
      noValidate
      onSubmit={handleSubmit}
    >
      <LoginFormField
        error={errors.usuario}
        icon={User}
        id="username"
        label="Usuario institucional o correo"
        onChange={handleUsernameChange}
        placeholder="usuario@infomed.sld.cu"
        value={username}
      />
      <LoginFormField
        error={errors.password}
        icon={Lock}
        id="password"
        label="Contraseña"
        onChange={handlePasswordChange}
        placeholder="••••••••••••"
        type="password"
        value={password}
      />
      <div className="flex items-center justify-between pt-1 text-xs">
        <div className="flex items-center">
          <input
            className="border-gray-300 bg-white focus:ring-brand-blue h-4 w-4 cursor-pointer rounded appearance-none transition-colors hover:border-brand-blue focus:ring-2 focus:ring-brand-blue/40 checked:border-brand-blue checked:bg-brand-blue checked:bg-center checked:bg-no-repeat checked:bg-[url('data:image/svg+xml,%3Csvg%20xmlns=%22http://www.w3.org/2000/svg%22%20viewBox=%220%200%2016%2016%22%3E%3Cpath%20d=%22M3.5%208.5l3%203l6-6%22%20fill=%22none%22%20stroke=%22white%22%20stroke-width=%222.25%22%20stroke-linecap=%22round%22%20stroke-linejoin=%22round%22/%3E%3C/svg%3E')]"
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
          className="focus:ring-brand-blue active:scale-[0.99] flex w-full cursor-pointer items-center justify-center rounded-lg border border-transparent bg-brand-blue px-4 py-3 text-sm font-semibold text-white shadow-md transition-all hover:bg-brand-blue-dark hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-70 disabled:hover:bg-brand-blue"
          disabled={isLoading}
          type="submit"
        >
          {isLoading ? (
            <>
              <Loader2 aria-hidden="true" className="mr-2 h-4 w-4 animate-spin" />
              <span>Accediendo...</span>
            </>
          ) : (
            <>
              <span>ACCEDER AL AULA</span>
              <ArrowRight aria-hidden="true" className="-mr-0.5 ml-2 h-4 w-4" strokeWidth={2} />
            </>
          )}
        </button>
      </div>
    </form>
  );
};

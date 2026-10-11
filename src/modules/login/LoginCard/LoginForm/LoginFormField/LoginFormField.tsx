'use client';

import type { LucideIcon } from 'lucide-react';
import { Eye, EyeOff } from 'lucide-react';
import type { ComponentProps } from 'react';
import { useState } from 'react';

import { cn } from '@/lib/utils';

interface LoginFormFieldProps {
  id: string;
  label: string;
  placeholder: string;
  icon: LucideIcon;
  type?: ComponentProps<'input'>['type'];
  value: string;
  onChange: ComponentProps<'input'>['onChange'];
  error?: string;
}

export const LoginFormField = ({
  id,
  label,
  placeholder,
  icon: Icon,
  type = 'text',
  value,
  onChange,
  error
}: LoginFormFieldProps) => {
  const isPassword = type === 'password';
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  const inputType = isPassword && isPasswordVisible ? 'text' : type;

  return (
    <div>
      <label
        className="mb-1.5 block text-xs font-semibold tracking-wide text-gray-700 uppercase"
        htmlFor={id}
      >
        {label}
      </label>
      <div className="relative rounded-lg shadow-sm">
        <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3.5">
          <Icon aria-hidden="true" className="h-5 w-5 text-gray-400" strokeWidth={2} />
        </div>
        <input
          aria-describedby={error ? `${id}-error` : undefined}
          aria-invalid={error ? true : undefined}
          className={cn(
            'text-gray-900 placeholder-gray-400 hover:bg-white focus:border-brand-blue focus:ring-brand-blue block w-full rounded-lg border border-gray-300 bg-gray-50/50 py-2.5 pr-4 pl-11 transition-colors focus:ring-2 sm:text-sm',
            isPassword && 'pr-11',
            error &&
              'border-red-500 focus:border-red-500 focus:ring-red-500/40 hover:border-red-500'
          )}
          id={id}
          name={id}
          onChange={onChange}
          placeholder={placeholder}
          type={inputType}
          value={value}
        />
        {isPassword && (
          <button
            aria-label={isPasswordVisible ? 'Ocultar contraseña' : 'Mostrar contraseña'}
            className="text-gray-400 hover:text-brand-blue focus:text-brand-blue absolute inset-y-0 right-0 flex cursor-pointer items-center pr-3.5 transition-colors focus:outline-none"
            onClick={() => setIsPasswordVisible((prev) => !prev)}
            type="button"
          >
            {isPasswordVisible ? (
              <EyeOff aria-hidden="true" className="h-5 w-5" strokeWidth={2} />
            ) : (
              <Eye aria-hidden="true" className="h-5 w-5" strokeWidth={2} />
            )}
          </button>
        )}
      </div>
      {error && (
        <p className="mt-1 text-sm text-red-500" id={`${id}-error`} role="alert">
          {error}
        </p>
      )}
    </div>
  );
};

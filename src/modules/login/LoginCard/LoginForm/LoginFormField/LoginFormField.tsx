import type { LucideIcon } from 'lucide-react';
import type { ComponentProps } from 'react';

interface LoginFormFieldProps {
  id: string;
  label: string;
  placeholder: string;
  icon: LucideIcon;
  type?: ComponentProps<'input'>['type'];
}

export const LoginFormField = ({
  id,
  label,
  placeholder,
  icon: Icon,
  type = 'text'
}: LoginFormFieldProps) => (
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
        className="text-gray-900 placeholder-gray-400 hover:bg-white focus:border-brand-blue focus:ring-brand-blue block w-full rounded-lg border border-gray-300 bg-gray-50/50 py-2.5 pr-4 pl-11 text-sm transition-colors focus:ring-2"
        id={id}
        name={id}
        placeholder={placeholder}
        required
        type={type}
      />
    </div>
  </div>
);

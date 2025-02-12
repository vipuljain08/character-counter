import React from 'react';
import { Check } from 'lucide-react';

interface CheckboxProps {
  label: string;
  checked: boolean;
  onChange: (checked: boolean) => void;
  disabled?: boolean;
  id?: string;
  className?: string;
}

const Checkbox = ({
  label,
  checked,
  onChange,
  disabled = false,
  id = crypto.randomUUID(),
  className = '',
}: CheckboxProps) => {
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    onChange(event.target.checked);
  };

  return (
    <div className={`flex items-center space-x-2 ${className}`}>
      <div className="relative flex items-center">
        <input
          type="checkbox"
          id={id}
          checked={checked}
          onChange={handleChange}
          disabled={disabled}
          className="peer h-4 w-4 opacity-0 absolute"
        />
        <div
          className={`
            flex items-center justify-center
            h-4 w-4 border rounded
            ${disabled ? 'border-gray-300' : 'border-gray-400'}
            ${checked ? 'bg-blue-500 border-blue-500' : 'bg-white'}
            ${!disabled && 'peer-hover:border-blue-500'}
            transition-colors
          `}
        >
          {checked && <Check className="h-3 w-3 text-white" />}
        </div>
        <label
          htmlFor={id}
          className={`ml-2 text-sm
            ${disabled ? 'text-gray-400' : 'text-gray-700'}
            cursor-pointer`}
        >
          {label}
        </label>
      </div>
    </div>
  );
};

export default Checkbox;
import React from 'react';

type TextInputProps = {
  label: string;
  value: string;
  error?: string;
  className?: string;
  onChange: (value: string) => void;
};

const TextInput = React.forwardRef<HTMLInputElement, TextInputProps>((props, ref) => {
  const { label, value, error, onChange, className } = props;

  return (
    <div className={className}>
      <label className="block text-sm font-medium text-gray-700 dark:text-gray-200">
        {label}
      </label>
      <input
        ref={ref}
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="mt-1 block w-full px-3 py-2 border dark:bg-zinc-800 dark:text-gray-200 dark:border-zinc-700 border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
      />
      {error && <p className="mt-2 text-sm text-red-600">{error}</p>}
    </div>
  );
});

export default TextInput;

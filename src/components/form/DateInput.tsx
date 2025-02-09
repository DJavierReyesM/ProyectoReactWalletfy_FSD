import moment from 'moment';
import React from 'react';

type DateProps = {
  label: string;
  value: number;
  error?: string;
  className?: string;
  onChange: (value: number) => void;
};

const DateInput = (props: DateProps) => {
  const { label, value, error, onChange, className } = props;
  React.useEffect(()=>{console.log(value)},[value])
  return (
    <div className={className}>
      <label className="block text-sm font-medium text-gray-700 dark:text-gray-200">
        {label}
      </label>
      <input
        type="date"
        value={moment.unix(value).format('YYYY-MM-DD')}
        onChange={(e) => onChange(moment(e.target.value).unix())}
        className="mt-1 block w-full px-3 py-2 border  dark:bg-zinc-800 dark:text-gray-200 dark:border-zinc-700 border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
      />
      {error && <p className="mt-2 text-sm text-red-600">{error}</p>}
    </div>
  );
};

export default DateInput;

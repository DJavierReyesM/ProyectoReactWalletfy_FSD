type SelectProps = {
    label: string;
    value: string;
    options: string[];
    error?: string;
    className?: string;
    onChange: (value: string) => void;
  };
  
  const SelectInput = (props: SelectProps) => {
    const { label, value, options, error, onChange, className } = props;
  
    return (
      <div className={className}>
        <label className="block text-sm font-medium text-gray-700">
          {label}
        </label>
        <select
          value={value}
          onChange={(e) => onChange(e.target.value)}
          className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
        >
          {options.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
  
        {error && <p className="mt-2 text-sm text-red-600">{error}</p>}
      </div>
    );
  };
  
  export default SelectInput;
  
type NumberInputProps = {
    label: string,
    value: number,
    error?: string,
    className?: string,
    onChange: (value: number) => void;
}

const NumberInput = (props: NumberInputProps) => {
    const { label, value, error, className, onChange } = props;
    return (
        <div className={className}>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-200">{label}</label>
            <input
                type="number"
                value={value}
                min={0}
                className="mt-1 block w-full px-3 py-2 border  dark:bg-zinc-800 dark:text-gray-200 dark:border-zinc-700 border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                onChange={(e) => {
                    const newValue = Number(e.target.value);
                    if (isNaN(newValue)) return;
                    onChange(newValue);
                  }}
            />
            {error && <p className="mt-2 text-sm text-red-600">{error}</p>}
        </div>
    );
}

export default NumberInput;
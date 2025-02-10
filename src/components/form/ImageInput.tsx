import React from 'react';

type ImageInputProps = {
  label: string;
  value: string;
  error?: string;
  className?: string;
  onChange: (value: string) => void;
};

const ImageInput = (props: ImageInputProps) => {
  const { label, value, error, onChange, className } = props;

  const [, setImage64] = React.useState<string>(value);
  const [imageName, setImageName] = React.useState<string>("");

  const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      setImageName(file.name)
      const reader = new FileReader();
      reader.onloadend = () => {
        if (reader.result) {
          const base64Image = reader.result as string;
          setImage64(base64Image);
          onChange(base64Image);
        }
      };
      reader.readAsDataURL(file);
    } else {
      setImageName("Sin imagen seleccionada");
    }
  };

  return (
    
    <div className={className}>
      <div>
        <label className="flex flex-col text-sm font-medium text-gray-700 dark:text-gray-200">
          {label}
          <input
            type="file"
            accept="image/*"
            onChange={handleImageChange}
            className="hidden"
          />
          <div className="cursor-pointer text-center bg-blue-500 text-white py-2 px-3 mt-1 border border-blue-700 rounded-md shadow-sm hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-violet-500 focus:ring-opacity-50 sm:text-sm dark:bg-blue-700 dark:border-zinc-700 dark:hover:bg-blue-500">
            Seleccionar imagen
          </div>
        </label>
      </div>
  
      {value && (
        <div className="flex flex-col mt-4 justify-center items-center">
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-200">
            Preview de imagen:
          </label>
          {imageName && (<p className='text-sm text-center font-medium text-gray-700 dark:text-gray-200'>'{imageName}'</p>)}
          <img src={value} alt="Preview de imagen" className="mt-2 w-20 h-20 " />
        </div>

      )}
      {error && <p className="mt-2 text-sm text-red-600">{error}</p>}
    </div>
  );
};

export default ImageInput;

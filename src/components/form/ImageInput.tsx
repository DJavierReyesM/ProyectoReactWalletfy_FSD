import React from 'react';

type ImageInputProps = {
  label: string;
  value: string;
  error?: string;
  className?: string;
  onChange: (value: string) => void;
};

const ImageInput: React.FC<ImageInputProps> = ({ label, value, error, onChange, className }) => {
  const [, setImage64] = React.useState<string>(value);
  const [imageName, setImageName] = React.useState<string>("Sin archivos seleccionados");

  const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];

    if (file) {
      setImageName(file.name); // Actualizar el nombre del archivo
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
      setImageName("Sin archivo seleccionado"); // Si no se selecciona nada
    }
  };

  return (
    <div className={`attachment-container ${className}`}>
      <label className="text-lg font-medium block text-gray-700 dark:text-gray-200">
        {label}
      </label>

      {/* Contenedor con borde */}
      <div className="mt-2 border border-gray-300 dark:border-gray-500 rounded-md shadow-sm px-3 py-2 flex items-center justify-between bg-white dark:bg-zinc-700">
        <label htmlFor="file-upload" className="cursor-pointer px-4 py-2 bg-indigo-600 text-white text-sm font-medium rounded-md shadow hover:bg-indigo-700 focus:ring focus:ring-indigo-400">
          Seleccionar archivo
        </label>
        <input
          id="file-upload"
          type="file"
          accept="image/*"
          onChange={handleImageChange}
          className="hidden" // Ocultamos el input nativo
        />
        {/* Nombre del archivo seleccionado */}
        <span className="text-sm text-gray-700 dark:text-gray-200">{imageName}</span>
      </div>

      {/* Vista previa de imagen */}
      {value && (
        <div className="image-preview flex flex-col mt-4 justify-center items-center border border-gray-300 dark:border-gray-500 rounded-md shadow-sm p-3 bg-white dark:bg-zinc-700">
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-200">
            Preview de imagen:
          </label>
          <img src={value} alt="Preview de imagen" className="mt-2 max-w-full h-auto rounded-md shadow" />
        </div>
      )}

      {/* Mensaje de error */}
      {error && <p className="mt-2 text-sm text-red-600">{error}</p>}
    </div>
  );
};

export default ImageInput;

import React, { useState } from 'react';

const ImageUploader: React.FC = () => {
  // Estado para almacenar la imagen en formato base64
  const [imageSrc, setImageSrc] = useState<string | null>(null);

  // Función para manejar el cambio en el input de archivo
  const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();

      // Cuando el archivo se haya leído correctamente
      reader.onloadend = () => {
        // Asignamos el resultado (Base64) al estado
        if (reader.result) {
          setImageSrc(reader.result as string);
        }
      };

      // Leemos el archivo como una URL en base64
      reader.readAsDataURL(file);
    }
  };

  return (
    <div>
      {/* Input para seleccionar la imagen */}
      <input type="file" accept="image/*" onChange={handleImageChange} />

      {/* Si existe una imagen en base64, la mostramos */}
      {imageSrc && (
        <div className="mt-4">
          <h3>Image Preview:</h3>
          <img src={imageSrc} alt="Preview" className="w-full max-w-xs mt-2" />
        </div>
      )}
    </div>
  );
};

export default ImageUploader;

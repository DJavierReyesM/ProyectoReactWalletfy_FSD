// Modal.tsx
import React from 'react';
import ImageUploader from '../form/ImageInput';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const EventModal: React.FC<ModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null; // Si el modal no está abierto, no renderizar

  return (
    <div
      className={`fixed inset-0 flex justify-center items-center z-50 transition-opacity ${
        isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
      }`}
      onClick={onClose}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-zinc-600 bg-opacity-10 opacity-50" />
      
      {/* Modal content */}
      <div
        className={`bg-white p-6 rounded-lg shadow-lg w-96 z-10 transition-transform ${
          isOpen ? 'scale-100' : 'scale-95'
        }`}
        onClick={(e) => e.stopPropagation()} // Evita que el click en el contenido cierre el modal
      >
        <h2 className="text-xl font-semibold mb-4 ">Modal Title</h2>
        <p className="mb-4">This is the modal content.</p>
        <ImageUploader />
        <button
          className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600"
          onClick={onClose}
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default EventModal;

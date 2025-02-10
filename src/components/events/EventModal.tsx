import { EventType } from '@customTypes/event';
import moment from 'moment';
import { useNavigate } from 'react-router-dom';

interface EventModalProps {
  isOpen: boolean;
  onClose: () => void;
  event: EventType | undefined
}

const EventModal = (props: EventModalProps) => {

  const navigate = useNavigate();
  const { isOpen, onClose, event } = props;

  if (!event) return null

  const { id, name, amount, date, type, description, image } = event;

  if (!isOpen) return null; 
  return (
    <div
      className={`fixed inset-0 flex justify-center items-center z-50 transition-opacity ${isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
      onClick={onClose}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-zinc-600 bg-opacity-10 opacity-70" />

      {/* Modal content */}
      <div
        className={`bg-white dark:bg-zinc-800 dark:text-gray-200 dark:border-zinc-700 border-zinc-300  p-6 rounded-lg text-sm shadow-lg w-96 z-10 transition-transform ${isOpen ? 'scale-100' : 'scale-95'
          }`}
        onClick={(e) => e.stopPropagation()} // Evita que el click en el contenido cierre el modal
      >
        <div className='my-2'>
          <h2 className="text-xl text-center font-semibold mb-4 text-blue-700 dark:text-blue-300">Event Detail</h2>
          <p className="mb-4">ID: {id}</p>
          <p className="mb-4">Nombre Evento: {name}</p>
          <p className="mb-4">Descripción: {description ? description : "Descripción no proporcionada"}</p>
          <p className="mb-4">Cantidad ($): {amount}</p>
          <p className="mb-4">Tipo: {type}</p>
          <p className="mb-4">Fecha: {moment.unix(date).format('YYYY-MM-DD')}</p>
          {image && (
            <div className='flex justify-center'>
              <img src={image} className='w-[50%] h-[50%]'></img>
            </div>)
          }
        </div>
        <div className='flex justify-between px-2'>
          <button
            className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
            onClick={onClose}
          >
            Cerrar
          </button>
          <button
            className="bg-green-500 text-white px-4 py-2 rounded-md hover:bg-gren-600"
            onClick={() => {
              if (confirm('¿Está seguro de editar el evento?') && id) {
                    navigate(`/form/${id}`)
              }
            }}
          >
            Editar
          </button>
        </div>

      </div>
    </div>
  );
};

export default EventModal;

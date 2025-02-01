import { useForm } from "react-hook-form";

const Form = () => {
  const {
    register,
    handleSubmit,
  } = useForm();

  const onSubmit = (data: any) => {
    console.log("Formulario enviado", data);
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-white shadow-md rounded-xl">
      <h2 className="text-xl font-semibold text-center mb-4">Crear Evento</h2>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
      <div>
      <label className="block font-medium">Nombre</label>
      <input
       {...register("name", { required: "El nombre es obligatorio" })}
        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:border-violet-500 focus:outline-none"
        type="text"
        placeholder="Tu nombre"
      />
      </div>


        <div>
          <label className="block font-medium">Descripción</label>
          <textarea
            {...register("description", { required: "La descripción es obligatoria" })}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:border-violet-500 focus:outline-none"
            placeholder="Descripción del evento"
          />
        </div>

        <div>
          <label className="block font-medium">Fecha</label>
          <input
            {...register("date", { required: "La fecha es obligatoria" })}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:border-violet-500 focus:outline-none"
            type="date"
          />
        </div>

        <div>
          <label className="block font-medium">Monto</label>
          <input
            {...register("amount", { required: "El monto es obligatorio" })}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:border-violet-500 focus:outline-none"
            type="number"
            placeholder="0.00"
          />
        </div>

        <div>
          <label className="block font-medium">Tipo</label>
          <select
            {...register("type", { required: "El tipo es obligatorio" })}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:border-violet-500 focus:outline-none"
          >
            <option value="">Selecciona una opción</option>
            <option value="income">Ingreso</option>
            <option value="expense">Gasto</option>
          </select>
        </div>

        <div>
          <label className="block font-medium">Adjunto</label>
          <div className="relative">
          <input
            {...register("attachment")}
            className="w-full py-3 px-4 border border-gray-300 rounded-md text-sm text-gray-500 placeholder-gray-400 focus:ring-2 focus:ring-violet-500 focus:outline-none cursor-pointer"
            type="file"
          />
        </div>
        </div>
        <button
          type="submit"
          className="w-full bg-violet-600 text-white py-2 rounded-md hover:bg-violet-700"
        >
          Enviar
        </button>
      </form>
    </div>
  );
};

export default Form;

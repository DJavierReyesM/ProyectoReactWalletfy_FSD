import React from 'react';
import moment from 'moment';
import { useMutation, useQuery } from '@tanstack/react-query';
import { useNavigate, useParams } from 'react-router-dom';
import { EventByIdLoaderDataType, EventCreateSchema, EventCreateType } from '@customTypes/event';
import { useForm, Controller } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"

import DataRepo from '@api/datasource';

import { QKeys } from '@constants/query';

import { isLoadingMutation, isLoadingOrRefetchQuery } from '@utils/query';


import TextInput from '@components/form/TextInput';
import DateInput from '@components/form/DateInput';
import SelectInput from '@components/form/SelectInput';
import NumberInput from '@components/form/NumberInput';


type Params = {
  id: string;
};

const INITIAL_STATE: EventCreateType = {
  name: '',
  amount: 0,
  date: moment().unix(),
  description: '',
  type: "ingreso",
};

const UserForm = () => {
  const { id } = useParams<Params>();

  const navigate = useNavigate();

  const inputRef = React.useRef<HTMLInputElement>(null);

  const [mode] = React.useState(id ? 'edit' : 'create');

  const formEventFormat = useForm<EventCreateType>({
    defaultValues: INITIAL_STATE,
    resolver: zodResolver(EventCreateSchema),
  });

  const userQuery = useQuery<
    EventByIdLoaderDataType,
    Error,
    EventByIdLoaderDataType,
    [string, string | undefined]
  >({
    enabled: Boolean(id),
    queryKey: [QKeys.GET_EVENT, id],
    queryFn: async ({ queryKey }) => {
      return await DataRepo.loadEventById(queryKey[1]!);
    },
  });

  const userCreateMutation = useMutation<void, Error, EventCreateType>({
    mutationFn: async (event) => {
      return await DataRepo.saveEvent(event);
    },
    onSettled: (_, error) => {
      if (error) {
        alert('Error saving user');
        return;
      }

      alert('Evento guardado');
      formEventFormat.reset(INITIAL_STATE);
      navigate('/');
    },
  });

  const userUpdateMutation = useMutation<void, Error, EventCreateType>({
    mutationFn: async (event) => {
      return await DataRepo.updateEvent(id!, event);
    },
    onSettled: (_, error) => {
      if (error) {
        alert('Error actualizando evento');
        return;
      }

      alert('Evento actualizado');
      formEventFormat.reset(INITIAL_STATE);
      navigate('/');
    },
  });

  React.useEffect(() => {
    if (mode === 'create' || !userQuery.data?.event) {
      return;
    }
    formEventFormat.reset(userQuery.data.event)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [userQuery.data?.event]);

  React.useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }

    return () => {
      console.log('Unmount');
      formEventFormat.reset(INITIAL_STATE);
    };
  }, []);

  const isLoadingForm = isLoadingMutation(
    userCreateMutation,
    userUpdateMutation
  );

  const isLoadingQuery = isLoadingOrRefetchQuery(userQuery);

  return (
    <div className='flex flex-col justify-center items-center gap-4'>
      {!isLoadingQuery && (
        <div className="flex w-full items-center">
          <button
            onClick={() => navigate('/')}
            className="px-4 py-2 text-white bg-blue-500 rounded-md hover:bg-blue-700 flex"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="size-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18"
              />
            </svg>
            <h3 className="text-md text-center font-medium px-2">Volver</h3>
          </button>
        </div>
      )}

      {isLoadingQuery && (
        <p className="text-2xl font-bold text-center">Cargando formulario</p>
      )}

      {!isLoadingQuery && (
        <div className='className="h-full w-full md:w-[35%] gap-y-[1rem]'>
         <h1 className="text-4xl text-center font-bold">{mode === 'create' ? "Crear evento" : "Actualizar evento"}</h1>
        <form
          
          onSubmit={
            formEventFormat.handleSubmit((data)=>{
              if (mode === 'edit' && id) {
                    userUpdateMutation.mutate(data);
                  } else {
                    userCreateMutation.mutate(data);
                  }
            })}
        >
          <Controller
            name='name'
            control={formEventFormat.control}
            render={({ field }) => (
              <TextInput
                label="Nombre"
                value={field.value}
                onChange={field.onChange}
                className='my-3'
                error={formEventFormat.formState.errors.name?.message}
              />
            )}
          />

          <Controller
            name='description'
            control={formEventFormat.control}
            render={({ field }) => (
              <TextInput
                label="Descripción"
                value={field.value ? field.value : ""}
                onChange={field.onChange}
                className='my-3'
                error={formEventFormat.formState.errors.description?.message}
              />
            )}
          />

          <Controller
            name='date'
            control={formEventFormat.control}
            render={({ field }) => (
              <DateInput
                label="Date"
                value={field.value}
                onChange={field.onChange}
                className='my-3'
                error={formEventFormat.formState.errors.date?.message}
              />
            )}
          />

          <Controller
            name='amount'
            control={formEventFormat.control}
            render={({ field }) => (
              <NumberInput
                label="Date"
                value={field.value}
                onChange={field.onChange}
                className='my-3'
                error={formEventFormat.formState.errors.amount?.message}
              />
            )}
          />

          <Controller
            name='type'
            control={formEventFormat.control}
            render={({ field }) => (
              <SelectInput
                label="Role"
                value={field.value}
                options={['ingreso', 'egreso']}
                onChange={field.onChange}
                className='my-3'
                error={formEventFormat.formState.errors.type?.message}
              />
            )}
          />
          <div className='flex justify-center my-3 py-2'>
            <button
              className={`px-4 py-2 text-white 
                ${mode === 'create' ?  
                "bg-green-700 rounded-md hover:bg-green-950"  :  "bg-blue-500 rounded-md hover:bg-blue-700 "}`}
              type="submit"
            >
              {isLoadingForm ? 'Guardando...' : mode === 'create' ? "Crear evento" : "Actualizar evento"}
            </button>
          </div>
        </form>
        </div>
      )}
    </div>
  );

};

export default UserForm;

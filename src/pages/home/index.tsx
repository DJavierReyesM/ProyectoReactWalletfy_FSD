import { useQuery } from "@tanstack/react-query";
import { EventLoaderDataType } from "@customTypes/event";
import { QKeys } from "@constants/query";
import DataRepo from "@api/datasource";
import { isLoadingOrRefetchQuery } from "@utils/query";
import NumberInput from "@components/form/NumberInput";
import React from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {

  const navigate = useNavigate()
  const [initialBalance, setInitialBalance] = React.useState<number>(0);
  const [balanceForQuery, setBalanceForQuery] = React.useState<number>(0);
  const usersQuery = useQuery<
  EventLoaderDataType,
  Error,
  EventLoaderDataType,
  [number]
>({
  queryKey: [balanceForQuery],
  queryFn: () => {
    return DataRepo.loadEvents();
  },
});

const { data } = usersQuery;

const isLoading = isLoadingOrRefetchQuery(usersQuery);


  return (
    <div className="flex items-center flex-col gap-y-[4rem] h-full mt-[3rem]">
      <div className=" w-full flex flex-row justify-between items-end">
        <div className="flex">
          <label className="block text-sm font-medium text-gray-700">Balance inicial</label>
          <input
            type="number"
            value={initialBalance}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            onChange={(e) => {
              const newValue = Number(e.target.value);
              if (isNaN(newValue)) return;
              setInitialBalance(newValue);
            }}
          />
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            onClick={()=> setBalanceForQuery(initialBalance)}
          >
            Calcular
          </button>
        </div>

       

        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          onClick={()=> navigate("/form")}
        >
          Ir a Form
        </button>
      </div>
      

      {isLoading && (
        <p className="cd-text-2xl cd-font-bold cd-text-center">
          Cargando Eventos
        </p>
      )}

      {!isLoading && data && (
        <>
        <div>My value is {balanceForQuery}</div>
        <div>{data.events.map((evt) => (
          <div className="py-3">
            Evento: {evt.name}
          </div>
        ))}</div>
        </>
      )}

    </div>
  );
};

export default Home;

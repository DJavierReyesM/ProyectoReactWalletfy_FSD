import { useQuery } from "@tanstack/react-query";
import { EventLoaderDataType } from "@customTypes/event";
import { QKeys } from "@constants/query";
import DataRepo from "@api/datasource";
import { isLoadingOrRefetchQuery } from "@utils/query";
import React from "react";
import { useNavigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "@hooks/store";
import { amountAction, selectInitialAmount } from "@store/slice/initialAmount";

const Home = () => {

  const navigate = useNavigate()
  const [initialBalance, setInitialBalance] = React.useState<number>(0);
  const dispatch = useAppDispatch();
  const currentAmount = useAppSelector(selectInitialAmount);

  const usersQuery = useQuery<
  EventLoaderDataType,
  Error,
  EventLoaderDataType
>({
  queryKey: [QKeys.GET_EVENTS, currentAmount],
  queryFn: () => {
    return DataRepo.loadEvents();
  },
});

const { data } = usersQuery;

const isLoading = isLoadingOrRefetchQuery(usersQuery);


console.log(data)
  return (
    <div className="flex items-center flex-col gap-y-[4rem] h-full mt-[3rem]">
      <div className="gap-1.5 w-full flex flex-row justify-between items-end">
        <div>
          <h3 className="text-md font-medium text-gray-700">Balance inicial: ${currentAmount}</h3>
          <div className="flex flex-col sm:flex-row md:flex-row ">
            <input
              type="number"
              value={initialBalance}
              min={0}
              className="my-1 block w-full px-3 py-2 border  border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              onChange={(e) => {
                const newValue = Number(e.target.value);
                if (isNaN(newValue)) return;
                setInitialBalance(newValue)
              }}
            />
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mx-2 md:py-2 sm:mt-1"
              onClick={() => dispatch(amountAction.setInitialAmount(initialBalance))}
            >
              Calcular
            </button>
          </div>
        </div>

       

        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          onClick={()=> navigate("/form")}
        >
          Crear evento
        </button>
      </div>
      

      {isLoading && (
        <p className="text-1xl font-bold text-center">
          Cargando Eventos
        </p>
      )}

      {!isLoading && data && (
        <>
        <div>My value is {currentAmount}</div>
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

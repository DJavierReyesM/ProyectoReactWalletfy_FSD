import { useQuery } from "@tanstack/react-query";
import { EventLoaderDataType, EventType } from "@customTypes/event";
import { QKeys } from "@constants/query";
import DataRepo from "@api/datasource";
import { isLoadingOrRefetchQuery } from "@utils/query";
import React from "react";
import { useNavigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "@hooks/store";
import { amountAction, selectInitialAmount } from "@store/slice/initialAmount";
import moment from "moment";
import GroupedEvents from "@components/events/GroupedEvents";

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
let eventosFiltrados = {} as Record<string, EventType[]>;

const groupEventsByMonthAndYear = (events: EventType[]) => {
  return events.reduce((acc, event) => {
    const formattedDate = moment.unix(event.date).format("YYYY-MM"); // "2024-12"
    if (!acc[formattedDate]) acc[formattedDate] = [];
    acc[formattedDate].push(event);
    return acc;
  }, {} as Record<string, EventType[]>);
};

if (data?.events) {
  eventosFiltrados = groupEventsByMonthAndYear(data.events);
}
  console.log(eventosFiltrados)
  return (
    <div className="flex items-center flex-col gap-y-[1rem] h-full mt-[2rem]">
      <div className="gap-10 w-full flex flex-row justify-between items-end">
        <div>
          <h3 className="text-md font-medium text-gray-700 dark:text-gray-200">Dinero inicial: ${currentAmount}</h3>
          <div className="flex flex-col sm:flex-row md:flex-row ">
            <input
              type="number"
              value={initialBalance}
              min={0}
              className="my-1 block w-full px-3 py-2 border bg-white dark:bg-zinc-800 dark:text-gray-200 dark:border-zinc-700 border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
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
        <p className="text-1xl font-bold text-center text-gray-700 dark:text-gray-200">
          Cargando Eventos
        </p>
      )}

      {!isLoading && data && (
        <React.Fragment>
          <div className="w-full">
            <p className=" font-semibold  text-gray-700 dark:text-gray-200">
              {data.events.length === 0
                ? 'No hay eventos creados'
                : `Hay ${data.events.length} eventos en ${Object.keys(eventosFiltrados).length} mes(es)`}
            </p>
          </div>

          <GroupedEvents groupedData={eventosFiltrados} />
        </React.Fragment>
      )}

    </div>
  );
};

export default Home;

import { EventType } from "@customTypes/event"
import moment from "moment";
import React from "react";
import { Tooltip } from "react-tooltip";

type MonthYearEventCardProps = {
    monthYear: string,
    events: EventType[],
    children?: React.ReactNode;
}

const MonthYearEventCard = (props: MonthYearEventCardProps) => {
    const { monthYear, events, children } = props;
    const [year, month] = monthYear.split("-");

    const orderedEvents = [...events].sort((a, b) => b.date - a.date);
    return (
        <React.Fragment>
            <div key={monthYear} className="  flex flex-col justify-between dark:bg-zinc-800 dark:text-gray-200 dark:border-zinc-700 shadow-lg rounded-lg p-4 border border-zinc-300">
                <div>
                    <h2 className="px-3 text-lg font-bold text-blue-700 dark:text-blue-300 py-1 border-b-1 border-gray-400 dark:border-zinc-500">
                        {getMonthName(Number(month))} {year}
                    </h2>
                    <div className="mt-2 space-y-2">
                    </div>
                    {orderedEvents.map((event, index) => (
                        <div key={event.id}>
                            <div
                                className={`dark:bg-zinc-800 py-1 dark:text-gray-200 dark:border-zinc-700 rounded-md px-3 
                            dark:hover:bg-zinc-700 hover:bg-gray-200 `}
                                data-tooltip-id={`tooltip-${event.id}`}
                                data-tooltip-content={event.description}
                            >
                                <div className="rounded-md flex justify-between gap-x-[8rem]">
                                    <p className="text-gray-900 dark:text-gray-200">
                                        {event.name}
                                    </p>
                                    <p className={`${event.type == "ingreso" ? "text-green-600 dark:text-green-300" : "text-red-500 dark:text-red-300"} dark:text-gray-200`}>
                                        ${event.amount}
                                    </p>
                                </div>
                                <div>
                                    <p className=" text-gray-900 dark:text-gray-200">
                                        {moment.unix(event.date).format('YYYY-MM-DD')}
                                    </p>
                                </div>

                                <Tooltip
                                    id={`tooltip-${event.id}`}
                                    render={() => (
                                        <div className="p-2 shadow-md rounded-md max-w-[200px]">
                                            {/* {event.imageUrl && (
                                            <img    
                                            src={event.imageUrl}
                                            alt="Evento"
                                            className="w-full h-auto rounded-md mb-2"
                                            />
                                        )} */}
                                            <p className="text-sm text-white">
                                                {event.description}
                                            </p>
                                            <img width="20" height="20" src="https://img.icons8.com/ios-filled/50/crescent-moon.png" alt="crescent-moon" />
                                        </div>
                                    )}
                                />
                            </div>
                            <React.Fragment>{events.length - 1 != index && (<div className="border-b-1 border-gray-400 dark:border-zinc-500"></div>)}</React.Fragment>
                        </div>
                    ))}
                </div>
                {children}
            </div>
        </React.Fragment>
    );
}

export default MonthYearEventCard;

// Función para obtener el nombre del mes
const getMonthName = (month: number) => {
    const months = [
        "Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio",
        "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"
    ];
    return months[month - 1] || "";
};
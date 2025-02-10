import { EventType } from "@customTypes/event"
import moment from "moment";
import React from "react";
import { Tooltip } from "react-tooltip";
import EventModal from "./EventModal";

type MonthYearEventCardProps = {
    monthYear: string,
    events: EventType[],
    children?: React.ReactNode;
}

const MonthYearEventCard = (props: MonthYearEventCardProps) => {

    const { monthYear, events, children } = props;
    const [year, month] = monthYear.split("-");

    const orderedEvents = [...events].sort((a, b) => b.date - a.date);
    
    const [isModalOpen, setIsModalOpen] = React.useState(false);
    const openModal = () => setIsModalOpen(true);
    const closeModal = () => {setSelectedEvent(undefined); setIsModalOpen(false)};
    
    const [selectedEvent, setSelectedEvent] = React.useState<EventType  | undefined>(undefined);
        return (
            <React.Fragment>
                <div key={monthYear} className="flex flex-col justify-between bg-white dark:bg-zinc-800 dark:text-gray-200 dark:border-zinc-700 shadow-lg rounded-lg py-2 px-3 border border-zinc-300">
                    <div>
                        <h2 className="px-3 text-lg font-bold text-blue-700 dark:text-blue-300 py-1 border-b-1 border-gray-400 dark:border-zinc-500">
                            {getMonthName(Number(month))} {year}
                        </h2>
                        {orderedEvents.map((event, index) => (
                            <div key={event.id} 
                            onClick={()=> {setSelectedEvent(event); openModal()}}>
                                <div
                                    className={`dark:bg-zinc-800 py-2 cursor-pointer bg-white dark:text-gray-200 dark:border-zinc-700 rounded-md px-3 
                            dark:hover:bg-zinc-700 hover:bg-gray-200`}
                                    data-tooltip-id={`tooltip-${event.id}`}
                                    data-tooltip-content={event.description}
                                >
                                    <div className="rounded-md flex justify-between gap-x-[8rem]">
                                        <p className="text-gray-900 dark:text-gray-200 text-sm">
                                            {event.name}
                                        </p>
                                        <p className={`${event.type == "ingreso" ? "text-green-600 dark:text-green-300" : "text-red-500 dark:text-red-300"} dark:text-gray-200 text-sm`}>
                                            ${event.amount}
                                        </p>
                                    </div>
                                    <div>
                                        <p className=" text-gray-900 text-sm dark:text-gray-200">
                                            {moment.unix(event.date).format('YYYY-MM-DD')}
                                        </p>
                                    </div>

                                    <Tooltip
                                        id={`tooltip-${event.id}`}
                                        render={() => (
                                            <div className="p-2 shadow-md rounded-md max-w-[200px]">
                                                <p className="text-sm font-medium text-white py-2 text-center">
                                                    {event.description ? event.description : "No description for this event"}
                                                </p>
                                                {event.image && (
                                                    <img
                                                        src={event.image}
                                                        alt={`Imagen de evento ${event.id}`}
                                                        className="w-full h-auto rounded-md mb-2"
                                                    />
                                                )}
                                                <p className="pt-3 text-sm text-white italic text-justify underline" >
                                                    Click para obtener más detalle del evento
                                                </p>
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
                <EventModal isOpen={isModalOpen} onClose={closeModal} event={selectedEvent} />
            </React.Fragment>
        );
}
 
const getMonthName = (month: number) => {
    const months = [
        "Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio",
        "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"
    ];
    return months[month - 1] || "";
};

export default MonthYearEventCard;


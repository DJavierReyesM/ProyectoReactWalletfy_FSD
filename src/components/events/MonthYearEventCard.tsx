import { EventType } from "@customTypes/event"
import moment from "moment";
import { Tooltip } from "react-tooltip";

type MonthYearEventCardProps = {
    monthYear: string,
    events: EventType[],
    children?: React.ReactNode;
}

const MonthYearEventCard = (props: MonthYearEventCardProps) => {
    const { monthYear, events } = props;
    const [year, month] = monthYear.split("-");
    return (
        <div key={monthYear} className="bg-white shadow-lg rounded-lg p-4 border">
        <h2 className="text-lg font-bold text-blue-600">
            {getMonthName(Number(month))} {year}
        </h2>
        <div className="mt-2 space-y-2">
            {events.map((event) => (
                <div
                    key={event.id}
                    className="bg-gray-100 rounded-md p-4"
                    data-tooltip-id={`tooltip-${event.id}`}
                    data-tooltip-content={event.description}
                >
                    <p>
                        <strong>{event.name}</strong> - {event.amount} ({event.type})
                    </p>
                    <p>
                        {moment.unix(event.date).format('YYYY-MM-DD')}
                    </p>
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
            ))}
        </div>
    </div>
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
import { EventType } from "@customTypes/event";
import MonthYearEventCard from "./MonthYearEventCard";

type GroupedEventsProps = {
    groupedData: Record<string, EventType[]>;
}

const GroupedEvents = (props: GroupedEventsProps) => {
    const { groupedData } = props;

    // Función para calcular ingresos, monthly y global de cada grupo de eventos
    const calculateSummary = (events: EventType[]) => {
        const income = events.reduce((total, event) => event.type === 'ingreso' ? total + event.amount : total, 0);
        const expense = events.reduce((total, event) => event.type === 'egreso' ? total + event.amount : total, 0);
        const monthly = income - expense;
        const global = monthly; // Si se tiene un dinero inicial, puede sumarlO para calcular el global
        return { income, expense, monthly, global };
    };

    return (
        <div className="flex flex-row flex-wrap justify-center gap-x-10 gap-y-4">
            {Object.entries(groupedData)
                .sort(([a], [b]) => Number(a.replace("-", "")) - Number(b.replace("-", "")))
                .map(([monthYear, events]) => {
                    const { income, expense, monthly, global } = calculateSummary(events);
                    return (
                        <MonthYearEventCard key={monthYear} monthYear={monthYear} events={events}>
                            <div className="my-3 dark:bg-zinc-800 dark:text-gray-200 dark:border-zinc-700 shadow-lg rounded-lg p-4 border border-zinc-300">
                                <div className="mt-4 space-y-2">
                                    <div className="flex justify-between text-sm">
                                        <strong>Ingreso:</strong>
                                        <span className="text-green-600">${income.toFixed(2)}</span>
                                    </div>
                                    <div className="flex justify-between text-sm">
                                        <strong>Egreso:</strong>
                                        <span className="text-red-600">${expense.toFixed(2)}</span>
                                    </div>
                                    <div className="flex justify-between text-sm">
                                        <strong>Monthly:</strong>
                                        <span>${monthly.toFixed(2)}</span>
                                    </div>
                                    <div className="flex justify-between text-sm">
                                        <strong>Global:</strong>
                                        <span>${global.toFixed(2)}</span>
                                    </div>
                                </div>
                            </div>
                        </MonthYearEventCard>
                    );
                })}
        </div>
    );
};

export default GroupedEvents;

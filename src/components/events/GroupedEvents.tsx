import { EventType } from "@customTypes/event";
import MonthYearEventCard from "./MonthYearEventCard";

type GroupedEventsProps = {
    groupedData: Record<string, EventType[]>;
}


const GroupedEvents = (props: GroupedEventsProps) => {
    const { groupedData } = props

    return (
        <div className="flex flex-row flex-wrap justify-center gap-x-10 gap-y-4">
            {Object.entries(groupedData)
                .sort(([a], [b]) => Number(a.replace("-", "")) - Number(b.replace("-", "")))
                .map(([monthYear, events]) => {
                    return (
                        <MonthYearEventCard key={monthYear} monthYear={monthYear} events={events}>
                            <div className="my-3 dark:bg-zinc-800 dark:text-gray-200 dark:border-zinc-700 shadow-lg rounded-lg p-4 border border-zinc-300">
                                <h2 className="px-3 text-lg font-bold text-blue-700 dark:text-blue-300 py-1 border-b-1 border-gray-400 dark:border-zinc-500">
                                    dfdfd
                                </h2>
                            </div>
                        </MonthYearEventCard>
                    );
                })}
        </div>
    );
};


export default GroupedEvents;

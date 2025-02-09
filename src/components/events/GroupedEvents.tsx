import { EventType } from "@customTypes/event";
import MonthYearEventCard from "./MonthYearEventCard";

type GroupedEventsProps = {
    groupedData: Record<string, EventType[]>;
}

const GroupedEvents = (props: GroupedEventsProps) => {
    const { groupedData } = props
    console.log(groupedData)
    return (
        <div className="flex flex-col flex-wrap justify-center gap-x-10 gap-y-4">
            {Object.entries(groupedData)
                    .sort(([a, aValues], [b, bValues]) => {
                        // Verifica si los arrays no están vacíos
                        const dateA = aValues.length > 0 ? aValues[0].date : 0; // Default date to 0 if empty
                        const dateB = bValues.length > 0 ? bValues[0].date : 0; // Default date to 0 if empty
                        return dateA - dateB;})
                .map(([monthYear, events]) => {
                    return (
                        <MonthYearEventCard key={monthYear} monthYear={monthYear} events={events} />
                    );
                })}
        </div>
    );
};


export default GroupedEvents;

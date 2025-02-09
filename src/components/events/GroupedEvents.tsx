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
                        <MonthYearEventCard key={monthYear} monthYear={monthYear} events={events} />
                    );
                })}
        </div>
    );
};


export default GroupedEvents;

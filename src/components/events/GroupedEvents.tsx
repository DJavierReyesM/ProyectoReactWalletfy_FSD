import { EventType } from "@customTypes/event";
import MonthYearEventCard from "./MonthYearEventCard";
import MonthlyAmount from "./MonthlyAmount";

type GroupedEventsProps = {
    groupedData: Record<string, EventType[]>;
}


const GroupedEvents = (props: GroupedEventsProps) => {
    const { groupedData } = props

    return (
        <div className="flex flex-row flex-wrap justify-center gap-x-10 gap-y-4 bg-zinc-100 dark:bg-zinc-900 rounded-lg">
            {Object.entries(groupedData)
                .sort(([a], [b]) => Number(a.replace("-", "")) - Number(b.replace("-", "")))
                .map(([monthYear, events]) => {
                    return (
                        <MonthYearEventCard key={monthYear} monthYear={monthYear} events={events}>
                            <MonthlyAmount events={events}/>
                        </MonthYearEventCard>
                    );
                })}
        </div>
    );
};


export default GroupedEvents;

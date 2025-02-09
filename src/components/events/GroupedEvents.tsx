import React from "react";
import { EventType } from "@customTypes/event";
import MonthYearEventCard from "./MonthYearEventCard";

type GroupedEventsProps = {
    groupedData: Record<string, EventType[]>;
};

const GroupedEvents: React.FC<GroupedEventsProps> = ({ groupedData }) => {
    return (
        <div className="flex flex-wrap justify-center gap-x-10 gap-y-4">
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

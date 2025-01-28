import { EventByIdLoaderDataType, EventCreateType, EventLoaderDataType } from "@customTypes/event";

abstract class DataDS {
    abstract loadEvents(): Promise<EventLoaderDataType>;

    abstract loadEventById(id: string): Promise<EventByIdLoaderDataType>;

    abstract saveEvent(event: EventCreateType): Promise<void>;

    abstract updateEvent(id: string, event: EventCreateType): Promise<void>;
}

export default DataDS;
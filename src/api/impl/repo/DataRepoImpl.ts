import DataDS from '@api/domain/ds/DataDS';
import { EventByIdLoaderDataType, EventCreateType, EventLoaderDataType } from '@customTypes/event';


class DataRepoImpl {
  private data: DataDS;

  constructor(data: DataDS) {
    this.data = data;
  }

  async loadEvents(): Promise<EventLoaderDataType> {
    return this.data.loadEvents();
  }

  async loadEventById(id: string): Promise<EventByIdLoaderDataType> {
    return this.data.loadEventById(id);
  }

  async saveEvent(user: EventCreateType): Promise<void> {
    return this.data.saveEvent(user);
  }

  async updateEvent(id: string, event: EventCreateType): Promise<void> {
    return this.data.updateEvent(id, event);
  }

}

export default DataRepoImpl;

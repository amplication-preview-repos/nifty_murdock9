import { ProcessedEvent as TProcessedEvent } from "../api/processedEvent/ProcessedEvent";

export const PROCESSEDEVENT_TITLE_FIELD = "eventType";

export const ProcessedEventTitle = (record: TProcessedEvent): string => {
  return record.eventType?.toString() || String(record.id);
};

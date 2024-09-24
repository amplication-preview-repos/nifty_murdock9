import { InputJsonValue } from "../../types";

export type ProcessedEventUpdateInput = {
  data?: InputJsonValue;
  eventType?: string | null;
  processedAt?: Date | null;
};

import { InputJsonValue } from "../../types";

export type ProcessedEventCreateInput = {
  data?: InputJsonValue;
  eventType?: string | null;
  processedAt?: Date | null;
};

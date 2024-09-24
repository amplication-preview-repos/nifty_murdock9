import { SortOrder } from "../../util/SortOrder";

export type ProcessedEventOrderByInput = {
  createdAt?: SortOrder;
  data?: SortOrder;
  eventType?: SortOrder;
  id?: SortOrder;
  processedAt?: SortOrder;
  updatedAt?: SortOrder;
};

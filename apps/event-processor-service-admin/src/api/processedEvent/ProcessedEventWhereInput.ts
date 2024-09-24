import { JsonFilter } from "../../util/JsonFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";

export type ProcessedEventWhereInput = {
  data?: JsonFilter;
  eventType?: StringNullableFilter;
  id?: StringFilter;
  processedAt?: DateTimeNullableFilter;
};

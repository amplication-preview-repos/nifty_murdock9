import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  DateTimeInput,
} from "react-admin";

export const ProcessedEventCreate = (
  props: CreateProps
): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <div />
        <TextInput label="eventType" source="eventType" />
        <DateTimeInput label="processedAt" source="processedAt" />
      </SimpleForm>
    </Create>
  );
};

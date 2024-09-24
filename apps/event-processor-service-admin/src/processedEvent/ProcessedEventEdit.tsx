import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  DateTimeInput,
} from "react-admin";

export const ProcessedEventEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <div />
        <TextInput label="eventType" source="eventType" />
        <DateTimeInput label="processedAt" source="processedAt" />
      </SimpleForm>
    </Edit>
  );
};

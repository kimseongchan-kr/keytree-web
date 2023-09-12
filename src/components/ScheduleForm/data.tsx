import { InputHTMLAttributes } from "react";

enum FieldNames {
  TITLE = "title",
  PLACE = "place",
  DATE = "date",
}

export const ScheduleFormFields = [
  {
    name: FieldNames.TITLE,
    placeholder: "Event Title",
    options: {
      required: true,
    },
  },
  {
    name: FieldNames.PLACE,
    placeholder: "Add Place",
    options: {
      required: false,
    },
  },
  {
    name: FieldNames.DATE,
    placeholder: "Add Date",
    options: {
      required: true,
    },
    // type: "date",
  },
  //   {
  //     name: "time",
  //     placeholder: "Add Time",
  //
  //     options: {
  //       required: true,
  //     },
  //     // type: "time",
  //   },
  //   {
  //     name: "members",
  //     placeholder: "Add Members",
  //   },
  //   {
  //     name: "notes",
  //     placeholder: "Add Notes",
  //   },
];

interface FieldOption {
  required?: boolean;
}

export interface FieldType extends InputHTMLAttributes<HTMLInputElement> {
  name: FieldNames;
  options: FieldOption;
}

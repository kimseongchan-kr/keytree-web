import { InputHTMLAttributes } from "react";

enum FieldNames {
  TITLE = "title",
  PLACE = "place",
  DATE = "date",
  TIME = "time",
  MEMBER = "member",
  NOTE = "note",
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
  },
  {
    name: FieldNames.DATE,
    placeholder: "Add Date",
    options: {
      required: true,
    },
    // type: "date",
  },
  {
    name: FieldNames.TIME,
    placeholder: "Add Time",

    options: {
      required: true,
    },
    // type: "time",
  },
  {
    name: FieldNames.MEMBER,
    placeholder: "Add Members",
  },
  {
    name: FieldNames.NOTE,
    placeholder: "Add Notes",
  },
];

interface FieldOption {
  required?: boolean;
}

export interface FieldType extends InputHTMLAttributes<HTMLInputElement> {
  name: FieldNames;
  options?: FieldOption;
}

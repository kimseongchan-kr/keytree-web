import { useForm } from "react-hook-form";
import { FieldType, ScheduleFormFields } from "@/components/ScheduleForm/data";

interface ScheduleFormValues {
  title: string;
  place: string;
  date: string;
  time: string;
  member: string;
  note: string;
}

const REQUIRED_ERR_MSG = "This field is required";

export default function ScheduleForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ScheduleFormValues>();

  function onSubmit(data: ScheduleFormValues) {
    console.log(data);
  }

  return (
    <div style={{ display: "inline-block", borderRadius: "0.5rem", border: "1px solid gray" }}>
      <form
        style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "2px" }}
        onSubmit={handleSubmit(onSubmit)}>
        {ScheduleFormFields.map((field: FieldType) => {
          const { name, options, ...attributes } = field;
          return (
            <>
              <input {...register(name, options)} {...attributes} />
              {errors[name] && <span>{REQUIRED_ERR_MSG}</span>}
            </>
          );
        })}
        <button>add</button>
      </form>
    </div>
  );
}

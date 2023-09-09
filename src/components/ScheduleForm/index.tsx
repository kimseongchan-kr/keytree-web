import { useForm } from "react-hook-form";

interface ScheduleFormValues {
  title: string;
  place: string;
  date: string;
  time: string;
  members: string;
  notes: string;
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
        <input {...register("title", { required: true })} placeholder={"Event Title"} />
        {errors.title && <span>{REQUIRED_ERR_MSG}</span>}
        <input {...register("place")} placeholder={"Add Place"} />
        <input {...register("date", { required: true })} placeholder={"Add Date"} />
        {errors.date && <span>{REQUIRED_ERR_MSG}</span>}
        <input {...register("time", { required: true })} placeholder={"Add Time"} />
        {errors.time && <span>{REQUIRED_ERR_MSG}</span>}
        <input {...register("members")} placeholder={"Add Members"} />
        <input {...register("notes")} placeholder={"Add Notes"} />
        <button>add</button>
      </form>
    </div>
  );
}

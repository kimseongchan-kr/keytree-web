import { useForm } from "react-hook-form";

interface ScheduleFormValues {
  title: string;
  place: string;
  date: string;
  time: string;
  members: string;
  notes: string;
}

export default function ScheduleForm() {
  const { register, handleSubmit } = useForm<ScheduleFormValues>();

  function onSubmit(data: ScheduleFormValues) {
    console.log(data);
  }

  return (
    <div style={{ display: "inline-block", borderRadius: "0.5rem", border: "1px solid gray" }}>
      <form
        style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "2px" }}
        onSubmit={handleSubmit(onSubmit)}>
        <input {...register("title", { required: true })} placeholder={"Event Title"} />
        <input {...register("place")} placeholder={"Add Place"} />
        <input {...register("date", { required: true })} placeholder={"Add Date"} />
        <input {...register("time", { required: true })} placeholder={"Add Time"} />
        <input {...register("members")} placeholder={"Add Members"} />
        <input {...register("notes")} placeholder={"Add Notes"} />
        <button>add</button>
      </form>
    </div>
  );
}

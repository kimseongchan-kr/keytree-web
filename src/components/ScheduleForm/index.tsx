"use client"

import {useForm} from "react-hook-form";

export default function ScheduleForm() {
    const {register, handleSubmit} = useForm();

    function onSubmit(data) {
        console.log(data);
    }

    return <div>
        <form style={{display: "flex", flexDirection: "column", alignItems: "center"}}
              onSubmit={handleSubmit(onSubmit)}>
            <input {...register("title", {required: true})} placeholder={"Event Title"}/>
            <input {...register("place")} placeholder={"Add Place"}/>
            <input {...register("date", {required: true})} placeholder={"Add Date"}/>
            <input {...register("time", {required: true})} placeholder={"Add Time"}/>
            <input {...register("members")} placeholder={"Add Members"}/>
            <input {...register("notes")} placeholder={"Add Notes"}/>
            <button>add</button>
        </form>
    </div>
}
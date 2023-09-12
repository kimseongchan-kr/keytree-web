import { useForm } from "react-hook-form";
import { FieldType, ScheduleFormFields } from "@/components/ScheduleForm/data";
import * as S from "./style";

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
    <S.ScheduleFormContainer>
      <form
        style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "2px" }}
        onSubmit={handleSubmit(onSubmit)}>
        <S.FieldsContainer>
          {ScheduleFormFields.map((field: FieldType) => {
            const { name, options, ...attributes } = field;
            return (
              <S.FieldItem>
                <S.Input {...register(name, options)} {...attributes} />
                {errors[name] && <S.ErrorMessage>{REQUIRED_ERR_MSG}</S.ErrorMessage>}
              </S.FieldItem>
            );
          })}
          <button>add</button>
        </S.FieldsContainer>
      </form>
    </S.ScheduleFormContainer>
  );
}

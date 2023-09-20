import dayjs from "dayjs";

import { Container, Schedule } from "./style";

import { DateData } from "@/pages/schedule/components/Table";

interface DateRender {
  timeZone?: number;
  data: DateData[];
}

const DateRender = ({ timeZone = 24, data }: DateRender) => {
  const renderData = data.map((schedule) => {
    const startDate = dayjs(schedule.startedAt).hour();
    const finishDate = dayjs(schedule.finishedAt).hour();

    const top = ((startDate * 60) / (timeZone * 60)) * 100;
    const height = ((finishDate * 60) / (timeZone * 60)) * 100 - top;

    return <Schedule key={schedule.startedAt} top={top} height={height} />;
  });

  return <Container>{renderData}</Container>;
};

export default DateRender;

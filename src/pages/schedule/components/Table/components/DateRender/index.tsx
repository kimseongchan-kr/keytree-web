import styled from "@emotion/styled";
import dayjs from "dayjs";
import { DateData } from "@/pages/schedule/components/Table";

interface DateRender {
  timeZone?: number;
  data: DateData[];
}

const DateRender = ({ timeZone = 24, data }: DateRender) => {
  const top = 54.1666667;
  const height = 8.3333333;

  const renderData = data.map((schedule) => {
    const startDate = dayjs(schedule.startedAt).hour();
    const finishDate = dayjs(schedule.finishedAt).hour();

    const top = ((startDate * 60) / (timeZone * 60)) * 100;
    const height = ((finishDate * 60) / (timeZone * 60)) * 100 - top;

    return <Schedule key={schedule.startedAt} top={top} height={height} />;
  });

  return <Container>{renderData}</Container>;
};

const Container = styled.div`
  position: absolute;
  top: 0;
  width: 100%;
  height: 100%;
`;

//calc((6 * 60 + 30) / (12 * 60) * 100)
const Schedule = styled.div<{ top: number; height: number }>`
  position: absolute;
  width: 100%;
  top: ${({ top }) => top}%;
  height: ${({ height }) => height}%;
  background-color: #1ea7fd;
`;

export default DateRender;

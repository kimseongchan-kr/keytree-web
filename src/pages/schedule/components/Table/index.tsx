import { PropsWithChildren } from "react";

import { Container, Body } from "./style";

import { DateCell, DateRender } from "./components";

export interface DateData {
  startedAt: string;
  finishedAt: string;
}

interface Table {
  title: string;
  timeZone?: number;
  width?: number;
  height?: number;
  data: DateData[];
}

const Table = ({ title, timeZone, data, width, height, children }: PropsWithChildren<Table>) => {
  return (
    <Container width={width} height={height}>
      <div className="table-sell head">{title}</div>
      <Body>
        <DateCell timeZone={timeZone}>{children}</DateCell>

        <DateRender timeZone={timeZone} data={data} />
      </Body>
    </Container>
  );
};

export default Table;

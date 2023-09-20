import { PropsWithChildren } from "react";

import styled from "@emotion/styled";

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

const Container = styled.div<{ width?: number; height?: number }>`
  .head {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .table-sell {
    width: ${({ width }) => (width ? `${width}px` : "100%")};
    height: ${({ height }) => (height ? `${height}px` : "100%")};
    border: 2px solid #f5f6f7;
    border-collapse: collapse;
  }
`;

const Body = styled.div`
  position: relative;
`;

export default Table;

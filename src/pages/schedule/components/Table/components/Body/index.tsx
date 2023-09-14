import styled from "@emotion/styled";
import { PropsWithChildren } from "react";
import DateRender from "@/pages/schedule/components/Table/components/DateRender";

interface Body {
  timeZone?: number;
}

const DateCell = ({ timeZone, children }: PropsWithChildren<Body>) => {
  return (
    <div>
      {timeZone
        ? Array.from({ length: timeZone }, (_, index) => index).map((value) => (
            <div className="table-sell" key={value}></div>
          ))
        : children}
    </div>
  );
};

export default DateCell;

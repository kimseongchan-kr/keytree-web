import { PropsWithChildren } from "react";

interface DateCellProps {
  timeZone?: number;
}

const DateCell = ({ timeZone, children }: PropsWithChildren<DateCellProps>) => {
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

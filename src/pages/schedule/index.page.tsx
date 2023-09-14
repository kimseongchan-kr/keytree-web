import styled from "@emotion/styled";
import Table from "./components/Table";

const mockData = [
  {
    scheduleId: 1,
    startedAt: "2023-08-23 01:00:00",
    finishedAt: "2023-08-23 05:00:00",
    title: "일정타이틀",
    contents: "일정내용",
    createdAt: "2023-08-22 13:00:00",
  },
  {
    scheduleId: 2,
    startedAt: "2023-08-23 06:00:00",
    finishedAt: "2023-08-23 08:00:00",
    title: "일정타이틀",
    contents: "일정내용",
    createdAt: "2023-08-22 13:00:00",
  },
];

const Schedule = () => {
  return (
    <Container>
      <Table title="Tuesday 13" timeZone={24} height={67} data={mockData} />
    </Container>
  );
};

const Container = styled.div`
  max-width: none;
  width: 100%;
  height: 100%;
  background-color: #fff;
`;

export default Schedule;

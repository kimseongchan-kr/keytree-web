import styled from "@emotion/styled";

export const Container = styled.div`
  position: absolute;
  top: 0;
  width: 100%;
  height: 100%;
`;

export const Schedule = styled.div<{ top: number; height: number }>`
  position: absolute;
  width: 100%;
  top: ${({ top }) => top}%;
  height: ${({ height }) => height}%;
  background-color: #1ea7fd;
`;

import styled from "@emotion/styled";

export const Container = styled.div<{ width?: number; height?: number }>`
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

export const Body = styled.div`
  position: relative;
`;

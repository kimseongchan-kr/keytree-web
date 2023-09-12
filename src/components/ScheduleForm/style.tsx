import styled from "@emotion/styled";

export const ScheduleFormContainer = styled.div`
  display: inline-block;
  border-radius: 15px;
  background-color: lightgray;
`;

export const FieldsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2px;
`;

export const FieldItem = styled.div`
  display: flex;
  flex-direction: column;

  background-color: white;
  padding: 10px;
`;

export const Input = styled.input`
  ::placeholder {
    color: gray;
  }
`;

export const ErrorMessage = styled.span`
  color: red;
  font-size: small;
  font-style: italic;
`;

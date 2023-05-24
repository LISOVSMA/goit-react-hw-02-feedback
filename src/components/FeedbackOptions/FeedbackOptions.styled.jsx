import styled from '@emotion/styled';

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 30px;
`;

export const Button = styled.button`
  width: 120px;
  padding: 10px;
  font-weight: 600;
  font-size: 22px;
  border-radius: 3px;
  background-color: #f9e4f1;
  color: #5f9ea0;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.2);
  transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1);
  &:hover,
  &:focus {
    background-color: #483d8b;
  }
`;

import styled from '@emotion/styled';

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: ${props => props.theme.spacing(7)};
`;

export const Button = styled.button`
  width: ${props => props.theme.spacing(30)};
  padding: ${props => props.theme.spacing(3)};
  font-weight: 600;
  font-size: ${props => props.theme.spacing(6)};
  border-radius: ${props => props.theme.spacing(1)};
  background-color: ${props => props.theme.colors.button};
  color: ${props => props.theme.colors.text};
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.2);
  transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1);
  &:hover,
  &:focus {
    background-color: ${props => props.theme.colors.title};
  }
`;

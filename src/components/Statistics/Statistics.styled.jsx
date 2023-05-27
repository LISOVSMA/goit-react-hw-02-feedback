import styled from '@emotion/styled';

export const List = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: ${props => props.theme.spacing(5)};
  width: ${props => props.theme.spacing(150)};
  background-color: ${props => props.theme.colors.main};
  border-radius: ${props => props.theme.spacing(2)};
`;

export const Item = styled.li`
  margin-bottom: ${props => props.theme.spacing(2)};
  font-size: ${props => props.theme.spacing(6)};
  font-weight: 600;
  color: ${props => props.theme.colors.title};
  list-style-type: none;
`;

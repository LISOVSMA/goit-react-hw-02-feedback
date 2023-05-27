import styled from '@emotion/styled';

export const Message = styled.p`
  font-size: ${props => props.theme.spacing(7)};
  font-weight: 700;
  color: ${props => props.theme.colors.text};
  text-align: center;
`;

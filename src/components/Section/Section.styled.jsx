import styled from '@emotion/styled';

export const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: ${props => `${props.theme.spacing(5)} 0`};
`;

export const Title = styled.h1`
  font-size: ${props => props.theme.spacing(11)};
  text-align: center;
  color: ${props => props.theme.colors.title};
  text-shadow: ${props => `${props.theme.colors.text} 2px 3px 4px`};
`;

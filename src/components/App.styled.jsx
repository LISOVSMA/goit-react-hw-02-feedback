import styled from '@emotion/styled';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 60px auto;
  width: ${props => props.theme.spacing(175)};
  border-radius: ${props => props.theme.spacing(2)};
  background-color: ${props => props.theme.colors.second};
  -webkit-box-shadow: -6px 5px 74px 6px rgba(0, 0, 0, 0.57);
  -moz-box-shadow: -6px 5px 74px 6px rgba(0, 0, 0, 0.57);
  box-shadow: -6px 5px 74px 6px rgba(0, 0, 0, 0.57);
`;

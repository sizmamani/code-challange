import styled from 'styled-components';

export const Header = styled.div`
  height: 60px;
  background-color: ${(props) => props.theme.colors.dark};
  padding: 0 25px;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
`;

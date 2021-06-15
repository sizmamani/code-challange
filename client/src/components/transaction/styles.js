import styled from 'styled-components';
export const Container = styled.div`
  position: fixed;
  top: 0;
  z-index: 1;
  width: 100%;
  left: 0;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.6);
`;

export const Content = styled.div`
  position: fixed;
  top: calc(70vh - 54vh);
  z-index: 2;
  display: flex;
  flex: 1;
  width: 70vw;
  left: calc(70vw - 54vw);
  height: 70vh;
  background-color: ${(props) => props.theme.colors.darkBlue};
  border-radius: 5px;
  overflow-y: auto;
  padding: 25px;
  table {
    width: 100%;
  }
`;

export const CloseButton = styled.div`
  position: fixed;
  z-index: 3;
  top: 33px;
  right: 40px;
  width: 50px;
  height: 50px;
  content: '&#x2715';
  color: white;
  font-size: 48px;
  text-align: center;
  opacity: 1;
  transition: all 0.3s ease-in-out;
  &:hover {
    opacity: 0.8;
    cursor: pointer;
  }
`;

import styled from 'styled-components';

export const Container = styled.div`
  height: calc(100vh - 100px);
  overflow: auto;
  display: flex;
  flex-direction: column;
  background-color: ${(props) => props.theme.colors.darkBlue};
  padding: 120px 25px 0 25px;
`;

export const LoaderContainer = styled.div`
  display: flex;
  flex: 1;
  width: 100%;
  height: calc(100vh - 85px);
  align-items: center;
  justify-content: center;
`;

export const PaginationContainer = styled.div`
  margin: 0 auto;
  border-radius: 5px;
`;

export const Pagination = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  color: ${(props) => props.theme.colors.grey};
  background-color: ${(props) => props.theme.colors.lightBlue};
  transition: all 0.5s ease-in-out;
  justify-content: center;
  margin: 5px 2.5px;
`;

export const PrevButton = styled.button`
  display: flex;
  height: 35px;
  width: 35px;
  justify-content: center;
  align-items: center;
  margin: 0 10px 0 0;
  border: none;
  background-color: transparent;
  outline: none;
  color: ${(props) => props.theme.colors.light};
  transition: all 0.5s ease-in-out;
  &:hover {
    background-color: ${(props) => props.theme.colors.light};
    cursor: pointer;
    color: ${(props) => props.theme.colors.dark};
  }
  &:disabled {
    color: ${(props) => props.theme.colors.grey};
    &:hover {
      background-color: transparent;
      cursor: not-allowed;
    }
  }
  &:after {
    content: '<';
    display: block;
    text-align: center;
  }
`;

export const NextButton = styled.button`
  display: flex;
  height: 35px;
  width: 35px;
  justify-content: center;
  align-items: center;
  margin: 0 0 0 10px;
  border: none;
  background-color: transparent;
  outline: none;
  color: ${(props) => props.theme.colors.light};
  transition: all 0.5s ease-in-out;
  &:hover {
    background-color: ${(props) => props.theme.colors.light};
    cursor: pointer;
    color: ${(props) => props.theme.colors.dark};
  }
  &:disabled {
    color: ${(props) => props.theme.colors.grey};
    &:hover {
      background-color: transparent;
      cursor: not-allowed;
    }
  }
  &:after {
    content: '>';
    display: block;
    text-align: center;
  }
`;

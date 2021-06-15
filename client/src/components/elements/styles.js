import styled from 'styled-components';

export const Button = styled.button`
  background-color: ${(props) => props.theme.colors.blue};
  color: #fff;
  border: 2px solid ${(props) => props.theme.colors.blue};
  height: 47px;
  padding: 0 2.4rem;
  font-weight: 500;
  overflow: hidden;
  -webkit-transition: 0.15s ease-in;
  transition: 0.15s ease-in;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  line-height: 1.8rem;
  text-align: center;
  border-radius: 50px;
  cursor: pointer;
  font-size: 17px;
  :hover {
    background-color: #1881d4;
    border: 2px solid #1881d4;
  }
`;

export const Table = styled.table`
  border-collapse: collapse;
  border-spacing: 0px;
  font-size: 14px;
  table-layout: fixed;
  color: ${(props) => props.theme.colors.light};
  border-collapse: separate;
  border-spacing: 0 5px;
  margin: 0 auto;
  tr {
    background-color: ${(props) => props.theme.colors.lightBlue};
  }
  tr,
  th,
  td {
    text-align: left;
    transition: all 0.5s ease;
  }

  td,
  th {
    padding: 15px 20px;
  }

  th {
    text-transform: capitalize;
    color: ${(props) => props.theme.colors.grey};
    background-color: ${(props) => props.theme.colors.darkBlue};
    font-size: 14px;
  }
  th a {
    &:hover {
      color: ${(props) => props.theme.colors.light}!important;
    }
  }
  tr td:first-child {
    border-top-left-radius: 5px;
    border-bottom-left-radius: 5px;
    cursor: pointer;
  }
  tr td:last-child {
    border-top-right-radius: 2px;
    border-bottom-right-radius: 2px;
  }
`;

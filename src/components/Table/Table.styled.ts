import styled from "styled-components";

export const Table = styled.table`
  margin-left: auto;
  margin-right: auto;
  width: 500px;
  text-align: center;
  border: 1px solid black;
  box-shadow: 0px 1px 3px rgb(0 0 0 / 12%), 0px 1px 1px rgb(0 0 0 / 14%),
    0px 2px 1px rgb(0 0 0 / 20%);
  border-radius: 0 0 4px 4px;
`;

export const TableHead = styled.th`
  padding: 10px 20px;
  font-size: 18px;
  border: 1px solid lightgray;
  background-color: #851972;
  color: white;
`;

export const TableLine = styled.tr`
  :nth-child(2n + 1) {
    background-color: #d8bedb;
  }
  /* :hover {
    background-color: darkgrey;
  } */
`;

export const LineItem = styled.td`
  padding: 10px 20px;
`;

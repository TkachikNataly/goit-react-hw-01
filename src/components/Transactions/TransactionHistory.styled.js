import styled from "@emotion/styled";

export const TransactionsTable = styled.table`
  margin: 20px auto;
  text-align: center;
  color: #606160;
  border-radius: 8px;
`;

export const TableHeader = styled.thead`
  background-color: #6bc7c2;
  text-transform: uppercase;
  color: #ffffff;
`;

export const TableBody = styled.tbody`
>:nth-child(2n) {
  background-color: #00ffff;
}
`;

export const TableRow = styled.tr`
`;

export const TableData = styled.td`
  min-width: 240px;
  padding: 12px;
`;
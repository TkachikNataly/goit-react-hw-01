import styled from "@emotion/styled";

export const TransactionsTable = styled.table`
  margin: 20px auto;
  text-align: center;
  color: #000000;
  border-radius: 8px;
`;

export const TableHeader = styled.thead`
  background-color: #3498DB;
  text-transform: uppercase;
  color: #000000;
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
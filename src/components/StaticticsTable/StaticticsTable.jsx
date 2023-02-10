import tableData from 'utils/tableData';
import {
  TableWrapper,
  StyledTable,
  TableHead,
  Head,
  Row,
  ColorWrapper,
  Color,
  TotalWrapper,
  TotalTitle,
  Expenses,
  Income,
} from './StaticticsTable.styled';

export default function StatisticsTable({
  transaction,
  income = 0,
  expense = 0,
}) {
  const markupArray = tableData(transaction);

  return (
    <TableWrapper>
      <StyledTable>
        <TableHead>
          <Head>
            <th>Category</th>
            <th>Sum</th>
          </Head>
        </TableHead>
        <tbody>
          {markupArray.map(({ id, color, name, total }) => {
            return (
              <Row key={id}>
                <ColorWrapper>
                  <Color style={{ backgroundColor: color }}></Color>
                  <span>{name}</span>
                </ColorWrapper>
                <td>{total}</td>
              </Row>
            );
          })}
        </tbody>
      </StyledTable>
      <TotalWrapper>
        <TotalTitle>
          Expenses: <Expenses>{expense.toFixed(2)}</Expenses>
        </TotalTitle>
        <TotalTitle>
          Income: <Income>{income.toFixed(2)}</Income>
        </TotalTitle>
      </TotalWrapper>
    </TableWrapper>
  );
}

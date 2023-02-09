import tableData from 'utils/tableData';
export default function StatisticsTable({
  transaction,
  income = 0,
  expense = 0,
}) {
  const markupArray = tableData(transaction);
 
  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>Category</th>
            <th>Sum</th>            
          </tr>
        </thead>
        <tbody>
          {markupArray.map(({ id, color, name, total}) => {
            return (
              <tr key={id}>
                <td><span style={{backgroundColor: color}}></span>{name}</td>                   
                <td>{total}</td>  
              </tr>
            );
          })}
        </tbody>
      </table>
      <div>
        <p>
          Expenses: <span>{expense}</span>
        </p>
        <p>
          Income: <span>{income}</span>
        </p>
      </div>
    </div>
  );
}

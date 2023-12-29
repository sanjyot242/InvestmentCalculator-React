import { calculateInvestmentResults, formatter } from '../util/investment';

export default function Result({ userInput }) {
  const data = calculateInvestmentResults(userInput);
  const intitalInvestment =
    data[0].valueEndOfYear - data[0].interest - data[0].annualInvestment;
  //console.log(data);
  return (
    <table id='result'>
      <tbody>
        <tr>
          <th>Year</th>
          <th>Invested Value</th>
          <th>Interest (Year)</th>
          <th>Total Interest</th>
          <th>Invested Capital</th>
        </tr>
        {data.map((val, key) => {
          const totalInterest =
            val.valueEndOfYear -
            val.annualInvestment * val.year -
            intitalInvestment;

          const totalAmtInvested = val.valueEndOfYear - totalInterest;
          return (
            <tr key={key}>
              <td>{val.year}</td>
              <td>{formatter.format(val.valueEndOfYear)}</td>
              <td>{formatter.format(val.interest)}</td>
              <td>{formatter.format(totalInterest)}</td>
              <td>{formatter.format(totalAmtInvested)}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}

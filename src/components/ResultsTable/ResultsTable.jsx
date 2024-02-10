import { calculateInvestmentResults, formatter } from '../../util/investment';
import './ResultsTable.scss';

export default function ResultsTable({ investmentResults }) {
    // console.log(investmentResults);

    const resultsData = calculateInvestmentResults(investmentResults);
    // console.log(resultsData);

    const initialInvestment = 
        resultsData.length > 0 ?
            resultsData[0].valueEndOfYear - 
            resultsData[0].interest - 
            resultsData[0].annualInvestment
        : 0;


    return (
        <div id="scopedResultsTable">
            <div id="result">
                <table>
                    <thead>
                        <tr>
                            <td>Year</td>
                            <td>Investment Value</td>
                            <td>Interest (Year)</td>
                            <td>Total Interest</td>
                            <td>Investment Capital</td>
                        </tr>
                    </thead>

                    <tbody>
                        {resultsData.map((result) => {
                            const totalInterest = 
                                result.valueEndOfYear -
                                result.annualInvestment *
                                result.year -
                                initialInvestment;
                            
                            const totalAmountInvested = 
                                result.valueEndOfYear -
                                totalInterest;
                            
                            return (
                                <tr key={result.year}>
                                    <td>{`Year ${result.year}`}</td>
                                    <td>{formatter.format(result.valueEndOfYear)}</td>
                                    <td>{formatter.format(result.interest)}</td>
                                    <td>{formatter.format(totalInterest)}</td>
                                    <td>{formatter.format(totalAmountInvested)}</td>

                                    {/* <td>{result.valueEndOfYear.toFixed(2)}</td>
                                    <td>{result.interest.toFixed(2)}</td>
                                    <td>{(result.interest * result.year).toFixed(2)}</td>
                                    <td>{(result.valueEndOfYear - result.annualInvestment).toFixed(2)}</td> */}
                                </tr>
                            );
                        })}
                    </tbody>
                </table>
            </div>
        </div>
    );
}

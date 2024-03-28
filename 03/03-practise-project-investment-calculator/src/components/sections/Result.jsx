import { formatter } from '../../util/investment.js'

export default function Result({ userInput, investmentData }) {
	const initInvest = Number(userInput['initialInvestment'])
	const annualInvest = Number(userInput['annualInvestment'])

	return (
		<div
			id={'result'}
			className={'center'}
		>
			<table>
				<thead>
					<tr>
						<th>Year</th>
						<th>Investment Value</th>
						<th>Interest (Year)</th>
						<th>Total Interest</th>
						<th>Invested Capital</th>
					</tr>
				</thead>

				<tbody>
					{investmentData.map((entry, index) => {
						return (
							<tr key={index}>
								<td>{entry.year}</td>
								<td>{formatter.format(entry.valueEndOfYear)}</td>
								<td>{formatter.format(entry.interest)}</td>
								<td>
									{formatter.format(
										entry.valueEndOfYear -
											(entry.year * annualInvest + initInvest)
									)}
								</td>
								<td>
									{formatter.format(entry.year * annualInvest + initInvest)}
								</td>
							</tr>
						)
					})}
				</tbody>
			</table>
		</div>
	)
}

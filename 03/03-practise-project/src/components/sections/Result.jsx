export default function Result({ investmentData }) {
    console.log("Investment Data")
    console.log(investmentData)

    return (
        <div id={"result"} className={"center"}>
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

                {/*here loop must happen over entire data array*/}
                <tbody>
                {/*for each entry create a row and fill in the values*/}
                </tbody>
            </table>
        </div>
    )
}
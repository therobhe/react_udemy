import InvestmentTable from "../ui/InvestmentTable.jsx";

export default function Result({ investmentData }) {
    const investmentDataAvailable = (investmentData.length > 0)

    return (
        <div id={"result"} className={"center"}>
            {investmentDataAvailable &&
                <InvestmentTable tableData={investmentData}/>
            }
            {!investmentDataAvailable &&
                <h2>Please fill in the information above</h2>
            }
        </div>
    )
}
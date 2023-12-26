/**
 * Import data
 */
import expenseData from "../data/ExpenseItemData";

/**
 * Import sub-components
 */
import ExpenseItem from "./ExpenseItem";
import Card from "./Card";

/**
 * Import style
 */
import "../style/Expenses.css"

/**
 * Creates as much ExpenseItems as there is inside the data
 * @returns {JSX.Element}
 * @constructor
 */
function Expenses() {
    return(
        <Card className="expenses">
            {expenseData.map((expenseEntry) => <ExpenseItem key={expenseEntry.id} expense={expenseEntry} />)}
        </Card>
    );
}

export default Expenses;
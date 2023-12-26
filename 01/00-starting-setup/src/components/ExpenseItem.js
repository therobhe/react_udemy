/**
 * Import style
 */
import '../style/ExpenseItem.css';

/**
 * Import subcomponent
 */
import ExpenseItemCalendar from "./ExpenseItemCalendar";
import ExpenseItemDescription from "./ExpenseItemDescription";
import Card from "./Card";

/**
 *
 * Price Tag Component
 * @returns {JSX.Element}
 */
function ExpenseItem(props) {
    return (
        <Card className="expense-item">
            <ExpenseItemCalendar calendarDate={props.expense.date} />
            <ExpenseItemDescription expense={props.expense} />
        </Card>
    );
}

export default ExpenseItem;

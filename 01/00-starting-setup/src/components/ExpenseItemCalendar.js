/**
 * Style import
 */
import "../style/ExpenseItemCalendar.css"

/**
 *
 * Calendar part of the item component
 * @param props
 * @returns {JSX.Element}
 * @constructor
 */
function ExpenseItemCalendar(props) {
    const day = props.calendarDate.toLocaleString('en-US', {day: '2-digit'});
    const month = props.calendarDate.toLocaleString('en-US', {month: 'long'});
    const year = props.calendarDate.getFullYear();

    return (
        <div className="expense-date">
            <div className="expense-date__month">{month}</div>
            <div className="expense-date__year">{year}</div>
            <div className="expense-date__day">{day}</div>
        </div>
    );
}

export default ExpenseItemCalendar;
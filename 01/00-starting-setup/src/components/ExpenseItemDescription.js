/**
 *
 * Description part of Item component
 * @param props
 * @returns {JSX.Element}
 * @constructor
 */
function ExpenseItemDescription(props) {
    return (
        <div className="expense-item__description">
            <h2>{props.expense.title}</h2>
            <div className="expense-item__price">{props.expense.amount}€</div>
        </div>
    );
}

export default ExpenseItemDescription;

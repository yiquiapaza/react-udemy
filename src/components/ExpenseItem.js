import ExpenseDate from "./ExpenseDate";
const ExpenseItem = (props) => {
    return (
    <div>
        <div>
            <ExpenseDate date = {props.date}/>
            <h2>{props.title}</h2>
            <div>{props.amount}</div>
        </div>
    </div>
    )
};

export default ExpenseItem;

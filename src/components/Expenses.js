import Card from "./Card";
import ExpenseItem from "./ExpenseItem";
const Expenses = (props) => {
	console.log(props);

	let extensesToReader = props.expenses.map((item) => {
		return (
			<Card key={item.id}>
				<ExpenseItem
					title={item.title}
					amount={item.amount}
					date={item.date}
				/>
			</Card>
		);
	});
	return <div>{extensesToReader}</div>;
};
export default Expenses;

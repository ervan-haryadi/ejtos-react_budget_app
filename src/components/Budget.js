import { useContext, useState } from "react"
import { AppContext } from "../context/AppContext"

const Budget = () => {
    const { dispatch, budget, expenses, currency } = useContext(AppContext);
    const [newBudget, setNewBudget] = useState(budget);
    const totalExpenses = expenses.reduce((total, item) => {
        return (total = total + item.cost);
    }, 0)
    const handleBudgetChange = (event) => {
        let eventBudget = event.target.value;
        if (eventBudget > 20000) {
            alert("The budget cannot exceed £ 20000!")
        } else {
            if (eventBudget < totalExpenses) {
                alert("You cannot reduce the budget value lower than the spending!")
            } else {
                setNewBudget(eventBudget);
                // using dispatch to change budget state
                // BUG: setState ALWAYS uses previously rendered value
                dispatch({
                    type: "SET_BUDGET",
                    payload: (parseInt(event.target.value))
                })
            }
        }
    }

    return (
        <div className="alert alert-secondary">
            <span>Budget: {currency} </span>
            <input type="number" step="10" style={{width:'60%'}} value={newBudget} onChange={handleBudgetChange} />
        </div>
    )
}

export default Budget;
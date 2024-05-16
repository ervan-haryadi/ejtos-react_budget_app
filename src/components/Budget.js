import { useContext, useState } from "react"
import { AppContext } from "../context/AppContext"

const Budget = () => {
    const { dispatch, budget } = useContext(AppContext);
    const [newBudget, setNewBudget] = useState(budget);
    const handleBudgetChange = (event) => {
        setNewBudget(event.target.value);
        // using dispatch to change budget state
        // BUG: setState ALWAYS uses previously rendered value
        dispatch({
            type:"SET_BUDGET",
            payload:(parseInt(event.target.value))
        })
    }

    return (
        <div className="alert alert-secondary">
            <span>Budget: $</span>
            <input type="number" step="10" value={newBudget} onChange={handleBudgetChange} />
        </div>
    )
}

export default Budget;
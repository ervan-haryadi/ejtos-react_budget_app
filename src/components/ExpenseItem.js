import { useContext } from "react";
import { AppContext } from "../context/AppContext";
import { TiDelete } from "react-icons/ti";

const ExpenseItem = (props) => {
    const { dispatch } = useContext(AppContext);
    
    const handleDeleteExpense = () => {
        dispatch({
            type: 'DELETE_EXPENSE',
            payload: props.id
        });
    };

    const handleIncreaseAllocation = (name) => {
        const expense = {
            name: name,
            cost: 10
        }

        dispatch({
            type: 'ADD_EXPENSE',
            payload: expense
        })
    }

    const handleDecreaseAllocation = (name) => {
        const expense = {
            name: name,
            cost: 10
        }

        dispatch({
            type: 'RED_EXPENSE',
            payload: expense
        })
    }

    return (
        <tr>
            <td>{props.name}</td>
            <td>{props.currency} {props.cost}</td>
            <td>
                <button className="btn btn-outline-success fs-5" onClick={event=> handleIncreaseAllocation(props.name)}>+</button>
            </td>
            <td>
                <button className="btn btn-outline-danger fs-5" onClick={event=> handleDecreaseAllocation(props.name)}>-</button>
            </td>
            <td><TiDelete size="1.5em" onClick={handleDeleteExpense}></TiDelete></td>
        </tr>
    )
};

export default ExpenseItem;

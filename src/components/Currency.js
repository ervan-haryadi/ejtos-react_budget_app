import { useContext } from "react"
import { AppContext } from "../context/AppContext"

const Currency = () => {
    const { dispatch } = useContext(AppContext);

    const onCurrencyChange = (event) => {
        let eventCurrency = event.target.value;
        console.log(eventCurrency);
        dispatch({
            type: 'CHG_CURRENCY',
            payload: eventCurrency,
        })
    }

    return (
        <div>
            <div className={`alert alert-success`}>
                <div className="input" >
                    <select className="bg-success text-white" id="InputGroupSelect01" onChange={onCurrencyChange}>
                        <option value="$" name="dollar"> $ Dollar</option>
                        <option value="£" name="pound" selected> £ Pound</option>
                        <option value="€" name="euro"> € Euro</option>
                        <option value="₹" name="ruppee"> ₹ Ruppee</option>
                    </select>
                </div>
            </div>
        </div>
    )
}

export default Currency;
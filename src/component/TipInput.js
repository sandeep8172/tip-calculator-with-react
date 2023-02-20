import "./TipInput.css"
import React, { useState } from "react";

const TipInput = (props) => {
    const [enteredAmount, setEnteredAmount] = useState("");
    const [enteredService, setEnteredService] = useState("");
    const [enteredName, setEnteredName] = useState("");

    const AmountChangeHandler = (event) => {
        setEnteredAmount(+event.target.value);
    }
    const serviceChangeHandler = (event) => {
        setEnteredService(+event.target.value);
    }
    const nameChangeHandler = (event) => {
        setEnteredName(event.target.value);
    }
    const formSubmitHandler = (event) => {
        event.preventDefault();
        let objData = {};
        if (enteredAmount === "" || enteredService == 0 || enteredName === "") {
            return alert("please fill all the fields");
        } else {
            objData = {
                tip: (enteredAmount * enteredService).toFixed(2),
                name: enteredName,
                id: Math.random().toString(),
            }
        }
        props.onGetData(objData);
        setEnteredAmount("");
        setEnteredService("");
        setEnteredName("");

    }
    return (
        <form className="inputBox_section" onSubmit={formSubmitHandler}>
            <label>Enter your bill Amount</label><br />
            <input type={"number"} className="amount_box" value={enteredAmount} onChange={AmountChangeHandler} />
            <hr />
            <label>How was the Service</label>
            <select className="service_list" value={enteredService} onChange={serviceChangeHandler}>
                <option value={""}>choose service</option>
                <option value={0.20}>excellent-20%</option>
                <option value={0.10}>Moderate-10%</option>
                <option value={0.05}>bad-5%</option>
            </select>
            <input type={"text"} className="customer_name" placeholder="Customer Name" value={enteredName} onChange={nameChangeHandler} />
            <button type={"submit"} className="customer_btn" >Add Customer</button>
        </form>
    )
}

export default TipInput;
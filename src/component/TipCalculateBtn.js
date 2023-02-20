import "./TipCalculateBtn.css";
import React, { useState } from "react";
const TipCalculateBtn = (props) => {

    const [isValid, setIsValid] = useState(false)

    const totalPerson = props.items.length;

    let totalTip = 0;
    const addTip = props.items.map((amount) => {
        totalTip += +amount.tip;
        return totalTip.toFixed(2);
    });

    const totalTipHandler = () => {
        if (totalPerson == 0) {
            alert("Add data first")
        }
        setIsValid(true)
    };

    return (
        <footer className="bottom_box">
            <button className="tip_btn" onClick={totalTipHandler}>
                Calculate Tip and Customer
            </button>
            <table className="tip_table">
                <tbody>
                    <tr>
                        <th>Total Customer</th>
                        <th>Tip</th>
                    </tr>
                    <tr>
                        <td>{!isValid ? "0" : totalPerson}</td>
                        <td>{!isValid ? "0" : totalTip}</td>
                    </tr>
                </tbody>
            </table>
        </footer>
    );
};
export default TipCalculateBtn;

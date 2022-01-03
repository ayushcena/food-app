import React from 'react';
import './addons.css'

function Info2 (props){
return (
	<div className="topping">
        <span> {props.topping} </span>
        <span className="toppingprice"> ₹ {props.price}</span>
    </div>

)
}
export default Info2;

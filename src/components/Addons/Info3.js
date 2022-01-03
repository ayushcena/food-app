import React from 'react';
import './addons.css'

function Info3 (props){
return (
	<div className="topping">
        <span> {props.drink} </span>
        <span className="toppingprice"> ₹ {props.price}</span>
    </div>

)
}
export default Info3;

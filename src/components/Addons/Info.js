import React from 'react';
import './addons.css'

function Info (props){
return (
	<div className="pizzasize">
        <button> {props.size} ₹ {props.price}</button>
        {/* <span className="sizeprice"> ₹ {props.price}</span> */}
    </div>

)
}
export default Info;

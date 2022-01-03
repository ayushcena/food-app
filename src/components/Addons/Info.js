import React from 'react';
import './addons.css'

function Info(props) {
    const [x, setX] = React.useState(0);
    const Hello = () => {
        setX(1);
    }
    return (
        <div className="pizzasize">
            <button className='btn111' onClick={Hello}>
                {props.size}
                &nbsp;
                &nbsp;
                &nbsp;
                &nbsp;
                &nbsp;
                &nbsp;
                &nbsp;
                &nbsp;
                &nbsp;
                &nbsp;
                &nbsp;
                &nbsp;
                &nbsp;
                &nbsp;
                &nbsp;
                &nbsp;
                &nbsp;
                &nbsp;
                &nbsp;
                &nbsp;
                &nbsp;
                &nbsp;
                &nbsp;
                &nbsp;
                &nbsp;
                &nbsp;
                &nbsp;
                &nbsp;
                &nbsp;
                &nbsp;
                &nbsp;
                &nbsp;
                &nbsp;
                &nbsp;
                &nbsp;
                &nbsp;
                &nbsp;
                &nbsp;
                &nbsp;
                &nbsp;
                &nbsp;
                &nbsp;
                &nbsp;
                &nbsp;
                &nbsp;
                &nbsp;
                &nbsp;
                &nbsp;
                &nbsp;
                &nbsp;
                &nbsp;
                &nbsp;
                &nbsp;
                &nbsp;
                &nbsp;
                ₹ {props.price}
            </button>
            {/* <span className="sizeprice"> </span> */}
        </div>
    )
}
export default Info;

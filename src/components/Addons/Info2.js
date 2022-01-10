import React from 'react';
import './addons.css'

function Info2 (props){
return (
	<div className="sizecontainer">
  
  <div className="row">
    
      <div className="col-md-4 col-lg-4 col-sm-4">
        
        <label>
          <input type="checkbox" name="product" className="card-input-element" />

            <div className="panel panel-default card-input-2">
              <span className="panel-body">
                {props.topping}
              </span>
              <span className="toppingprice">₹ {props.price}</span>
            </div>

        </label>
        
      </div>
  </div>
  
</div>

)
}
export default Info2;

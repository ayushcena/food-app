import React from 'react';
import './addons.css'

function Info (props){
return (
	<div className="sizecontainer">
  
  <div className="row">
    
      <div className="col-md-4 col-lg-4 col-sm-4">
        
        <label>
          <input type="radio" name="product" className="card-input-element" />

            <div className="panel panel-default card-input">
              <span className="panel-body">
                {props.size}
              </span>
              <span className="sizeprice">₹ {props.price}</span>
            </div>

        </label>
        
      </div>
  </div>
  
</div>

)
}
export default Info;

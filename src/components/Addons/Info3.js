import React from "react";
import "./addons.css";

function Info3(props) {
  return (
    <div className="sizecontainer">
      <div className="row">
        <div className="col-md-4 col-lg-4 col-sm-4">
          <label>
            <input
              type="checkbox"
              name="product"
              className="card-input-element"
            />

            <div
              className="panel panel-default card-input-2"
              onClick={() => {
                props.array.map((item) => item.index).includes(props.index)
                  ? props.setAddons((addons) =>
                    addons.filter((item) => item.index !== props.index)
                  )
                  :
                  props.setAddons((addons) => [
                    ...addons,
                    {
                      drink: props.drink,
                      price: props.price,
                      index: props.index,
                      quantity: props.quantity,
                      productId: props.productId,
                    },
                  ])
              }} 
            >
              <span className="panel-body">{props.drink}</span>
              <span className="toppingprice">₹ {props.price}</span>
            </div>
          </label>
        </div>
      </div>
    </div>
  );
}
export default Info3;

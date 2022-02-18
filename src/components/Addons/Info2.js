import React from "react";
import "./addons.css";

function Info2(props) {
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
                  ? props.setToppings((tops) =>
                      tops.filter((item) => item.index !== props.index)
                    )
                  : props.setToppings((tops) => [
                      ...tops,
                      { 
                        topping: props.topping,
                        price: props.price,
                        productId: props.productId,
                        index: props.index,
                      },
                    ]);
              }}
            >
              <span className="panel-body">{props.topping}</span>
              <span className="toppingprice">₹ {props.price}</span>
            </div>
          </label>
        </div>
      </div>
    </div>
  );
}
export default Info2;

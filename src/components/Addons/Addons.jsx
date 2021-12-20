import './addons.css'

const Addons = ({ pizza, toppings, others, setPopup }) => {
  return (
    <div className="container">
      <div>
        <h1 className="title">{pizza.name} HELLO</h1>
      </div>
      <div onClick={() => setPopup((state) => !state)}>close </div>
      <div>Total Cost</div>
      <div>Price</div>
    </div>
  );
};
export default Addons;

import './addons.css'
import Sizes from './Sizes';
import Info from './Info';
import Info2 from './Info2';
import Info3 from './Info3';
import Toppings from './Toppings';
import Otheradds from './Otheradds';

const Addons = ({ pizza, toppings, others, setPopup }) => {
  return (
    <div className="container">
      <div>
        <h1 className="title">{pizza.name} HELLO</h1>
      </div>
      <div onClick={() => setPopup((state) => !state)}>X</div>
      <div > 
     {Sizes.map((e)=>{
       return (
       <Info size={e.size} price={e.price}/>
     );})}
    </div>
    <div className="toppingsHead">Add Toppings:</div>
    <div > 
     {Toppings.map((f)=>{
       return (
       <Info2 topping={f.topping} price={f.price}/>
     );})}
    </div>
    <div className="otherAddsHead">Add Other Add-ons:</div>
    <div > 
     {Otheradds.map((f)=>{
       return (
       <Info3 drink={f.drink} price={f.price}/>
     );})}
    </div>
      <div>Total Cost</div>
      <div>Price</div>
    </div>
  );
};
export default Addons;

const Addons = ({ pizza, toppings, others, setPopup }) => {
  return (
    <div
      style={{ zIndex: 9, position: "fixed", top: 0, backgroundColor: "white" }}
    >
      <div>
        <h1>{pizza.name}</h1>
      </div>
      <div onClick={() => setPopup((state) => !state)}>close </div>
      <div></div>
      <div></div>
    </div>
  );
};
export default Addons;

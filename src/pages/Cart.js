import Event from "../components/Event";
function Cart({ cart, setCart, handleChange }) {

  const handleRemove = (name) => {
    setCart((cart) => cart.filter((item) => item.name !== name));
  };

  const price = cart.reduce(
    (total, item) => total + item.amount * item.priceRanges[0].min,
    0
  );

  return (
    <article >
      {cart.map((item, index) => (
        <div className="myEvent" key={item.id}>
          <Event key={index} event={item} />
          <div className="cart-box" key = {item._embedded.venues[0].generalInfo.generalRule}>
            <div>
              <button key = {item.id} className="myEventbtn" onClick={() => handleChange(item.name, -1)}>-</button>
              <button className="myEventbtn" key={item.amount}>{item.amount}</button>
              <button key = {item.priceRanges[0].min} className="myEventbtn" onClick={() => handleChange(item.name, 1)}>+</button>
              <button key = {item._embedded.venues[0].generalInfo} className="myEventbtn" onClick={() => handleRemove(item.name)}>
                Delete
              </button>
            </div>
            <div>
            </div>
          </div>
        </div>
      ))}
      <div className="total">
        <span key={price}>Total Price of your Cart ${price}</span>
        <span></span>
      </div>
    </article>
  );
};




export default Cart

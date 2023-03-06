import Event from "./Event";
function Cart({cart, setCart, handleChange}) {

        const handleRemove = (name) => {
          setCart((cart) => cart.filter((item) => item.name!== name));
        };
      
        const price = cart.reduce(
          (total, item) => total + item.amount * item.priceRanges[0].min,
          0
        );
      
        return (
          <article>
            {cart.map((item, index) => (
              <div className="cart_box">
              <Event key={index} event={item}/>
                
                <div>
                  <button onClick={() => handleChange(item.name, 1)}>+</button>
                  <button>{item.amount}</button>
                  <button onClick={() => handleChange(item.name, -1)}>
                    -
                  </button>
                </div>
                <div>
                  <span>{item.priceRanges[0].min}</span>
                  <button onClick={() => handleRemove(item.name)}>
                    Remove
                  </button>
                </div>
              </div>
            ))}
            <div className="total">
              <span>Total Price of your Cart ${price}</span>
            <span></span> 
            </div> 
          </article>
        );
      };


 

export default Cart

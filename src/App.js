import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/js/bootstrap"
import { Route, Routes } from "react-router-dom";
import { useState, useEffect } from "react";
import { getAllEvents } from "./data"
import { MyContext } from './context'
import { MyContextCategories } from './context'
import Footer from "./components/Footer";
import Venue from "./pages/Venue";
import Sports from "./pages/Sports"
import Concerts from "./pages/Concerts"
import EventDetails from "./pages/EventDetails"
import Eventboard from "./pages/Eventboard"
import Help from "./pages/Help"
import Nav from "./components/Nav"
import SignPage from "./pages/SignPage"
import Cart from "./components/Cart";

function App() {
  const [event, setEvent] = useState([]);
  const [searchQuery, setSearchQuery] = useState([]);
  const [eventType, setEventType] = useState('');
  const [cart, setCart] = useState([]);


  useEffect(() => {
    const EventsData = async () => {
      const eventData = await getAllEvents();
      const allEvents = eventData._embedded.events

      const uniqueEvents = allEvents.reduce((accumulator, current) => {
        if (!accumulator.find((item) => item.name === current.name)) {
          accumulator.push(current);
        }
        return accumulator;
      }, []);

      setEvent(uniqueEvents);
      setSearchQuery(uniqueEvents)
    };
    EventsData()

  }, []);

  //  console.log(event)
  
  const handleChange = (eventName, d) => {
    setCart((cart) =>
      cart.flatMap((cartItem) =>
        cartItem.name === eventName
          ? cartItem.amount + d < 1
            ? [] // <-- remove item if amount will be less than 1
            : [
                {
                  ...cartItem,
                  amount: cartItem.amount + d
                }
              ]
          : [cartItem]
      )
    );
  };
  
  const handleAddToCart = (item) => {
    if (cart.some((cartItem) => cartItem.name === item.name)) {
      setCart((cart) =>
        cart.map((cartItem) =>
          cartItem.name === item.name
            ? {
                ...cartItem,
                amount: cartItem.amount + 1
              }
            : cartItem
        )
      );
      return;
    }
    setCart((cart) => [
      ...cart,
      { ...item, amount: 1 } // <-- initial amount 1
    ]);
  };

  // console.log(cart)

  return (
    <div className="App">
      <MyContext.Provider value={{ event }}>
        <MyContextCategories.Provider value={{ eventType }}>
          <Nav eventType={eventType} setEventType={setEventType} />
        
            <Routes>
              <Route path="/" element={<Eventboard searchQuery={searchQuery} setSearchQuery={setSearchQuery} />} />
              <Route path="/events/:name" element={<EventDetails handleAddToCart={handleAddToCart}/>} />
              <Route path="/events/Sports" element={<Sports />} />
              <Route path="/events/Music" element={<Concerts />} />
              <Route path="/venues" element={<Venue />} />
              <Route path="/help" element={<Help />} />
              <Route path="/signUp" element={<SignPage />} />
              <Route path="/cart" element={<Cart cart={cart} setCart={setCart} handleChange={handleChange}/>} />
            </Routes>
        
          <Footer />
        </MyContextCategories.Provider>
      </MyContext.Provider>
    </div>
  );
}

export default App;

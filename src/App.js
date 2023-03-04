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
import About from "./pages/About"
import Nav from "./components/Nav"


function App() {
  const [event, setEvent] = useState([]);
  const [searchQuery, setSearchQuery] = useState([]);
  const [eventType, setEventType] = useState('');

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
  // console.log(searchQuery)

  return (
    <div className="App">
      <MyContext.Provider value={{ event }}>
        <MyContextCategories.Provider value={{ eventType }}>
          <Nav eventType={eventType} setEventType={setEventType} />
        
            <Routes>
              <Route path="/venues" element={<Venue />} />
              <Route path="/about" element={<About />} />
              <Route path="/" element={<Eventboard searchQuery={searchQuery} setSearchQuery={setSearchQuery} />} />
              <Route path="/events/:name" element={<EventDetails />} />
              <Route path="/events/Sports" element={<Sports />} />
              <Route path="/events/Music" element={<Concerts />} />
            </Routes>
        
          <Footer />
        </MyContextCategories.Provider>
      </MyContext.Provider>
    </div>
  );
}

export default App;

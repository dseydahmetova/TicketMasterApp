import React from 'react'
import { useState, useEffect, useContext } from "react"
import { getAllCategories } from "../data"
import Event from '../components/Event';
import { MyContextCategories } from "../context";


function Concerts() {
  const [category, setCategory] = useState([]);
  const { eventType } = useContext(MyContextCategories)

  useEffect(() => {
    const CategoryData = async () => {
      const eventData = await getAllCategories("Music");
      const allEvents = eventData._embedded.events
      const uniqueEvents = allEvents.reduce((accumulator, current) => {
        if (!accumulator.find((item) => item.name === current.name)) {
          accumulator.push(current);
        }
        return accumulator;
      }, []);
      console.log("this is sport" + eventType)
      setCategory(uniqueEvents);

    };
    CategoryData()

  }, []);


  const result = category.map((event, index) =>
    <Event key={index} event={event} />

  )
  const content = result?.length ? result : <article><p>Sorry, No Matching Events</p></article>

  return (
    <div>
      {content}
    </div>
  )
}

export default Concerts

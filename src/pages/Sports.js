import React from 'react'
import {useState, useEffect} from "react"
import {getAllCategories} from "../data"
import Event from '../components/Event';

function Sports() {
    const [category, setCategory] = useState([]);


    useEffect(() => {
      const CategoryData = async () => {
        const eventData = await getAllCategories("Sports");
        const allEvents = eventData._embedded.events
  
        const uniqueEvents = allEvents.reduce((accumulator, current) => {
          if (!accumulator.find((item) => item.name === current.name)) {
            accumulator.push(current);
          }
          return accumulator;
        }, []);
  
        setCategory(uniqueEvents);  
        
      };
      CategoryData()
        
    }, []);
console.log(category)

  return (
    <div>
     <Event event={category} />
    </div>
  )
}

export default Sports

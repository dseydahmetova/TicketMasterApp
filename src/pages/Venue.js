import React from 'react'
import {useContext} from "react"
import { MyContext } from '../context'
import Carousel  from '../components/Carousel'

function Venue() {
    const { event } = useContext(MyContext)
  return (
    <div>
    Hello
       <Carousel event = {event}/>
    </div>
  )
}

export default Venue

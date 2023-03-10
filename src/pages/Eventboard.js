import React from 'react'
import { useContext } from "react";
import { MyContext } from "../service/context";
import SearchForm from '../components/SearchForm'
import EventPage from '../components/EventPage';


function Eventboard({ searchQuery, setSearchQuery }) {
  const { event } = useContext(MyContext)

  return (
    <div className='eventBoard'>
      <p className='welcomeMsg'> Shop millions of live events and discover can't-miss concerts, games, theater and more
      </p>
      <SearchForm event={event} setSearchQuery={setSearchQuery} />
      <EventPage searchQuery={searchQuery} event={event} />
    </div>
  );
}

export default Eventboard



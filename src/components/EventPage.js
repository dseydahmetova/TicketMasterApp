import React from 'react'
import Event from "./Event"

const EventPage = ({ searchQuery }) => {
    const result = searchQuery.map((event, index) =>
        <Event key={index} event={event} />
    )
    const content = result?.length ? result : <article><p>Sorry, No Matching Events</p></article>
    return (
        <main>
            {content}
        </main>
    )
}

export default EventPage

import {Link} from 'react-router-dom'

function Event({event}) {
    // console.log("event pagekkkk" +typeof((event)))
  return (
  
        <div className="card mb-3">
        
          <div className="row g-2">
         
            <div className="col-md-3">
              <img className = "eventimg" src={event.images[0].url} alt='event img' />
            </div>
            <div className="col-md-7">
              <div className="card-body">
                  <h5 className="card-title" key={event.id}>  {event.name}</h5>
                  {/* <p>{event.classifications[0].segment.name}/{event.classifications[0].genre.name}/{event.classifications[0].subGenre.name}</p> */}
                  <p className="card-text" key={event.dateTime}>Date:{` `} {event.dates.start.localDate}</p> 
                  <p>Time:{` `}{event.dates.start.localTime}</p>
                  {event.priceRanges && <h6 className="card-text" > From ${event.priceRanges[0].min} {event.priceRanges[0].currency}</h6>}
              </div>
            </div>
           
            <div className="col-md-1 group-button">
            <a className="title"  href={event.url}><button className='buyButton btn btn-secondary'>Buy Tickets</button></a>
            <Link to={`/events/${event.name}`}>
            <button className='viewButton btn btn-secondary'>View Event</button>
            </Link>
          </div>
          </div>
         

          
        </div>

  )
}

export default Event

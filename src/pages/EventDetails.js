import { useNavigate, useParams } from "react-router-dom";
import { useContext } from 'react';
import { MyContext } from "../context";
import { convertDate } from "../data";

function EventDetails() {

  let { name } = useParams();
  let { event } = useContext(MyContext)
  let navigate = useNavigate() 
  
// returns the page to the previous
  function goBack() {
    navigate(-1)
  }

// returns all details for each Event
  return (
    <div className="eventDetail">
      {event
        .filter((eventItem) => eventItem.name === name)
        .map((item, index) => (
          <div key={index} className='detailCard'>
            <img src={item.images[0].url} alt='' className='detailimg' />
            <div className="detailContent">
              <p className="title" key={item.id}>  {item.name}</p>
              <p className="title" key={item.classifications[0].segment.id} >  {item.classifications[0].segment.name}/{item.classifications[0].genre.name}/{item.classifications[0].subGenre.name}</p>
              {convertDate(`${item.dates.start.dateTime}`)}
              Venue address: {item._embedded.venues[0].name}
              {item._embedded.venues && (
                <div className=" flex flex-col justify-center align-center text-left basis-1/3 m-2   p-1">
                  {item._embedded.venues[0].address.line1}
                  {" - "}
                  {item._embedded.venues[0].city.name}
                  {", "}
                  {item._embedded.venues[0].state.stateCode}
                  {" ("}
                  {item._embedded.venues[0].country.countryCode}
                  {"). "}
                </div>
              )}
              {item._embedded.venues[0].generalInfo &&
                <p className="content" >{item._embedded.venues[0].generalInfo.generalRule}
                </p>}
              {item.priceRanges && <p className="content" > ${item.priceRanges[0].min}-${item.priceRanges[0].max} {item.priceRanges[0].currency}</p>}
              {item.pleaseNote && <p className="content"> Please Note: {item.pleaseNote}</p>}
              <a className="title" key={item.id} href={item.url}> <button>Buy Tickets</button></a>
              <button onClick={goBack}>Back</button>
            </div>
          </div>
        ))
      }
    </div>
  )
}

export default EventDetails;


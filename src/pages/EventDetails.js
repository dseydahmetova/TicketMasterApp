import { useNavigate, useParams } from "react-router-dom";
import { useContext } from 'react';
import { MyContext } from "../context";
import { convertDate } from "../data";
import { IoLogoChrome } from "react-icons/io5";

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
          <div className="detail-content">
            <div className="left-content">
              <p className="eventTitle" key={item.id}>  {item.name}</p>
              <p className="eventType" key={item.classifications[0].segment.id} >  {item.classifications[0].segment.name}/{item.classifications[0].genre.name}/{item.classifications[0].subGenre.name}</p>
              <p className="eventTime">  {convertDate(`${item.dates.start.dateTime}`)}</p>

              <p className="eventTime">{item._embedded.venues[0].name}</p>
              {item._embedded.venues && (
                <div className="eventAddress">
                  Venue address:  {item._embedded.venues[0].address.line1}
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
              {item.pleaseNote && <p className="content"> Please Note: {item.pleaseNote}</p>}

            </div>

            <div className="right-content">
              <img src={item.images[0].url} alt='eventimage' className='detailimg' />



              <div className="priceRange">
                {item.priceRanges && <p className="content" > ${item.priceRanges[0].min}-${item.priceRanges[0].max} {item.priceRanges[0].currency}</p>}
              </div>

              <div className="button-group">
                <a key={item.id} href={item.url}>
                  <button type="button" class="btn btn-outline-secondary buyButton evtBtn">Buy Tickets</button>
                </a>
                <button type="button" class="btn btn-outline-secondary viewButton evtBtn" onClick={goBack}>Back</button>
              </div>

            </div>
          </div>
        ))
      }
    </div>
  )
}

export default EventDetails;


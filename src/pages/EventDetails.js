import { useNavigate, useParams } from "react-router-dom";
import { useContext } from 'react';
import { MyContext } from "../service/context";
import { convertDate } from "../service/data";

function EventDetails({ handleAddToCart }) {
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
              <p className="eventTitle" key={index}>  {item.name}</p>
              <p className="eventType" key={item.classifications[0].segment.id} >  {item.classifications[0].segment.name}/{item.classifications[0].genre.name}/{item.classifications[0].subGenre.name}</p>
              <p className="eventTime" key = {item.dates.start.dateTime}>  {convertDate(`${item.dates.start.dateTime}`)}</p>

              <p className="eventTime" key = {item._embedded.venues[0].name}>{item._embedded.venues[0].name}</p>
              {item._embedded.venues && (
                <div className="eventAddress" key = {item._embedded.venues[0].address.line1}>
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
                <p className="content" key = {item._embedded.venues[0].generalInfo.generalRul}>{item._embedded.venues[0].generalInfo.generalRule}
                </p>}
              {item.pleaseNote && <p className="content" key = {item.pleaseNote}> Please Note: {item.pleaseNote}</p>}
            </div>
            <div className="right-content" key={item.images[0].url}>
              <img src={item.images[0].url} alt='eventimage' className='detailimg' />
              <div className="priceRange">
                {item.priceRanges && <p className="price-content" key = {item.priceRanges[0].min}> ${item.priceRanges[0].min}-${item.priceRanges[0].max} {item.priceRanges[0].currency}</p>}
              </div>
              <div className="button-group" key={item.url}>
                <a key={item.id} href={item.url}>
                  <button type="button" className="btn btn-outline-secondary buyButton evtBtn">Buy Tickets</button>
                </a>
                <button name="Add to cart" className="btn btn-outline-secondary buyButton evtBtn"
                  onClick={() => handleAddToCart(item)}> Save </button>
                <button type="button" className="btn btn-outline-secondary viewButton evtBtn" onClick={goBack}>Back</button>
              </div>
            </div>
          </div>
        ))
      }
    </div>
  )
}

export default EventDetails;


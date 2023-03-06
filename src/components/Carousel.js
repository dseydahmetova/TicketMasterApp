function Carousel({ venueData }) {

  return (
    <>
      <div id="carouselExampleAutoplaying" className="carousel slide carousel-dark" data-bs-ride="carousel">
        <div className="carousel-inner">
          {venueData.map(item => (
            <div className="carousel-item active"  key={item.id}>
              <img key={item.images} src={item.images} className="d-block w-100" alt="..." />
              <div className=" carousel-caption d-none d-md-block" key={item.id}>
                <p className="venueTitle" key={item.name}>{item.name}</p>
                <p className="bottom" key={item.address}>{item.address} </p>
                <p className="bottom" key={item.postalCode}> {item.city}{' '}/{' '}{item.state}{' '}/{' '}{item.country} {' '} {item.postalCode}</p>
              </div>
            </div>
          )
          )}
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
      <div className="venueDesc">
        <p> Open Hours: "Monday - Saturday: 10:00am to 6:00pm </p>
        <p>Sunday: Closed </p>
        <p>The Box Office will be open at 10:00am daily or 90 minutes before the 1st performance of the day, whichever is earlier and will stay open until 8:00pm or
          30 minutes after the last performance of the day begins, whichever is later. </p>
        <p>Payment: "Cash, American Express, Visa, MasterCard, Discover.</p>
        <p>CallDetail: "Pick-up tickets anytime the day of the show during box office hours.
          Customers must present the actual credit card used to place the order and a picture ID. MSG cannot accept third party or “drop offs” from individual patrons."
        </p>
        <p>Parking Detail: "Prepaid advance parking is available for select events through Ticketmaster. </p>
      </div>
    </>
  )
}

export default Carousel

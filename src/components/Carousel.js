import React from 'react'

function Carousel({ event }) {
  const imageArr = []
  const eventImages = event.map(eventItem =>
    imageArr.push(eventItem._embedded.venues[0].images[0].url))

  return (
    <div id="carouselExampleAutoplaying" className="carousel slide" data-bs-ride="carousel">
      <div className="carousel-inner">

        <div className="carousel-item active">
          <img src={imageArr[Math.floor(Math.random() * imageArr.length)]} className="d-block w-100" alt="..." />
        </div>
        <div className="carousel-item">
          <img src={imageArr[Math.floor(Math.random() * imageArr.length)]} className="d-block w-100" alt="..." />
        </div>
        <div className="carousel-item">
          <img src={imageArr[Math.floor(Math.random() * imageArr.length)]} className="d-block w-100" alt="..." />
        </div>

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
  )
}

export default Carousel

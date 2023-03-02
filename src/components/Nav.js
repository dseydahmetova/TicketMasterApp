import React from 'react'
import { Link } from "react-router-dom"



function Nav({eventType, setEventType}) {

  const handleChange = (event) => {
 
    setEventType(event.target.value);
 
  };
  console.log("value " + eventType)

  return (
<nav className="navbar navbar-expand-lg nav">

  <div className="container-fluid">

  <div className="logo">
        <Link to="/">
          <span><i className="fas fa-bell"></i>
           </span>
          <h3>EventMaster</h3>
        </Link>
      </div>  

    <div className="collapse navbar-collapse" id="navbarScroll">
      <ul className="navbar-nav me-auto my- my-lg-0 navbar-nav-scroll --bs-scroll-height: 100px;">
        <li className="nav-item">
        <Link className="nav-link" to='/venues'>
        <div>Venue</div>

      </Link>
        </li>
        <li className="nav-item">
        <Link  className="nav-link" to='/about'>
        <div>About</div>
      </Link>
        </li>
        {/* <li className="nav-item dropdown"> */}
          {/* <Link className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Categories
          </Link> 
          <ul className="dropdown-menu" value={value} onChange={handleChange}>
          <a  href="#" className="dropdown-item" value="Sports" to='/events/sports'>Sports</a>
            <Link className="dropdown-item" value="Concerts" to="/events/concerts">Concerts</Link>
            <Link className="dropdown-item" value="show" to="/ComedyShow">Comedy Shows</Link>
          </ul>  */}
          {/* <ul className="dropdown-menu" value={value} onChange={handleChange}>
          {/* <select value={value} onChange={handleChange}>
          <option value="Sports"><Link  className="dropdown-item"  to='/events/sports'>Categories</Link></option>
          <option value="Sports"><Link  className="dropdown-item"  to='/events/sports'>Sports</Link></option>
          <option value="Concerts"> <Link className="dropdown-item" value="Concerts" to="/events/concerts">Concerts</Link></option>
          <option value="Comedy"> <Link className="dropdown-item" value="show" to="/ComedyShow">Comedy Shows</Link></option>
          </select> */}
          {/* </ul>  */}
          <select className="nav-link form-select-lg" aria-label="Default select example"  onChange={handleChange}>
  <option className="dropdown-item" defaultValue>Categories</option>
  <option className="dropdown-item" value="Sports">Sports</option>
  <option className="dropdown-item" value="Music">Music</option>
  <option className="dropdown-item" value="Shows">Show</option>
</select>


         {/* </li> */}
      </ul>
    </div>
  </div>

</nav>


   
  )
}

export default Nav

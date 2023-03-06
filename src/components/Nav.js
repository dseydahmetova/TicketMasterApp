import React from 'react'
import { Link } from "react-router-dom"

function Nav({ setEventType }) {

  const handleChange = (event) => {
    const type = event.target.value
    setEventType(type);
    window.open(`/events/${type}`);
  };

  return (
    <nav className="navbar navbar-expand-lg nav bg-body-tertiary">
      <div className="container-fluid">
        <div className="logo">
          <Link to="/">
            <span><i className="fas fa-bell"></i>
            </span>
            <h3>EventMaster</h3>
          </Link>
        </div>
        <div className="collapse navbar-collapse" id="navbarScroll">
          <ul className='navbar-nav ms-auto mb-2 mb-lg-0'>
            <li className="nav-item dropdown">

              {/* The original Bootstrap Dropdown */}
              {/* <Link className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Categories
          </Link>  */}
              {/* <ul className="dropdown-menu"  onChange={handleChange}>
          <li value="Sports">
          <Link  href="#" className="dropdown-item" value="Sports" to='/events/sports'>Sports</Link></li>
            <Link className="dropdown-item" value="Concerts" to="/events/concerts">Concerts</Link>
            <Link className="dropdown-item" value="show" to="/ComedyShow">Comedy Shows</Link>
          </ul>   */}

              <select className="nav-link form-select-lg" aria-label="Default select example" onChange={handleChange}>
                <option className="dropdown-item" defaultValue value="Sports">Categories</option>
                <option value="Sports">Sports</option>
                <option value="Music"> Concerts</option>
              </select>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to='/venues'>
                <div>Venue</div>
              </Link>
            </li>
            <div className='navbar-nav ms-auto mb-2 mb-lg-0'>
              <li className="nav-item">
                <Link className="nav-link" to='/cart'>
                  <div>My Event</div>
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to='/help'>
                  <div>Help</div>
                </Link>
              </li>
              <li className="nav-item signup">
                <Link className="nav-link" to='/signUp'>
                  <div>Sign In
                    <i className="bi bi-person-fill"></i>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-person-fill" viewBox="0 0 16 16">
                      <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3Zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z" />
                    </svg>
                  </div>
                </Link>
              </li>
            </div>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Nav

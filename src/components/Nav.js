import React from 'react'
import { Link } from "react-router-dom"

function Nav() {
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
      <ul className="navbar-nav me-auto my-2 my-lg-0 navbar-nav-scroll --bs-scroll-height: 100px;">
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
        <li className="nav-item dropdown">
          <Link className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Categories
          </Link>
          <ul className="dropdown-menu">
          <Link  className="dropdown-item" to='/sports'>Sports</Link>
            <Link className="dropdown-item" to="#">Concerts</Link>
            <Link className="dropdown-item" to="#">Something</Link>
          </ul>
        </li>
      </ul>
    </div>
  </div>
</nav>


   
  )
}

export default Nav

import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import {Navbar,Nav,Button, NavLink} from 'react-bootstrap'

const navbar = () => {
  return (
    <>
    <div className="container-fuild nav_bg">
        <div className="row">
          <div className="col-10 mx-auto">
            <nav className="navbar navbar-expand-lg bg-light">
            <div className="container">
              <NavLink className="navbar-brand text-dark" to="#">Airmeet</NavLink>
              <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav ms-auto mb-0 mb-lg-0 text-dark">
                  <li className="nav-item">
                    <NavLink className="nav-link active text-dark" aria-current="page" to="#">Home</NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink className="nav-link text-dark" to="/contact">Contact</NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink className="nav-link text-dark" to="/about">About</NavLink>
                  </li>
                  <li className="nav-item text-dark">
                    <NavLink className="nav-link text-dark" to="/pricing">Pricing</NavLink>
                  </li>
                </ul>
                
              </div>
            </div>
          </nav>
    </div>
    </div>
    </div>
    </>
  )
}

export default navbar
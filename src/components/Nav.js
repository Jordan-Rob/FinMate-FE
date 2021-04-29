import React from 'react';
import {Link} from 'react-router-dom'

const Nav = () => {
    return (
        <div>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <a className="navbar-brand" href="#">
            Navbar
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav">
              <Link to='/'>
                <a className="nav-item nav-link active" href="#">
                    Home <span className="sr-only">(current)</span>
                </a>
              </Link>  
              <Link to="/About">
                <a className="nav-item nav-link" href="#">
                  About
                </a>
              </Link>
              <Link to="/Login">
                <a className="nav-item nav-link" href="#">
                  Login
                </a>
              </Link>
            </div>
          </div>
        </nav>
      </div>
    )
}

export default Nav;
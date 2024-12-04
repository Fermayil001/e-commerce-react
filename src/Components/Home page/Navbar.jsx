import React, { useState } from 'react';

import { Dropdown } from 'react-bootstrap'; 
import { Link } from 'react-router-dom';

function Navbar() {
    const [isNavbarCollapsed, setIsNavbarCollapsed] = useState(true);

    const toggleNavbar = () => setIsNavbarCollapsed(!isNavbarCollapsed);

  return (
    <>
     <nav className="navbar navbar-expand-lg bg-body-light p-3">
      <div className="container d-flex justify-content-around main-width" style={{ gap: '38px' }}>
        <div className="nav-title">
          <a style={{ fontSize: '28px' }} className="navbar-brand fw-700" href="#">
            Hekto
          </a>
          <button
            className="navbar-toggler"
            type="button"
            onClick={toggleNavbar}
            aria-controls="navbarSupportedContent"
            aria-expanded={!isNavbarCollapsed}
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
        </div>

        <ul style={{ gap: '10px' }} className="navbar-nav me-auto mb-2 mb-lg-0 align-items-center">
          <li className="nav-item">
            <Dropdown>
              <Dropdown.Toggle variant="light" className=" btn btn-light border-none fs-14 body-main-color" id="dropdown-home">
                Home
                <i className="fa fa-angle-down px-1"></i>
              </Dropdown.Toggle>

              <Dropdown.Menu>
                <Dropdown.Item href="#">Action</Dropdown.Item>
                <Dropdown.Item href="#">Another action</Dropdown.Item>
                <Dropdown.Item href="#">Something else here</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </li>

          <li className="nav-item fs-14">
            <Link className="nav-link nav-hover-color" to="#">Pages</Link>
          </li>
          <li className="nav-item fs-14">
            <Link className="nav-link nav-hover-color" to="/products">Products</Link>
          </li>
          <li className="nav-item fs-14">
            <Link className="nav-link nav-hover-color" to="#">Blog</Link>
          </li>
          <li className="nav-item fs-14">
            <Link className="nav-link nav-hover-color" to="/shop">Shop</Link>
          </li>
          <li className="nav-item fs-14">
            <Link className="nav-link nav-hover-color" to="#">Contact</Link>
          </li>
        </ul>

        <div className={`collapse d-flex ${isNavbarCollapsed ? 'collapse' : ''}`} id="navbarSupportedContent">
          <form className="d-flex" role="search">
            <input className="form-control" type="search" placeholder="Search" aria-label="Search" />
            <button className="btn btn-dark border-none button-hover-color body-main-bg-color" type="submit">
              Search
            </button>
          </form>
        </div>
      </div>
    </nav>
    </>
  )
}

export default Navbar
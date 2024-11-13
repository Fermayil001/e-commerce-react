import React from 'react'
/* import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import 'font-awesome/css/font-awesome.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css'; */






function Header() {
    return (
        <>
            <header className="header bg-color-header text-light" style={{ fontSize: '12px' }}>
                <div className="container bg-color-header d-flex justify-content-around align-items-center">
                    <div className="left-side text-center">
                        <i className="bi bi-envelope px-1"></i>
                        <span style={{ marginRight: '25px' }}>mhhasanul@gmail.com</span>
                        <i className="bi bi-telephone-outbound px-1"></i>
                        <span>(12345)67890</span>
                    </div>
                    <div className="right-side d-flex justify-content-between align-items-center">
                        <div className="bar d-flex align-items-center">
                            <ul className="nav align-items-center">
                                <li className="nav-item">
                                    <div className="dropdown">
                                        <a
                                            style={{ fontSize: '12px' }}
                                            className="btn btn-secondary bg-color-header border-none"
                                            href="#"
                                            role="button"
                                            data-bs-toggle="dropdown"
                                            aria-expanded="false"
                                        >
                                            English
                                            <i className="fa fa-angle-down px-1"></i>
                                        </a>
                                        <ul className="dropdown-menu">
                                            <li><a className="dropdown-item" href="#">Action</a></li>
                                            <li><a className="dropdown-item" href="#">Another action</a></li>
                                            <li><a className="dropdown-item" href="#">Something else here</a></li>
                                        </ul>
                                    </div>
                                </li>
                                <li className="nav-item">
                                    <div className="dropdown">
                                        <a
                                            style={{ fontSize: '12px' }}
                                            className="btn btn-secondary bg-color-header border-none"
                                            href="#"
                                            role="button"
                                            data-bs-toggle="dropdown"
                                            aria-expanded="false"
                                        >
                                            USD
                                            <i className="fa fa-angle-down px-1"></i>
                                        </a>
                                        <ul className="dropdown-menu">
                                            <li><a className="dropdown-item" href="#">Action</a></li>
                                            <li><a className="dropdown-item" href="#">Another action</a></li>
                                            <li><a className="dropdown-item" href="#">Something else here</a></li>
                                        </ul>
                                    </div>
                                </li>
                                <li className="nav-item">
                                    <a className="header-link nav-link" href="#">
                                        Login
                                        <i className="bi bi-person px-1"></i>
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a className="header-link nav-link" href="#">
                                        Wishlist
                                        <i className="bi bi-heart px-1"></i>
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <div className="basket">
                            <i className="bi bi-cart2 fs-5"></i>
                        </div>
                    </div>
                </div>
            </header>
        </>
    )
}

export default Header
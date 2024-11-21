/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <header id="header" className='mx-2'>

            {/* Navbar Start */}
            <nav
                className="navbar navbar-expand"
            >
                <div className="container header">

                    {/* Header Logo */}
                    <Link className="navbar-brand" to="/">

                        <img
                            className="navbar-brand-sticky"
                            src="assets/img/logo/logo2.png"
                            alt="sticky brand-logo"
                        />
                    </Link>
                    <div className="ml-auto" />

                    <ul className="navbar-nav navbar-menue">
                        <li className="nav-item">
                            <Link to="/" className="nav-link">
                                HOME
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/about" className="nav-link">
                                ABOUT US
                            </Link>
                        </li>
                        <li className="nav-item dropdown">
                            <a className="nav-link" href="#">
                                SERVICES
                                <i className="fas fa-angle-down ml-1" />
                            </a>
                            <ul className="dropdown-menu">
                                <li className="nav-item">
                                    <Link to="/hospitality" className="nav-link">
                                        Hospitality
                                    </Link>
                                </li>
                                <li className="nav-item">
                                    <Link to="/health" className="nav-link">
                                        Health&nbsp;&amp;&nbsp;Safety
                                    </Link>
                                </li>
                                <li className="nav-item">
                                    <Link to="/quality" className="nav-link">
                                        Quality&nbsp;Management
                                    </Link>
                                </li>
                                <li className="nav-item">
                                    <Link to="/medical" className="nav-link">
                                        Medical&nbsp;Equipment&nbsp;Product
                                    </Link>
                                </li>
                                <li className="nav-item">
                                    <Link to="/itmanagement" className="nav-link">
                                        IT&nbsp;Management
                                    </Link>
                                </li>
                                <li className="nav-item">
                                    <Link to="/germent" className="nav-link">
                                        Ready-Made&nbsp;Garment
                                    </Link>
                                </li>
                            </ul>
                        </li>
                        <li className="nav-item dropdown">
                            <a className="nav-link" href="#">
                                ENTERPRISE
                                <i className="fas fa-angle-down ml-1" />
                            </a>
                            <ul className="dropdown-menu">
                                <li className="nav-item">
                                    <a href="#" className="nav-link">
                                        Fresh&nbsp;Export&nbsp;Australia
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a href="#" className="nav-link">
                                        Grab&nbsp;Transport
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a href="#" className="nav-link">
                                        Australian&nbsp;Shipping&nbsp;Corporation
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a href="#" className="nav-link">
                                        Standards&nbsp;Australasia&nbsp;Pty&nbsp;Ltd
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a href="#" className="nav-link">
                                        Pacific&nbsp;Australasia&nbsp;Corporation
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a href="#" className="nav-link">
                                        Rapid&nbsp;workforce&nbsp;pty&nbsp;ltd
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a href="#" className="nav-link">
                                        Mates&nbsp;Security&nbsp;Pty&nbsp;Ltd
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a href="#" className="nav-link">
                                        Alef&nbsp;Aviation&nbsp;Group
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a href="#" className="nav-link">
                                        HRM&nbsp;Group&nbsp;Pty&nbsp;Ltd
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a href="#" className="nav-link">
                                        Global&nbsp;Connex&nbsp;Pty&nbsp;Ltd
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a href="#" className="nav-link">
                                        Mates&nbsp;Global&nbsp;Pty&nbsp;Ltd
                                    </a>
                                </li>
                            </ul>
                        </li>
                        <li className="nav-item">
                            <Link to="/career" className="nav-link">
                                CAREER
                            </Link>
                        </li>
                    </ul>
                    {/* Navbar Icons */}
                    <ul className="navbar-nav icons navbar-icon">
                        <li className="nav-item">
                            <a
                                href="#"
                                className="nav-link"
                                data-toggle="modal"
                                data-target="#search"
                            >
                                <i className="fas fa-search" />
                            </a>
                        </li>
                        <li className="nav-item social">
                            <a
                                href="https://www.facebook.com/saustralasia/"
                                className="nav-link"
                            >
                                <i className="fab fa-facebook-f" />
                            </a>
                        </li>
                        <li className="nav-item social">
                            <a
                                href="https://twitter.com/s_australasia"
                                className="nav-link"
                            >
                                <i className="fab fa-twitter" />
                            </a>
                        </li>
                    </ul>
                    {/* Navbar Toggler */}
                    <ul className="navbar-nav toggle">
                        <li className="nav-item">
                            <a
                                href="#"
                                className="nav-link"
                                data-toggle="modal"
                                data-target="#menu"
                            >
                                <i className="fas fa-bars toggle-icon m-0" />
                            </a>
                        </li>
                    </ul>
                    {/* Navbar Action Button */}
                    <ul className="navbar-nav action">
                        <li className="nav-item ml-3">
                             <Link
                                to="/contact"
                                className="contact-button"
                            >
                                <i className="fas fa-paper-plane contact-icon mr-md-2" />
                                Contact Us
                            </Link>
                        </li>
                    </ul>
                </div>
            </nav>


        </header>
    );
};

export default Navbar;
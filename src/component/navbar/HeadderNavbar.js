import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <header id="header" className='mx-2'>
            {/* Navbar */}
            <nav
                className="navbar navbar-expand"
            >
                <div className="container header">
                    {/* Navbar Brand*/}
                    <a className="navbar-brand" href="#">
                        {/* <img
                    className="navbar-brand-regular"
                    src="assets/img/logo/logo-white2.png"
                    alt="brand-logo"
                /> */}
                        <img
                            className="navbar-brand-sticky"
                            src="assets/img/logo/logo2.png"
                            alt="sticky brand-logo"
                        />
                    </a>
                    <div className="ml-auto" />
                    {/* Navbar */}
                    <ul className="navbar-nav navbar-menue">
                        <li className="nav-item">
                            <a href="index.html" className="nav-link">
                                HOME
                            </a>
                        </li>
                        <li className="nav-item">
                            <a href="about.html" className="nav-link">
                                ABOUT US
                            </a>
                        </li>
                        <li className="nav-item dropdown">
                            <a className="nav-link" href="#">
                                SERVICES
                                <i className="fas fa-angle-down ml-1" />
                            </a>
                            <ul className="dropdown-menu">
                                <li className="nav-item">
                                    <a href="hospitality.html" className="nav-link">
                                        Hospitality
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a href="health.html" className="nav-link">
                                        Health&nbsp;&amp;&nbsp;Safety
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a href="Quality.html" className="nav-link">
                                        Quality&nbsp;Management
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a href="medical.html" className="nav-link">
                                        Medical&nbsp;Equipment&nbsp;Product
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a href="it.html" className="nav-link">
                                        IT&nbsp;Management
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a href="garment.html" className="nav-link">
                                        Ready-Made&nbsp;Garment
                                    </a>
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
                            <a href="career.html" className="nav-link">
                                CAREER
                            </a>
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
                                target="_blank"
                                className="nav-link"
                            >
                                <i className="fab fa-facebook-f" />
                            </a>
                        </li>
                        <li className="nav-item social">
                            <a
                                href="https://twitter.com/s_australasia"
                                target="_blank"
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
                    <ul className="navbar-nav action navbar-action">
                        <li className="nav-item ml-3">
                            <a
                                href="contact.html"
                                className="btn ml-lg-auto btn-bordered-white"
                            >
                                <i className="fas fa-paper-plane contact-icon mr-md-2" />
                                Contact Us
                            </a>
                        </li>
                    </ul>
                </div>
            </nav>

           
        </header>
    );
};

export default Navbar;
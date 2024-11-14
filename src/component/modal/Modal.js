import React from 'react';

const Modal = () => {
    return (

        <>
            <div id="search" className="modal fade p-0">
                <div className="modal-dialog dialog-animated">
                    <div className="modal-content h-100">
                        <div className="modal-header" data-dismiss="modal">
                            Search <i className="far fa-times-circle icon-close" />
                        </div>
                        <div className="modal-body">
                            <form className="row">
                                <div className="col-12 align-self-center">
                                    <div className="row">
                                        <div className="col-12 pb-3">
                                            <h2 className="search-title mb-3">
                                                What are you looking for?
                                            </h2>
                                            <p>
                                                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                                Praesent diam lacus, dapibus sed imperdiet consectetur.
                                            </p>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-12 input-group">
                                            <input
                                                type="text"
                                                className="form-control"
                                                placeholder="Enter your keywords"
                                            />
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-12 input-group align-self-center">
                                            <button className="btn btn-bordered mt-3">Search</button>
                                        </div>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>

            <div id="menu" className="modal fade p-0">
                <div className="modal-dialog dialog-animated">
                    <div className="modal-content h-100">
                        <div className="modal-header" data-dismiss="modal">
                            Menu <i className="far fa-times-circle icon-close" />
                        </div>
                        <div className="menu modal-body">
                            <nav className='mobile-nav'>
                                <ul className="navbar-nav">
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
                            </nav>

                        </div>
                    </div>
                </div>
            </div>
        </>

    );
};

export default Modal;
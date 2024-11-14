import React from 'react';

const Footer = () => {
    return (
        <footer className="section footer-area">
            {/* Footer Top */}
            {/* Footer Bottom */}
            <div className="footer-bottom bg-grey">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            {/* Copyright Area */}
                            <div className="copyright-area d-flex flex-wrap justify-content-center justify-content-sm-between text-center py-4">
                                {/* Copyright Left */}
                                <div className="copyright-left">
                                    <img src="assets/img/logo/logo-footer.png" />
                                </div>
                                {/* Copyright Right */}
                                <div className="copyright-right">
                                    <ul className="social-icons list-inline pt-2">
                                        <li className="list-inline-item px-1">
                                            <a
                                                href="https://www.facebook.com/saustralasia/"
                                                target="_blank"
                                            >
                                                <i className="fab fa-facebook" />
                                            </a>
                                        </li>
                                        <li className="list-inline-item px-1">
                                            <a
                                                href="https://twitter.com/s_australasia"
                                                target="_blank"
                                            >
                                                <i className="fab fa-twitter" />
                                            </a>
                                        </li>
                                        <li className="list-inline-item px-1">
                                            <a href="#">
                                                <i className="fab fa-linkedin-in" />
                                            </a>
                                        </li>
                                        <li className="list-inline-item px-1">
                                            <a href="#">
                                                <i className="fab fa-instagram" />
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
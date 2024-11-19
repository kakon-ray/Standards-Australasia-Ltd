/* eslint-disable jsx-a11y/iframe-has-title */
import React from 'react';
import Footer from '../component/footer/Footer';
import { Modal } from 'react-bootstrap';
import ScrollTopBottom from '../component/ScrollTopBottom';
import PageBanner from '../component/pageBanner/PageBanner';
import HeadderNavbar from '../component/navbar/HeadderNavbar';

const Career = () => {
    return (

        <div>

            {/* <Loading /> */}

            <ScrollTopBottom />

            <div className="main overflow-hidden">
                <HeadderNavbar />

                <PageBanner title="Career" />

   
                    {/*====== Contact Area Start ======*/}
                    <section id="contact" className="contact-area ptb_100">
                        <div className="container">
                            <div className="row justify-content-between align-items-center">
                                <div className="col-12 col-lg-5">
                                    {/* Section Heading */}
                                    <div className="section-heading text-center mb-3">
                                        <h2>Let's connect!</h2>
                                        <p className="d-none d-sm-block mt-4">
                                            House No# 34, Road No # 02, Nikunja 2, Dhaka 1229
                                        </p>
                                        <p className="d-block d-sm-none mt-4">
                                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laborum
                                            obcaecati.
                                        </p>
                                    </div>
                                    {/* Contact Us */}
                                    <div className="contact-us">
                                        <ul>
                                            {/* Contact Info */}
                                            <li className="contact-info color-1 bg-hover active hover-bottom text-center p-5 m-3">
                                                <span>
                                                    <i className="fas fa-mobile-alt fa-3x" />
                                                </span>
                                                <a className="d-block my-2" href="#">
                                                    <h3>+8801766601740</h3>
                                                </a>
                                                <a className="d-block my-2" href="#">
                                                    <h3>+8801766601741</h3>
                                                </a>
                                            </li>
                                            {/* Contact Info */}
                                            <li className="contact-info color-3 bg-hover active hover-bottom text-center p-5 m-3">
                                                <span>
                                                    <i className="fas fa-envelope-open-text fa-3x" />
                                                </span>
                                                <a className="d-none d-sm-block my-2" href="#">
                                                    <h3>info@saustralasia.com</h3>
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="col-12 col-lg-6 pt-4 pt-lg-0">
                                    {/* Contact Box */}
                                    <div className="contact-box text-center">
                                        {/* Contact Form */}
                                        <form id="contact-form" method="POST" action="#">
                                            <div className="row">
                                                <div className="col-12">
                                                    <div className="form-group">
                                                        <input
                                                            type="text"
                                                            className="form-control"
                                                            name="name"
                                                            placeholder="Name"
                                                            required="required"
                                                        />
                                                    </div>
                                                    <div className="form-group">
                                                        Upload CV : <input type="file" name="CV" />
                                                    </div>
                                                    <div className="form-group">
                                                        <input
                                                            type="email"
                                                            className="form-control"
                                                            name="email"
                                                            placeholder="Email"
                                                            required="required"
                                                        />
                                                    </div>
                                                    <div className="form-group">
                                                        <input
                                                            type="text"
                                                            className="form-control"
                                                            name="subject"
                                                            placeholder="Phone"
                                                            required="required"
                                                        />
                                                    </div>
                                                </div>
                                                <div className="col-12">
                                                    <div className="form-group">
                                                        <textarea
                                                            className="form-control"
                                                            name="message"
                                                            placeholder="Message"
                                                            required="required"
                                                            defaultValue={""}
                                                        />
                                                    </div>
                                                </div>
                                                <div className="col-12">
                                                    <button
                                                        type="submit"
                                                        className="btn btn-bordered active btn-block mt-3"
                                                    >
                                                        <span className="text-white pr-3">
                                                            <i className="fas fa-paper-plane" />
                                                        </span>
                                                        Send Message
                                                    </button>
                                                </div>
                                            </div>
                                        </form>
                                        <p className="form-message" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    {/*====== Contact Area End ======*/}
    

                <Footer />
                <Modal />
            </div>

        </div>

    );
};

export default Career;
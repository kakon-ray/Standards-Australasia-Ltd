import React from 'react';
import { Link } from 'react-router-dom';
import Loading from '../component/loader/Loading';
import { Navbar } from 'react-bootstrap';
import HeadderNavbar from '../component/navbar/HeadderNavbar';

import ScrollTopBottom from '../component/ScrollTopBottom';
import Modal from '../component/modal/Modal';
import PageBanner from '../component/pageBanner/PageBanner';
import Footer from '../component/footer/Footer';

const Hospitality = () => {
    return (
        <div>

            {/* <Loading /> */}

            <ScrollTopBottom />

            <div className="main overflow-hidden">
                <HeadderNavbar />

                <PageBanner title="Hospitality Services" desc="In the realm of hospitality, we curate unforgettable experiences for our guests, ensuring every moment is filled with comfort and delight. From luxurious accommodations equipped with modern amenities to delectable dining options that tantalize taste buds, our team is dedicated to providing personalized and attentive service. Whether it's a relaxing resort stay, a culinary adventure, or a memorable event, we go the extra mile to create lasting memories for each guest. Hospitality services refer to the range of services provided in the hospitality industry to ensure guests have a pleasant and comfortable experience. These services can be found in hotels, resorts, restaurants, cruise ships, and various other establishments. Key aspects of hospitality services include" />


                {/* ***** Content Area Start ***** */}
                <section className="section content-area bg-grey ptb_150">
                    {/* Shape Top */}
                    <div className="shape shape-top">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 1000 100"
                            preserveAspectRatio="none"
                            fill="#FFFFFF"
                        >
                            <path
                                className="shape-fill"
                                d="M421.9,6.5c22.6-2.5,51.5,0.4,75.5,5.3c23.6,4.9,70.9,23.5,100.5,35.7c75.8,32.2,133.7,44.5,192.6,49.7
          c23.6,2.1,48.7,3.5,103.4-2.5c54.7-6,106.2-25.6,106.2-25.6V0H0v30.3c0,0,72,32.6,158.4,30.5c39.2-0.7,92.8-6.7,134-22.4
          c21.2-8.1,52.2-18.2,79.7-24.2C399.3,7.9,411.6,7.5,421.9,6.5z"
                            />
                        </svg>
                    </div>
                    <div className="container">
                        <div className="row justify-content-between">
                            <div className="col-12 col-lg-6">
                                {/* Content Inner */}
                                <div className="content-inner text-center">
                                    {/* Section Heading */}
                                    {/* Content List */}
                                    <ul className="content-list text-left">
                                        {/* Single Content List */}
                                        <li className="single-content-list media py-2">
                                            <div className="content-icon pr-4">
                                                <span className="color-1">
                                                    <i className="fas fa-angle-double-right" />
                                                </span>
                                            </div>
                                            <div className="content-text media-body">
                                                <span>
                                                    <b>Accommodation</b>
                                                    <br />
                                                    Providing comfortable and well-equipped rooms with amenities
                                                    to cater to guests' needs.
                                                </span>
                                            </div>
                                        </li>
                                        {/* Single Content List */}
                                        <li className="single-content-list media py-2">
                                            <div className="content-icon pr-4">
                                                <span className="color-1">
                                                    <i className="fas fa-angle-double-right" />
                                                </span>
                                            </div>
                                            <div className="content-text media-body">
                                                <span>
                                                    <b>Food and Beverage</b>
                                                    <br />
                                                    Offering high-quality dining experiences with diverse menus
                                                    and exceptional service.
                                                </span>
                                            </div>
                                        </li>
                                        {/* Single Content List */}
                                        <li className="single-content-list media py-2">
                                            <div className="content-icon pr-4">
                                                <span className="color-1">
                                                    <i className="fas fa-angle-double-right" />
                                                </span>
                                            </div>
                                            <div className="content-text media-body">
                                                <span>
                                                    <b>Customer Service</b>
                                                    <br />
                                                    Ensuring guests are attended to promptly and courteously,
                                                    addressing their inquiries and concerns.
                                                </span>
                                            </div>
                                        </li>
                                        <li className="single-content-list media py-2">
                                            <div className="content-icon pr-4">
                                                <span className="color-1">
                                                    <i className="fas fa-angle-double-right" />
                                                </span>
                                            </div>
                                            <div className="content-text media-body">
                                                <span>
                                                    <b>Housekeeping</b>
                                                    <br />
                                                    Maintaining cleanliness and orderliness in guest rooms and
                                                    public areas.
                                                </span>
                                            </div>
                                        </li>
                                        <li className="single-content-list media py-2">
                                            <div className="content-icon pr-4">
                                                <span className="color-1">
                                                    <i className="fas fa-angle-double-right" />
                                                </span>
                                            </div>
                                            <div className="content-text media-body">
                                                <span>
                                                    <b>Concierge Services</b>
                                                    <br />
                                                    Assisting guests with travel arrangements, reservations, and
                                                    providing information about local attractions.
                                                </span>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-12 col-lg-6">
                                {/* Service Thumb */}
                                <div className="service-thumb mx-auto pt-4 pt-lg-0">
                                    <img src="assets/img/content/content_thumb.png" alt="" />
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* Shape Bottom */}
                    <div className="shape shape-bottom">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 1000 100"
                            preserveAspectRatio="none"
                            fill="#FFFFFF"
                        >
                            <path
                                className="shape-fill"
                                d="M421.9,6.5c22.6-2.5,51.5,0.4,75.5,5.3c23.6,4.9,70.9,23.5,100.5,35.7c75.8,32.2,133.7,44.5,192.6,49.7
  c23.6,2.1,48.7,3.5,103.4-2.5c54.7-6,106.2-25.6,106.2-25.6V0H0v30.3c0,0,72,32.6,158.4,30.5c39.2-0.7,92.8-6.7,134-22.4
  c21.2-8.1,52.2-18.2,79.7-24.2C399.3,7.9,411.6,7.5,421.9,6.5z"
                            />
                        </svg>
                    </div>
                </section>
                {/* ***** Content Area End ***** */}
                {/* ***** Promo Area Start ***** */}
                <section className="section promo-area ptb_100">
                    <div className="container">
                        <div className="row justify-content-center pt-5">
                            <div className="col-12">
                                {/* FAQ Content */}
                                <div className="faq-content">
                                    {/* sApp Accordion */}
                                    <div className="accordion" id="sApp-accordion">
                                        <div className="row justify-content-center">
                                            <div className="col-12 col-md-6">
                                                {/* Single Card */}
                                                <div className="card border-0">
                                                    {/* Card Header */}
                                                    <div className="card-header bg-inherit border-0 p-0">
                                                        <h2 className="mb-0">
                                                            <button className="btn px-0 py-3" type="button">
                                                                <b>Events and Entertainment</b>
                                                            </button>
                                                        </h2>
                                                    </div>
                                                    {/* Card Body */}
                                                    <div className="card-body px-0 py-3">
                                                        Organizing events, activities, and entertainment options
                                                        to enhance guests' experiences.
                                                    </div>
                                                </div>
                                                {/* Single Card */}
                                                <div className="card border-0">
                                                    {/* Card Header */}
                                                    <div className="card-header bg-inherit border-0 p-0">
                                                        <h2 className="mb-0">
                                                            <button className="btn px-0 py-3" type="button">
                                                                <b>Wellness and Spa</b>
                                                            </button>
                                                        </h2>
                                                    </div>
                                                    {/* Card Body */}
                                                    <div className="card-body px-0 py-3">
                                                        Providing relaxation and rejuvenation services such as
                                                        massages, facials, and
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-12 col-md-6">
                                                {/* Single Card */}
                                                {/* Single Card */}
                                                <div className="card border-0">
                                                    {/* Card Header */}
                                                    <div className="card-header bg-inherit border-0 p-0">
                                                        <h2 className="mb-0">
                                                            <button className="btn px-0 py-3" type="button">
                                                                <b>Security and Safety</b>
                                                            </button>
                                                        </h2>
                                                    </div>
                                                    {/* Card Body */}
                                                    <div className="card-body px-0 py-3">
                                                        Ensuring the safety and security of guests and their
                                                        belongings.
                                                    </div>
                                                </div>
                                                {/* Single Card */}
                                                <div className="card border-0">
                                                    {/* Card Header */}
                                                    <div className="card-header bg-inherit border-0 p-0">
                                                        <h2 className="mb-0">
                                                            <button className="btn px-0 py-3" type="button">
                                                                <b>Efficient Check-In/Check-Out</b>
                                                            </button>
                                                        </h2>
                                                    </div>
                                                    {/* Card Body */}
                                                    <div className="card-body px-0 py-3">
                                                        Streamlining the check-in and check-out process for a
                                                        seamless guest experience.
                                                    </div>
                                                </div>
                                                {/* Single Card */}
                                            </div>
                                        </div>
                                        {/*<div class="row justify-content-center">*/}
                                        {/*<p class="text-body text-center pt-4 fw-5">Haven't find suitable answer? <a href="#">Tell us what you need.</a></p>*/}
                                        {/*</div>*/}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                {/* ***** Promo Area End ***** */}


                <Footer />
                <Modal />
            </div>

        </div>
    );
};

export default Hospitality;
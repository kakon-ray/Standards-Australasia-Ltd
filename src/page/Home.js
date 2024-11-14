import React from 'react';
import { Link } from 'react-router-dom';
import Loading from '../component/loader/Loading';
import { Navbar } from 'react-bootstrap';
import HeadderNavbar from '../component/navbar/HeadderNavbar';

const Home = () => {
    return (
        <div>

            <Loading />
            {/*====== Scroll To Top Area Start ======*/}
            <div id="scrollUp" title="Scroll To Top">
               <a href='#' className='scrollup-link'> <i className="fas fa-arrow-up" /></a>
            </div>
            {/*====== Scroll To Top Area End ======*/}

            <div className="main overflow-hidden">
                {/* ***** Header Start ***** */}
                <HeadderNavbar />
                {/* ***** Header End ***** */}
                {/* ***** Welcome Area Start ***** */}
                <section
                    id="home"
                    className="section welcome-area bg-overlay overflow-hidden d-flex align-items-center"
                >
                    <div className="container">
                        <div className="row align-items-center">
                            {/* Welcome Intro Start */}
                            <div className="col-12 col-md-6">
                                <div className="welcome-intro">
                                    {/*<h1 class="text-white">Welcome to our organization!</h1>*/}
                                    <p className="text-white my-4">
                                        Standards Australasia Ltd. is a highly recognized company in
                                        standards development. With a rich history and a commitment to
                                        excellence, they have been instrumental in shaping industry
                                        standards that have had a significant impact on various
                                        sectors. As a leading authority on standards development,
                                        Standards Australasia Ltd. has played a crucial role in
                                        ensuring safety, quality, and consistency across a wide range
                                        of products and services. Their expertise and dedication to
                                        best practices have earned them a reputation for being a
                                        trusted source of guidance and innovation in the industry.
                                    </p>
                                    {/* Buttons */}
                                    {/*<div class="button-group">*/}
                                    {/*<a href="#" class="btn btn-bordered-white">Start a Project</a>*/}
                                    {/*<a href="#" class="btn btn-bordered-white d-none d-sm-inline-block">Contact Us</a>*/}
                                    {/*</div>*/}
                                </div>
                            </div>
                            <div className="col-12 col-md-6">
                                {/* Welcome Thumb */}
                                <div className="welcome-thumb-wrapper mt-5 mt-md-0">
                                    <span className="welcome-thumb-1">
                                        <img
                                            className="welcome-animation d-block ml-auto"
                                            src="assets/img/welcome/thumb_1.png"
                                            alt=""
                                        />
                                    </span>
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
                {/* ***** Welcome Area End ***** */}
                {/* ***** Promo Area Start ***** */}
                <section className="section promo-area ptb_100">
                    <div className="container">
                        <div className="row">
                            <div className="col-12 col-md-6 col-lg-4 res-margin">
                                {/* Single Promo */}
                                <div className="single-promo color-1 bg-hover hover-bottom text-center p-5">
                                    <h3 className="mb-3">
                                        Our
                                        <br />
                                        Vision
                                    </h3>
                                    <p>
                                        At the core of our vision is the desire to be a trailblazer in
                                        the industries we serve. We aspire to be recognized as a
                                        leader in hospitality services, health and medicine, quality
                                        management, and IT management. Through innovation, dedication,
                                        and a commitment to excellence, we aim to set new benchmarks
                                        and redefine standards in each of these domains.
                                    </p>
                                </div>
                            </div>
                            <div className="col-12 col-md-6 col-lg-4 res-margin">
                                {/* Single Promo */}
                                <div className="single-promo color-2 bg-hover active hover-bottom text-center p-5">
                                    <h3 className="mb-3">
                                        Our
                                        <br />
                                        Mission
                                    </h3>
                                    <p>
                                        Our mission is to provide innovative solutions to our
                                        customers' problems. We strive to deliver products and
                                        services that exceed expectations and create value for our
                                        clients. With a team of highly skilled professionals, we
                                        approach every project with a customer-centric mindset. By
                                        leveraging our expertise and staying at the forefront of
                                        industry trends, we consistently deliver exceptional results.
                                    </p>
                                </div>
                            </div>
                            <div className="col-12 col-md-6 col-lg-4">
                                {/* Single Promo */}
                                <div className="single-promo color-3 bg-hover hover-bottom text-center p-5">
                                    <h3 className="mb-3">
                                        Our
                                        <br />
                                        Team
                                    </h3>
                                    <p>
                                        Our team is our greatest asset. Comprising skilled
                                        professionals with a wealth of experience and expertise, we
                                        work together seamlessly to achieve our common goals. <br />
                                        <br /> United by a shared vision, our team members are driven
                                        by passion and dedication, making every effort to exceed
                                        expectations.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                {/* ***** Promo Area End ***** */}
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
                                    <div className="section-heading text-center mb-3">
                                        <h2>Great and Effective Taglines for Customer Service</h2>
                                        {/*<p class="d-none d-sm-block mt-4">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laborum obcaecati dignissimos quae quo ad iste ipsum officiis deleniti asperiores sit.</p>*/}
                                        {/*<p class="d-block d-sm-none mt-4">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laborum obcaecati.</p>*/}
                                    </div>
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
                                                    <b>Hospitality Services</b>
                                                    <br />
                                                    In the realm of hospitality, we curate unforgettable
                                                    experiences for our guests, ensuring every moment is
                                                    filled with comfort and delight.
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
                                                    <b>Accommodation</b>
                                                    <br />
                                                    Providing comfortable and well-equipped rooms with
                                                    amenities to cater to guests' needs.
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
                                                    Offering high-quality dining experiences with diverse
                                                    menus and exceptional service.
                                                </span>
                                            </div>
                                        </li>
                                    </ul>
                                    <a href="hospitality.html" className="btn btn-bordered mt-4">
                                        Learn More
                                    </a>
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
                {/* ***** Content Area Start ***** */}
                <section className="section content-area ptb_150">
                    <div className="container">
                        <div className="row justify-content-between">
                            <div className="col-12 col-lg-6">
                                {/* Profile Circle Wrapper */}
                                <div className="profile-circle-wrapper circle-animation d-none d-sm-block">
                                    {/* Profile Inner */}
                                    <div className="profile-inner">
                                        {/* Profile Circle */}
                                        <div className="profile-circle circle-lg">
                                            <span className="profile-icon icon-1">
                                                <img
                                                    className="icon-1-img"
                                                    src="assets/img/content/profile-icons/profile_icon_1.svg"
                                                />
                                            </span>
                                            <span className="profile-icon icon-2">
                                                <img
                                                    className="icon-2-img"
                                                    src="assets/img/content/profile-icons/profile_icon_2.svg"
                                                />
                                            </span>
                                            <span className="profile-icon icon-3">
                                                <img
                                                    className="icon-3-img"
                                                    src="assets/img/content/profile-icons/profile_icon_1.svg"
                                                />
                                            </span>
                                            <span className="profile-icon icon-4">
                                                <img
                                                    className="icon-4-img"
                                                    src="assets/img/content/profile-icons/profile_icon_2.svg"
                                                />
                                            </span>
                                        </div>
                                        {/* Profile Circle */}
                                        <div className="profile-circle circle-md">
                                            <span className="profile-icon icon-5">
                                                <img
                                                    className="icon-5-img"
                                                    src="assets/img/content/profile-icons/profile_icon_3.svg"
                                                />
                                            </span>
                                            <span className="profile-icon icon-6">
                                                <img
                                                    className="icon-6-img"
                                                    src="assets/img/content/profile-icons/profile_icon_3.svg"
                                                />
                                            </span>
                                            <span className="profile-icon icon-7">
                                                <img
                                                    className="icon-7-img"
                                                    src="assets/img/content/profile-icons/profile_icon_3.svg"
                                                />
                                            </span>
                                        </div>
                                        {/* Profile Circle */}
                                        <div className="profile-circle circle-sm">
                                            <span className="profile-icon icon-8">
                                                <img
                                                    className="icon-8-img"
                                                    src="assets/img/content/profile-icons/profile_icon_4.svg"
                                                />
                                            </span>
                                            <span className="profile-icon icon-9">
                                                <img
                                                    className="icon-9-img"
                                                    src="assets/img/content/profile-icons/profile_icon_4.svg"
                                                />
                                            </span>
                                        </div>
                                    </div>
                                    <img
                                        className="folder-img"
                                        src="assets/img/content/folders.png"
                                    />
                                </div>
                            </div>
                            <div className="col-12 col-lg-6">
                                {/* Content Inner */}
                                <div className="content-inner text-center pt-sm-4 pt-lg-0 mt-sm-5 mt-lg-0">
                                    {/* Section Heading */}
                                    <div className="section-heading text-center mb-3">
                                        <h2>IT Management Service</h2>
                                        {/*<p class="d-none d-sm-block mt-4">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laborum obcaecati dignissimos quae quo ad iste ipsum officiis deleniti asperiores sit.</p>*/}
                                        {/*<p class="d-block d-sm-none mt-4">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laborum obcaecati.</p>*/}
                                    </div>
                                    {/* Content List */}
                                    <ul className="content-list text-left">
                                        {/* Single Content List */}
                                        <li className="single-content-list media py-2">
                                            <div className="content-icon pr-4">
                                                <span className="color-2">
                                                    <i className="fas fa-angle-double-right" />
                                                </span>
                                            </div>
                                            <div className="content-text media-body">
                                                <span>
                                                    <b>Network Management</b>
                                                    <br />
                                                    Monitoring and managing the organization's computer
                                                    networks to ensure smooth connectivity and data flow.
                                                </span>
                                            </div>
                                        </li>
                                        {/* Single Content List */}
                                        <li className="single-content-list media py-2">
                                            <div className="content-icon pr-4">
                                                <span className="color-2">
                                                    <i className="fas fa-angle-double-right" />
                                                </span>
                                            </div>
                                            <div className="content-text media-body">
                                                <span>
                                                    <b>Infrastructure Management</b>
                                                    <br />
                                                    Overseeing the hardware, servers, and data centers to
                                                    maintain optimal performance and efficiency.
                                                </span>
                                            </div>
                                        </li>
                                        {/* Single Content List */}
                                        <li className="single-content-list media py-2">
                                            <div className="content-icon pr-4">
                                                <span className="color-2">
                                                    <i className="fas fa-angle-double-right" />
                                                </span>
                                            </div>
                                            <div className="content-text media-body">
                                                <span>
                                                    <b>Software Development and Support</b>
                                                    <br />
                                                    Managing the development, deployment, and maintenance of
                                                    software applications to meet business needs.
                                                </span>
                                            </div>
                                        </li>
                                    </ul>
                                    <a href="it.html" className="btn btn-bordered mt-4">
                                        Learn More
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                {/* ***** Content Area End ***** */}
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
                                        Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                                        Laborum obcaecati.
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
                                    <form
                                        id="contact-form"
                                        method="POST"
                                        action="http://miotheme.com/html/digital-scoop/assets/php/mail.php"
                                    >
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
                                                    <input
                                                        type="text"
                                                        className="form-control"
                                                        name="name"
                                                        placeholder="Company Name"
                                                        required="required"
                                                    />
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
                {/*====== Call To Action Area Start ======*/}
                {/*====== Call To Action Area End ======*/}
                {/*====== Footer Area Start ======*/}
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
                {/*====== Footer Area End ======*/}
                {/*====== Modal Search Area Start ======*/}
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
                {/*====== Modal Search Area End ======*/}
                {/*====== Modal Responsive Menu Area Start ======*/}
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
                {/*====== Modal Responsive Menu Area End ======*/}
            </div>
        </div>
    );
};

export default Home;
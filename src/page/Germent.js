import React from 'react';
import { Link } from 'react-router-dom';
import Loading from '../component/loader/Loading';
import { Navbar } from 'react-bootstrap';
import HeadderNavbar from '../component/navbar/HeadderNavbar';

import ScrollTopBottom from '../component/ScrollTopBottom';
import Modal from '../component/modal/Modal';
import PageBanner from '../component/pageBanner/PageBanner';
import Footer from '../component/footer/Footer';

const Germent = () => {
    return (
        <div>

            {/* <Loading /> */}

            <ScrollTopBottom />

            <div className="main overflow-hidden">
                <HeadderNavbar />

                <PageBanner title="Ready-Made Garment" desc="Our Ready-Made Garment (RMG) sector produces a wide range of clothing items for men, women, and children. The specific item list may vary based on the latest fashion trends, regional preferences, and the target market. Below is a general list of common items produced by the RMG sector:" />

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
                                    <img className="folder-img" src="assets/img/content/folders.png" />
                                </div>
                            </div>
                            <div className="col-12 col-lg-6">
                                {/* Content Inner */}
                                <div className="content-inner text-center pt-sm-4 pt-lg-0 mt-sm-5 mt-lg-0">
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
                                                    Monitoring and managing the organization's computer networks
                                                    to ensure smooth connectivity and data flow.
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
                                        <li className="single-content-list media py-2">
                                            <div className="content-icon pr-4">
                                                <span className="color-2">
                                                    <i className="fas fa-angle-double-right" />
                                                </span>
                                            </div>
                                            <div className="content-text media-body">
                                                <span>
                                                    <b>Security Management</b>
                                                    <br />
                                                    Implementing measures to protect the organization's data and
                                                    systems from cyber threats and breaches.
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
                                        <li className="single-content-list media py-2">
                                            <div className="content-icon pr-4">
                                                <span className="color-2">
                                                    <i className="fas fa-angle-double-right" />
                                                </span>
                                            </div>
                                            <div className="content-text media-body">
                                                <span>
                                                    <b>IT Service Desk</b>
                                                    <br />
                                                    Providing a central point of contact for users to seek IT
                                                    support and assistance.
                                                </span>
                                            </div>
                                        </li>
                                        <li className="single-content-list media py-2">
                                            <div className="content-icon pr-4">
                                                <span className="color-2">
                                                    <i className="fas fa-angle-double-right" />
                                                </span>
                                            </div>
                                            <div className="content-text media-body">
                                                <span>
                                                    <b>IT Project Management</b>
                                                    <br />
                                                    Planning, executing, and controlling IT projects to deliver
                                                    solutions within scope, time, and budget.
                                                </span>
                                            </div>
                                        </li>
                                        <li className="single-content-list media py-2">
                                            <div className="content-icon pr-4">
                                                <span className="color-2">
                                                    <i className="fas fa-angle-double-right" />
                                                </span>
                                            </div>
                                            <div className="content-text media-body">
                                                <span>
                                                    <b>Data Management</b>
                                                    <br />
                                                    Ensuring proper storage, backup, and retrieval of
                                                    organizational data while adhering to data privacy
                                                    regulations.
                                                </span>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
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
                                                                <b>T-Shirts</b>
                                                            </button>
                                                        </h2>
                                                    </div>
                                                    {/* Card Body */}
                                                    <div className="card-body px-0 py-3">
                                                        Basic round-neck or V-neck shirts made from various
                                                        fabrics, often worn casually.
                                                    </div>
                                                </div>
                                                {/* Single Card */}
                                                <div className="card border-0">
                                                    {/* Card Header */}
                                                    <div className="card-header bg-inherit border-0 p-0">
                                                        <h2 className="mb-0">
                                                            <button className="btn px-0 py-3" type="button">
                                                                <b>Shirts</b>
                                                            </button>
                                                        </h2>
                                                    </div>
                                                    {/* Card Body */}
                                                    <div className="card-body px-0 py-3">
                                                        Formal or casual button-up shirts, typically made from
                                                        cotton or blended fabrics.
                                                    </div>
                                                </div>
                                                {/* Single Card */}
                                                <div className="card border-0">
                                                    {/* Card Header */}
                                                    <div className="card-header bg-inherit border-0 p-0">
                                                        <h2 className="mb-0">
                                                            <button className="btn px-0 py-3" type="button">
                                                                <b>Tops and Blouses</b>
                                                            </button>
                                                        </h2>
                                                    </div>
                                                    {/* Card Body */}
                                                    <div className="card-body px-0 py-3">
                                                        Various styles of women's tops and blouses, including tank
                                                        tops, tunics, and off-shoulder tops.
                                                    </div>
                                                </div>
                                                <div className="card border-0">
                                                    {/* Card Header */}
                                                    <div className="card-header bg-inherit border-0 p-0">
                                                        <h2 className="mb-0">
                                                            <button className="btn px-0 py-3" type="button">
                                                                <b>Dresses</b>
                                                            </button>
                                                        </h2>
                                                    </div>
                                                    {/* Card Body */}
                                                    <div className="card-body px-0 py-3">
                                                        A wide range of dresses, such as maxi dresses, A-line
                                                        dresses, bodycon dresses, and more, suitable for different
                                                        occasions.
                                                    </div>
                                                </div>
                                                <div className="card border-0">
                                                    {/* Card Header */}
                                                    <div className="card-header bg-inherit border-0 p-0">
                                                        <h2 className="mb-0">
                                                            <button className="btn px-0 py-3" type="button">
                                                                <b>Hoodies and Sweatshirts</b>
                                                            </button>
                                                        </h2>
                                                    </div>
                                                    {/* Card Body */}
                                                    <div className="card-body px-0 py-3">
                                                        Casual and comfortable options for leisurewear.
                                                    </div>
                                                </div>
                                                <div className="card border-0">
                                                    {/* Card Header */}
                                                    <div className="card-header bg-inherit border-0 p-0">
                                                        <h2 className="mb-0">
                                                            <button className="btn px-0 py-3" type="button">
                                                                <b>Shorts</b>
                                                            </button>
                                                        </h2>
                                                    </div>
                                                    {/* Card Body */}
                                                    <div className="card-body px-0 py-3">
                                                        Includes denim shorts, cargo shorts, and other styles,
                                                        mainly worn during warm weather.
                                                    </div>
                                                </div>
                                                <div className="card border-0">
                                                    {/* Card Header */}
                                                    <div className="card-header bg-inherit border-0 p-0">
                                                        <h2 className="mb-0">
                                                            <button className="btn px-0 py-3" type="button">
                                                                <b>Activewear</b>
                                                            </button>
                                                        </h2>
                                                    </div>
                                                    {/* Card Body */}
                                                    <div className="card-body px-0 py-3">
                                                        Sportswear items like athletic leggings, tank tops, sports
                                                        bras, and track pants.
                                                    </div>
                                                </div>
                                                <div className="card border-0">
                                                    {/* Card Header */}
                                                    <div className="card-header bg-inherit border-0 p-0">
                                                        <h2 className="mb-0">
                                                            <button className="btn px-0 py-3" type="button">
                                                                <b>Sleepwear</b>
                                                            </button>
                                                        </h2>
                                                    </div>
                                                    {/* Card Body */}
                                                    <div className="card-body px-0 py-3">
                                                        Nightgowns, pajama sets, and sleep shirts for comfortable
                                                        sleepwear options.
                                                    </div>
                                                </div>
                                                <div className="card border-0">
                                                    {/* Card Header */}
                                                    <div className="card-header bg-inherit border-0 p-0">
                                                        <h2 className="mb-0">
                                                            <button className="btn px-0 py-3" type="button">
                                                                <b>Children's Clothing</b>
                                                            </button>
                                                        </h2>
                                                    </div>
                                                    {/* Card Body */}
                                                    <div className="card-body px-0 py-3">
                                                        Clothing items for infants, toddlers, and children,
                                                        including onesies, rompers, dresses, and t-shirts.
                                                    </div>
                                                </div>
                                                <div className="card border-0">
                                                    {/* Card Header */}
                                                    <div className="card-header bg-inherit border-0 p-0">
                                                        <h2 className="mb-0">
                                                            <button className="btn px-0 py-3" type="button">
                                                                <b>Accessories</b>
                                                            </button>
                                                        </h2>
                                                    </div>
                                                    {/* Card Body */}
                                                    <div className="card-body px-0 py-3">
                                                        Items like scarves, hats, gloves, belts, ties, and socks
                                                        that complement the main clothing items.
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
                                                                <b>Trousers and Pants</b>
                                                            </button>
                                                        </h2>
                                                    </div>
                                                    {/* Card Body */}
                                                    <div className="card-body px-0 py-3">
                                                        Includes jeans, chinos, formal trousers, leggings, and
                                                        other styles for both men and women.
                                                    </div>
                                                </div>
                                                {/* Single Card */}
                                                <div className="card border-0">
                                                    {/* Card Header */}
                                                    <div className="card-header bg-inherit border-0 p-0">
                                                        <h2 className="mb-0">
                                                            <button className="btn px-0 py-3" type="button">
                                                                <b>Skirts</b>
                                                            </button>
                                                        </h2>
                                                    </div>
                                                    {/* Card Body */}
                                                    <div className="card-body px-0 py-3">
                                                        Different types of skirts, including A-line skirts, pencil
                                                        skirts, pleated skirts, etc.
                                                    </div>
                                                </div>
                                                {/* Single Card */}
                                                {/* Single Card */}
                                                <div className="card border-0">
                                                    {/* Card Header */}
                                                    <div className="card-header bg-inherit border-0 p-0">
                                                        <h2 className="mb-0">
                                                            <button className="btn px-0 py-3" type="button">
                                                                <b>Jackets and Coats</b>
                                                            </button>
                                                        </h2>
                                                    </div>
                                                    {/* Card Body */}
                                                    <div className="card-body px-0 py-3">
                                                        Various outerwear options, such as denim jackets, leather
                                                        jackets, blazers, and winter coats.
                                                    </div>
                                                </div>
                                                {/* Single Card */}
                                                {/* Single Card */}
                                                <div className="card border-0">
                                                    {/* Card Header */}
                                                    <div className="card-header bg-inherit border-0 p-0">
                                                        <h2 className="mb-0">
                                                            <button className="btn px-0 py-3" type="button">
                                                                <b>Sweaters and Cardigans</b>
                                                            </button>
                                                        </h2>
                                                    </div>
                                                    {/* Card Body */}
                                                    <div className="card-body px-0 py-3">
                                                        Knitwear items like pullovers, cardigans, and sweaters
                                                        suitable for colder seasons.
                                                    </div>
                                                </div>
                                                {/* Single Card */}
                                                {/* Single Card */}
                                                <div className="card border-0">
                                                    {/* Card Header */}
                                                    <div className="card-header bg-inherit border-0 p-0">
                                                        <h2 className="mb-0">
                                                            <button className="btn px-0 py-3" type="button">
                                                                <b>Undergarments</b>
                                                            </button>
                                                        </h2>
                                                    </div>
                                                    {/* Card Body */}
                                                    <div className="card-body px-0 py-3">
                                                        Bras, panties, boxers, briefs, and other intimate apparel.
                                                    </div>
                                                </div>
                                                {/* Single Card */}
                                                {/* Single Card */}
                                                <div className="card border-0">
                                                    {/* Card Header */}
                                                    <div className="card-header bg-inherit border-0 p-0">
                                                        <h2 className="mb-0">
                                                            <button className="btn px-0 py-3" type="button">
                                                                <b>Swimwear</b>
                                                            </button>
                                                        </h2>
                                                    </div>
                                                    {/* Card Body */}
                                                    <div className="card-body px-0 py-3">
                                                        Bikinis, one-piece swimsuits, swim trunks, and beach
                                                        cover-ups.
                                                    </div>
                                                </div>
                                                {/* Single Card */}
                                                {/* Single Card */}
                                                <div className="card border-0">
                                                    {/* Card Header */}
                                                    <div className="card-header bg-inherit border-0 p-0">
                                                        <h2 className="mb-0">
                                                            <button className="btn px-0 py-3" type="button">
                                                                <b>Formalwear</b>
                                                            </button>
                                                        </h2>
                                                    </div>
                                                    {/* Card Body */}
                                                    <div className="card-body px-0 py-3">
                                                        Tuxedos, suits, formal dresses, and evening gowns suitable
                                                        for special occasions.
                                                    </div>
                                                </div>
                                                {/* Single Card */}
                                                {/* Single Card */}
                                                <div className="card border-0">
                                                    {/* Card Header */}
                                                    <div className="card-header bg-inherit border-0 p-0">
                                                        <h2 className="mb-0">
                                                            <button className="btn px-0 py-3" type="button">
                                                                <b>Maternity Wear</b>
                                                            </button>
                                                        </h2>
                                                    </div>
                                                    {/* Card Body */}
                                                    <div className="card-body px-0 py-3">
                                                        Clothing designed to accommodate the needs of pregnant
                                                        women.
                                                    </div>
                                                </div>
                                                {/* Single Card */}
                                                {/* Single Card */}
                                                <div className="card border-0">
                                                    {/* Card Header */}
                                                    <div className="card-header bg-inherit border-0 p-0">
                                                        <h2 className="mb-0">
                                                            <button className="btn px-0 py-3" type="button">
                                                                <b>Plus Size Clothing</b>
                                                            </button>
                                                        </h2>
                                                    </div>
                                                    {/* Card Body */}
                                                    <div className="card-body px-0 py-3">
                                                        Fashionable and comfortable clothing options for
                                                        plus-sized individuals.
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





                <Footer />
                <Modal />
            </div>

        </div>
    );
};

export default Germent;
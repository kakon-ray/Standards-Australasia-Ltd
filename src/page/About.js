import React from 'react';
import { Link } from 'react-router-dom';
import Loading from '../component/loader/Loading';
import { Navbar } from 'react-bootstrap';
import HeadderNavbar from '../component/navbar/HeadderNavbar';

import ScrollTopBottom from '../component/ScrollTopBottom';
import Modal from '../component/modal/Modal';
import PageBanner from '../component/pageBanner/PageBanner';
import Footer from '../component/footer/Footer';

const About = () => {
    return (
        <div>

            {/* <Loading /> */}

            <ScrollTopBottom />

            <div className="main overflow-hidden">
                <HeadderNavbar />

                <PageBanner title="About Us" desc="Standards Australasia Ltd. is a highly recognized company in standards development. With a rich history and a commitment to excellence, they have been instrumental in shaping industry standards that have had a significant impact on various sectors. As a leading authority on standards development, Standards Australasia Ltd. has played a crucial role in ensuring safety, quality, and consistency across a wide range of products and services. Their expertise and dedication to best practices have earned them a reputation for being a trusted source of guidance and innovation in the industry." />

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
                                        At the core of our vision is the desire to be a trailblazer in the
                                        industries we serve. We aspire to be recognized as a leader in
                                        hospitality services, health and medicine, quality management, and
                                        IT management. Through innovation, dedication, and a commitment to
                                        excellence, we aim to set new benchmarks and redefine standards in
                                        each of these domains.
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
                                        Our mission is to provide innovative solutions to our customers'
                                        problems. We strive to deliver products and services that exceed
                                        expectations and create value for our clients. With a team of
                                        highly skilled professionals, we approach every project with a
                                        customer-centric mindset. By leveraging our expertise and staying
                                        at the forefront of industry trends, we consistently deliver
                                        exceptional results.
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
                                        Our team is our greatest asset. Comprising skilled professionals
                                        with a wealth of experience and expertise, we work together
                                        seamlessly to achieve our common goals. <br />
                                        <br /> United by a shared vision, our team members are driven by
                                        passion and dedication, making every effort to exceed
                                        expectations.
                                    </p>
                                </div>
                            </div>
                        </div>
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
                                                                Customer-Centric Approach
                                                            </button>
                                                        </h2>
                                                    </div>
                                                    {/* Card Body */}
                                                    <div className="card-body px-0 py-3">
                                                        Customers are at the heart of everything we do. We firmly
                                                        believe that understanding and meeting their needs is the
                                                        key to our success. Listening to their feedback,
                                                        anticipating their desires, and tailoring our services
                                                        accordingly is an integral part of our customer-centric
                                                        approach. We constantly strive to build enduring
                                                        relationships based on trust, reliability, and mutual
                                                        respect
                                                    </div>
                                                </div>
                                                {/* Single Card */}
                                                <div className="card border-0">
                                                    {/* Card Header */}
                                                    <div className="card-header bg-inherit border-0 p-0">
                                                        <h2 className="mb-0">
                                                            <button className="btn px-0 py-3" type="button">
                                                                Quality and Excellence
                                                            </button>
                                                        </h2>
                                                    </div>
                                                    {/* Card Body */}
                                                    <div className="card-body px-0 py-3">
                                                        Quality is not just a buzzword for us; it is a way of
                                                        life. We are relentless in our pursuit of excellence and
                                                        unwavering in our commitment to maintaining the highest
                                                        standards in all aspects of our operations. From the
                                                        finest details to the grandest undertakings, quality is
                                                        ingrained in everything we do.
                                                    </div>
                                                </div>
                                                {/* Single Card */}
                                                <div className="card border-0">
                                                    {/* Card Header */}
                                                    <div className="card-header bg-inherit border-0 p-0">
                                                        <h2 className="mb-0">
                                                            <button className="btn px-0 py-3" type="button">
                                                                Innovation and Adaptability
                                                            </button>
                                                        </h2>
                                                    </div>
                                                    {/* Card Body */}
                                                    <div className="card-body px-0 py-3">
                                                        In a rapidly changing world, staying ahead requires
                                                        constant innovation and adaptability. We embrace emerging
                                                        technologies and industry best practices to ensure we are
                                                        at the forefront of our fields. By fostering a culture of
                                                        innovation and encouraging creativity, we find novel
                                                        solutions to complex challenges.
                                                    </div>
                                                </div>
                                                {/* Single Card */}
                                            </div>
                                            <div className="col-12 col-md-6">
                                                {/* Single Card */}
                                                <div className="card border-0">
                                                    {/* Card Header */}
                                                    <div className="card-header bg-inherit border-0 p-0">
                                                        <h2 className="mb-0">
                                                            <button className="btn px-0 py-3" type="button">
                                                                Integrity and Ethics
                                                            </button>
                                                        </h2>
                                                    </div>
                                                    {/* Card Body */}
                                                    <div className="card-body px-0 py-3">
                                                        We firmly believe that integrity and ethics are
                                                        non-negotiable. Honesty, transparency, and ethical conduct
                                                        form the foundation of our business practices. We are
                                                        committed to upholding the highest moral and professional
                                                        standards, earning the trust and respect of all
                                                        stakeholders.
                                                    </div>
                                                </div>
                                                <br />
                                                {/* Single Card */}
                                                <div className="card border-0">
                                                    {/* Card Header */}
                                                    <div className="card-header bg-inherit border-0 p-0">
                                                        <h2 className="mb-0">
                                                            <button className="btn px-0 py-3" type="button">
                                                                Our Team
                                                            </button>
                                                        </h2>
                                                    </div>
                                                    {/* Card Body */}
                                                    <div className="card-body px-0 py-3">
                                                        Our team is our greatest asset. Comprising skilled
                                                        professionals with a wealth of experience and expertise,
                                                        we work together seamlessly to achieve our common goals.
                                                        United by a shared vision, our team members are driven by
                                                        passion and dedication, making every effort to exceed
                                                        expectations.
                                                    </div>
                                                </div>
                                                {/* Single Card */}
                                                <div className="card border-0">
                                                    {/* Card Header */}
                                                    <div className="card-header bg-inherit border-0 p-0">
                                                        <h2 className="mb-0">
                                                            <button className="btn px-0 py-3" type="button">
                                                                Community Engagement
                                                            </button>
                                                        </h2>
                                                    </div>
                                                    {/* Card Body */}
                                                    <div className="card-body px-0 py-3">
                                                        We recognize the importance of giving back to the
                                                        communities we serve. Through various initiatives and
                                                        partnerships, we actively contribute to social causes and
                                                        strive to make a positive difference in the lives of those
                                                        in need.
                                                        <br />
                                                        As we move forward, our commitment to excellence, customer
                                                        satisfaction, and making a meaningful impact remains
                                                        unwavering. We invite you to join us on this journey as we
                                                        continue to set new standards and create lasting
                                                        impressions in the realms of hospitality services, health
                                                        and medicine, quality management, and IT management. Thank
                                                        you for being a part of our story
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

export default About;
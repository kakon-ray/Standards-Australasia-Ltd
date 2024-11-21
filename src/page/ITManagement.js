/* eslint-disable jsx-a11y/alt-text */
import React from 'react';
import HeadderNavbar from '../component/navbar/HeadderNavbar';

import ScrollTopBottom from '../component/ScrollTopBottom';
import Modal from '../component/modal/Modal';
import PageBanner from '../component/pageBanner/PageBanner';
import Footer from '../component/footer/Footer';

const ITManagement = () => {
    return (
        <div>

            {/* <Loading /> */}

            <ScrollTopBottom />

            <div className="main overflow-hidden">
                <HeadderNavbar />

                <PageBanner title="IT Management" desc="In today's technology-driven world, efficient IT management is critical for smooth operations and optimal performance. Our IT management services encompass a wide range of solutions tailored to meet the unique needs of our clients. From network management and infrastructure maintenance to robust security measures and expert software support, we ensure that our clients' IT systems are resilient, secure, and aligned with their business objectives. Our proactive approach to IT governance and disaster recovery planning enables us to minimize downtime and ensure business continuity. IT management services involve the administration and oversight of an organization's information technology infrastructure and resources. The goal is to ensure that IT systems are effectively utilized, secure, and aligned with business objectives. Key elements of IT management services include"/>



                <section className="section content-area ptb_150">
                    <div className="container">
                        <div className="row justify-content-between">
                            <div className="col-12 col-lg-6">
                              
                                <div className="profile-circle-wrapper circle-animation d-none d-sm-block">
                                
                                    <div className="profile-inner">
                                       
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





                <Footer />
                <Modal />
            </div>

        </div>
    );
};

export default ITManagement;
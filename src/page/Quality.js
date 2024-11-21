import React from 'react';
import HeadderNavbar from '../component/navbar/HeadderNavbar';

import ScrollTopBottom from '../component/ScrollTopBottom';
import Modal from '../component/modal/Modal';
import PageBanner from '../component/pageBanner/PageBanner';
import Footer from '../component/footer/Footer';

const Quality = () => {
    return (
        <div>

            {/* <Loading /> */}

            <ScrollTopBottom />

            <div className="main overflow-hidden">
                <HeadderNavbar />

                <PageBanner title="Quality Management" />


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
                                                                <b>Quality Control</b>
                                                            </button>
                                                        </h2>
                                                    </div>
                                                    {/* Card Body */}
                                                    <div className="card-body px-0 py-3">
                                                        Implementing processes to monitor and verify the quality
                                                        of products or services during production or delivery.
                                                    </div>
                                                </div>
                                                {/* Single Card */}
                                                <div className="card border-0">
                                                    {/* Card Header */}
                                                    <div className="card-header bg-inherit border-0 p-0">
                                                        <h2 className="mb-0">
                                                            <button className="btn px-0 py-3" type="button">
                                                                <b>Quality Assurance</b>
                                                            </button>
                                                        </h2>
                                                    </div>
                                                    {/* Card Body */}
                                                    <div className="card-body px-0 py-3">
                                                        Establishing standards and guidelines to ensure that
                                                        products or services meet predetermined quality criteria.
                                                    </div>
                                                </div>
                                                {/* Single Card */}
                                                <div className="card border-0">
                                                    {/* Card Header */}
                                                    <div className="card-header bg-inherit border-0 p-0">
                                                        <h2 className="mb-0">
                                                            <button className="btn px-0 py-3" type="button">
                                                                <b>Continuous Improvement</b>
                                                            </button>
                                                        </h2>
                                                    </div>
                                                    {/* Card Body */}
                                                    <div className="card-body px-0 py-3">
                                                        Adopting a culture of ongoing improvement and innovation
                                                        to enhance processes and outcomes.
                                                    </div>
                                                </div>
                                                <div className="card border-0">
                                                    {/* Card Header */}
                                                    <div className="card-header bg-inherit border-0 p-0">
                                                        <h2 className="mb-0">
                                                            <button className="btn px-0 py-3" type="button">
                                                                <b>Customer Feedback</b>
                                                            </button>
                                                        </h2>
                                                    </div>
                                                    {/* Card Body */}
                                                    <div className="card-body px-0 py-3">
                                                        Collecting and analyzing customer feedback to identify
                                                        areas for improvement.
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
                                                                <b>Employee Training</b>
                                                            </button>
                                                        </h2>
                                                    </div>
                                                    {/* Card Body */}
                                                    <div className="card-body px-0 py-3">
                                                        Providing training to employees to enhance their skills
                                                        and knowledge, contributing to better quality outcomes.
                                                    </div>
                                                </div>
                                                {/* Single Card */}
                                                <div className="card border-0">
                                                    {/* Card Header */}
                                                    <div className="card-header bg-inherit border-0 p-0">
                                                        <h2 className="mb-0">
                                                            <button className="btn px-0 py-3" type="button">
                                                                <b>Benchmarking</b>
                                                            </button>
                                                        </h2>
                                                    </div>
                                                    {/* Card Body */}
                                                    <div className="card-body px-0 py-3">
                                                        Comparing performance with industry best practices to set
                                                        targets and improve performance.
                                                    </div>
                                                </div>
                                                {/* Single Card */}
                                                {/* Single Card */}
                                                <div className="card border-0">
                                                    {/* Card Header */}
                                                    <div className="card-header bg-inherit border-0 p-0">
                                                        <h2 className="mb-0">
                                                            <button className="btn px-0 py-3" type="button">
                                                                <b>Root Cause Analysis</b>
                                                            </button>
                                                        </h2>
                                                    </div>
                                                    {/* Card Body */}
                                                    <div className="card-body px-0 py-3">
                                                        Identifying the underlying causes of quality issues to
                                                        implement effective solutions.
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

export default Quality;
import React from 'react';

const PromoArea = () => {
    return (
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
    );
};

export default PromoArea;
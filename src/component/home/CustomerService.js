import React from 'react';

const CustomerService = () => {
    return (
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
    );
};

export default CustomerService;
import React from 'react';

const ContentArea = () => {
    return (
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
    );
};

export default ContentArea;
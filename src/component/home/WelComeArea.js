import React from 'react';

const WelComeArea = () => {
    return (
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
    );
};

export default WelComeArea;
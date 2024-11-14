import React from 'react';

const PageBanner = ({title,desc}) => {
    return (
        <section className="section breadcrumb-area overlay-dark d-flex align-items-center">
        <div className="container">
            <div className="row">
                <div className="col-12">
                    {/* Breamcrumb Content */}
                    <div className="breadcrumb-content d-flex flex-column align-items-center text-center">
                        <h2 className="text-white text-uppercase mb-3">{title}</h2>
                        <div className="container">
                            <div className="row justify-content-center">
                                <div className="col-12 col-lg-10">
                                    {/* Section Heading */}
                                    <div className="section-heading text-center m-0">
                                        <p className="text-white d-none d-sm-block mt-4">
                                           {desc}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    );
};

export default PageBanner;
import React from 'react';

const Loading = () => {
    return (
        <div>
            <div id="preloader">
                {/* DigitalScoop Preloader */}
                <div id="digitalscoop-preloader" className="digitalscoop-preloader">
                    {/* Preloader Animation */}
                    <div className="preloader-animation">
                        {/* Spinner */}
                        <div className="spinner" />
                        {/* Loader */}
                        <div className="loader">
                            <span data-text-preloader="S" className="animated-letters">
                                S
                            </span>
                            <span data-text-preloader="T" className="animated-letters">
                                T
                            </span>
                            <span data-text-preloader="A" className="animated-letters">
                                A
                            </span>
                            <span data-text-preloader="N" className="animated-letters">
                                N
                            </span>
                            <span data-text-preloader="D" className="animated-letters">
                                D
                            </span>
                            <span data-text-preloader="A" className="animated-letters">
                                A
                            </span>
                            <span data-text-preloader="R" className="animated-letters">
                                R
                            </span>
                            <span data-text-preloader="D" className="animated-letters">
                                D
                            </span>
                            <span data-text-preloader="S" className="animated-letters">
                                S
                            </span>
                            <span data-text-preloader="A" className="animated-letters">
                                A
                            </span>
                            <span data-text-preloader="U" className="animated-letters">
                                U
                            </span>
                            <span data-text-preloader="S" className="animated-letters">
                                S
                            </span>
                            <span data-text-preloader="T" className="animated-letters">
                                T
                            </span>
                            <span data-text-preloader="R" className="animated-letters">
                                R
                            </span>
                            <span data-text-preloader="A" className="animated-letters">
                                A
                            </span>
                            <span data-text-preloader="L" className="animated-letters">
                                L
                            </span>
                            <span data-text-preloader="A" className="animated-letters">
                                A
                            </span>
                            <span data-text-preloader="S" className="animated-letters">
                                S
                            </span>
                            <span data-text-preloader="I" className="animated-letters">
                                I
                            </span>
                            <span data-text-preloader="A" className="animated-letters">
                                A
                            </span>
                        </div>
                        <p className="fw-5 text-center text-uppercase">Loading</p>
                    </div>
                    {/* Loader Animation */}
                    <div className="loader-animation">
                        <div className="row h-100">
                            {/* Single Loader */}
                            <div className="col-3 single-loader p-0">
                                <div className="loader-bg" />
                            </div>
                            {/* Single Loader */}
                            <div className="col-3 single-loader p-0">
                                <div className="loader-bg" />
                            </div>
                            {/* Single Loader */}
                            <div className="col-3 single-loader p-0">
                                <div className="loader-bg" />
                            </div>
                            {/* Single Loader */}
                            <div className="col-3 single-loader p-0">
                                <div className="loader-bg" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>


        </div>
    );
};

export default Loading;
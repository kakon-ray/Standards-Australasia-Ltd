import React from 'react';
import HeadderNavbar from '../component/navbar/HeadderNavbar';

import ScrollTopBottom from '../component/ScrollTopBottom';
import Modal from '../component/modal/Modal';
import PageBanner from '../component/pageBanner/PageBanner';
import Footer from '../component/footer/Footer';

const Medical = () => {
    return (
        <div>

            {/* <Loading /> */}

            <ScrollTopBottom />

            <div className="main overflow-hidden">
                <HeadderNavbar />

                <PageBanner title="Medical Equipment Product" />


                <section
                    id="pricing"
                    className="section price-plan-area bg-grey overflow-hidden ptb_100"
                >
                    <div className="container">
                        <div className="row justify-content-center">
                            <div className="col-12 col-lg-12">
                                <div className="row price-plan-wrapper">
                                    <div className="col-4 col-md-4">
                                        {/* Single Price Plan */}
                                        <div className="single-price-plan color-1 bg-hover hover-top text-center p-5">
                                            {/* Plan Title */}
                                            <div className="plan-title mb-2 mb-sm-3">
                                                <h3 className="mb-2">Diagnostic Equipment</h3>
                                            </div>
                                            {/* Plan Description */}
                                            <div className="plan-description">
                                                <ul className="plan-features">
                                                    <li className="py-2 text-muted">• X-ray machines</li>
                                                    <li className="py-2 text-muted">
                                                        • Magnetic Resonance Imaging (MRI) scanners
                                                    </li>
                                                    <li className="py-2 text-muted">
                                                        • Computed Tomography (CT) scanners
                                                    </li>
                                                    <li className="py-2 text-muted">• Ultrasound machines</li>
                                                    <li className="py-2 text-muted">
                                                        • Electrocardiography (ECG) machines
                                                    </li>
                                                    <li className="py-2 text-muted">• Endoscopy equipment</li>
                                                    <li className="py-2 text-muted">
                                                        • Spirometers (lung function testing)
                                                    </li>
                                                    <li className="py-2 text-muted">• Blood glucose meters</li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-4 col-md-4">
                                        {/* Single Price Plan */}
                                        <div className="single-price-plan color-1 bg-hover hover-top text-center p-5">
                                            {/* Plan Title */}
                                            <div className="plan-title mb-2 mb-sm-3">
                                                <h3 className="mb-2">Monitoring Equipment</h3>
                                            </div>
                                            {/* Plan Description */}
                                            <div className="plan-description">
                                                <ul className="plan-features">
                                                    <li className="py-2 text-muted">
                                                        • Blood pressure monitors
                                                    </li>
                                                    <li className="py-2 text-muted">• Pulse oximeters</li>
                                                    <li className="py-2 text-muted">
                                                        • Electroencephalography (EEG) machines
                                                    </li>
                                                    <li className="py-2 text-muted">• Cardiac monitors</li>
                                                    <li className="py-2 text-muted">
                                                        • Holter monitors (continuous ECG monitoring)
                                                    </li>
                                                    <li className="py-2 text-muted">
                                                        • Continuous Glucose Monitoring (CGM) systems
                                                    </li>
                                                    <li className="py-2 text-muted">
                                                        • Capnography monitors(measurement of carbon dioxide
                                                        levels)
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-4 col-md-4">
                                        {/* Single Price Plan */}
                                        <div className="single-price-plan color-1 bg-hover hover-top text-center p-5">
                                            {/* Plan Title */}
                                            <div className="plan-title mb-2 mb-sm-3">
                                                <h3 className="mb-2">Therapeutic&nbsp;Equipment</h3>
                                            </div>
                                            {/* Plan Description */}
                                            <div className="plan-description">
                                                <ul className="plan-features">
                                                    <li className="py-2 text-muted">• Ventilators</li>
                                                    <li className="py-2 text-muted">• Infusion pumps</li>
                                                    <li className="py-2 text-muted">• Dialysis machines</li>
                                                    <li className="py-2 text-muted">
                                                        • Radiation therapy equipment
                                                    </li>
                                                    <li className="py-2 text-muted">
                                                        • Physiotherapy equipment
                                                    </li>
                                                    <li className="py-2 text-muted">• Defibrillators</li>
                                                    <li className="py-2 text-muted">
                                                        • Continuous Positive Airway Pressure (CPAP) machines
                                                    </li>
                                                    <li className="py-2 text-muted">• Nebulizers</li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-4 col-md-4">
                                        {/* Single Price Plan */}
                                        <div className="single-price-plan color-1 bg-hover hover-top text-center p-5">
                                            {/* Plan Title */}
                                            <div className="plan-title mb-2 mb-sm-3">
                                                <h3 className="mb-2">Surgical&nbsp;Instruments</h3>
                                            </div>
                                            {/* Plan Description */}
                                            <div className="plan-description">
                                                <ul className="plan-features">
                                                    <li className="py-2 text-muted">
                                                        • Scalpels &amp; Forceps
                                                    </li>
                                                    <li className="py-2 text-muted">• Surgical scissors</li>
                                                    <li className="py-2 text-muted">• Retractors</li>
                                                    <li className="py-2 text-muted">• Surgical drills</li>
                                                    <li className="py-2 text-muted">
                                                        • Laparoscopic instruments
                                                    </li>
                                                    <li className="py-2 text-muted">• Electrosurgical units</li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-4 col-md-4">
                                        {/* Single Price Plan */}
                                        <div className="single-price-plan color-1 bg-hover hover-top text-center p-5">
                                            {/* Plan Title */}
                                            <div className="plan-title mb-2 mb-sm-3">
                                                <h3 className="mb-2">Rehabilitation&nbsp;Equipment</h3>
                                            </div>
                                            {/* Plan Description */}
                                            <div className="plan-description">
                                                <ul className="plan-features">
                                                    <li className="py-2 text-muted">• Wheelchairs</li>
                                                    <li className="py-2 text-muted">• Crutches</li>
                                                    <li className="py-2 text-muted">• Orthotic devices</li>
                                                    <li className="py-2 text-muted">• Prosthetic limbs</li>
                                                    <li className="py-2 text-muted">
                                                        • Assistive walking devices
                                                    </li>
                                                    <li className="py-2 text-muted" />
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-4 col-md-4">
                                        {/* Single Price Plan */}
                                        <div className="single-price-plan color-1 bg-hover hover-top text-center p-5">
                                            {/* Plan Title */}
                                            <div className="plan-title mb-2 mb-sm-3">
                                                <h3 className="mb-2">Durable&nbsp;Medical Equipment(DME)</h3>
                                            </div>
                                            {/* Plan Description */}
                                            <div className="plan-description">
                                                <ul className="plan-features">
                                                    <li className="py-2 text-muted">• Hospital beds</li>
                                                    <li className="py-2 text-muted">• Mobility scooters</li>
                                                    <li className="py-2 text-muted">• Patient lifts</li>
                                                    <li className="py-2 text-muted">• Walkers</li>
                                                    <li className="py-2 text-muted">• Commode chairs</li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-4 col-md-4">
                                        {/* Single Price Plan */}
                                        <div className="single-price-plan color-1 bg-hover hover-top text-center p-5">
                                            {/* Plan Title */}
                                            <div className="plan-title mb-2 mb-sm-3">
                                                <h3 className="mb-2">Laboratory Equipment</h3>
                                            </div>
                                            {/* Plan Description */}
                                            <div className="plan-description">
                                                <ul className="plan-features">
                                                    <li className="py-2 text-muted">• Microscopes</li>
                                                    <li className="py-2 text-muted">• Centrifuges</li>
                                                    <li className="py-2 text-muted">• Spectrophotometers</li>
                                                    <li className="py-2 text-muted">• Incubators</li>
                                                    <li className="py-2 text-muted">
                                                        • Autoclaves (sterilization equipment)
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-4 col-md-4">
                                        {/* Single Price Plan */}
                                        <div className="single-price-plan color-1 bg-hover hover-top text-center p-5">
                                            {/* Plan Title */}
                                            <div className="plan-title mb-2 mb-sm-3">
                                                <h3 className="mb-2">Personal Protective Equipment (PPE)</h3>
                                            </div>
                                            {/* Plan Description */}
                                            <div className="plan-description">
                                                <ul className="plan-features">
                                                    <li className="py-2 text-muted">• Gloves</li>
                                                    <li className="py-2 text-muted">
                                                        • Masks (surgical and N95 respirators)
                                                    </li>
                                                    <li className="py-2 text-muted">• Gowns</li>
                                                    <li className="py-2 text-muted">• Face shields</li>
                                                    <li className="py-2 text-muted">• Protective eyewear</li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-4 col-md-4">
                                        {/* Single Price Plan */}
                                        <div className="single-price-plan color-1 bg-hover hover-top text-center p-5">
                                            {/* Plan Title */}
                                            <div className="plan-title mb-2 mb-sm-3">
                                                <h3 className="mb-2">Imaging Equipment</h3>
                                            </div>
                                            {/* Plan Description */}
                                            <div className="plan-description">
                                                <ul className="plan-features">
                                                    <li className="py-2 text-muted">• Fluoroscopy machines</li>
                                                    <li className="py-2 text-muted">• Mammography machines</li>
                                                    <li className="py-2 text-muted">• Bone densitometers</li>
                                                    <li className="py-2 text-muted">• PET-CT scanners</li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-4 col-md-4">
                                        {/* Single Price Plan */}
                                        <div className="single-price-plan color-1 bg-hover hover-top text-center p-5">
                                            {/* Plan Title */}
                                            <div className="plan-title mb-2 mb-sm-3">
                                                <h3 className="mb-2">Emergency Medical Equipment</h3>
                                            </div>
                                            {/* Plan Description */}
                                            <div className="plan-description">
                                                <ul className="plan-features">
                                                    <li className="py-2 text-muted">• Stretchers</li>
                                                    <li className="py-2 text-muted">
                                                        • Emergency medical kits
                                                    </li>
                                                    <li className="py-2 text-muted">• Suction units</li>
                                                    <li className="py-2 text-muted">• Tourniquets</li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-4 col-md-4">
                                        {/* Single Price Plan */}
                                        <div className="single-price-plan color-1 bg-hover hover-top text-center p-5">
                                            {/* Plan Title */}
                                            <div className="plan-title mb-2 mb-sm-3">
                                                <h3 className="mb-2">Home Medical Equipment</h3>
                                            </div>
                                            {/* Plan Description */}
                                            <div className="plan-description">
                                                <ul className="plan-features">
                                                    <li className="py-2 text-muted">
                                                        • Home oxygen therapy equipment
                                                    </li>
                                                    <li className="py-2 text-muted">
                                                        • Home dialysis machines
                                                    </li>
                                                    <li className="py-2 text-muted">• Home ventilators</li>
                                                    <li className="py-2 text-muted">
                                                        • Continuous Positive Airway Pressure (CPAP) machines for
                                                        sleep apnea
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
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

export default Medical;
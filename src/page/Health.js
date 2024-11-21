import React from 'react';
import { Link } from 'react-router-dom';
import Loading from '../component/loader/Loading';
import { Navbar } from 'react-bootstrap';
import HeadderNavbar from '../component/navbar/HeadderNavbar';

import ScrollTopBottom from '../component/ScrollTopBottom';
import Modal from '../component/modal/Modal';
import PageBanner from '../component/pageBanner/PageBanner';
import Footer from '../component/footer/Footer';

const Health = () => {
    return (
        <div>

            {/* <Loading /> */}

            <ScrollTopBottom />

            <div className="main overflow-hidden">
                <HeadderNavbar />

                <PageBanner title="Health & Safety" />


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
                                                                <b>Risk Assessment and Management</b>
                                                            </button>
                                                        </h2>
                                                    </div>
                                                    {/* Card Body */}
                                                    <div className="card-body px-0 py-3">
                                                        • Conducting comprehensive risk assessments to identify
                                                        potential hazards and risks in the workplace.
                                                        <br />• Developing strategies and protocols to mitigate
                                                        identified risks and ensure a safe environment for
                                                        employees.
                                                    </div>
                                                </div>
                                                {/* Single Card */}
                                                {/* Single Card */}
                                                <div className="card border-0">
                                                    {/* Card Header */}
                                                    <div className="card-header bg-inherit border-0 p-0">
                                                        <h2 className="mb-0">
                                                            <button className="btn px-0 py-3" type="button">
                                                                <b>Emergency Response Planning</b>
                                                            </button>
                                                        </h2>
                                                    </div>
                                                    {/* Card Body */}
                                                    <div className="card-body px-0 py-3">
                                                        • Developing and implementing emergency response plans,
                                                        including evacuation procedures, first aid training, and
                                                        coordination with emergency services.
                                                    </div>
                                                </div>
                                                {/* Single Card */}
                                                {/* Single Card */}
                                                <div className="card border-0">
                                                    {/* Card Header */}
                                                    <div className="card-header bg-inherit border-0 p-0">
                                                        <h2 className="mb-0">
                                                            <button className="btn px-0 py-3" type="button">
                                                                <b>Personal Protective Equipment (PPE) Assessment</b>
                                                            </button>
                                                        </h2>
                                                    </div>
                                                    {/* Card Body */}
                                                    <div className="card-body px-0 py-3">
                                                        • Assessing the need for and providing appropriate
                                                        personal protective equipment, such as helmets, gloves,
                                                        goggles, and respiratory protection.
                                                    </div>
                                                </div>
                                                {/* Single Card */}
                                                {/* Single Card */}
                                                <div className="card border-0">
                                                    {/* Card Header */}
                                                    <div className="card-header bg-inherit border-0 p-0">
                                                        <h2 className="mb-0">
                                                            <button className="btn px-0 py-3" type="button">
                                                                <b>Ergonomic Assessments</b>
                                                            </button>
                                                        </h2>
                                                    </div>
                                                    {/* Card Body */}
                                                    <div className="card-body px-0 py-3">
                                                        • Evaluating workstations and equipment to ensure
                                                        ergonomic design, reducing the risk of musculoskeletal
                                                        disorders and promoting employee comfort.
                                                    </div>
                                                </div>
                                                {/* Single Card */}
                                                {/* Single Card */}
                                                <div className="card border-0">
                                                    {/* Card Header */}
                                                    <div className="card-header bg-inherit border-0 p-0">
                                                        <h2 className="mb-0">
                                                            <button className="btn px-0 py-3" type="button">
                                                                <b>Health and Safety Compliance Audits</b>
                                                            </button>
                                                        </h2>
                                                    </div>
                                                    {/* Card Body */}
                                                    <div className="card-body px-0 py-3">
                                                        • Conducting audits to assess compliance with local,
                                                        national, and international health and safety regulations.
                                                        <br />• Providing recommendations for corrective actions
                                                        to address any identified deficiencies.
                                                    </div>
                                                </div>
                                                {/* Single Card */}
                                                {/* Single Card */}
                                                <div className="card border-0">
                                                    {/* Card Header */}
                                                    <div className="card-header bg-inherit border-0 p-0">
                                                        <h2 className="mb-0">
                                                            <button className="btn px-0 py-3" type="button">
                                                                <b>Chemical Management and Hazard Communication</b>
                                                            </button>
                                                        </h2>
                                                    </div>
                                                    {/* Card Body */}
                                                    <div className="card-body px-0 py-3">
                                                        • Developing systems for proper labeling, storage, and
                                                        handling of hazardous chemicals.
                                                        <br />• Providing training on hazard communication
                                                        standards and Material Safety Data Sheets (MSDS).
                                                    </div>
                                                </div>
                                                {/* Single Card */}
                                                {/* Single Card */}
                                                <div className="card border-0">
                                                    {/* Card Header */}
                                                    <div className="card-header bg-inherit border-0 p-0">
                                                        <h2 className="mb-0">
                                                            <button className="btn px-0 py-3" type="button">
                                                                <b>
                                                                    Environmental Health and Safety (EHS) Software
                                                                    Solutions
                                                                </b>
                                                            </button>
                                                        </h2>
                                                    </div>
                                                    {/* Card Body */}
                                                    <div className="card-body px-0 py-3">
                                                        • Providing software tools for managing health and safety
                                                        data, reporting incidents, and tracking compliance.
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
                                                                <b>Health and Safety Training</b>
                                                            </button>
                                                        </h2>
                                                    </div>
                                                    {/* Card Body */}
                                                    <div className="card-body px-0 py-3">
                                                        • Providing training programs to educate employees on safe
                                                        work practices, emergency procedures, and the proper use
                                                        of safety equipment.
                                                        <br />• Offering specialized training for specific
                                                        hazards, such as chemical handling, fire safety, and
                                                        manual lifting techniques.
                                                    </div>
                                                </div>
                                                {/* Single Card */}
                                                {/* Single Card */}
                                                <div className="card border-0">
                                                    {/* Card Header */}
                                                    <div className="card-header bg-inherit border-0 p-0">
                                                        <h2 className="mb-0">
                                                            <button className="btn px-0 py-3" type="button">
                                                                <b>Workplace Inspections</b>
                                                            </button>
                                                        </h2>
                                                    </div>
                                                    {/* Card Body */}
                                                    <div className="card-body px-0 py-3">
                                                        • Conducting regular inspections of the workplace to
                                                        ensure compliance with health and safety regulations and
                                                        to identify any potential issues.
                                                    </div>
                                                </div>
                                                {/* Single Card */}
                                                {/* Single Card */}
                                                <div className="card border-0">
                                                    {/* Card Header */}
                                                    <div className="card-header bg-inherit border-0 p-0">
                                                        <h2 className="mb-0">
                                                            <button className="btn px-0 py-3" type="button">
                                                                <b>Health and Wellness Programs</b>
                                                            </button>
                                                        </h2>
                                                    </div>
                                                    {/* Card Body */}
                                                    <div className="card-body px-0 py-3">
                                                        • Designing wellness initiatives to promote physical and
                                                        mental well-being among employees, including stress
                                                        management workshops and fitness programs.
                                                    </div>
                                                </div>
                                                {/* Single Card */}
                                                {/* Single Card */}
                                                <div className="card border-0">
                                                    {/* Card Header */}
                                                    <div className="card-header bg-inherit border-0 p-0">
                                                        <h2 className="mb-0">
                                                            <button className="btn px-0 py-3" type="button">
                                                                <b>Industrial Hygiene Services</b>
                                                            </button>
                                                        </h2>
                                                    </div>
                                                    {/* Card Body */}
                                                    <div className="card-body px-0 py-3">
                                                        • Monitoring and assessing workplace conditions for
                                                        potential exposure to hazardous substances, noise, and
                                                        other environmental factors.
                                                        <br />• Recommending control measures to minimize employee
                                                        exposure.
                                                    </div>
                                                </div>
                                                {/* Single Card */}
                                                {/* Single Card */}
                                                <div className="card border-0">
                                                    {/* Card Header */}
                                                    <div className="card-header bg-inherit border-0 p-0">
                                                        <h2 className="mb-0">
                                                            <button className="btn px-0 py-3" type="button">
                                                                <b>Fire Safety Services</b>
                                                            </button>
                                                        </h2>
                                                    </div>
                                                    {/* Card Body */}
                                                    <div className="card-body px-0 py-3">
                                                        • Designing fire safety plans, conducting fire drills, and
                                                        ensuring the availability of firefighting equipment and
                                                        evacuation routes.
                                                    </div>
                                                </div>
                                                {/* Single Card */}
                                                {/* Single Card */}
                                                <div className="card border-0">
                                                    {/* Card Header */}
                                                    <div className="card-header bg-inherit border-0 p-0">
                                                        <h2 className="mb-0">
                                                            <button className="btn px-0 py-3" type="button">
                                                                <b>Health and Safety Consultancy</b>
                                                            </button>
                                                        </h2>
                                                    </div>
                                                    {/* Card Body */}
                                                    <div className="card-body px-0 py-3">
                                                        • Offering expert advice and consultation on health and
                                                        safety matters, tailored to the specific needs of the
                                                        organization.
                                                    </div>
                                                </div>
                                                {/* Single Card */}
                                                {/* Single Card */}
                                                <div className="card border-0">
                                                    {/* Card Header */}
                                                    <div className="card-header bg-inherit border-0 p-0">
                                                        <h2 className="mb-0">
                                                            <button className="btn px-0 py-3" type="button">
                                                                <b>Health and Safety Program Development</b>
                                                            </button>
                                                        </h2>
                                                    </div>
                                                    {/* Card Body */}
                                                    <div className="card-body px-0 py-3">
                                                        • Creating customized health and safety programs aligned
                                                        with industry best practices and regulatory requirements.
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

export default Health;
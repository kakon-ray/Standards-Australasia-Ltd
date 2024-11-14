import React from 'react';
import { Link } from 'react-router-dom';
import Loading from '../component/loader/Loading';
import { Navbar } from 'react-bootstrap';
import HeadderNavbar from '../component/navbar/HeadderNavbar';
import Footer from '../component/footer/Footer';
import Modal from '../component/modal/Modal';
import ContactArea from '../component/home/ContactArea';
import ContentArea from '../component/home/ContentArea';
import CustomerService from '../component/home/CustomerService';
import PromoArea from '../component/home/PromoArea';
import WelComeArea from '../component/home/WelComeArea';
import ScrollTopBottom from '../component/ScrollTopBottom';

const Home = () => {
    return (
        <div>

            {/* <Loading /> */}

            <ScrollTopBottom />

            {/* <div className="main overflow-hidden"> */}

                <HeadderNavbar />

                <WelComeArea />

                <PromoArea />
                <CustomerService />
                <ContentArea />
                <ContactArea />

                <Footer />

                <Modal />
            {/* </div> */}
        </div>
    );
};

export default Home;
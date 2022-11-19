import React from 'react';
import Banner from '../Banner/Banner';
import BannerTwo from '../BannerTwo/BannerTwo';
import InfoCards from '../InfoCards/InfoCards';
import Services from '../Services/Services';
import ContactUs from '../Home/ContactUs/ContuctUs';
import MakeAppoinment from '../MakeAppoinment/MakeAppoinment';
import Testimonial from '../../Testimonial/Testimonial';



const Home = () => {
    return (
        <div className='mx-5'>
            <Banner></Banner>
            <InfoCards></InfoCards>
            <Services></Services>
            <BannerTwo></BannerTwo>
            <MakeAppoinment></MakeAppoinment>
            <Testimonial></Testimonial>
            <ContactUs></ContactUs>
            
        </div>
    );
};

export default Home;
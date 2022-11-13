import React from 'react';
import Banner from '../Banner/Banner';
import BannerTwo from '../BannerTwo/BannerTwo';
import InfoCards from '../InfoCards/InfoCards';
import Services from '../Services/Services';
import ContactUs from '../Home/ContactUs/ContuctUs';



const Home = () => {
    return (
        <div className='mx-5'>
            <Banner></Banner>
            <InfoCards></InfoCards>
            <Services></Services>
            <BannerTwo></BannerTwo>
            <ContactUs></ContactUs>
            
        </div>
    );
};

export default Home;
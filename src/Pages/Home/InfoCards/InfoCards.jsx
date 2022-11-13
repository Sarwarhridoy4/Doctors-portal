import React from 'react';
import marker from '../../../assets/icons/marker.svg';
import clock from '../../../assets/icons/clock.svg';
import phone from '../../../assets/icons/phone.svg';
import InfoCard from './InfoCard/InfoCard';
const InfoCards = () => {
    const cardData = [
        {
            id: 1,
            name: 'Opening Hour',
            icon:clock,
            description: 'Opens 10 Am to 8 Pm Everyday',
            bgClass:'bg-gradient-to-r from-primary to-secondary'
        },
        {
            id: 2,
            name: 'Our Location',
            icon:marker,
            description: 'S-6, Uttara, Dhaka, 1230',
            bgClass:'bg-accent'
        },
        {
            id: 3,
            name: 'Get in Touch',
            icon:phone,
            description: '+(88)017XXXXXXXX',
            bgClass:'bg-gradient-to-r from-primary to-secondary'
        }
    ]
    return (
        <div className='grid mt-8 text-white gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 my-5'>
            {
                cardData.map(card=><InfoCard key={card.id} card ={card}></InfoCard>)
            }
        </div>
    );
};

export default InfoCards;
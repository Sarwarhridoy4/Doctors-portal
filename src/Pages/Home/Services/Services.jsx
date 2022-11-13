import React from 'react';
import flouride from '../../../assets/images/fluoride.png';
import cavity from '../../../assets/images/cavity.png';
import whitening from '../../../assets/images/whitening.png';
import Service from './Service/Service';
const Services = () => {
    const serviceData = [
        {
          id: 1,
          name: 'Fluoride Treatment',
          image: flouride,
          desc:'Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the'
        },
        {
          id: 2,
          name: 'Cavity Filling',
          image: cavity,
          desc:'Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the'
        },
        {
          id: 3,
          name: 'Teeth Whitening',
          image: whitening,
          desc:'Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the'
        },
      ]
    return (
        <div className='my-32'>
            <div className='text-center'>
                <h3 className="text-xl text-primary uppercase font-bold">Our Services</h3>
                <h2 className="text-3xl">Services We Provide</h2>
            </div>
            <div className='grid gap-32 sm:mx-auto grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
                {
                    serviceData.map(service=><Service key={service.id} service ={service}></Service>)
            }
            </div>
        </div>
    );
};

export default Services;
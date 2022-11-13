import React from "react";

const Service = ({ service }) => {
  console.log(service);
  const {name, image, desc} = service
  
  return (
    <div className='card bg-base-100 shadow-xl'>
      <figure className='px-10 pt-10'>
        <img
          src={image}
          alt='Shoes'
          className='rounded-xl'
        />
      </figure>
      <div className='card-body items-center text-center'>
        <h2 className='card-title'>{name}</h2>
        <p>{desc}</p>
      </div>
    </div>
  );
};

export default Service;

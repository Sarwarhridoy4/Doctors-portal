import React from 'react';
import appointment from '../../../../assets/images/appointment.png'
const ContuctUs = () => {
    return (
        <div className="hero" style={{ backgroundImage: `url(${appointment})` }}>
  <div className="hero-overlay bg-opacity-30"></div>
  <div className="hero-content text-center text-neutral-content">
    <div className="">
      <h1 className="mb-5 text-xl font-bold">Contact Us</h1>
                    <h2 className="mb-5 text-3xl">Stay connected with us</h2>
                    <div className="flex flex-col items-center justify-center gap-4">
                    <input type="text" placeholder="Type here" className="input input-bordered w-full" />
                        <input type="text" placeholder="Type here" className="input input-bordered w-full" />
                        <textarea className="textarea w-full" placeholder="Bio"></textarea>
                        <button className="btn btn-primary">Submit</button>
                    </div>
      
    </div>
  </div>
</div>
    );
};

export default ContuctUs;
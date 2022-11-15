import React from "react";

const AppoinmentOption = ({ appoinmentOption,setTreatment}) => {
  const { name, slots } = appoinmentOption;

  return (
      <div className=''>
      <div className='card w-96 bg-base-100 shadow-xl'>
        <div className='card-body'>
          <h2 className='text-2xl text-secondary text-center'>{name}</h2>
                  <p>{slots.length > 0 ? slots[0] : "Sorry No Slot Available Today!"}</p>
                  <p>{slots.length} spaces are availabe.</p>
          <div className='card-actions justify-center'>
                      
            <label htmlFor="booking-modal"
              className="btn bg-primary text-white btn-primary"
              disabled ={slots.length === 0}
              onClick={()=>setTreatment(appoinmentOption)}
            >Book Now</label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AppoinmentOption;

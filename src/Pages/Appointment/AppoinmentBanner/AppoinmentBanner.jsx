import React from "react";
import { DayPicker } from "react-day-picker";
import Chair from "../../../assets/images/chair.png";

const AppoinmentBanner = ({selectedDate,setSelectedDate}) => {
   
  return (
    <div className='hero bg-base-200'>
      <div className='hero-content w-full md:w-1/2 flex-col lg:flex-row-reverse'>
        <img
          src={Chair}
          className='rounded-lg shadow-2xl'
          alt='Dentist Chair'
        />
        <div className=" mr-6">
                  <DayPicker mode="single" selected={selectedDate} onSelect={setSelectedDate} />
                  
        </div>
      </div>
    </div>
  );
};

export default AppoinmentBanner;

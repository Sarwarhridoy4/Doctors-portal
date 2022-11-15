import { format } from "date-fns";
import React, { useEffect, useState } from "react";
import BookingModal from "../../BookingModal/BookingModal";
import AppoinmentOption from "../AppoinnemtOption/AppoinmentOption";

const AvailableAppoinment = ({ selectedDate }) => {
  const [appoinmentOptions, setAppoinmentOption] = useState([]);
  const [treatment, setTreatment] = useState(null);

  useEffect(() => {
    fetch("appoinmentOption.json")
      .then((res) => res.json())
      .then((data) => setAppoinmentOption(data));
  }, []);

  return (
    <div className='text-center font-bold my-6'>
      <p className='text-secondary'>
        Appoinment Available on:{format(selectedDate, "PP")}
      </p>

      <div className='grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
        {appoinmentOptions.map((appoinmentOption) => (
          <AppoinmentOption
            key={appoinmentOption._id}
            appoinmentOption={appoinmentOption}
            setTreatment = {setTreatment}
          ></AppoinmentOption>
        ))}
      </div>
      {
        treatment && <BookingModal treatment={treatment}
        selectedDate ={selectedDate}
        ></BookingModal>
      }
    </div>
  );
};

export default AvailableAppoinment;

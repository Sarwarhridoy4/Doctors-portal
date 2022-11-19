import {  useQuery } from "@tanstack/react-query";
import { format } from "date-fns";
import React, { useState } from "react";
import BookingModal from "../../BookingModal/BookingModal";
import AppoinmentOption from "../AppoinnemtOption/AppoinmentOption";

const AvailableAppoinment = ({ selectedDate }) => {
  const [treatment, setTreatment] = useState(null);

  const {data:appoinmentOptions=[]} = useQuery({
    queryKey: ['appoinmentOptions'], queryFn: () => {
     return fetch("http://localhost:5000/appointment-options")
      .then((res) => res.json())
    }
  })

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
            setTreatment={setTreatment}
          ></AppoinmentOption>
        ))}
      </div>
      {treatment && (
        <BookingModal
          treatment={treatment}
          selectedDate={selectedDate}
        ></BookingModal>
      )}
    </div>
  );
};

export default AvailableAppoinment;

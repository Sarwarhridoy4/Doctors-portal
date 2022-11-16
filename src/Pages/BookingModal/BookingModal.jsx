import { format } from "date-fns";
import React from "react";

const BookingModal = ({ treatment, selectedDate }) => {
  const { name, slots } = treatment;
  // console.log(slots);
  const date = format(selectedDate, "PP");

  //Event Handeler
  const handelBooking = event => {
    event.preventDefault()
    const form = event.target;
    const slot = form.slot.value;
    const name = form.name.value;
    const email = form.email.value;
    const phone = form.phone.value;

    //ensuring value

    console.log(slot, date, name, email, phone);
    
    //clear field
    event.target.reset()


  }



  return (
    <>
      <input type='checkbox' id='booking-modal' className='modal-toggle' />
      <div className='modal'>
        <div className='modal-box relative'>
          <label
            htmlFor='booking-modal'
            className='btn btn-sm btn-circle absolute right-2 top-2'
          >
            ✕
          </label>
          <h3 className='text-lg font-bold my-5'>{name}</h3>

          <form onSubmit={handelBooking} className='grid grid-cols-1 gap-4'>
            <input
              type='text'
              value={date}
              disabled
              className='input input-bordered w-full'
            />
            <select className='select select-bordered w-full'>
              <option disabled defaultValue>
                Select fom Available Slots:
              </option>
              {slots.map((slot) => (
                <option key={slot} name ='slot' value={slot}>{slot}</option>
              ))}
            </select>

            <input
              type='text'
              placeholder='Your Name'
              name='name'
              required
              className='input input-bordered w-full'
            />
            <input
              type='email'
              placeholder='Your Email is requared'
              name='email'
              required
              className='input input-bordered w-full'
            />
            <input
              type='tel'
              placeholder='Your Contact Number'
              name='phone'
              required
              className='input input-bordered w-full'
            />
            <input className='btn btm-accent' type='submit' value='Submit' />
          </form>
        </div>
      </div>
    </>
  );
};

export default BookingModal;

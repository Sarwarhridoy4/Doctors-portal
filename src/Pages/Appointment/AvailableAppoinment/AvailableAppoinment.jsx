import { format } from 'date-fns';
import React from 'react';

const AvailableAppoinment = ({selectedDate}) => {
    return (
        <div className='text-center text-secondary font-bold my-6'>
            <p>Appoinment Available on:{format(selectedDate,'PP')}</p>
        </div>
    );
};

export default AvailableAppoinment;
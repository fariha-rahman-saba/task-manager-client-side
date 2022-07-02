import React from 'react';
import { DayPicker } from 'react-day-picker';
import 'react-day-picker/dist/style.css';

const Calender = () => {
    return (
        <div className='w-100 justify-center m-5'>
            <DayPicker />
        </div>
    );
};

export default Calender;
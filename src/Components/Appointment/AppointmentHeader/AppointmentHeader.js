import React from 'react';
import chair from '../../../images/chair.png'
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
const AppointmentHeader = ({handleDateChange}) => {

    return (
        <div>
            <div style={{ height: "700px" }} className="row d-flex align-items-center w-100">
                <div class="col-md-4 offset-md-2">
                    <h1 style={{ color: "#3A4256" }} >Appointment</h1>
                    <Calendar
                        onChange={handleDateChange}
                        value={new Date()}
                    />
                </div>
                <div class="col-md-6 ">
                    <img src={chair} alt="" className="img-fluid" />
                </div>
            </div>

        </div>
    );
};

export default AppointmentHeader;
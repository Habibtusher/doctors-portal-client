import React, { useContext, useEffect, useState } from 'react';
import Sidebar from '../Sidebar/Sidebar';
import AppointmentsByDate from '../AppointmentsByDate/AppointmentsByDate'
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import { UserContext } from '../../../App';

const containerStyle = {
    backgroundColor: '#dfe7f5',
    height: '100%'
}
const Dashboard = () => {
    const [loggedInUser, setLoggedInUser]= useContext(UserContext);
    const [selectedDate, setSelectedDate] = useState(new Date());
    const [appointments, setAppointments] = useState([]);
    const handleDateChange = (date) => {
        console.log(date);
        setSelectedDate(date);
       
    }
    useEffect(()=> {
    
        fetch('http://sleepy-retreat-29462.herokuapp.com/appointmentsByDate', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({date:selectedDate,email:loggedInUser.email })
        })
            .then(res => res.json())
            .then(data => {
                setAppointments(data)
            })
    },[selectedDate])


    return (
        <section>
            <div style={containerStyle} className="container-fluid row">
                <div className="col-md-3">
                    <Sidebar></Sidebar>
                </div>
                <div className=" ml-3 col-md-3">
                    <Calendar
                        onChange={handleDateChange}
                        value={new Date()}
                    />
                </div>
                <div className="col-md-6">
                    <AppointmentsByDate appointments={appointments}></AppointmentsByDate>
                </div>
            </div>
        </section>
    );
};

export default Dashboard;
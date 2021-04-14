import React from 'react';
import fluoride from '../../../images/fluoride.png';
import cavity from '../../../images/cavity.png';
import white from '../../../images/white.png';
import ServiceDetail from '../ServiceDetail/ServiceDetail';
import './Services.css'
const serviceData =[
    {
        name: 'Fluoride Treatment',
        img: fluoride
    },
    {
        name: 'Cavity Filling',
        img: cavity
    },
    {
        name: 'Teeth Whiting',
        img: white
    }
]
const Services = () => {
    return (
        <section className="mt-5 service-container">
             <div className="text-center">
            <h4 style={{ color: '#1CC7C1'}}>Our Services</h4>
            <h1>Services We Provide</h1>
        </div>
        <div className="d-flex justify-content-center">
        <div className="w-75 row mt-5 pt-5">
        {
            serviceData.map((service) =><ServiceDetail service={service}></ServiceDetail>)
        }
        </div>
      </div>
        </section>
       
    );
};

export default Services;
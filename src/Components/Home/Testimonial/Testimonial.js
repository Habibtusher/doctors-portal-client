import React from 'react';

const Testimonial = (props) => {
    const {quote,name,from ,img} = props.testimonial;
    return (
        <div className="card shadow col-md-4">
            <div className="card-body mb-3">
                <p className="card-text text-justify ">{quote}</p>
            </div>
            <div className="card-footer d-flex  align-items-center mb-5">
                <img className="mx-3" src={img} alt="" width="60"/>
                <div>
                    <h6 className="text-primary">{name}</h6>
                    <p className="m-0">{from}</p>
                </div>
            </div>
       </div>
    );
};

export default Testimonial;
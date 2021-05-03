import React from 'react';
import Modal from 'react-modal';
import { useForm } from "react-hook-form";
const customStyles = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)'
    }
};
Modal.setAppElement('#root')
const AppointmentForm = ({ modalIsOpen, closeModal, appointmentOn, date }) => {

    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = data => {

        data.service = appointmentOn;
        data.date = date;
        data.created = new Date();

        fetch("http://sleepy-retreat-29462.herokuapp.com/addAppointment", {
            method: "POST",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)

        })
            .then(res => res.json())
            .then(success => {
                if (success) {
                    closeModal();
                    alert("successfully added");
                }
            })


    }
    console.log(date.toDateString());
    return (
        <div>

            <Modal
                isOpen={modalIsOpen}

                onRequestClose={closeModal}
                style={customStyles}
                contentLabel="Example Modal"
            >

                <h2 className=" text-center text-brand">{appointmentOn}</h2>
                <p className="text-secondary text-center"><small>ON {date.toDateString()}</small></p>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="form-group mb-2">
                        <input type="text" {...register("name")} name="name" placeholder="Your Name" className="form-control p-2" />
                        {errors.name && <span className="text-danger">This field is required</span>}

                    </div>
                    <div className="form-group mb-2">
                        <input type="text" {...register("phone")} name="phone" placeholder="Phone Number" className="form-control p-2" />
                        {errors.phone && <span className="text-danger">This field is required</span>}
                    </div>
                    <div className="form-group mb-2">
                        <input type="text" {...register("email")} name="email" placeholder="Email" className="form-control p-2" />
                        {errors.email && <span className="text-danger">This field is required</span>}
                    </div>
                    <div className="form-group row mb-2">
                        <div className="col-4">

                            <select className="form-control" name="gender" {...register("gender")} >
                                <option disabled={true} value="Not set">Select Gender</option>
                                <option value="Male">Male</option>
                                <option value="Female">Female</option>
                                <option value="Not set">Other</option>
                            </select>
                            {errors.gender && <span className="text-danger">This field is required</span>}

                        </div>
                        <div className="col-4">
                            <input {...register("age")} className="form-control" name="age" placeholder="Your Age" type="number" />
                            {errors.age && <span className="text-danger">This field is required</span>}
                        </div>
                        <div className="col-4">
                            <input {...register("weight")} className="form-control" name="weight" placeholder="Weight" type="number" />
                            {errors.weight && <span className="text-danger">This field is required</span>}
                        </div>
                    </div>

                    <div className="form-group text-right">
                        <button type="submit" className="btn btn-brand">Send</button>
                    </div>
                </form>
            </Modal>
        </div>
    );
};

export default AppointmentForm;
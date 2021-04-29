import React, { useState } from 'react';
import Sidebar from '../Sidebar/Sidebar';
import { useForm } from "react-hook-form";
import axios from 'axios';
const AddDoctor = () => {
    const { register, handleSubmit } = useForm();
    const [imageUrl, setImageUrl] = useState(null);

    const handleFileChange = event => {
        const imageData = new FormData();
        imageData.set('key', '3ea6925d54a056d4dcb7a26c6292821b');
        console.log(event.target.files[0]);
        imageData.append('image', event.target.files[0])

            axios.post('https://api.imgbb.com/1/upload', 
            imageData)

            .then(function (response) {
                console.log(response.data.data.display_url);
                setImageUrl(response.data.data.display_url);
            })
            .catch(function (error) {
                console.log(error);
            });
    }
    const onSubmit = (data) => {
        
        const products = {
            name: data.name,
            email: data.email,
            imageURL: imageUrl
        };
        const url = `http://localhost:5000/addADoctor`


        fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(products)
        })
            .then(res => {
                console.log('server side');
            })
    }


    return (
        <section className="container-fluid row">
            <div className="col-md-2">
                <Sidebar></Sidebar>
            </div>
            <div className="col-md-9 p-5" style={{ position: "absolute", right: 0, backgroundColor: "#F4FDFB" }}>
                <h5 className="text-brand">Add a Doctor</h5>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="from-group">
                        <label htmlFor="name">Name :</label>

                        <input className="form-control" name='name' {...register("name")} />
                    </div>


                   <div className="from-group">
                   <label htmlFor="email">Email :</label>
                    <input className="form-control" name="email" {...register("email")} />
                   </div>
                   
                   <div  className="from-group mb-3">
                   <label htmlFor="">Upload Image :</label>
                    <input className="form-control" name="exampleRequired" type="file" onChange={handleFileChange} />
                   </div>

                   <button className='' type="submit " className="btn btn-primary">Submit</button>
                </form>

            </div>
        </section>
    );
};

export default AddDoctor;
import React from 'react';
import chair from '../../../images/chair.png'
const HeaderMain = () => {
    return (
       <div>
  <div style={{ height:"700px"}} className="row d-flex align-items-center">
    <div class="col-md-4 offset-md-2">
        <h1 style={{ color:"#3A4256"}} >Your New Smile <br/> Start Here</h1>
        <p className="text-secondary">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facilis eligendi blanditiis deserunt exercitationem laborum aspernatur quae qui, non dolores impedit explicabo odit! Quam magnam inventore incidunt nihil veritatis expedita blanditiis totam ipsa recusandae repellat id nisi cum molestias omnis, explicabo odit nobis facilis velit? Molestiae adipisci aut ullam similique deleniti!</p>
        <button class="btn btn-primary">Get Appointment</button>
        </div>
    <div class="col-md-6 ">
        <img src={chair} alt="" className="img-fluid"/>
        </div>
  </div>
  
</div>
    );
};

export default HeaderMain;
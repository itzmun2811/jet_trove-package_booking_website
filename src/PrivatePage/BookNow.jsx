import React, { use, useEffect, useState } from 'react';
import {  useParams } from 'react-router';
import { AuthContext } from '../context/AuthContext';
import axios from 'axios';
import { toast } from 'react-toastify';


const BookNow = () => {
    const {id}=useParams();
    const {user}=use(AuthContext);
    const[bookInfo,setInfo] =useState([]);
    const date= new Date().toLocaleDateString();

    useEffect(()=>{
    axios.get(`http://localhost:3000/addPackage/${id}`)
    .then(result=>{
        console.log(result.data)
        setInfo(result.data);
    })
    .catch(error=>{
        console.log(error)
    })
    
  },[id])
  console.log(bookInfo)

    const handleBooking=(e)=>{
       e.preventDefault();
       const form=e.target;
       const formdata = new FormData(form);
        const Bookings= Object.fromEntries(formdata.entries());

         const newBookings={
            ...Bookings,
            status:'pending'
         }
        axios.post("http://localhost:3000/booking",newBookings)
        .then(result=>{
            console.log(result.data)
            toast.success('booking added sucessfully')
        })
        .catch(error=>{
            console.log(error)
        })


    }


    return (
        <div className='w-11/12 mx-auto'>
            <h1 className='text-3xl font-bold text-center text-sky-600 shadow-2xl'>Book Now</h1>
            <form onSubmit={handleBooking}>
<div className="bg-base-200 w-11/12 mx-auto text-center">

   
    <div className="card bg-base-100 shadow-2xl">
      <div className="card-body">
        <fieldset className="fieldset text-center font-bold text-[16px] p-4">



            <div className='flex gap-4 items-center'>
                <label className="label">Tour Name -</label>
               <input type="text" name='tour-name' className="input" readOnly defaultValue={bookInfo['tour-name']} />
            </div>
            <div className='flex gap-4'>
                <label className="label">price</label>
               <input type="text" name='price' className="input" readOnly defaultValue={bookInfo.price} />
            </div>
          <div className='flex gap-4'>
                <label className="label">Booking Date</label>
                <input type="text" name='date' className="input" defaultValue={date} />
            </div>
         
     
          <div className='flex gap-4'>
                <label className="label">Buyer Name</label>
                <input type="text" name='guide-name' className="input" defaultValue={user?.displayName}/>
            </div>
          <div className='flex gap-4'>
                <label className="label">Buyer Email</label>
                <input type="text" name='guide-email' className="input" defaultValue={user?.email} />
            </div>
          <fieldset className="fieldset">
  <legend className="fieldset-legend text-start">Special Note</legend>
  <textarea className="textarea h-24" placeholder="special note"></textarea>
 
</fieldset>
      
        </fieldset>
        <button  className='btn btn-neutral w-1/2' type="submit">Book now</button>
      </div>
    </div>
  </div>
</form>
        </div>
    );
};

export default BookNow;
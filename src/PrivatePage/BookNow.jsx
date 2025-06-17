import React, { use, useEffect, useState } from 'react';
import {  useParams } from 'react-router';
import { AuthContext } from '../context/AuthContext';
import axios from 'axios';
import { toast } from 'react-toastify';
import { MdTour } from 'react-icons/md';


const BookNow = () => {
    const {id}=useParams();
    const {user}=use(AuthContext);
    const [loading,setLoading]=useState(true);
    const[bookInfo,setBookInfo] =useState(null);
    const date= new Date().toLocaleDateString();

    useEffect(()=>{
         setLoading(true);
    axios.get(`https://tour-management-server-kappa.vercel.app/addPackage/${id}`)
    .then(result=>{
        console.log(result.data)
        setBookInfo(result.data);
        setLoading(false)
    })
    .catch(error=>{
        console.log(error)
        setLoading(false)
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
            status:'pending',
            tourId:bookInfo._id ,
            guideName:bookInfo['guide-name'],
            guideEmail:bookInfo['guide-email'],
            guideContact:bookInfo.contact,
            location:bookInfo.location,
            destination:bookInfo.destination,
            
         }

         console.log(newBookings)
        axios.post(`https://tour-management-server-kappa.vercel.app/booking?email=${user.email}`,newBookings,{
             headers:{
            authorization :`Bearer ${user.accessToken}`
        }
        })
        .then(result=>{
            console.log(result.data)
            toast.success('booking added sucessfully')
        })
        .catch(error=>{
            console.log(error)
        })


         

    }
if (!bookInfo) return <p className='mx-auto p-2 w-11/12'>Loading...
it may take some time ...plz wait</p>;
if (loading) return <p>Loading...</p>;
    return (

        
        <div className='w-11/12 mx-auto'>
            <h1 className='text-3xl font-bold text-center text-sky-600 
            shadow-2xl'>Book Now</h1>

           
            <form onSubmit={handleBooking}>
<div className="bg-base-200 w-11/12 mx-auto text-center">

   
    <div className="card bg-base-100 shadow-2xl">
      <div className="card-body">
        <fieldset className="fieldset text-center font-bold text-[16px] p-4">



            <div className='flex gap-4 items-center'>
                <label className="label">Tour Name -</label>
               <input type="text" name='tour-name' className="input"
                readOnly value={bookInfo?.['tour-name'] || ''} />
            </div>
            <div className='flex gap-4'>
                <label className="label">price</label>
               <input type="text" name='price' className="input" 
               readOnly value={bookInfo.price} />
            </div>
          <div className='flex gap-4'>
                <label className="label">Booking Date</label>
                <input type="text" name='date' className="input" 
                defaultValue={date} />
            </div>
         
     
          <div className='flex gap-4'>
                <label className="label">Buyer Name</label>
                <input type="text" name='buyer-name' 
                className="input" defaultValue={user?.displayName}/>
            </div>
          <div className='flex gap-4'>
                <label className="label">Buyer Email</label>
                <input type="text" name='buyer-email'
                 className="input" defaultValue={user?.email} />
            </div>
          <fieldset className="fieldset">
  <legend className="fieldset-legend text-start">Special Note</legend>
  <textarea className="textarea h-24" name='note' placeholder="special note"></textarea>
 
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
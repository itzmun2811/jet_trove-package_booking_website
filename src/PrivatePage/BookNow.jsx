import React, { use } from 'react';
import {  useParams } from 'react-router';
import { AuthContext } from '../context/AuthContext';
import { DataConnectError } from 'firebase/data-connect';

const BookNow = () => {
    const {id}=useParams();
 
    const {user}=use(AuthContext);
    console.log(id);

    const date= new Date().toLocaleDateString()
    return (
        <div>
            <h1>Book Now--</h1>
            <form>
<div className="bg-base-200 w-11/12 mx-auto text-center">

   
    <div className="card bg-base-100 shadow-2xl">
      <div className="card-body">
        <fieldset className="fieldset text-center font-bold text-[16px] p-4">



            <div className='flex gap-4 items-center'>
                <label className="label">Tour Name -</label>
               <input type="text" name='tour-name' className="input" />
            </div>
            <div className='flex gap-4'>
                <label className="label">price</label>
               <input type="text" name='price' className="input" placeholder="price" />
            </div>
          <div className='flex gap-4'>
                <label className="label">Booking Date</label>
                <input type="text" name='date' className="input" defaultValue={date} />
            </div>
         
     
          <div className='flex gap-4'>
                <label className="label">Buyer Name</label>
                <input type="text" name='guide-name' className="input" defaultValue={user?.name}/>
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
        <button className='btn btn-neutral w-1/2' type="submit">Book now</button>
      </div>
    </div>
  </div>
</form>
        </div>
    );
};

export default BookNow;
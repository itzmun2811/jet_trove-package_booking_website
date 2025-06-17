import React, { use } from 'react';
import img from "../assets/tour.jpg"
import axios from 'axios';
import { toast } from 'react-toastify';
import { AuthContext } from '../context/AuthContext';


const AddPackage = () => {
    const {user} =use(AuthContext)
   
     
    

     const handleFormSubmit=(e)=>{
        e.preventDefault();
        const form= e.target;
        const formdata = new FormData(form);
        const packageData= Object.fromEntries(formdata.entries());
        console.log(packageData);
        const newPackageData ={
            ...packageData,
            bookingCount:0,
        }
        console.log(newPackageData)
        axios.post("https://tour-management-server-kappa.vercel.app/addPackage",newPackageData,
       
           
        )
        .then(res=>{
            console.log(res.data.data)
            toast.success('Your Tour Package added successfully!!')
        })
        .catch(error=>{
            console.log(error)
        })
     }
    return (
        <>

  <h1 className='text-xl font-bold text-center mt-8 '>Add Tour Package</h1>
      <div>
<div className='w-[400px] mx-auto'>
    <img className='w-3/4 mx-auto' src={img} alt="" />
</div>

<form onSubmit={handleFormSubmit}>
<div className="bg-base-200 w-11/12 mx-auto text-center">

   
    <div className="card bg-base-100 shadow-2xl">
      <div className="card-body">
        <fieldset className="fieldset text-center font-bold text-[16px] p-4">



            <div className='flex gap-4 items-center'>
                <label className="label">Tour Name -</label>
               <input type="text" name='tour-name' className="input" placeholder="Tour Name" />
            </div>
            <div className='flex gap-4 items-center '>
                <label className="label">Image</label>
               <input type="text" name='image' className="input" placeholder="image" />
            </div>
            <div className='flex gap-4'>
                <label className="label">Duration</label>
               <input type="text" name='duration' className="input" placeholder="duration" />
            </div>
            <div className='flex gap-4'>
                <label className="label">Departure Location</label>
               <input type="text" name='location' className="input" placeholder="departure-Location" />
            </div>
            <div className='flex gap-4'>
                <label className="label">Destination</label>
               <input type="text" name='destination' className="input" placeholder="destination" />
            </div>
            <div className='flex gap-4'>
                <label className="label">price</label>
               <input type="text" name='price' className="input" placeholder="price" />
            </div>
          <div className='flex gap-4'>
                <label className="label">Departure Date</label>
                <input type="text" name='date' className="input" placeholder="departure-date" />
            </div>
          <div className='flex gap-4'>
                <label className="label">Package Details</label>
                <input type="text" name='details' className="input" placeholder="Package-details" />
            </div>
          <div className='flex gap-4'>
                <label className="label">Contact No</label>
                <input type="text" name='contact' className="input" placeholder="contact-no" />
            </div>
          <div className='flex gap-4'>
                <label className="label">Guide Name</label>
                <input type="text" name='guide-name' className="input" defaultValue={user.displayName} />
            </div>
          <div className='flex gap-4'>
                <label className="label">Guide Photo</label>
                <input type="text" name='guide-photo' className="input" defaultValue={user.photoURL} />
            </div>
          <div className='flex gap-4'>
                <label className="label">Guide Email</label>
                <input type="text" name='guide-email' className="input" defaultValue={user.email
                } />
            </div>
      
        </fieldset>
        <button className='btn btn-neutral w-1/2' type="submit">add package</button>
      </div>
    </div>
  </div>
</form>


      </div>
            
        </>
    );
};

export default AddPackage;
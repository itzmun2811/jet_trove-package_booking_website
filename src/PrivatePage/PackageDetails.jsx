import axios from 'axios';
import React, { use, useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router';
import { AuthContext } from '../context/AuthContext';

const PackageDetails = () => {
    const {id}=useParams()
    const [packageDetails,setPackageDetails] =useState([]);
    const{user}=use(AuthContext)
    const navigate =useNavigate();
    console.log(id);

    
  
    useEffect(()=>{
    axios.get(`http://localhost:3000/addPackage/${id}`)
    .then(result=>{
        console.log(result.data)
        setPackageDetails(result.data);
    })
    .catch(error=>{
        console.log(error)
    })
    
  },[id])
   const handleBookNow =(id)=>{
          
           axios.patch(`http://localhost:3000/addPackage/${id}`)
            .then(result=>{
                console.log("booking count updated",result.data)
                
    
            })
            .catch(error=>{
                console.log(error)
            })
            navigate(`/bookNow/${id}`)
           
   }
  
    return (
        <div className='w-11/12  mx-auto max-w-6xl '>
      {
          <div className="card lg:card-side bg-base-100 shadow-sm mt-8 mb-8">
  <figure>
    <img
      src={packageDetails.image}
      alt="Album" />
  </figure>
  <div className="card-body">

    <div className=''> 
        
                <div className='grid'>
                    <div> 
<img className='w-24 h-24 rounded-full' src={packageDetails?.['guide-photo']} alt="" />
                    </div>
                    
                      <span>Name-{packageDetails?.['guide-name']}</span>
                       <span>Contact No-{packageDetails?.contact}</span>
                </div>
                  <h2 className="card-title">Tour Name-{packageDetails?.['tour-name']}</h2>
       <div className=''>

            <h1>Duration-{packageDetails.duration}</h1>
            <h1>Price-{packageDetails.price}</h1>
            <h1>Full Description - <span className='w-2/5'>{packageDetails.details}</span></h1>
           </div>          
               

           </div>
            <div>
            <h1>Departure Location-{packageDetails.location}</h1>
            <p>Date-{packageDetails.date}</p>
            <p>Destination-{packageDetails.destination}</p>
           </div>
           <p>Booking Count-{packageDetails.bookingCount}</p>

            
  <button onClick={()=>handleBookNow(packageDetails._id)} className='btn btn-info'>
                  Book now!!! </button>
           
        
    
  </div>
</div>}
        </div>
    );
};

export default PackageDetails;
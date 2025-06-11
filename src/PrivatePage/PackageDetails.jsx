import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';

const PackageDetails = () => {
    const {id}=useParams()
    const [packageDetails,setPackageDetails] =useState([]);
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
  
    return (
        <div>
     {
        <> 
         <div>
        <h2 className="card-title">Tour Name-{packageDetails?.['tour-name']}</h2>
        <img src={packageDetails?.image} alt="" />
        </div>
            <div> Guide Info:
                <div>
                      <span>{packageDetails?.['guide-name']}</span>
                       <span>{packageDetails?.contact}</span>
                </div>
                <img src={packageDetails?.['guide-photo']} alt="" />
               

           </div>
           <div>
            <h1>Duration-</h1>
            <h1>Price-</h1>
            <h1>Full Description -</h1>
           </div>
           <div>
            <h1>Departure Location-</h1>
            <p>Date</p>
            <p>Destination</p>
           </div>
           <p>Booking Count-</p>
           <button className='btn'>
            Book now!!!
           </button>
             </>
        }
      
     
          
        </div>
    );
};

export default PackageDetails;
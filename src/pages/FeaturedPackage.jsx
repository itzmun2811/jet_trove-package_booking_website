import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Bounce, JackInTheBox, Rotate, Zoom } from 'react-awesome-reveal';
import { Navigate, useNavigate } from 'react-router';

const FeaturedPackage = () => {

    const [packages,setPackages]=useState([]);
     const navigate=useNavigate();
    
    useEffect(()=>{
        axios.get('http://localhost:3000/featuredData')
       .then(result=> {
        console.log(result.data)
          setPackages(result.data)
      })
      .catch(error=>{
        console.log(error)})
     },[])
    return (
<div className='  mx-auto'>
   <div className='shadow-lg p-2  rounded-2xl'>
     <h2 className="text-3xl font-bold text-center mt-4 pt-6 text-sky-800">Featured Tour Package</h2>
<p className="text-center text-gray-600 mb-7 w-3/4 mx-auto">
Embark on an unforgettable journey with our expertly curated travel experience. Guided by professionals, this tour offers comfort, adventure, and culture — all in one.
</p>

   </div>

           <div className=' bg-gradient-to-tr from-sky-600 to-white
            mx-auto gap-6 mt-10 grid grid-cols-1 md:grid-cols-2
             lg:grid-cols-3 items-center justify-center flex-col '>

        {
            packages.map(singlePackage=>(

            <Rotate>
 <div className=" m-10 p-6 w-80  card bg-base-200  shadow-xl rounded-xl 
  hover:scale-105">
  <figure className='flex flex-col p-4'>
 <h2 className="card-title  shadow-xl  pb-1
 text-xl font-semibold text-center my-1
 ">{singlePackage.tourName}</h2>
    <img className='w-40 h-40 object-cover rounded-t-xl shadow-lg
    '
      src={singlePackage.tourImage}
      alt="Movie" />
  </figure>

     <div className='p-4 rounded-xl shadow-lg flex  items-center justify-center'>
  <div className='"flex items-center gap-4 p-4'>
     <img  className='
     w-16 h-16 rounded-full object-cover 
     
     ' src={singlePackage.guideImage} alt="" />
    <h1 className='font-semibold'>{singlePackage.guideName}</h1>
  </div> 
  <div className='flex flex-col'>
 <h1 className='text-lg text-gray-500"'>Duration-{singlePackage?.duration}</h1>
     <h1 className='text-lg text-gray-500'>Departure Date-{singlePackage?.departureDate}</h1>
     <p className='text-lg text-gray-500 font-medium"'>Price-{singlePackage?.price}</p>
      <button className="btn btn-primary  hover:bg-purple-700 text-white w-full rounded-xl">View Details</button>
  </div>
     
     


    </div>



   
  </div>
            </Rotate>
 


            ))
        }

                
            </div>


            <button className='btn flex items-center justify-center btn-info mx-auto text-center mt-4 mb-5' onClick={()=>{navigate('/allPackages')}}>Show All</button>
            </div>
        
    );
};

export default FeaturedPackage;
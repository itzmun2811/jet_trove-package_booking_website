import React from 'react';
import { useLoaderData, useNavigate } from 'react-router';

const AllPackages = () => {

    const data = useLoaderData();
    const navigate=useNavigate()
    console.log(data)

    const handleDetails=(id)=>{
     navigate(`/packageDetails/${id}`)
     console.log(id)
    }
    return (
        <div>
            <p>All packages</p>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
{

    data.map((info)=>(
    <div className="card bg-base-100 w-96 shadow-sm">
  <figure className="px-10 pt-10">
    <img
      src={info.image}
      alt="Shoes"
      className="rounded-xl" />
  </figure>
  <div className="card-body items-center text-center">
    <h2 className="card-title">{info?.['tour-name']}</h2>
    <div className='flex'>
          <h2 className="card-title">{info?.['guide-name']}</h2>
        <img src={info?.['guide-photo']} alt="" />
    </div>
   <h2 className="card-title">{info?.duration}</h2>
    <h2 className="card-title">{info?.price}</h2>
    <h2 className="card-title">{info?.date}</h2>
    <div className="card-actions">
      <button onClick={()=>handleDetails(info._id)} className="btn btn-primary">View Details</button>
    </div>
  </div>
</div>
    ))
    
    
    
    }
 


            </div>
        </div>
    );
};

export default AllPackages;

//  Duration, Price, Departure Date, View Details.
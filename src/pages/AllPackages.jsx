import React from 'react';
import { useLoaderData } from 'react-router';

const AllPackages = () => {

    const data = useLoaderData();
    console.log(data)
    return (
        <div>
            <p>All packages</p>
            <div className='grid grid-cols-3'>
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
    <h2 className="card-title">{info?.['guide-name']}</h2>
    <h2 className="card-title">{info?.['guide-photo']}</h2>
    <h2 className="card-title">{info?.duration}</h2>
    <h2 className="card-title">{info?.price}</h2>
    <h2 className="card-title">{info?.date}</h2>
    <h2 className="card-title">{info?.details}</h2>
    
    <p>{info.destination}</p>
    <div className="card-actions">
      <button className="btn btn-primary">Buy Now</button>
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
import React, { use, useState } from 'react';
import { useLoaderData, useNavigate } from 'react-router';
import { AuthContext } from '../context/AuthContext';
import { FiSearch } from 'react-icons/fi';
import { Flip, Hinge, JackInTheBox, Rotate, Zoom } from 'react-awesome-reveal';
import axios from 'axios';

const AllPackages = () => {

    const loadedData= useLoaderData();
    const [data,setData] =useState(loadedData)
    const {user}=use(AuthContext);
    const[searchValue,setSearchValue] =useState('');
    const navigate=useNavigate();
    console.log(data)

    const handleDetails=(id)=>{
        if(user){
 navigate(`/packageDetails/${id}`)
        }
        else{
    navigate('/login')
        }
    
     console.log(id)
    }
    const handleSearchText =()=>{
        console.log('hello')
        axios.get(`http://localhost:3000/addPackage?search=${searchValue}`)
        .then(result=>{
            setData(result.data)
            console.log(result.data)
        })
        .catch(error=>{
            console.log(error)
        })
    }
    return (
        <div className='w-11/12 mx-auto'>
 <div className='shadow-lg p-2  rounded-2xl mt-4'>
     <h2 className="text-3xl font-bold text-center mt-4 pt-6 text-sky-800">
        All Packages</h2>
<p className="text-center text-gray-600 mb-2 w-3/4 mx-auto">
From beach escapes to mountain retreats, explore our hottest travel deals at unbeatable prices. Only available for a short time — act fast before they're gone!
</p>

   </div>

       <div className="flex items-center justify-center mx-auto 
       bg-white rounded-full mt-6 mb-6
       shadow-xl p-2 border-1 border-gray-400">
      <input
        type="text"
        value={searchValue}
        onChange={(e)=>setSearchValue(e.target.value)}
        placeholder="Search for desired Package "
        className=" w-3/4 px-5 py-2 text-gray-700 
        bg-transparent focus:outline-none"
      />
      <button
        type="submit" onClick={()=>handleSearchText()}
        className="flex items-center gap-1 bg-sky-600 text-white
         px-3 py-2 rounded-full hover:bg-sky-700"
      >
        <div className="w-6 h-6" >
        <span className="font-medium"><FiSearch size={25}></FiSearch></span>
        </div>
      </button>
    </div>

            <div className=' mt-4 gap-6 mb-8  mx-auto items-center justify-center
             grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
{

    data.map((info)=>(
   <Zoom>
     <div className="card w-72 mt-8  shadow-sm bg-gradient-to-tl
      from-sky-600 to-white">
  <figure className="px-6 pt-10">
    <img
      src={info.image}
      alt="Shoes"
      className="rounded-xl w-52 h-52 object-contain" />
  </figure>
  <div >
  <div className="card-body items-center text-center">
    <h2 className="card-title flex justify-center items-center">{info?.['tour-name']}</h2>
    
    <div className='shadow-2xl rounded-2xl bg-white px-7 flex flex-col justify-center items-center'>
    <div className='flex gap-4 items-center p-4 justify-center'> <h1 className='text-xl text-sky-700 font-bold '>Guide -</h1>
         
         <div>
            <img className='w-12 h-12 rounded-full' src={info?.['guide-photo']} alt="" />
          <h2 className="card-title">{info?.['guide-name']}</h2>
            </div>
       
    </div>
   <h2 className="card-title"><span className='text-sky-700 text-xl font-bold'>Duration-</span>{info?.duration}</h2>
    <h2 className="card-title"><span className='text-sky-700 text-xl font-bold'>Price-</span> {info?.price}</h2>
    <h2 className="card-title"><span className='text-sky-700 text-xl font-bold pb-2'>Date</span>{info?.date}</h2>
    <div className="card-actions">
      <button onClick={()=>handleDetails(info._id)} className="btn pb-4 mb-4 btn-primary">View Details</button>
    </div>
    </div>
    </div>

  </div>
</div>
   </Zoom>
    ))
    
    
    
    }
 


            </div>
        </div>
    );
};

export default AllPackages;

//  Duration, Price, Departure Date, View Details.
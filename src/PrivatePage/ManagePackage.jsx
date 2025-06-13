import React from 'react';
import { NavLink } from 'react-router';

const ManagePackage = () => {
    return (
        <div className='w-11/12 mx-auto max-w-6xl'>
            <h1 className='text-2xl font-bold text-center pt-8 '>Manage Your Packages</h1>
            <p className='text-lg text-gray-500 text-center pb-6'>Keep your tours fresh and exciting! Update your package info, add new destinations,
             or remove ones that are no longer active.</p>
            <div className="overflow-x-auto">
  <table className="table">
    {/* head */}
    <thead>
      <tr>
        <th></th>
        <th>Name</th>
        <th>Job</th>
        <th>Action</th>
      </tr>
    </thead>
    <tbody>
      {/* row 1 */}
      <tr className="bg-base-200">
        <th>1</th>
        <td>Cy Ganderton</td>
        <td>Quality Control Specialist</td>
        <td>
       <button className="btn" >
        <NavLink to='/updatePackage'>Update</NavLink>
    </button>
       <button className="btn">Delete</button>

        </td>
      </tr>
      {/* row 2 */}
      <tr>
        <th>2</th>
        <td>Hart Hagerty</td>
        <td>Desktop Support Technician</td>
        <td>Purple</td>
      </tr>
      {/* row 3 */}
      <tr>
        <th>3</th>
        <td>Brice Swyre</td>
        <td>Tax Accountant</td>
        <td>Red</td>
      </tr>
    </tbody>
  </table>
</div>
        </div>
    );
};

export default ManagePackage;
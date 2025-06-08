import React, { use } from 'react';
import { AuthContext } from '../context/AuthContext';
import { Link } from 'react-router';

const Login = () => {
    const {signInUser,googleSignIn}=use(AuthContext);

const handleLogin =(e)=>{
      e.preventDefault();
      const form =e.target;
    
      const email=form.email.value;
      const password=form.password.value;
      console.log(email,password);
       signInUser(email,password)
       .then(result=>{
        console.log(result.user)
       })
       .catch(error=>{
        console.log(error)
       })

      

    }

    const handleGoogleLogIn =()=>{
    googleSignIn()
    .then(result=>{
        console.log(result.user)
    })
    .catch(error=>{
        console.log(error)
    })
    }

    return (
      <div className="hero w-11/12 mx-auto ">

  <form onSubmit={handleLogin}>
<div className="card bg-base-100 lg:mt-12 lg:mb-12 shadow-2xl p-8">
      <div className="card-body">
         <h1 className="text-5xl text-teal-700 font-bold">Login now!</h1>
        <fieldset className="fieldset">
          <label className="label">Email</label>
          <input type="email" name='email' className="input" placeholder="Email" />
          <label className="label">Password</label>
          <input type="password" name='password' className="input" placeholder="Password" />
          <button type='submit' className="btn btn-info mt-4">Login</button>
        </fieldset>
       
        <p className='text-center my-2 font-semibold'>Or</p>
                <div className='flex items-center justify-center'>
                <button onClick={handleGoogleLogIn} className="btn bg-white text-black ">
                <svg aria-label="Google logo" width="16" height="16" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><g><path d="m0 0H512V512H0" fill="#fff"></path><path fill="#34a853" d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"></path><path fill="#4285f4" d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"></path><path fill="#fbbc02" d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"></path><path fill="#ea4335" d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"></path></g></svg>
                                 Login with Google
               </button>
                </div>
   <p className='border-t font-bold  mt-3 pt-3'>Just Joined to this site <Link to="/register" className='text-blue-400 font-bold m-1 border-b text-[19px]'>Register</Link>Now</p>


      </div>
    </div>

  </form>
    
  </div>
    );
};

export default Login;
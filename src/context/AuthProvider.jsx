import React, { Children, useState } from 'react';
import { AuthContext } from './AuthContext';
import { auth } from '../firebase/firebase.config';
import { createUserWithEmailAndPassword, GoogleAuthProvider, signInWithEmailAndPassword, signInWithPopup } from 'firebase/auth';




const AuthProvider = ({children}) => {
    const[user,setUser] =useState(null);
 
  const googleProvider=new GoogleAuthProvider();

    const createNewUser =(email,password)=>{
        return createUserWithEmailAndPassword(auth,email,password)
    }
    const signInUser=(email,password)=>{
        return signInWithEmailAndPassword(auth,email,password)
    }
    const googleSignIn= ()=>{
        return signInWithPopup(auth,googleProvider)

    }
const userInfo={createNewUser,
    signInUser,googleSignIn,
    user,setUser}


    return (
        <AuthContext value={userInfo}>
            {children}
        </AuthContext>
    );
};

export default AuthProvider;
import React, { Children, useState } from 'react';
import { AuthContext } from './AuthContext';


const AuthProvider = ({children}) => {

    const[user,setUser] =useState(null);
 

const info={user}
    return (
        <AuthContext value={info}>
            {children}
        </AuthContext>
    );
};

export default AuthProvider;
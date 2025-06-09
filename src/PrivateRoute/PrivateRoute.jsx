import React, { use } from 'react';
import { AuthContext } from '../context/AuthContext';
import { useLocation} from 'react-router';

const PrivateRoute = ({children}) => {
  const {user,loading}=use(AuthContext);
  const location = useLocation();

  if(!user){
    return <navigate  state={location?.pathname} to='login'></navigate>
  }
 if(loading){
return <>
<span className="loading loading-infinity loading-xs"></span>
<span className="loading loading-infinity loading-sm"></span>
<span className="loading loading-infinity loading-md"></span>

</>
 }


    return children;
};

export default PrivateRoute;
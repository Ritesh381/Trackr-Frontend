import React, { useContext } from 'react'
import { LoginContext } from '../context/Login';
import { Link } from 'react-router-dom';

function Dashboard() {
    const {isLoggedIn, user} = useContext(LoginContext);
    // if (!isLoggedIn) {
    //     return <div className='flex flex-col items-center justify-center'>
    //         Please log in to access the dashboard.
    //         <Link to="/login" className='text-blue-500'>Login</Link>
    //     </div>;
    // }


  return (
    <div>
        <h1>{user && `Hello, ${user}`}</h1>
        {/* colleges he have applied to: */}
        <div>
            
        </div>

    </div>
  )
}

export default Dashboard
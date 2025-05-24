import React, { useContext } from 'react'
import { LoginContext } from '../context/Login';
import { Link } from 'react-router-dom';

function Dashboard() {
    const {isLoggedIn, user} = useContext(LoginContext);
    if (!isLoggedIn) {
        return <div className='flex flex-col items-center justify-center'>
            Please log in to access the dashboard.
            <Link to="/login" className='text-blue-500'>Login</Link>
        </div>;
    }

  return (
    <div>
        {/* colleges he have applied to: */}
        <div>
          <h3>{user && `Hello, ${user}`}</h3>
            Dashbaord
        </div>

    </div>
  )
}

export default Dashboard
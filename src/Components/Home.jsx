import { Button } from '@mui/material';
import React from 'react'
import { Link, useNavigate } from 'react-router-dom';

function Home() {
    const navigate = useNavigate();
    return (
        <div className='bg-white mt-2 p-5 text-neutral-600'>

            <h1 className=' p-6 text-center text-2xl font-bold text-blue-500'>Welcome</h1>

            <p className=' p-3 text-center text-lg font-bold'>A full stack project</p>
            <p className=' p-3 text-center text-lg font-bold'>Simple login and signup website</p>
            <p className=' p-3 text-center text-lg font-bold'>Signup if you are new user</p>
            <p className=' p-3 text-center text-lg font-bold'>Login if your are aleardy registered</p>

            <div className='flex justify-center gap-5 p-5'>
                <Button onClick={() => navigate('/login')} variant="contained">Login</Button>
                <Button onClick={() => navigate('/signup')} variant="contained">Signup</Button>
            </div>
            <p className='text-xs font-semibold text-center text-neutral-500 pt-10'>Developed by: Om Prakash Mallik</p>

        </div>
    )
}

export default Home

import React from 'react'
import { Link } from 'react-router-dom'

function Nav() {
    return (
        <div className='bg-white flex items-center justify-between rounded px-10 py-6'>
            <Link to="/" className='text-center text-2xl font-bold text-blue-500'>User Management</Link>
            <div className='flex justify-between'>
                <Link to="/login" className='font-semibold bg-blue-500 border-solid border-2 border-blue-500 px-5 py-2 rounded mx-2 text-lg text-white'>Login</Link>
                <Link to="/signup" className='font-semibold bg-blue-500 border-solid border-2 border-blue-500 px-5 py-2 rounded mx-2 text-lg text-white'>Signup</Link>
            </div>
        </div>
    )
}

export default Nav

import { Button } from '@mui/material'
import React from 'react'
import { Link, useNavigate } from 'react-router-dom'

function Nav() {
    const navigate = useNavigate();
    return (
        <div className='bg-white flex justify-between p-5'>
            <div className='w-1/2'>
                <Link to="/" className='text-center text-xl font-bold text-blue-500'>User Management</Link>
            </div>
            <div className='w-1/2 flex justify-end gap-2'>
                <Button onClick={() => navigate('/login')} variant="contained">Login</Button>
                <Button onClick={() => navigate('/signup')} variant="contained">Signup</Button>
            </div>
        </div>
    )
}

export default Nav

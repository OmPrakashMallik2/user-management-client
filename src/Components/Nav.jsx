import React from 'react'
import { Link } from 'react-router-dom'

function Nav() {

    return (
        <div className='bg-white flex justify-center p-6'>

            <Link to="/" className='text-center text-2xl font-bold text-blue-600'>User Management</Link>

        </div>
    )
}

export default Nav

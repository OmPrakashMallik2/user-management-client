import React from 'react'
import { Link } from 'react-router-dom'

function Nav() {

    return (
        <div className='flex bg-blue-500 justify-center p-6'>

            <Link to="/" className='text-center text-2xl font-bold text-white'>User Management</Link>

        </div>
    )
}


export default Nav

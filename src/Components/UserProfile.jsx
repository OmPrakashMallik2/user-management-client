import axios from 'axios';
import React from 'react'
import { useLocation, useNavigate } from 'react-router-dom'

function UserProfile() {

    const navigate = useNavigate();

    const location = useLocation();
    const userDataProp = location.state.userData; // Access user data from location state

    const deleteUser = () => {
        axios
            .delete(`https://user-management-server-production.up.railway.app/users/${userDataProp.userId}`)
            .then(() => {
                navigate('/login')
                console.log("user deleted");
            })
    }

    return (
        <div>
            <div className='flex lg:flex-row flex-col w-full mt-2 gap-1'>

                <div className='flex flex-col items-center bg-white p-10 rounded lg:w-2/5'>
                    <img className='w-60' src="https://i.pinimg.com/564x/0c/6f/39/0c6f39dac4d7f30139a7d61ee28a2ef5.jpg" alt="user" />
                    <h1 className=' font-semibold text-neutral-700 text-3xl text-center'>{userDataProp.fullName}</h1>
                    <p className=' mt-2 text-xl text-neutral-500 text-center'>{userDataProp.bio}</p>
                    <div className='mt-5 flex justify-between'>
                        <button onClick={deleteUser} className='font-semibold bg-red-500 border-solid border-2 border-red-500 px-5 py-2 rounded text-lg mx-3 text-white'>Delete</button>
                        <button onClick={() => navigate('/login')} className='font-semibold bg-blue-500 border-solid border-2 border-blue-500 px-5 py-2 rounded text-lg mx-3 text-white'>Logout</button>
                    </div>
                </div>

                <div className='bg-white rounded lg:px-10 lg:py-5 p-5 lg:w-3/5'>
                    <div className='border-solid border-b-2 border-neutral-300 flex pb-3 my-4'>
                        <h3 className='w-2/5 text-neutral-700 text-xl font-medium'>Full Name</h3>
                        <h3 className='w-3/5 text-neutral-500 text-xl font-medium'>{userDataProp.fullName}</h3>
                    </div>
                    <div className='border-solid border-b-2 border-neutral-300 flex pb-3 my-4'>
                        <h3 className='w-2/5 text-neutral-700 text-xl font-medium'>Email</h3>
                        <h3 className='w-3/5 text-neutral-500 text-xl font-medium'>{userDataProp.email}</h3>
                    </div>
                    <div className='border-solid border-b-2 border-neutral-300 flex pb-3 my-4'>
                        <h3 className='w-2/5 text-neutral-700 text-xl font-medium'>Date of Birth</h3>
                        <h3 className='w-3/5 text-neutral-500 text-xl font-medium'>{userDataProp.dateOfBirth}</h3>
                    </div>
                    <div className='border-solid border-b-2 border-neutral-300 flex pb-3 my-4'>
                        <h3 className='w-2/5 text-neutral-700 text-xl font-medium'>Gender</h3>
                        <h3 className='w-3/5 text-neutral-500 text-xl font-medium'>{userDataProp.gender}</h3>
                    </div>
                    <div className='border-solid border-b-2 border-neutral-300 flex pb-3 my-4'>
                        <h3 className='w-2/5 text-neutral-700 text-xl font-medium'>Education</h3>
                        <h3 className='w-3/5 text-neutral-500 text-xl font-medium'>{userDataProp.qualifications}</h3>
                    </div>
                    <div className='border-solid border-b-2 border-neutral-300 flex pb-3 my-4'>
                        <h3 className='w-2/5 text-neutral-700 text-xl font-medium'>Mobile</h3>
                        <h3 className='w-3/5 text-neutral-500 text-xl font-medium'>+91 {userDataProp.contactNumber}</h3>
                    </div>
                    <div className='border-solid border-b-2 border-neutral-300 flex pb-3 my-4'>
                        <h3 className='w-2/5 text-neutral-700 text-xl font-medium'>Address</h3>
                        <h3 className='w-3/5 text-neutral-500 text-xl font-medium'>{userDataProp.address}</h3>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default UserProfile

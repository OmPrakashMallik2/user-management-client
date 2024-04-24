import { TextField } from '@mui/material';
import axios from 'axios'
import React, { useState } from 'react'

function signUpbackup() {

    const [signUp, setSingUp] = useState(false)
    const [userData, setUserData] = useState({
        fullName: '',
        email: '',
        username: '',
        password: '',
        bio: '',
        dateOfBirth: '',
        gender: '',
        qualifications: '',
        address: '',
        contactNumber: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setUserData({ ...userData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        axios
            .post("https://user-management-server-production.up.railway.app/user", userData)
            .then((res) => {
                console.log(res.data);
                setSingUp(true);
                setUserData({
                    fullName: '',
                    email: '',
                    username: '',
                    password: '',
                    bio: '',
                    dateOfBirth: '',
                    gender: '',
                    qualifications: '',
                    address: '',
                    contactNumber: ''
                });
            }).catch((err) => {
                console.error(err);
            });
    };

    const myMaxLength = 36;

    return (
        <div>
            {
                signUp ?
                    <h1 className='text-2xl font-bold text-green-500 text-center bg-white rounded mt-4 pt-5 pb-8'>User Signed up successfully!</h1>
                    :
                    <div className='w-full'>
                        <form onSubmit={handleSubmit} className='flex flex-col bg-white rounded px-10 py-5 mt-4 '>
                            <h1 className='text-2xl font-bold bg-blue-50 text-blue-500 text-center p-5 rounded mb-3'>User Registration</h1>


                            <TextField
                                required
                                id="outlined-required"
                                label="Full Name"
                                defaultValue="Hello World"
                            />

                            <div className='border-solid border-b-2 border-neutral-300 flex pb-2 my-2'>
                                <label className='w-2/5 text-neutral-700 text-xl font-medium'>Full Name</label>
                                <input type='text' name='fullName' onChange={handleChange} maxLength={myMaxLength} className='w-3/5 text-neutral-500 text-xl font-medium p-2 outline-solid outline-2 outline-blue-300' placeholder='Enter full name' required />
                            </div>
                            <div className='border-solid border-b-2 border-neutral-300 flex pb-2 my-2'>
                                <label className='w-2/5 text-neutral-700 text-xl font-medium'>Email</label>
                                <input type='email' name='email' onChange={handleChange} maxLength={myMaxLength} className='w-3/5 text-neutral-500 text-xl font-medium p-2 outline-solid outline-2 outline-blue-300' placeholder='Enter email' required />
                            </div>
                            <div className='border-solid border-b-2 border-neutral-300 flex pb-2 my-2'>
                                <label className='w-2/5 text-neutral-700 text-xl font-medium'>Username</label>
                                <input type='text' name='username' onChange={handleChange} maxLength={myMaxLength} className='w-3/5 text-neutral-500 text-xl font-medium p-2 outline-solid outline-2 outline-blue-300' placeholder='Set username' required />
                            </div>
                            <div className='border-solid border-b-2 border-neutral-300 flex pb-2 my-2'>
                                <label className='w-2/5 text-neutral-700 text-xl font-medium'>Password</label>
                                <input type='text' name='password' onChange={handleChange} minLength={8} maxLength={16} className='w-3/5 text-neutral-500 text-xl font-medium p-2 outline-solid outline-2 outline-blue-300' placeholder='Set password between 8-16 character' required />
                            </div>
                            <div className='border-solid border-b-2 border-neutral-300 flex pb-2 my-2'>
                                <label className='w-2/5 text-neutral-700 text-xl font-medium'>Bio</label>
                                <textarea type='text' name='bio' onChange={handleChange} maxLength={myMaxLength} className='w-3/5 text-neutral-500 text-xl font-medium p-2 outline-solid outline-2 outline-blue-300' placeholder='Enter bio' required />
                            </div>
                            <div className='border-solid border-b-2 border-neutral-300 flex pb-2 my-2'>
                                <label className='w-2/5 text-neutral-700 text-xl font-medium'>Date of Birth</label>
                                <input type='text' name='dateOfBirth' onChange={handleChange} maxLength={myMaxLength} className='w-3/5 text-neutral-500 text-xl font-medium p-2 outline-solid outline-2 outline-blue-300' placeholder='DD/MM/YYYY' required />
                            </div>
                            <div className='border-solid border-b-2 border-neutral-300 flex pb-2 my-2'>
                                <label className='w-2/5 text-neutral-700 text-xl font-medium'>Gender</label>
                                <input type='text' name='gender' onChange={handleChange} maxLength={myMaxLength} className='w-3/5 text-neutral-500 text-xl font-medium p-2 outline-solid outline-2 outline-blue-300' placeholder='Type your gender' required />
                            </div>
                            <div className='border-solid border-b-2 border-neutral-300 flex pb-2 my-2'>
                                <label className='w-2/5 text-neutral-700 text-xl font-medium'>Education</label>
                                <input type='text' name='qualifications' onChange={handleChange} maxLength={myMaxLength} className='w-3/5 text-neutral-500 text-xl font-medium p-2 outline-solid outline-2 outline-blue-300' placeholder='Enter qualifications' required />
                            </div>
                            <div className='border-solid border-b-2 border-neutral-300 flex pb-2 my-2'>
                                <label className='w-2/5 text-neutral-700 text-xl font-medium'>Mobile</label>
                                <input type='text' name='contactNumber' onChange={handleChange} maxLength={10} className='w-3/5 text-neutral-500 text-xl font-medium p-2 outline-solid outline-2 outline-blue-300' placeholder='Enter mobile number' required />
                            </div>
                            <div className='border-solid border-b-2 border-neutral-300 flex pb-2 my-2'>
                                <label className='w-2/5 text-neutral-700 text-xl font-medium'>Address</label>
                                <input type='text' name='address' onChange={handleChange} maxLength={myMaxLength} className='w-3/5 text-neutral-500 text-xl font-medium p-2 outline-solid outline-2 outline-blue-300' placeholder='Enter Address' required />
                            </div>

                            <button className='font-semibold bg-blue-500 border-solid border-2 border-blue-500 p-3 rounded text-lg my-3 text-white' type="submit">Submit</button>

                        </form>
                    </div>

            }
        </div>
    )
}

export default signUpbackup

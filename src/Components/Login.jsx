import { Button, TextField } from '@mui/material';
import axios from 'axios';
import React, { useState } from 'react';

function Login() {

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [problem, setProblem] = useState('')
    const [logedIn, setLogedIn] = useState(false);
    const [userData, setUserData] = useState(
        {
            userId: 0,
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
        }
    )

    const handleChange = (e) => {
        const { name, value } = e.target;
        if (name === "username") {
            setUsername(value);
        }
        if (name === "password") {
            setPassword(value);
        }
    };

    const handleSubmit = (e) => {
        console.log(username);
        console.log(password);
        e.preventDefault();
        axios
            .get(`https://user-management-server-production.up.railway.app/users/${username}/${password}`)
            .then((res) => {
                setUserData(res.data);
                setLogedIn(true);
                setProblem('');
                console.log(res.data);
            }).catch((err) => {
                console.log(err)
                setProblem("Incorrect Username and Password")
            })
        setUsername('')
        setPassword('')
    }

    const deleteUser = () => {
        axios
            .delete(`https://user-management-server-production.up.railway.app/users/${userData.userId}`)
            .then(() => {
                setLogedIn(false)
                console.log("user deleted");
            })
    }


    return (
        <div>
            {logedIn ?

                (
                    <div className='flex w-full mt-4'>

                        <div className='flex flex-col items-center bg-white p-10 mr-2 rounded w-2/5'>
                            <img className='w-60' src="https://i.pinimg.com/564x/0c/6f/39/0c6f39dac4d7f30139a7d61ee28a2ef5.jpg" alt="" />
                            <h1 className=' font-semibold text-neutral-700 text-3xl text-center'>{userData.fullName}</h1>
                            <p className=' mt-2 text-xl text-neutral-500 text-center'>{userData.bio}</p>
                            <div className='mt-5'>
                                <button onClick={deleteUser} className='font-semibold bg-red-500 border-solid border-2 border-red-500 px-5 py-2 rounded text-lg mx-3 text-white'>Delete</button>
                                <button onClick={() => setLogedIn(false)} className='font-semibold bg-blue-500 border-solid border-2 border-blue-500 px-5 py-2 rounded text-lg mx-3 text-white'>Logout</button>
                            </div>
                        </div>
                        <div className='bg-white ml-2 rounded px-10 py-5 w-3/5'>
                            <div className='border-solid border-b-2 border-neutral-300 flex pb-3 my-4'>
                                <h3 className='w-2/5 text-neutral-700 text-xl font-medium'>Full Name</h3>
                                <h3 className='w-3/5 text-neutral-500 text-xl font-medium'>{userData.fullName}</h3>
                            </div>
                            <div className='border-solid border-b-2 border-neutral-300 flex pb-3 my-4'>
                                <h3 className='w-2/5 text-neutral-700 text-xl font-medium'>Email</h3>
                                <h3 className='w-3/5 text-neutral-500 text-xl font-medium'>{userData.email}</h3>
                            </div>
                            <div className='border-solid border-b-2 border-neutral-300 flex pb-3 my-4'>
                                <h3 className='w-2/5 text-neutral-700 text-xl font-medium'>Date of Birth</h3>
                                <h3 className='w-3/5 text-neutral-500 text-xl font-medium'>{userData.dateOfBirth}</h3>
                            </div>
                            <div className='border-solid border-b-2 border-neutral-300 flex pb-3 my-4'>
                                <h3 className='w-2/5 text-neutral-700 text-xl font-medium'>Gender</h3>
                                <h3 className='w-3/5 text-neutral-500 text-xl font-medium'>{userData.gender}</h3>
                            </div>
                            <div className='border-solid border-b-2 border-neutral-300 flex pb-3 my-4'>
                                <h3 className='w-2/5 text-neutral-700 text-xl font-medium'>Education</h3>
                                <h3 className='w-3/5 text-neutral-500 text-xl font-medium'>{userData.qualifications}</h3>
                            </div>
                            <div className='border-solid border-b-2 border-neutral-300 flex pb-3 my-4'>
                                <h3 className='w-2/5 text-neutral-700 text-xl font-medium'>Mobile</h3>
                                <h3 className='w-3/5 text-neutral-500 text-xl font-medium'>+91 {userData.contactNumber}</h3>
                            </div>
                            <div className='border-solid border-b-2 border-neutral-300 flex pb-3 my-4'>
                                <h3 className='w-2/5 text-neutral-700 text-xl font-medium'>Address</h3>
                                <h3 className='w-3/5 text-neutral-500 text-xl font-medium'>{userData.address}</h3>
                            </div>

                        </div>
                    </div>
                )
                :
                (<div className='mt-4 rounded p-5 bg-white'>
                    {problem &&
                        (<h2 className='text-xl font-bold text-center text-red-500 p-4'>{problem}</h2>)
                    }
                    <form onSubmit={handleSubmit} className='flex flex-col gap-5 items-center'>
                        <h3 className='text-3xl font-bold mb-2 text-neutral-800'>Login</h3>
                        <TextField name="username" value={username} onChange={handleChange} id="outlined-basic" label="username" variant="outlined" />
                        {/* <input name="username" value={username} onChange={handleChange} type="text" className='m-2 text-xl font-semibold p-3  bg-blue-50 outline-none rounded' placeholder='Username' required /> */}
                        <TextField name="password" value={password} onChange={handleChange} id="outlined-basic" label="password" variant="outlined" />
                        {/* <input name="password" value={password} onChange={handleChange} type="password" className='m-2 text-xl font-semibold p-3  bg-blue-50 outline-none rounded' placeholder='Password' required /> */}
                        {/* <button type="submit" className='m-2 text-xl font-semibold px-6 py-3 bg-blue-500 text-white rounded'>Submit</button> */}
                        <Button type="submit" variant="contained">Login</Button>
                    </form>
                </div>)

            }
        </div>
    )
}

export default Login

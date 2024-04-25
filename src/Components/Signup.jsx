import { Button, TextField } from '@mui/material';
import axios from 'axios'
import React, { useState } from 'react'
import { styled } from '@mui/material/styles';
import { useNavigate } from 'react-router-dom';



const VisuallyHiddenInput = styled('input')({
    clip: 'rect(0 0 0 0)',
    clipPath: 'inset(50%)',
    height: 1,
    overflow: 'hidden',
    position: 'absolute',
    bottom: 0,
    left: 0,
    whiteSpace: 'nowrap',
    width: 1,
});

function Signup() {

    const navigate = useNavigate();
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
        contactNumber: '',
        image: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setUserData({ ...userData, [name]: value });
    };


    const handleSubmit = (e) => {
        console.log(userData);
        e.preventDefault();
        axios
            .post(`https://user-management-server-production.up.railway.app/user`, userData)
            .then((res) => {
                console.log(res.data);
                setSingUp(true);
            }).catch((err) => {
                console.log(err);
            });
    };

    return (
        <div>
            {
                signUp ?
                    <div className='flex flex-col items-center justify-start bg-white mt-2 p-5 gap-5'>
                        <h1 className='text-2xl font-bold text-green-600 text-center '>User registered successfully!</h1>
                        <div className='flex flex-col items-center justify-start gap-3 text-neutral-700'>
                            <p className='text-xl font-semibold'>Username: {userData.username}</p>
                            <p className='text-xl font-semibold'>Password: {userData.password}</p>
                        </div>
                        <Button variant='contained' onClick={() => navigate('/login')}>Go to login</Button>
                    </div>
                    :
                    <div className=''>
                        <form onSubmit={handleSubmit} className='flex flex-col bg-white lg:px-40 p-5 mt-2 gap-4 lg:gap-2'>
                            <h1 className='text-2xl font-bold bg-blue-50  text-center p-5 rounded mb-3'>User Registration</h1>

                            <TextField
                                required
                                id="fullName"
                                label="Full Name"
                                type='text'
                                name='fullName'
                                onChange={handleChange}
                            />

                            <TextField
                                required
                                id="email"
                                label="Email"
                                type='email'
                                name='email'
                                onChange={handleChange}
                            />

                            <TextField
                                required
                                id="username"
                                label="username"
                                type='text'
                                name='username'
                                onChange={handleChange}
                            />

                            <TextField
                                required
                                id="password"
                                label="password"
                                type='password'
                                name='password'
                                onChange={handleChange}
                            />

                            <TextField
                                required
                                id="bio"
                                label="Bio"
                                type='text'
                                name='bio'
                                onChange={handleChange}
                            />

                            <TextField
                                required
                                id="dateOfBirth"
                                label="Date of birth (DD/MM/YYYY)"
                                type='text'
                                name='dateOfBirth'
                                onChange={handleChange}
                            />

                            <TextField
                                required
                                id="gender"
                                label="Gender"
                                type='text'
                                name='gender'
                                onChange={handleChange}
                            />

                            <TextField
                                required
                                id="qualifications"
                                label="Education"
                                type='text'
                                name='qualifications'
                                onChange={handleChange}
                            />
                            <TextField
                                required
                                id="contactNumber"
                                label="Mobile Number"
                                type='text'
                                name='contactNumber'
                                onChange={handleChange}
                            />

                            <TextField
                                required
                                id="address"
                                label="Address"
                                type='text'
                                name='address'
                                onChange={handleChange}
                            />

                            <Button className='font-semibold bg-blue-500 border-solid border-2 border-blue-500 p-3 rounded text-lg my-3 text-white' variant="contained" type="submit">Submit</Button>

                        </form>
                    </div>

            }
        </div>
    )
}

export default Signup

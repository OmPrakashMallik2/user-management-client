import { Button, TextField } from '@mui/material';
import axios from 'axios'
import React, { useState } from 'react'
import { styled } from '@mui/material/styles';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';



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

    const handleImageChange = (e) => {
        const file = e.target.files[0];
        const reader = new FileReader();
        reader.onload = () => {
            setUserData({ ...userData, image: reader.result });
        };
        reader.readAsDataURL(file);
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
                    contactNumber: '',
                    image: ''
                });
            }).catch((err) => {
                console.log(err);
            });
    };

    return (
        <div>
            {
                signUp ?
                    <h1 className='text-2xl font-bold text-green-500 text-center bg-white rounded mt-2 p-5'>User Signed up successfully!</h1>
                    :
                    <div className=''>
                        <form onSubmit={handleSubmit} className='flex flex-col bg-white rounded lg:px-40 p-5 mt-2 gap-4 lg:gap-2'>
                            <h1 className='text-2xl font-bold bg-blue-50  text-center p-5 rounded mb-3'>User Registration</h1>
                            <img className='w-40' src={userData.image} alt="your-profile" />
                            <Button
                                component="label"
                                role={undefined}
                                variant="outlined"
                                tabIndex={-1}
                                startIcon={<CloudUploadIcon />}
                            >
                                Upload image
                                {/* <input type="file"  style={{ display: 'none' }} /> */}
                                <VisuallyHiddenInput accept="image/*" onChange={handleImageChange} type="file" />
                            </Button>

                            <TextField
                                required
                                id="outlined-required"
                                label="Full Name"
                                type='text'
                                name='fullName'
                                onChange={handleChange}
                            />

                            <TextField
                                required
                                id="outlined-required"
                                label="Email"
                                type='email'
                                name='email'
                                onChange={handleChange}
                            />

                            <TextField
                                required
                                id="outlined-required"
                                label="username"
                                type='text'
                                name='username'
                                onChange={handleChange}
                            />

                            <TextField
                                required
                                id="outlined-required"
                                label="password"
                                type='password'
                                name='password'
                                onChange={handleChange}
                            />

                            <TextField
                                required
                                id="outlined-required"
                                label="Bio"
                                type='text'
                                name='bio'
                                onChange={handleChange}
                            />

                            <TextField
                                required
                                id="outlined-required"
                                label="Date of birth (DD/MM/YYYY)"
                                type='text'
                                name='dateOfBirth'
                                onChange={handleChange}
                            />

                            <TextField
                                required
                                id="outlined-required"
                                label="Gender"
                                type='text'
                                name='gender'
                                onChange={handleChange}
                            />

                            <TextField
                                required
                                id="outlined-required"
                                label="Education"
                                type='text'
                                name='qualifications'
                                onChange={handleChange}
                            />
                            <TextField
                                required
                                id="outlined-required"
                                label="Mobile Number"
                                type='text'
                                name='contactNumber'
                                onChange={handleChange}
                            />

                            <TextField
                                required
                                id="outlined-required"
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

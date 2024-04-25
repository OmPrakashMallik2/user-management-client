import { Button, TextField } from '@mui/material';
import axios from 'axios';
import React, { useState } from 'react';
import UserProfile from './UserProfile';
import { useNavigate } from 'react-router-dom';

function Login() {

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [problem, setProblem] = useState('')
    const navigate = useNavigate();
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
                setProblem('');
                navigate('/profile', { state: { userData: res.data } })
                console.log(res.data);
            }).catch((err) => {
                console.log(err)
                setProblem("Incorrect Username and Password")
            })
        setUsername('')
        setPassword('')
    }


    return (
        <div >
            <div className='mt-2 rounded p-5 bg-white'>
                {problem &&
                    (<h2 className='text-xl font-bold text-center text-red-500 p-4'>{problem}</h2>)
                }
                <form onSubmit={handleSubmit} className='flex flex-col gap-5 items-center'>
                    <h3 className='text-3xl font-bold mb-2 text-neutral-800'>Login</h3>
                    <TextField name="username" value={username} onChange={handleChange} id="outlined-basic" label="username" variant="outlined" />
                    <TextField type='password' name="password" value={password} onChange={handleChange} id="outlined-basic" label="password" variant="outlined" />
                    <Button type="submit" variant="contained">Login</Button>
                </form>
            </div>
        </div>
    )
}

export default Login

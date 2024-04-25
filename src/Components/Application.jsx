import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Signup from './Signup';
import Home from './Home';
import Nav from './Nav';
import Login from './Login';
import UserProfile from './UserProfile';

function Application() {
    return (
        <div className='h-screen'>
            <Nav />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/login" element={<Login />} />
                <Route path="/signup" element={<Signup />} />
                <Route path="/profile" element={<UserProfile />} />
            </Routes>
        </div>
    );
}

export default Application;

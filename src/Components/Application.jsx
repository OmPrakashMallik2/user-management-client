import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Signup from './Signup';
import Home from './Home';
import Nav from './Nav';
import Login from './Login';

function Application() {
    return (
        <div className='mx-32 my-8'>
            <Nav />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/login" element={<Login />} />
                <Route path="/signup" element={<Signup />} />
            </Routes>
        </div>
    );
}

export default Application;

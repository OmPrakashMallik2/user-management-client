import React from 'react'
import Signin from './Signin'
import Signup from './Signup'
import { Routes, Route } from 'react-router-dom';
import User from './User';

function Application() {
    return (
        <div>
            <Routes>
                <Route path='/signup' element={< Signup />} />
                <Route path='/signin' element={< Signin />} />
                <Route path='/user' element={< User />} />
            </Routes>
        </div>
    )
}

export default Application

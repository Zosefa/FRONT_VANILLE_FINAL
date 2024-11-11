import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Front from '../front/front';
import Login from '../Login/Login';
import Dashboard from '../admin/Dashboard';
import PrivateRoute from './PrivateRoute';
const Root = () => {
  return (
    <>
        <Router>
            <Routes>
                <Route path="/" element={<Front />} />
                <Route path="/Login" element={<Login />} />
                <Route path="/Admin" element={
                        <PrivateRoute>   
                            <Dashboard />
                        </PrivateRoute>
                    } />
            </Routes>
        </Router>
    </>
  )
}

export default Root
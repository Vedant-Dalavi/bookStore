import React from 'react';
import './App.css';
import Login from './Components/Pages/Login1';
import { Routes, Route } from 'react-router-dom';
import Navbar from './Components/Common/Navbar';
import Signup from './Components/Pages/Signup';
import Home from './Components/Pages/Home';
import CreateBook from './Components/Pages/CreateBook';
import UpdateBook from './Components/Pages/UpdateBook';
import PrivateRoute from './Components/Common/PrivateRoute';

const App = () => {
  return (
    <div className="w-screen min-h-screen bg-richblack-900 flex flex-col font-inter">

      <div className="fixed z-50 w-full bg-richblack-900">
        <Navbar />
      </div>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="signup"
          element={
            <Signup />
          }
        />
        <Route
          path="login"
          element={
            <Login />
          }
        />

        <Route
          path="create-book"
          element={
            <PrivateRoute>
              <CreateBook />
            </PrivateRoute>
          }
        />
        <Route
          path="update-book"
          element={
            <PrivateRoute>
              <UpdateBook />
            </PrivateRoute>
          }
        />
      </Routes>


    </div>
  );
}

export default App;

import React from "react";
import { Routes, Route } from "react-router-dom";
import Login from "./Login";
import SignUp from "./SignUp";

const AllRoutes = () => {
    return ( 
        <div>
            <Routes>
                <Route path="/" element={<SignUp />} />
                <Route path="/login" element={<Login />}  />
            </Routes>
        </div>
     );
}
 
export default AllRoutes;
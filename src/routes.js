import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./containers/home"
import Users from "./containers/users"

function myRoutes(){

    return(
        <Router>
            <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/users" element={<Users />} />
            </Routes>
        </Router>
    )
}

export default myRoutes
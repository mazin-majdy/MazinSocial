import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Error from "./pages/Error404/Error";
import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import Profile from "./pages/profile/Profile";
import Register from "./pages/register/Register";


function App() {
  return (
    <Router>
      <Routes>
        <Route exact element={<Home />} path="/"/>
        <Route exact element={<Home />} path="/home"/>
        <Route exact element={<Login />} path="/login"/>
        <Route exact element={<Profile />} path="/profile"/>
        <Route exact element={<Register />} path="/register"/>
        <Route exact element={<Error />} path="*"/>
      </Routes>
    </Router>
  );
}

export default App;

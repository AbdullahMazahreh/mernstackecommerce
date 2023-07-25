import "./App.css";
import { Routes, Route } from "react-router-dom";
import Register from "./Pages/Register";
import Login from "./Pages/Login";
import React, { Fragment } from "react";
import Home from "./Pages/Home";
import Navbar from "./components/Navbar";
import { UserContextProvider } from "./context/userContext";

function App() {
  return (
    // <UserContextProvider>
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/register" element={<Register />}></Route>
        <Route path="/login" element={<Login />}></Route>
      </Routes>
    </>
    // </UserContextProvider>
  );
}

export default App;

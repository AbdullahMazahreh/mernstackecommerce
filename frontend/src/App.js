import React, { Fragment } from "react";
import {
  Admindashboard,
  ProductsPage,
  Main,
  Login,
  Signup,
} from "./components/Index";
import { Route, Routes, Navigate } from "react-router-dom";

function App() {
  const user = localStorage.getItem("token");

  return (
    <Fragment>
      <Routes>
        <Route path="/admin" to={<Admindashboard />}></Route>
        <Route path="/products" element={<ProductsPage />}></Route>
        {user && <Route path="/" exact element={<Main />} />}
        <Route path="/signup" exact element={<Signup />} />
        <Route path="/login" exact element={<Login />} />
        <Route path="/" element={<Navigate replace to="/login" />} />
      </Routes>
    </Fragment>
  );
}

export default App;

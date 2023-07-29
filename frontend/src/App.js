import React, { Fragment } from "react";
import {
  ProductsPage,
  Login,
  Signup,
  Admintable,
  Editfrom,
  NewProductForm,
  Landingpage,
  Navbar,
  Footer,
  MainLayout,
  CartPage,
} from "./components/Index";
import { Route, Routes, Navigate } from "react-router-dom";

function App() {
  const user = localStorage.getItem("token");

  return (
    <Fragment>
      <Navbar />
      <Routes>
        <Route element={<MainLayout />} />
        <Route path="/home" element={<Landingpage />}></Route>
        <Route path="/cart" element={<CartPage />} />
        <Route path="/products" element={<ProductsPage />}></Route>
        {/* {user && <Route path="/" exact element={<Main />} />} */}
        <Route path="/signup" exact element={<Signup />} />
        <Route path="/login" exact element={<Login />} />
        <Route path="/" element={<Navigate replace to="/login" />} />
        <Route path="/admin/vendor-products" element={<Admintable />}></Route>
        <Route
          path="/vendor-products/edit/:userId"
          element={<Editfrom />}
        ></Route>
        <Route
          path="/vendor-products/addproduct"
          element={<NewProductForm />}
        ></Route>
      </Routes>
      <Footer />
    </Fragment>
  );
}

export default App;

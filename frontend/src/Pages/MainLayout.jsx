import { Outlet } from "react-router-dom";
import { CartProvider } from "../context/cartContext";
import NavBar from "../components/navbar/Navbar";
import Footer from "../components/footer/Footer";
//out let is the active rout
function MainLayout() {
  return (
    <div>
      <CartProvider>
        <NavBar />
        <Outlet />
        <Footer />
      </CartProvider>
    </div>
  );
}

export default MainLayout;

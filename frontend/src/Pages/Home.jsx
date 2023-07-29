import { CartProvider } from "../context/cartContext";

const Main = () => {
  const handleLogout = () => {
    localStorage.removeItem("token");
    window.location.reload();
  };

  return (
    <div>
      <nav>
        <CartProvider>
          <h1>fakebook</h1>
          <button onClick={handleLogout}>Logout</button>
        </CartProvider>
      </nav>
    </div>
  );
};

export default Main;

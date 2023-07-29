import Cart from "../components/cart/Cart";
import { CartProvider } from "../context/cartContext";
function CartPage() {
  return (
    <>
      <CartProvider>
        <Cart />
      </CartProvider>
    </>
  );
}

export default CartPage;

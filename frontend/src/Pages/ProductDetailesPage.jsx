import { CartProvider } from "../context/cartContext";
import axios from "axios";
import { useParams } from "react-router-dom";

function ProductPage({ product }) {
  const { addItem } = useContext(CartContext);
  const [product, setProduct] = useState({});
  //using useParams to get the id from router (:id)
  const { id } = useParams();
  //making useEffect to get a product by his id  from api
  useEffect(() => {
    axios
      .get(`https://makeup-api.herokuapp.com/api/v1/products/${id}.json`)
      .then(({ data }) => {
        setProduct(data); //{object}
      })
      .catch((err) => console.log(err));
  }, [id]);
  //product?.brand means if product exist give me his brand
  return (
    <CartProvider>
      <button
        onClick={() =>
          addItem({
            // name: product.name,
            image: product.image_link,
            quantity: 1,
            price: product.price,
            id: product.id,
          })
        }
      >
        Add to cart
      </button>
    </CartProvider>
  );
}
export default ProductPage;

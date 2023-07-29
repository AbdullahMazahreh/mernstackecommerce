import React, { Fragment } from "react";
import { useContext } from "react";
import CartContext from "../../context/cartContext";
function ProductCard({ product }) {
  const { addItem } = useContext(CartContext);
  return (
    <Fragment>
      <div className="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
        <a href="/">
          <img
            className="p-8 rounded-t-lg"
            src="/docs/images/products/apple-watch.png"
            alt="product"
          />
        </a>
        <div className="px-5 pb-5">
          <a href="/">
            <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
              {product.productname}
            </h5>
          </a>
          <div className="flex items-center justify-between">
            <span className="text-3xl font-bold text-gray-900 dark:text-white">
              {product.price}$
            </span>
            <button
              onClick={() =>
                addItem({
                  name: product.productname,
                  image: product.image_link,
                  quantity: 1,
                  price: product.price,
                  id: product.id,
                })
              }
              className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Add to cart
            </button>
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default ProductCard;

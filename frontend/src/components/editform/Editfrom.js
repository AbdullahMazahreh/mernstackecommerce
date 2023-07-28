import React, { Fragment, useEffect, useState } from "react";
import "./editform.css";
import { Textarea, Input, Select, Button } from "../Index";
import axios from "axios";
import { useNavigate, useParams, Link } from "react-router-dom";

function Editfrom({ setRefresh, refresh }) {
  const [nameValue, setNameValue] = useState("");
  const [categoryValue, setCategoryValue] = useState("");
  const [descriptionValue, setDescriptionValue] = useState("");
  const [quantityValue, setQuantityValue] = useState("");
  const [imageValue, setImageValue] = useState("");
  const [priceValue, setPriceValue] = useState("");
  const { userId } = useParams();

  const navigate = useNavigate();

  const fetchOneProduct = async () => {
    try {
      const data = await axios.get(
        `http://localhost:3001/vendor-products/edit?id=${userId}`
      );
      setNameValue(data.data.data.product[0].productname);
      setDescriptionValue(data.data.data.product[0].description);
      setQuantityValue(data.data.data.product[0].quantity);
      setImageValue(data.data.data.product[0].image);
      setPriceValue(data.data.data.product[0].price);
    } catch (err) {
      console.log(err);
    }
  };

  const updateOneProduct = async () => {
    try {
      await axios.patch(
        `http://localhost:3001/vendor-products/edit?id=${userId}`,
        {
          productname: nameValue,
          description: descriptionValue,
          price: priceValue,
          quantity: quantityValue,
          image: imageValue,
        }
      );
      setRefresh(!refresh);
      navigate("/vendor-products");
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchOneProduct();
  }, []);

  return (
    <Fragment>
      <button
        data-drawer-target="logo-sidebar"
        data-drawer-toggle="logo-sidebar"
        aria-controls="logo-sidebar"
        type="button"
        className="inline-flex items-center p-2 mt-2 ml-3 text-sm text-gray-500 rounded-lg sm:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
      >
        <span className="sr-only">Open Sidebar</span>
        <svg
          className="w-6 h-6"
          aria-hidden="true"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            clipRule="evenodd"
            fillRule="evenodd"
            d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"
          />
        </svg>
      </button>
      <div className="admin-container">
        <aside
          id="logo-sidebar"
          className="sticky top-0 left-0 z-40 w-64 h-screen transition-transform -translate-x-full sm:translate-x-0"
          aria-label="Sidebar"
        >
          <div className="h-full px-3 py-4 overflow-y-auto bg-gray-50 dark:bg-gray-800">
            {/* <a
            href="https://flowbite.com/"
            className="flex items-center pl-2.5 mb-5"
          >
            <img
              src="https://flowbite.com/docs/images/logo.svg"
              className="h-6 mr-3 sm:h-7"
              alt="Flowbite Logo"
            />
            <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">
              Flowbite
            </span>
          </a> */}
            <ul className="space-y-2 font-medium">
              <li>
                <Link
                  to="/admin/vendor-products"
                  className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
                >
                  <svg
                    className="w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 22 21"
                  >
                    <path d="M16.975 11H10V4.025a1 1 0 0 0-1.066-.998 8.5 8.5 0 1 0 9.039 9.039.999.999 0 0 0-1-1.066h.002Z" />
                    <path d="M12.5 0c-.157 0-.311.01-.565.027A1 1 0 0 0 11 1.02V10h8.975a1 1 0 0 0 1-.935c.013-.188.028-.374.028-.565A8.51 8.51 0 0 0 12.5 0Z" />
                  </svg>
                  <span className="ml-3">Dashboard</span>
                </Link>
              </li>
              <li>
                <a
                  href="/"
                  className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
                >
                  <svg
                    className="flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 18 16"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M1 8h11m0 0L8 4m4 4-4 4m4-11h3a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2h-3"
                    />
                  </svg>
                  <span className="flex-1 ml-3 whitespace-nowrap">
                    Sign Out
                  </span>
                </a>
              </li>
            </ul>
          </div>
        </aside>

        <div className="p-4 sm:ml-64">
          <Input
            type="text"
            label="Product Name"
            inputValue={nameValue}
            setInputValue={setNameValue}
          />
          <Select
            label="Product Category"
            inputValue={categoryValue}
            setInputValue={setCategoryValue}
          />
          <Textarea
            label="Product Description"
            inputValue={descriptionValue}
            setInputValue={setDescriptionValue}
          />
          <Input
            type="number"
            label="Product Quantity"
            inputValue={quantityValue}
            setInputValue={setQuantityValue}
          />
          <Input
            type="file"
            label="Product Image"
            setInputValue={setImageValue}
          />
          <Input
            type="number"
            label="Product Price"
            inputValue={priceValue}
            setInputValue={setPriceValue}
          />
          <Button
            clickFunction={updateOneProduct}
            placeholder="Edit Product"
            color="green"
          />
        </div>
      </div>
    </Fragment>
  );
}

export default Editfrom;

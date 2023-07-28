import React, { Fragment, useContext } from "react";
import "./navbar.css";
import { Button } from "../Index";
import { UserContext } from "../../context/userContext";
import { useNavigate, Link } from "react-router-dom";

function Navbar() {
  const { isSignedIn, userId, setIsSignedIn } = useContext(UserContext);
  const naviagte = useNavigate();
  const logoutHandler = () => {
    setIsSignedIn(false);
    naviagte("/login");
  };

  return (
    <Fragment>
      <nav class="bg-gray-50 border-gray-200 dark:bg-gray-900">
        <div class="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl p-4">
          <a href="https://flowbite.com" class="flex items-center">
            <img
              src="https://flowbite.com/docs/images/logo.svg"
              class="h-8 mr-3"
              alt="Flowbite Logo"
            />
            <span class="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
              Flowbite
            </span>
          </a>
          <div class="flex items-center">
            {!isSignedIn ? (
              <Link
                to="signup"
                class="text-lg text-blue-600 dark:text-blue-500 hover:underline"
              >
                <Button placeholder="Login" color="gray" />
              </Link>
            ) : (
              <div>
                {userId.username}
                <Button
                  placeholder="Log Out"
                  color="gray"
                  clickFunction={logoutHandler}
                />
              </div>
            )}
          </div>
        </div>
      </nav>
      <nav class="custom-bg-color dark:bg-gray-700">
        <div class="max-w-screen-xl px-4 py-3 mx-auto">
          <div class="flex items-center">
            <ul class="flex flex-row font-medium mt-0 mr-6 space-x-8 text-sm">
              <li>
                <Link
                  to="/home"
                  class="text-white dark:text-white hover:underline"
                  aria-current="page"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/products"
                  class="text-white dark:text-white hover:underline"
                >
                  Products
                </Link>
              </li>
              <li>
                <a href="/" class="text-white dark:text-white hover:underline">
                  Cart
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </Fragment>
  );
}

export default Navbar;

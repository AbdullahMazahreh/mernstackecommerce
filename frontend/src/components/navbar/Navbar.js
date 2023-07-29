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
          <a href="/home" class="flex items-center">
            <img
              src="https://cdn.discordapp.com/attachments/1126044590454087792/1134841377591672842/Minimalist_Letter_Initial_Technology_Logo_4.png"
              classname="h-5 mr-3 "
              style={{ height: "80px" }}
              alt="logo"
            />

            <span class="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
              &nbsp; Zone Tech
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
                <Link
                  to="/cart"
                  class="text-white dark:text-white hover:underline"
                >
                  Cart
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </Fragment>
  );
}

export default Navbar;

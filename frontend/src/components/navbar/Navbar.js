import React, { Fragment } from "react";
import "./navbar.css"
import { Button } from "../Index";

function Navbar() {
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
            <a
              href="/"
              class="text-lg text-blue-600 dark:text-blue-500 hover:underline"
            >
              <Button placeholder="Login" color="gray"/>
            </a>
          </div>
        </div>
      </nav>
      <nav class="custom-bg-color dark:bg-gray-700">
        <div class="max-w-screen-xl px-4 py-3 mx-auto">
          <div class="flex items-center">
            <ul class="flex flex-row font-medium mt-0 mr-6 space-x-8 text-sm">
              <li>
                <a
                  href="/"
                  class="text-white dark:text-white hover:underline"
                  aria-current="page"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="/"
                  class="text-white dark:text-white hover:underline"
                >
                  Company
                </a>
              </li>
              <li>
                <a
                  href="/"
                  class="text-white dark:text-white hover:underline"
                >
                  Team
                </a>
              </li>
              <li>
                <a
                  href="/"
                  class="text-white dark:text-white hover:underline"
                >
                  Features
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

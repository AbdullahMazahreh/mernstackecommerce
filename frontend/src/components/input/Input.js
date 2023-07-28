import React, { Fragment } from "react";
import "./input.css";

function Input({ label, inputValue, setInputValue, type }) {
  return (
    <Fragment>
      <div class="mb-6">
        <label
          for="default-input"
          class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
        >
          {label}
        </label>
        <input
          type={type}
          id="default-input"
          class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          placeholder={label}
        />
      </div>
    </Fragment>
  );
}

export default Input;

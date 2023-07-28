import React, { Fragment } from "react";
import "./button.css";

function Button({ clickFunction, placeholder, color }) {
  return (
    <Fragment>
      <button
        type="button"
        class={`focus:outline-none text-white bg-${color}-700 hover:bg-${color}-800 focus:ring-4 focus:ring-${color}-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-${color}-600 dark:hover:bg-${color}-700 dark:focus:ring-${color}-800`}
        onClick={clickFunction}
      >
        {placeholder}
      </button>
    </Fragment>
  );
}

export default Button;

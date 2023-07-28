import React, { Fragment } from "react";
import "./admintable.css";
import { AdminTableProduct } from "../Index";
import { Button } from "../Index";
import { Link } from "react-router-dom";

function Admintable({ products, setRefresh, refresh }) {
  const displayProducts = products.map((ele) => {
    return (
      <AdminTableProduct
        id={ele._id}
        key={ele._id}
        ele={ele}
        setRefresh={setRefresh}
        refresh={refresh}
      />
    );
  });

  return (
    <Fragment>
      <Link to="/vendor-products/addproduct">
        <Button placeholder="Add New Product" color="blue" />
      </Link>
      <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
        <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="px-6 py-3">
                Product name
              </th>
              <th scope="col" className="px-6 py-3">
                Category
              </th>
              <th scope="col" className="px-6 py-3">
                Description
              </th>
              <th scope="col" className="px-6 py-3">
                image
              </th>
              <th scope="col" className="px-6 py-3">
                quantity
              </th>
              <th scope="col" className="px-6 py-3">
                Price
              </th>
              <th scope="col" className="px-6 py-3">
                Action
              </th>
            </tr>
          </thead>
          <tbody>{displayProducts}</tbody>
        </table>
      </div>
    </Fragment>
  );
}

export default Admintable;

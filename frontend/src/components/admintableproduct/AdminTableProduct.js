import React, { Fragment } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import Swal from "sweetalert2";

function AdminTableProduct({ id, ele, refresh, setRefresh }) {
  const navigate = useNavigate();

  const deleteProductHandler = () => {
    try {
      Swal.fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!",
      })
        .then(async (result) => {
          if (result.isConfirmed) {
            Swal.fire("Deleted!", "Your file has been deleted.", "success");
            await axios.delete(`http://localhost:3001/vendor-products/${id}`);
            setRefresh(!refresh);
            navigate("/vendor-products");
          }
        })
        .catch((err) => console.log(err));
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <Fragment>
      <tr className="bg-white border-b dark:bg-gray-900 dark:border-gray-700">
        <th
          scope="row"
          className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
        >
          {ele.productname}
        </th>
        <td className="px-6 py-4">{ele.category}</td>
        <td className="px-6 py-4">{ele.description}</td>
        <td className="px-6 py-4">{ele.image}</td>
        <td className="px-6 py-4">{ele.quantity}</td>
        <td className="px-6 py-4">{ele.price}</td>
        <td className="px-6 py-4 flex space-x-2">
          <Link
            to={`/vendor-products/edit/${id}`}
            className="font-medium text-green-400 dark:text-blue-500 hover:underline"
          >
            Edit
          </Link>
          <Link
            href="/"
            className="font-medium text-red-500 dark:text-blue-500 hover:underline"
            onClick={() => deleteProductHandler()}
          >
            Delete
          </Link>
        </td>
      </tr>
    </Fragment>
  );
}

export default AdminTableProduct;

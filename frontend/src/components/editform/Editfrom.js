import React, { Fragment, useEffect, useState } from "react";
import "./editform.css";
import { Textarea, Input, Select, Button } from "../Index";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

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
    </Fragment>
  );
}

export default Editfrom;

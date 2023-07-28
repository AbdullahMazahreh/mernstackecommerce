import React, { Fragment, useState } from "react";
import { Textarea, Input, Select, Button } from "../Index";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function NewProductForm({ setRefresh, refresh }) {
  const [nameValue, setNameValue] = useState("");
  const [categoryValue, setCategoryValue] = useState("");
  const [descriptionValue, setDescriptionValue] = useState("");
  const [quantityValue, setQuantityValue] = useState("");
  const [imageValue, setImageValue] = useState("");
  const [priceValue, setPriceValue] = useState("");

  const id = "64bbf0cd7a6103445d20d069";

  const addNewProductHandler = async () => {
    try {
      await axios.post(`http://localhost:3001/vendor-products`, {
        productname: nameValue,
        description: descriptionValue,
        price: priceValue,
        category: "cat",
        quantity: quantityValue,
        image: imageValue,
        vendor: id,
      });
      setRefresh(!refresh);
      navigate("/vendor-products");
    } catch (err) {
      console.log(err);
    }
  };

  const navigate = useNavigate();

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
        type="text"
        label="Product Image"
        inputValue={imageValue}
        setInputValue={setImageValue}
      />
      <Input
        type="number"
        label="Product Price"
        inputValue={priceValue}
        setInputValue={setPriceValue}
      />
      <Button
        clickFunction={addNewProductHandler}
        placeholder="Add Product"
        color="green"
      />
    </Fragment>
  );
}

export default NewProductForm;

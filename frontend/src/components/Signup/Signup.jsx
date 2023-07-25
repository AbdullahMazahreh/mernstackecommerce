// collection of your components page
import axios from "axios";
import React, { useState } from "react";
import "./Signup.css";

function SignUp() {
  const [username, setUserName] = useState();
  const [password, setPassword] = useState();
  const [email, setEmail] = useState();
  const [address, setAddress] = useState();
  const [country, setCountry] = useState();
  const [phone, setPhone] = useState();
  const [postalCode, SetPostalCode] = useState();
  const [city, setCity] = useState();
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { data: user } = await axios.post("http://localhost:3001/users", {
        username,
        password,
        email,
        city,
        postalCode,
        phone,
        country,
        address,
      });

      await axios.post("http://localhost:3001/carts", {
        userId: user.id,
        cartItems: [],
      });
      // navigate to the sign in
      console.log("done");
    } catch (err) {
      console.log(err);
    }

    validateEmail();
    validatePassword();

    // Additional logic for submitting the form if validation passes
    if (!emailError && !passwordError) {
      // Submit the form or perform other actions
      console.log("Form submitted");
    }
  };

  const validateEmail = () => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setEmailError("Please enter a valid email");
    } else {
      setEmailError("");
    }
  };

  const validatePassword = () => {
    if (!password || password.length < 6) {
      setPasswordError("Password must be at least 6 characters long");
    } else {
      setPasswordError("");
    }
  };

  return (
    <section className="containerOfContainer">
      <section className="container-">
        <h1 className="h1-"> SignUp</h1>
        <form className="form-" onSubmit={handleSubmit}>
          <input
            className="username input-"
            type="text"
            onChange={(e) => setUserName(e.target.value)}
            required
            placeholder="username"
          />
          <div className="emailerror">
            <input
              className="email input-"
              type="email"
              onChange={(e) => setEmail(e.target.value)}
              onBlur={validateEmail}
              required
              placeholder="Email"
            />{" "}
            <br /> {emailError && <div className="error">{emailError}</div>}
          </div>

          <div className="passworerror">
            <input
              className="password input-"
              type="password"
              onChange={(e) => setPassword(e.target.value)}
              onBlur={validatePassword}
              required
              placeholder="Password"
            ></input>
            <label htmlFor="" id="password error">
              {passwordError && <div className="error">{passwordError}</div>}
            </label>
          </div>

          <input
            className="country input-"
            type="text"
            onChange={(e) => setCountry(e.target.value)}
            required
            placeholder="Country"
          />
          <input
            type="text"
            onChange={(e) => setAddress(e.target.value)}
            required
            placeholder="Address"
            className="address input-"
          />
          <input
            type="text"
            onChange={(e) => setCity(e.target.value)}
            required
            placeholder="City"
            className="city input-"
          />

          <input
            type="text"
            onChange={(e) => SetPostalCode(e.target.value)}
            required
            placeholder=" Postal Code"
            className="postal"
          />
          <input
            type="text"
            onChange={(e) => setPhone(e.target.value)}
            required
            placeholder="Phone"
            className="phone input-"
          />

          <button className="button-">Sign Up </button>
          <div className="word">
            I have an account already <a href="">SignIn</a>
          </div>
        </form>
      </section>
    </section>
  );
}

export default SignUp;
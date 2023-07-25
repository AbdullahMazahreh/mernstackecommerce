import axios from "axios";
import React, { useState } from "react";
function Register() {
  const [data, setData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");

  const registerUser = async (e) => {
    e.preventDefault();
    try {
      const { data: user } = await axios.post("http://localhost:3001/users", {
        // data.name,
        // password,
        // email,
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

    // validateEmail();
    // validatePassword();

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
    <div>
      <section className="containerOfContainer">
        <section className="container-">
          <h1 className="h1-"> SignUp</h1>
          <form className="form-" onSubmit={registerUser}>
            <input
              className="username input-"
              type="text"
              value={data.name}
              onChange={(e) => setData({ ...data, name: e.target.value })}
              required
              placeholder="username"
            />
            <div className="emailerror">
              <input
                className="email input-"
                type="email"
                value={data.email}
                onChange={(e) => setData({ ...data, email: e.target.value })}
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
                value={data.password}
                onChange={(e) => setData({ ...data, password: e.target.value })}
                onBlur={validatePassword}
                required
                placeholder="Password"
              ></input>
              <label htmlFor="" id="password error">
                {passwordError && <div className="error">{passwordError}</div>}
              </label>
            </div>

            <button className="button-">Sign Up </button>
            <div className="word">
              I have an account already <a href="">SignIn</a>
            </div>
          </form>
        </section>
      </section>
    </div>
  );
}

export default Register;

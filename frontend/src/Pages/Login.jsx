import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import axios from "axios";

function Login() {
  const navigate = useNavigate();
  const [data, setData] = useState({
    email: "",
    password: "",
  });

  const [err, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    // get  the current user
    try {
      const { data: user } = await axios
        .get
        // `http://localhost:3001/users?email=${email}&password=${password}`
        ();

      if (user.length === 0) return setError(true);

      // save the user in local storage
      localStorage.setItem("user", JSON.stringify(user[0])); // user[0] is an object{}
      console.log(user);
      navigate("/home");
      // navigate to new page
    } catch (err) {
      console.log(err);
      setError("email or user is not valid");
    }
  };

  return (
    <section className="containerOfContainer">
      <section className="container-">
        <h1 className="h1-"> Login </h1>
        <form className="form-" onSubmit={handleSubmit}>
          <input
            className="email input-"
            type="email"
            value={data.email}
            onChange={(e) => setData({ ...data, email: e.target.value })}
            required
            placeholder="Email"
          />
          <input
            className="password input-"
            type="password"
            value={data.password}
            onChange={(e) => setData({ ...data, password: e.target.value })}
            required
            placeholder="Password"
          ></input>

          <div className="er"> {err && <p>email or user is not valid</p>}</div>
          <button className="button" type="submit">
            Submit
          </button>

          <div className="word-">
            I don't have an account <a href="">Sign Up</a>
          </div>
        </form>
      </section>
    </section>
  );
}

export default Login;

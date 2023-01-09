import React, { Component, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../../css/login.css";
import axios from "axios";

const Login = () => {
  const [_userName, setUsername] = useState("");
  const [_password, setPassword] = useState("");
  const navigate = useNavigate()

  const handleSubmit = (event) => {
    event.preventDefault();
    axios
      .post("http://localhost:8000/login", { _userName, _password })
      .then((response) => {
        const token = response.data.token;
        localStorage.setItem("jwt", token);
        navigate("/dashboard")
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <div id="loginpagecontainer">
      <div className="loginbox">
        <form className="loginform" onSubmit={handleSubmit} autocomplete="off">
          <h2 className="loginh2"> Login </h2>
          <div className="logininputBox">
            <input
              className="logininput"
              type="text"
              required
              value={_userName}
              onChange={(event) => setUsername(event.target.value)}
            />
            <span className="loginspan">Username</span>
            <i className="logini"></i>
          </div>

          <div className="logininputBox">
            <input
              className="logininput"
              type="password"
              required
              value={_password}
              onChange={(event) => setPassword(event.target.value)}
            />
            <span className="loginspan">password</span>
            <i className="logini"></i>
          </div>

          <input className="logininput" type="submit" value="Login" />

          <div className="loginlinks">
            <font size="9">
              <Link className="loginlink" to="/forgot">
                Olvidaste la Contraseña?{" "}
              </Link>
              <Link className="loginlink" to="/signup">
                Registrarse
              </Link>
            </font>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;

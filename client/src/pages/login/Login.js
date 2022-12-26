import React, { Component } from "react";
import '../../css/login.css'

export default class Login extends Component {
  render() {
    return (
      <div id="loginpagecontainer">
        <div class="loginContainer">
          <h2 class="t-center">Login</h2>
          <form action="">
            <div class="inputDiv">
              <label for="name" class="username">
                Username
              </label>
              <div class="userArea">
                <i class="fa-solid fa-user"></i>
                <input
                  type="text"
                  name="name"
                  id="name"
                  placeholder="Type your username"
                />
              </div>
              <hr />
            </div>
            <div class="inputDiv">
              <label for="password" class="username">
                Password
              </label>
              <div class="userArea">
                <i class="fa-solid fa-key"></i>
                <input
                  type="password"
                  name="password"
                  id="password"
                  placeholder="Type your password"
                />
              </div>
              <hr />
            </div>

            <span class="forgotPassword">Forgot password?</span>
            <button class="btn">Login</button>
          </form>
        </div>
      </div>
    );
  }
}

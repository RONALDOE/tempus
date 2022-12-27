import React, { Component } from "react";
import '../../css/login.css'
import {Link} from "react-router-dom"

export default class Login extends Component {
  render() {
    return (
      <div id="loginpagecontainer">
        <div className="box">
            <form className="loginform" action=""
                autocomplete="off"> 
                <h2 className="loginh2"> Login </h2>
                <div className="inputBox">
                    <input className="logininput" type="text"
                    required />
                    <span className="loginspan">Nombre</span><i className="logini"></i>
                </div>

                <div class="inputBox">
                    <input className="logininput" type="password"
                    required />
                    <span className="loginspan">Contraseña</span><i className="logini"></i>
                </div>

                <div className="links">
                    <font size="9"> 
                        <a className="logina" href="#">Olvidaste la Contraseña? </a>
                        <Link className="logina" to="/register.js">Registrarse</Link>
                    </font>
                </div>
                    <input className="logininput" type="submit"
                    value="Login"/>
            </form>
        </div> 
      </div>
    );
  }
}

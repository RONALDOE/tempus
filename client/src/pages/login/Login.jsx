import React, { Component } from "react";
import {Link} from 'react-router-dom';
import '../../css/login.css';

export default class Login extends Component {
  render() {
    return (
      <div id="loginpagecontainer">
        <div className="loginbox">
            <form className="loginform" action=""
                autocomplete="off"> 
                <h2 className="loginh2"> Login </h2>
                <div className="logininputBox">
                    <input className="logininput" type="text" required  />
                    <span className="loginspan">Nombre</span><i className="logini"></i>
                </div>

                <div class="logininputBox">
                    <input className="logininput" type="password" required />
                    <span className="loginspan">Contraseña</span><i className="logini"></i>
                </div>

                    <input className="logininput" type="submit"
                    value="Login"/>

                <div className="loginlinks">
                    <font size="9"> 
                        <Link className="loginlink" to="/forgot">Olvidaste la Contraseña? </Link>
                        <Link className="loginlink" to="/signup">Registrarse</Link>
                    </font>
                </div>
            </form>
        </div> 
      </div>
    );
  }
}

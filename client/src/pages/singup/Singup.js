import React, { Component } from "react";
import '../../css/signup.css';
import {Link} from 'react-router-dom';

export default class Signup extends Component {
  render() {
    return (
      <div id="singuppagecontainer">
        <div className="singupbox">
            <form className="singupform" action=""
                autocomplete="off"> 
                <h2 className="singuph2"> Sign Up </h2>
                <div className="singupinputBox">
                    <input className="singupinput" type="text"
                    required />
                    <span className="singupspan">Nombre</span><i className="singupi"></i>
                </div>

                <div className="singupinputBox">
                    <input className="singupinput" type="email"
                    required />
                    <span className="singupspan">E-mail</span><i className="singupi"></i>
                </div>

                <div class="singupinputBox">
                    <input className="singupinput" type="password"
                    required />
                    <span className="singupspan">Contraseña</span><i className="singupi"></i>
                </div>

                <div className="links">
                    <font size="9"> 
                        <Link className="signuplink" to="#">Ya dispones de un usuario? </Link>
                        <Link className="signuplink" to="/login">Log In</Link>
                    </font>
                </div>

                    <input className="singupinput" type="submit"
                    value="Registrarse"/>
            </form>
        </div> 
      </div>
    );
  }
}
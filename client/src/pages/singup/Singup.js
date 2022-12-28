import React, { Component } from "react";
import '../../css/signup.css';
import {Link} from 'react-router-dom';

export default class Signup extends Component {
  render() {
    return (
      <div id="signuppagecontainer">
        <div className="signupbox">
            <form className="signupform" action=""
                autocomplete="off"> 
                <h2 className="signuph2"> Sign Up </h2>
                <div className="signupinputBox">
                    <input className="signupinput" type="text"
                    required />
                    <span className="signupspan">Nombre</span><i className="signupi"></i>
                </div>

                <div className="signupinputBox">
                    <input className="signupinput" type="email"
                    required />
                    <span className="signupspan">E-mail</span><i className="signupi"></i>
                </div>

                <div class="signupinputBox">
                    <input className="signupinput" type="password"
                    required />
                    <span className="signupspan">Contraseña</span><i className="signupi"></i>
                </div>

                    <input className="signupinput" type="submit"
                    value="Registrarse"/>
                    
                <div className="signuplinks">
                    <font size="9"> 
                        <Link className="signuplink" to="#">Ya dispones de un usuario? </Link>
                        <Link className="signuplink" to="/login">Login</Link>
                    </font>
                </div>

            </form>
        </div> 
      </div>
    );
  }
}
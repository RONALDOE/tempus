import React, { Component } from "react";
import '../../css/signup.css'

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

                <div className="singuplinks">
                    <font size="9"> 
                        <a href="#">Ya dispones de un usuario? </a>
                        <a href="/login">Log In</a>
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
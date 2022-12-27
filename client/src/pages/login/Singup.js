import React, { Component } from "react";
import '../../css/signup.css'

export default class Signup extends Component {
  render() {
    return (
      <div id="registerpagecontainer">
        <div className="box">
            <form className="registerform" action=""
                autocomplete="off"> 
                <h2 className="registerh2"> Sign Up </h2>
                <div className="inputBox">
                    <input className="registerinput" type="text"
                    required />
                    <span className="registerspan">Nombre</span><i className="registeri"></i>
                </div>

                <div className="inputBox">
                    <input className="registerinput" type="email"
                    required />
                    <span className="registerspan">E-mail</span><i className="registeri"></i>
                </div>

                <div class="inputBox">
                    <input className="registerinput" type="password"
                    required />
                    <span className="registerspan">Contraseña</span><i className="registeri"></i>
                </div>

                    <input className="registerinput" type="submit"
                    value="Registrarse"/>
            </form>
        </div> 
      </div>
    );
  }
}
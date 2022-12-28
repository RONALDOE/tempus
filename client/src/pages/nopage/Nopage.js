import React, { Component } from "react";
import { Link } from "react-router-dom";
import "../../css/nopage.css";

export default class Nopage extends Component {
  render() {
    return (
      <div className="404container">
        <div className="nopageimage" />
        <div className="nopagetexts">
          <h3 className="nopageh2">Me parece que estás perdido...</h3>
          <p>La página que buscas no está habilitada</p>
        </div>
      </div>
    );
  }
}

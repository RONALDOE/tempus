import React, { Component } from "react";
import { Link } from "react-router-dom";
import '../../css/nopage.css'

export default class Nopage extends Component {
  render() {
    return (
      <div className="container404">
        <h1 id="title404">404</h1>
        <p id="meaning404">Oh no, la pagina no existe</p>
        <Link to='/home'>Regresar</Link>
      </div>
    );
  }
}

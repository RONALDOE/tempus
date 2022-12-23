import React, { Component } from "react";
import { Link } from "react-router-dom";
import '../../css/nopage.css'

export default class Nopage extends Component {
  render() {
    return (
      <div className="404container">
        <h1 id="404title">404</h1>
        <p id="404meaning">Oh no, la pagina no existe</p>
        <Link to='/home'>Regresar</Link>
      </div>
    );
  }
}

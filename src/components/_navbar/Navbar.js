import React, { Component } from 'react'
import '../../css/navbar.css'
import { Outlet, Link } from "react-router-dom";


export class Singin extends Component {
  render() {
    return (
      <div>
        <nav className="navbar">
            <div className='left'>
                <img src="../../assets/logos/logo.png" alt="logo" />
            </div>
            <div className='right'>
                <input type="checkbox" id='check'/>
                <label htmlFor="check">
                    <ul className='list'>
                        <li><Link to="/Uploader">Inicio</Link></li>                        
                        <li><a href="google.com">Sevicios</a></li>
                        <li><a href="google.com">Nosotros</a></li>
                        <li><a href="google.com">Contactanos</a></li>
                        </ul>
                </label>
            </div>
        </nav>
      </div>
    )
  }
}

export default Singin

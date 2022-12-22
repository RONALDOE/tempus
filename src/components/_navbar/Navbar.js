import React, { Component } from 'react'
import '../../css/navbar.css'
import { Link, Outlet } from "react-router-dom";
import logo from "../../assets/Logos/logo.svg"

export class Navbar extends Component {
  render() {
    return (
      <>
        <nav className="navbar">
            <div className='navLeft'>
                <Link to="/" className='navLink'><div className='navLogo'/>
                <h1 className="navLogoText">Tempus</h1>
                </Link>
            </div>
            <div className='navRight'>
                <input type="checkbox" id='check'/>
                <label htmlFor="check">
                    <ul className='list'>
                        <li><Link to="/">Inicio</Link></li>                        
                        <li><a href="/upload">Sevicios</a></li>
                        <li><a href="/*">Nosotros</a></li>
                        <li><a href="google.com">Contactanos</a></li>
                        </ul>
                </label>
            </div>
        </nav>
<Outlet/>

      </>
      
    )
  }
}

export default Navbar

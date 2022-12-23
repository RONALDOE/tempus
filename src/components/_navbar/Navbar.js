import React, { Component } from 'react'
import '../../css/navbar.css'
import { Link, Outlet } from "react-router-dom";
import logo from "../../assets/Logos/logo.svg"
import user from '../../assets/user.svg'
const Navbar = () => {

    return (
      <>
        <nav className="navbar" id='navbar'>
            <div className='navLeft'>
                <Link to="/" className='navLink'><div className='navLogo'/>
                <h1 className="navLogoText">Tempus</h1>
                </Link>
            </div>
            <div className='navRight'>
                <input type="checkbox" id='check'/>
                <label htmlFor="check">
                    <ul className='list'>
                        <li><a href='#root'>Inicio</a></li>                        
                        <li><a href="#servicescontainer">Sevicios</a></li>
                        <li><a href="#ourteambody">Nosotros</a></li>
                        <li><a href="google.com">Contactanos</a></li>
                        <Link to="/login"><img className='loginPhoto' href={user} alt="as" /></Link>

                        </ul>
                </label>
            </div>
        </nav>
<Outlet/>

      </>
      
    )
  }


export default Navbar

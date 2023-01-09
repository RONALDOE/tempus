import React from 'react'
import '../../css/navbar.css'
import { Link } from "react-router-dom"
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
<<<<<<< HEAD:client/src/components/_navbar/Navbar.jsx
                        <li><a href="#servicescontainer">Services</a></li>
                        <li><a href='#pricings'>Pricing</a></li>
                        <li><a href="#ourteambody">About Us</a></li>
                        <li><Link to='/login' id='loginButton'>Login</Link></li>
=======
                        <li><a href="#servicescontainer">Sevicios</a></li>
                        <li><a href="#ourteambody">Nosotros</a></li>
                        <li><a href="google.com">Contactanos</a></li>
                        <li><Link to='/login' id='loginButton'>Ingresar</Link></li>
>>>>>>> 8469e65cffe57b8deb0f66b2a4d54153c9a21071:client/src/components/_navbar/Navbar.js

                        </ul>
                </label>
            </div>
        </nav>

      </>
      
    )
  }


export default Navbar

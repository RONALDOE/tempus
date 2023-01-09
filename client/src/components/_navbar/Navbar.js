import React from 'react'
import '../../css/navbar.css'
import { Link } from "react-router-dom"
import user from '../../assets/user.png'
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
                        <li><Link to='/login' id='loginButton'>Ingresar</Link></li>

                        </ul>
                </label>
            </div>
        </nav>

      </>
      
    )
  }


export default Navbar

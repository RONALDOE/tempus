import React, { Component } from 'react'
import '../../css/navbar.css'
import logo from '../../assets/Logo Tempus.svg'

export class Singin extends Component {
  render() {
    return (
      <div>
        <nav className="navbar">
            <div className='left'>
                <img src={logo} alt="logo" />
            </div>
            <div className='right'>
                <input type="checkbox" id='check'/>
                <label htmlFor="check">
                    <ul className='list'>
                        <li><a href="google.com">Inicio</a></li>                        
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

import React, { Component } from 'react'
import '../../css/footer.css'

export default class Footer extends Component {
  render() {
    return (
      <div>
        <div className='footer-section'>
            <div className='footer-item'>
            <h2>Tempus</h2>
            <p><a href="google.com">About Us</a></p>
            <p><a href="google.com">Contact Us</a></p>
            <p><a href="google.com">Prices</a></p>
            <p><a href='mailto:tempus@msanchez.com?Subject=Tempus Email'>tempus@msanchez.com</a></p>
            </div>

        <div className='footer-item'>
            <h2>Ayuda</h2>
            <p><a href="google.com">FAQ</a></p>
            <p><a href="google.com">Redeem</a></p>
        </div>
        <div className='footer-item social'>
        <h2> Follow Us </h2>
            <ul>
                <li> <i className="fa-brands fa-instagram"></i> </li>
                <li> <i className="fa-brands fa-youtube"></i> </li>
                <li> <i className="fa-brands fa-twitter"></i> </li>
            </ul>
            
        </div>
      </div>
      </div>  
    )
  }
}

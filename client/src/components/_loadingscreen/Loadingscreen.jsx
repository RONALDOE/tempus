import React, { useState } from 'react';
import '../../css/loadingscreen.css'
import Logo from "../../assets/Logos/logo.png"
import logo from '../../assets/Logos/logo.png'

function LoadingScreen() {

  const [loading, setLoading] = useState(true);

  

if (loading) {
    return (
        <div className="loadingcontainer">

            <div className='container'>
              <img src={logo} alt="" className='spinner' />
              </div>
        </div>
    );
  } else {
    return 
  }
}

export default LoadingScreen;
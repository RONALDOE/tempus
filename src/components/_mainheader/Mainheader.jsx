import 'C:\Users\Usuario\Desktop\proyectaso\tempus\src\css\mainheader.css'


import React from 'react'

function Mainheader() {
  return (
    <div className='header'>
        <img id='headerLogo' src="C:\Users\Usuario\Desktop\proyectaso\tempus\src\images\logo.svg" alt="Tempus Logo" />
        <div className='headerThings'>
            <button id='login'>Ingresar</button>
            <button id='joinus'>Unete</button>
        </div>
         
    </div>
  )
}

export default Mainheader

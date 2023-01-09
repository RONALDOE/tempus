import React, {useState, useEffect} from 'react'
import { Outlet } from 'react-router-dom'
import '../../css/allheader.css'

export const Allheader = () => {

    const [time, setTime] = useState(new Date())

    useEffect(() => {
        const interval = setInterval(() => {
          setTime(new Date());
        }, 1000);
    
        return () => clearInterval(interval);
      }, []);


    return (

    <>
    <Outlet/>
    <div className="allheader">
        <p className="time"> {time.toLocaleTimeString()} <br/> {time.toLocaleDateString()}</p>
    </div>
    </>
  )
}

import React, { Component, useState } from "react";
import { useLocation } from "react-router-dom";
import "../../css/nopage.css";

const Nopage = () =>  {
  const [requestedPage, setRequestedPage] = useState("");

    const location = useLocation();
    const handleLost = () => {
      setRequestedPage(location.pathname);
      console.log(location.pathname)
      location.pathname = "/404";
      console.log(location.pathname)
      

    }
    
    return (
      <div className="404container" onClick={handleLost}>
        <div className="nopageimage" />
        <div className="nopagetexts">
          <h3 className="nopageh2">Me parece que estás perdido...</h3>
          <p>{`La página /${requestedPage} no está habilitada`}</p>
        </div>
      </div>
    );
  }

  export default Nopage


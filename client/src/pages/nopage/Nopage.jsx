import React from "react";
import { useLocation } from "react-router-dom";
import "../../css/nopage.css";

const Nopage = () =>  {

  const location = useLocation();
  
    
    return (
      <div className="404container" >
        <div className="nopageimage" />
        <div className="nopagetexts">
          <h3 className="nopageh2">Me parece que estás perdido...</h3>
          <p>{`La página "${location.pathname.split("/")[1]}" no está habilitada`}</p>
        </div>
      </div>
    );
  }

  export default Nopage


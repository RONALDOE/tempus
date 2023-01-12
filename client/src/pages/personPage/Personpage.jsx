import React from "react";
import userPic from '../../assets/user.png'
import "../../css/personpage.css";
import {Link } from "react-router-dom"
export const Personpage = () => {
  
  return (
    <div className="personContainer">
      <div className="topItems">
         
         <div className="topCard" >
           <div className="dashicon" id="uploadIcon" />
           <h4 className="dashTitle">Uploader</h4>
           <Link to="/upload">
           <img className="imageDash"  src={""}  alt="" />
           </Link> 
         </div>
         <div className="topCard" >
           <div className="dashicon" id="proyectIcon" />
           <h4 className="dashTitle">Proyect</h4>
           
             
             
             <img className="imageDash"  src="" alt="" />
           
         </div>
         <div className="topCard" >
           <div className="dashicon" />
           <h4 className="dashTitle">Tasks</h4>
           <span className="personItemText">
             <p>Upcoming Task</p>
             <p>{"taskName"}</p>
             <p>{"taskDeadline"}</p>
           </span>
         </div>
       </div>
       <div className="bottomItems">
        <div className="bottomCard">
          <div className="dashicon" />
          <h4 className="dashTitle">Lastest Uploads</h4>

          <table className="uploaded-files-table">
            <tr>
              <th>{"Name"}</th>
              <th>{"Weight"}</th>
              <th>{"Upload Date"}</th>
              <th>{"Author"}</th>
              <th>{"Proyect"}</th>
              <th>{"Download"}</th>
            </tr>
            <tr></tr>
            <tr></tr>
          </table>
        </div>
      </div>
      <div className="rightColumn">
        
        <div className="personCard">
          <img
            className="userPic"
            src={userPic}
            alt="User"
          />

          <p style={{ marginTop: "2rem", marginBottom: "1rem" }}>
            {"Username"}
          </p>
          <h3>Email</h3>
          <p id="useremail">{"Email"}</p>
          <h3>Proyect</h3>
          <p id="userproyect">{"Proyect"}</p>
        </div>
      </div>


    </div>
  );
};

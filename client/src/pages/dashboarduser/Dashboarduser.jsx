import React, {useState, useEffect} from "react";
import "../../css/dashboarduser.css";
import userDefaultImage from "../../assets/user.png";
import {Link} from "react-router-dom"
import filesupload from "../../assets/filesupload.png"

export default function Dashboard() {

  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date());
    }, 1);
  
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="dashboardContainer">
      <div className="topItems">
         
        <div className="topCard" >
          <div className="dashicon" id="uploadIcon" />
          <h4 className="dashTitle">Uploader</h4>
          <Link to="/upload">
          <img className="imageDash"  src={filesupload}  alt="" />
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
          <span className="dashItemText">
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
        <div className="dashClock">
          <span className="clockTime">{time.toLocaleTimeString()}</span> 
        </div>
        <div className="userCard">
          <img
            className="userPic"
            src={userDefaultImage}
            alt="User Profile Pic"
          />

          <p style={{ marginTop: ".3rem", marginBottom: "1rem" }}>
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
}

import React, { Component } from "react";

import "../../../css/services.css";

import chat from "../../../assets/mainpage/chat.svg";
import analitics from "../../../assets/mainpage/analitics.svg";
import freestyle from "../../../assets/mainpage/freestyle.svg";
import realtime from "../../../assets/mainpage/realtime.svg";
import remotework from "../../../assets/mainpage/remotework1.svg";
import teamcolaboration from "../../../assets/mainpage/team colaboration.svg";

class Services extends Component {
  render() {
    return (
      <div className="allcontainer" id="servicescontainer">
       
        <div class="main-div" id="lower">
           <div className="content">
                    <h2>Keep Smiling</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit, eum! Repellendus nemo voluptates
                        eius, illum esse consectetur ex laborum facilis saepe nesciunt suscipit! Raju Koth Kalan</p>
                </div>
                <div className="Servicecard">
                <div className="imgbox">
                    <img className='servicesimg'  src={teamcolaboration} alt=""/>
                </div>
                <div className="content">
                    <h2>Work Together</h2>
                    <p>With Tempus you can work from the comfort of your bed, sofa, car, restaurant of your choice or wherever!</p>
                </div>
            </div>
            <div className="Servicecard">
                <div className="imgbox">
                    <img className='servicesimg' src={realtime} alt=""/>
                </div>
                <div className="content">
                    <h2>All Your Files In One Place</h2>
                    <p>In Tempus, your files matter, everything you upload will be protected by Tempus</p>
                </div>
            </div>
            <div className="Servicecard">
                <div className="imgbox">
                    <img className='servicesimg' src={remotework} alt=""/>
                </div>
                <div className="content">
                    <h2>User Friendly Design</h2>
                    <p>Our design is made so that all types of users can use the platform efficiently</p>
                </div>
            </div>
        </div>
      </div>
    );
  }
}

export default Services;


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
        <div className="main-div" id="upper">
          <div className="card">
            <div className="imgbox">
              <img className='servicesimg' src={chat} alt="" />
            </div>
            <div className="content">
              <h2>Keep Smiling</h2>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit,
                eum! Repellendus nemo voluptates eius, illum esse consectetur ex
                laborum facilis saepe nesciunt suscipit! Raju Koth Kalan
              </p>
            </div>
          </div>
          <div className="card">
            <div className="imgbox">
              <img className='servicesimg'src={analitics} alt="" />
            </div>
            <div className="content">
              <h2>Keep Smiling</h2>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit,
                eum! Repellendus nemo voluptates eius, illum esse consectetur ex
                laborum facilis saepe nesciunt suscipit! Raju Koth Kalan
              </p>
            </div>
          </div>
          <div className="card">
            <div className="imgbox">
              <img className='servicesimg' src={freestyle} alt="" />
            </div>
            <div className="content">
            <h2>Keep Smiling</h2>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit,
                eum! Repellendus nemo voluptates eius, illum esse consectetur ex
                laborum facilis saepe nesciunt suscipit! Raju Koth Kalan
              </p>
            </div>
          </div>


        </div><div class="main-div" id="lower">
           <div className="content">
                    <h2>Keep Smiling</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit, eum! Repellendus nemo voluptates
                        eius, illum esse consectetur ex laborum facilis saepe nesciunt suscipit! Raju Koth Kalan</p>
                </div>
                <div className="card">
                <div className="imgbox">
                    <img className='servicesimg'  src={teamcolaboration} alt=""/>
                </div>
                <div className="content">
                    <h2>Keep Smiling</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit, eum! Repellendus nemo voluptates
                        eius, illum esse consectetur ex laborum facilis saepe nesciunt suscipit! Raju Koth Kalan</p>
                </div>
            </div>
            <div className="card">
                <div className="imgbox">
                    <img className='servicesimg' src={realtime} alt=""/>
                </div>
                <div className="content">
                    <h2>Keep Smiling</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit, eum! Repellendus nemo voluptates
                        eius, illum esse consectetur ex laborum facilis saepe nesciunt suscipit! Raju Koth Kalan</p>
                </div>
            </div>
            <div className="card">
                <div className="imgbox">
                    <img className='servicesimg' src={remotework} alt=""/>
                </div>
                <div className="content">
                    <h2>Keep Smiling</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit, eum! Repellendus nemo voluptates
                        eius, illum esse consectetur ex laborum facilis saepe nesciunt suscipit! Raju Koth Kalan</p>
                </div>
            </div>
        </div>
      </div>
    );
  }
}

export default Services;


import React, { Component } from "react";
import "../../../css/ourteam.css";
import presi from "../../../assets/mainpage/presi.jpeg"
import nis from "../../../assets/mainpage/nis.jpeg"
import rona from "../../../assets/mainpage/rona.jpeg"
import robin from "../../../assets/mainpage/robin.jpeg"

export default class Ourteam extends Component {
  render() {
    return (
      <div id="ourteambody">
        <div className="main-container">
          <h2 className="ourteamh2">Our Team</h2>
          <hr />
          <div className="members">
            <div className="team-member">
              <img className='ourteamimg'src={presi} alt="" />
              <h4 className="ourteamh4">Gabriel Rosario</h4>
              <p className="ourteamp">Web Developer</p>
            </div>
            <div className="team-member">
              <img className="ourteamimg" src={robin} alt="" />
              <h4 className="ourteamh4">Robinson Novo</h4>
              <p className="ourteamp">Web Developer</p>
            </div>
            <div className="team-member">
              <img className="ourteamimg" src={nis} alt="" />
              <h4 className="ourteamh4">Nick Payano</h4>
              <p className="ourteamp">Web Developer</p>
            </div>
            <div className="team-member">
              <img className="ourteamimg" src={rona} alt="" />
              <h4 className="ourteamh4">Ronaldo Suero</h4>
              <p className="ourteamp">Web Developer</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

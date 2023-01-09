import React, { Component } from "react";
import "../../../css/ourteam.css";
import gabriel from "../../../assets/mainpage/gabriel.png";
import robinson from "../../../assets/mainpage/robinson.png";
import nick from "../../../assets/mainpage/nick.png";
import ronaldo from "../../../assets/mainpage/ronaldo.png";

export default class Ourteam extends Component {
  render() {
    return (
      <div id="ourteambody">
        <div className="main-container">
          <h2 className="ourteamh2">Nuestro Equipo</h2>
          <hr />
          <div className="members">
            <div className="team-member">
              <img className='ourteamimg'src={gabriel} alt="" />
              <h4 className="ourteamh4">Gabriel Rosario</h4>
              <p className="ourteamp">Web Developer</p>
            </div>
            <div className="team-member">
              <img className="ourteamimg" src={robinson} alt="" />
              <h4 className="ourteamh4">Robinson Novo</h4>
              <p className="ourteamp">Web Developer</p>
            </div>
            <div className="team-member">
              <img className="ourteamimg" src={nick} alt="" />
              <h4 className="ourteamh4">Nick Payano</h4>
              <p className="ourteamp">Web Developer</p>
            </div>
            <div className="team-member">
              <img className="ourteamimg" src={ronaldo} alt="" />
              <h4 className="ourteamh4">Ronaldo Suero</h4>
              <p className="ourteamp">Web Developer</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

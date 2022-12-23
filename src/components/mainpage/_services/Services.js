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
        <div class="main-div" id="upper">
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
/*
<div>
<div className="tempusMeaning w">
          <div className="leftMeaning photo" id="one" />

          <div className="rightMeaning text">
            <p>
              <span className="textMeaning">
                Nuestro servicio cuenta con un chat grupal privado integrado que
                permite la comunicacion en tiempo real entre compañeros de
                equipos. Así podrán resolver cualquier duda o problema de manera
                rápida y eficiente, sin tener que salir de la plataforma.
              </span>
            </p>
          </div>
        </div>

        <div className="tempusMeaning b">
          <div className="rightMeaning photo" id="two" />

          <div className="leftMeaning text">
            <p>
              <span className="textMeaning">
               Lorem, ipsum dolor sit amet consectetur adipisicing elit. Autem error ut, nihil iste quod architecto atque aspernatur eaque dolores possimus facere magni quis sapiente nesciunt, beatae quasi enim cumque quaerat!
              </span>
            </p>
          </div>
        </div>

        <div className="tempusMeaning w">
          <div className="leftMeaning photo" id="three" />

          <div className="rightMeaning text">
            <p>
              <span className="textMeaning">
               Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus delectus alias, sunt cupiditate neque sequi eveniet totam deleniti, nam libero tenetur impedit. Placeat perspiciatis ipsa veniam fugit id eveniet quod.
              </span>
            </p>
          </div>
        </div>

        <div className="tempusMeaning b">
          <div className="rightMeaning photo" id="four" />

          <div className="leftMeaning text">
            <p>
              <span className="textMeaning">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque quos vero adipisci consequuntur ipsum earum ab recusandae nesciunt debitis. Obcaecati placeat repellendus laborum minima nemo rem temporibus nisi vitae iusto.
              </span>
            </p>
          </div>
        </div>

      </div>
*/

/*<div id="containerInfo">
          <div className="leftContainer">
            <div className="leftCard">
              <h3 className="cardTitle">Title</h3>
              <p className="cardInfo">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Labore
                illo unde adipisci velit praesentium nam placeat inventore vitae
                et pariatur consequatur ab, accusantium, rem laudantium error
                facere ullam at eum?
              </p>
            </div>
            
            <div className="leftCard">
              <h3 className="cardTitle">Title</h3>
              <p className="cardInfo">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Labore
                illo unde adipisci velit praesentium nam placeat inventore vitae
                et pariatur consequatur ab, accusantium, rem laudantium error
                facere ullam at eum?
              </p>
            </div>  
            
            <div className="leftCard">
              <h3 className="cardTitle">Title</h3>
              <p className="cardInfo">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Labore
                illo unde adipisci velit praesentium nam placeat inventore vitae
                et pariatur consequatur ab, accusantium, rem laudantium error
                facere ullam at eum?
              </p>
            </div>
            
          </div>
          <div className="rightContainer">
            <div className="rightPhoto"/>
          </div>
        </div> */

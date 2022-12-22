import React, { Component } from "react";

import "../../css/services.css";

class Services extends Component {
  render() {
    return (
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
    );
  }
}

export default Services;

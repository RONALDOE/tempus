import React, { Component } from "react";
import '../../css/uploader.css';
import '../../../src/scriptloader.js';

export default class Uploader extends Component {
  render() {
    return (
            <div className="uploader_wrapper">
              <div className="uploader_box">
                  <div className="uploader_input-bx">
                      <h2 className="uploader_upload-are-title"> Subir Archivos </h2>
                      <form action="">
                          <input type="file" id="upload" accept=".doc, .docx, .pdf" hidden/>
                          <label for="upload" className="uploader_uploadlabel">
                              <span><i className="fa fa-cloud-upload"></i></span>
                              <p>Click para descargar</p>
                          </label>
                      </form>
                  </div>

                  <div id="filewrapper">
                      <h3 className="uploader_uploaded"> Documentos descargados </h3>
                      <div className="uploader_showfilebox">
                          <div className="uploader_left">
                              <span className="uploader_filetype">Pdf</span>
                              <h3> Tempus.pdf </h3>
                          </div>
                          <div className="uploader_right">
                              <span>&#215;</span>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
    );
  }
}
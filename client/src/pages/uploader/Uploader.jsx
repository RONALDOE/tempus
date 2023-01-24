import React, { useState } from "react";
import '../../css/uploader.css';
import { useUserContext } from "../../contexts/UserContext";
import { useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
const Uploader = () => {
    const [selectedFile, setSelectedFile] = useState({})

    const [user, setUser] = useUserContext();
    const [fileType, setFileType] = useState('')
    const [fileName, setFileName] = useState('')
    const [fileWeight, setFileWeight] = useState('')
    const [idProyect, setIdProyect] = useState('')
    const [idUser, setIdUser] = useState('')

            function getFileExtension(fileType) {
                switch (fileType) {
                  case "image/jpeg":
                    return ".jpg";
                  case "image/png":
                    return ".png";
                  case "application/pdf":
                    return ".pdf";
                  case "application/msword":
                    return ".doc";
                  case "application/vnd.openxmlformats-officedocument.wordprocessingml.document":
                    return ".docx";
                  case "application/vnd.ms-excel":
                    return ".xls";
                  case "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet":
                    return ".xlsx";
                  case "application/vnd.ms-powerpoint":
                    return ".ppt";
                  case "application/vnd.openxmlformats-officedocument.presentationml.presentation":
                    return ".pptx";
                  case "audio/mpeg":
                    return ".mp3";
                  case "audio/x-wav":
                    return ".wav";
                  case "video/mp4":
                    return ".mp4";
                  case "video/x-msvideo":
                    return ".avi";
                  case "application/zip":
                    return ".zip";
                  case "application/x-rar-compressed":
                    return ".rar";
                  case "text/plain":
                    return ".txt";
                  case "application/javascript":
                    return ".js";
                  case "text/css":
                    return ".css";
                  case "text/html":
                    return ".html";
                  case "application/json":
                    return ".json";
                  default:
                    return "";
                }
              }
    


    const navigate = useNavigate()

    function handleSetError(error) {
        alert(error)
    }


    async function uploadFile(file) {
            getFileExtension(file.type)
        try {
            
            
            
            const data = new FormData();
            data.append('file', file);
            data.append('_fileType', getFileExtension(file.type));
            data.append('_fileName', file.name);
            data.append('_fileWeight', file.size);
            data.append('_idProyect', user._idProyect);
            data.append('_idUser', user._idUser);
          
                console.log(data)

                const config = {
                    headers: {
                        'Content-Type': 'multipart/form-data'
                    }
                }
            

                await axios.post(`http://localhost:8000/files/upload`, data, config);

            console.log(file.name, file.type)
            navigate('/dashboard');
        } catch (error) {
            handleSetError("Error Al Subir El Archivo")
        }
    }


    const handleFileSelection = (fileSelection) =>{
        setSelectedFile(fileSelection)
        setFileName(fileSelection.name)
        setFileType(fileSelection.type)
        setFileWeight(fileSelection.size)
        setIdProyect(user._idProyect)
        setIdUser(user._idUser)
    }   

    return (
        <div className="uploader_wrapper">
            <div className="uploader_box">
                <div className="uploader_input-bx">
                    <h2 className="uploader_upload-are-title"> Upload A File </h2>
                    <form action="">
                        <input type="file" id="upload" onChange={(event) => handleFileSelection(event.target.files[0])} hidden />
                        <label for="upload" className="uploader_uploadlabel">
                            <span><i className="fa fa-cloud-upload"></i></span>
                            <p>Click For Upload</p>
                        </label>
                    </form>
                </div>

                <div id="filewrapper">
                    <h3 className="uploader_uploaded"> Selected Document </h3>
                    <div className="uploader_showfilebox">
                        <div className="uploader_left">
                            <span className="uploader_filetype">{selectedFile.type}</span>
                            <h3> {selectedFile.name}</h3>
                        </div>
                        <div className="uploader_right">
                            <button onClick={() => setSelectedFile("")} style={{ backgroundColor: "transparent", border: "0px solid red" }}>

                                <span >&#215;</span>
                            </button>
                        </div>
                    </div>
                    <button className="uploadFileButton" onClick={() => { uploadFile(selectedFile) }}>Upload</button>
                </div>
            </div>
        </div>
    );
}
export default Uploader
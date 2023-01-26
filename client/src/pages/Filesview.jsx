import React, { useState, useEffect } from 'react'
import '../css/filesview.css'
import axios from 'axios'
import audio from '../assets/files/audio.svg'
import database from '../assets/files/database.svg'
import doc from '../assets/files/doc.svg'
import excel from '../assets/files/excel.svg'
import gif from '../assets/files/gif.svg'
import html from '../assets/files/html.svg'
import js from '../assets/files/js.svg'
import json from '../assets/files/json.svg'
import media from '../assets/files/media.svg'
import pdf from '../assets/files/pdf.svg'
import photoshop from '../assets/files/photoshop.svg'
import png from '../assets/files/png.svg'
import powerpoint from '../assets/files/powerpoint.svg'
import txt from '../assets/files/txt.svg'
import unknow from '../assets/files/unknow.svg'
import video from '../assets/files/video.svg'
import word from '../assets/files/word.svg'
import zip from '../assets/files/zip.svg'
import moment from 'moment'
import CheckToken from '../utils/CheckToken'

export const Filesview = () => {

    CheckToken()
    const [open, setOpen] = useState(false);
    const [selectedFile, setSelectedFile] = useState([])
    const handleClickOpen = (file) => {
        setSelectedFile(file)
        console.log(selectedFile)
        console.log(formatDate(selectedFile._timestamp))
        setOpen(true);

    };

    const handleClose = () => {
        setOpen(false);
    };


    async function handleDelete(id) {
        await axios.delete("http://localhost:8000/files/delete/" + id)
        refreshpage()
    }

    function refreshpage(){
        window.location.reload();

    }

    function getFileExtension(fileType) {
        switch (fileType) {
            case ".jpg":
                return media;
            case ".png":
                return png;
            case ".pdf":
                return pdf;
            case ".doc":
                return doc;
            case ".docx":
                return word;
            case ".xls":
                return doc;
            case ".xlsx":
                return excel;
            case ".ppt":
                return document;
            case ".pptx":
                return powerpoint;
            case ".mp3":
                return audio;
            case ".wav":
                return video;
            case ".mp4":
                return video;
            case ".avi":
                return video;
            case ".zip":
                return zip;
            case ".rar":
                return zip;
            case ".txt":
                return txt;
            case ".js":
                return js;
            case ".html":
                return html;
            case ".json":
                return json;
            default:

                return unknow;
        }
    }

    const [modal, setModal] = useState(false);
    const [nestedModal, setNestedModal] = useState(false);
    const [closeAll, setCloseAll] = useState(false);

    const toggle = () => setModal(!modal);
    const toggleNested = () => {
        setNestedModal(!nestedModal);
        setCloseAll(false);
    };
    const toggleAll = () => {
        setNestedModal(!nestedModal);
        setCloseAll(true);
    };

    const [files, setFiles] = useState([])
    useEffect(() => {
        async function fetchFilesData() {
            const res = await axios.get('http://localhost:8000/files/getAll')
            setFiles(res.data)
            console.table(res.data)
            console.log(files)
        }
        fetchFilesData()
    }, [])



    const myIcon = (
        <button className="p-dialog-titlebar-icon p-link">
            <span className="pi pi-search"></span>
        </button>
    )
    function formatFileSize(sizeInBytes) {
        if (sizeInBytes < 1000000) {
            return (sizeInBytes / 1000).toFixed(2) + ' KB';
        } else if (sizeInBytes < 1000000000) {
            return (sizeInBytes / 1000000).toFixed(2) + ' MB';
        } else {
            return (sizeInBytes / 1000000000).toFixed(2) + ' GB';
        }
    }

    const [formattedDate, setformattedDate] = useState("")
    const [formattedTime, setformattedTime] = useState("")

    function formatDate(date) {
        const date1 = moment(date).format("DD/MM/YYYY")
        const date2 = moment(date).format("hh:mm:ss")
        console.log(date1);
        setformattedDate(date1)
        setformattedTime(date2)

    }

    return (
        <div id='filesBody'>
            <div className="filesContainer">
                {files.map((file) => (

                    <div className="fileView" key={file._idUpload} onClick={toggle}>
                                          <a href={`http://localhost:8000/files/download/${file._fileKey}@${file._fileName}`}> <button className="filesDownloadBtn"  ><i class="fa-solid fa-file-arrow-down fa-xl"/></button></a>
                   <button className="filesDeleteBtn" onClick={()=>{handleDelete(file._idUpload)}}><i class="fa-solid fa-trash fa-xl"/></button>

                        <img src={getFileExtension(file._fileType)} alt="" />
                        <span>{file._fileName}</span>
                        <div className='fileButtons' style={{ display: "flex", flexDirection: "row" }}>

                        </div>

                    </div>))}
            </div>
        </div>
    )
}

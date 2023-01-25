import React, {useState, useEffect} from 'react'
import '../css/filesview.css'
import axios from 'axios'

export const Filesview = () => {

    const [files,setFiles] = useState([])
    useEffect(()=>{
        async function fetchFilesData(){
          const res = await axios.get('http://localhost:8000/files/getAll')
          setFiles(res.data)
          console.table(res.data)
        }
        fetchFilesData()
      }, [])
    return (
    <div>
        <div className="filesContainer">
            {files.map((file)=>{
                <div className="fileView" key={file._idUpload}>
                <img src={()=>{getImage(file._fileType)}} alt="" />
                <span>{file._fileName}</span>
            </div>
                })
            }
            
            
            
            

        </div>
    </div>
  )
}

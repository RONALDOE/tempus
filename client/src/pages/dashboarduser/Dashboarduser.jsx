import React, {useState, useEffect, useContext} from "react";
import "../../css/dashboarduser.css";
import userDefaultImage from "../../assets/user.png";
import {Link} from "react-router-dom"
import filesupload from "../../assets/filesupload.png"
import { useUserContext } from '../../contexts/UserContext';
import axios from "axios";
import LoadingScreen from "../../components/_loadingscreen/Loadingscreen";
import moment from 'moment'
import Moment from 'react-moment';
import CheckToken from '../../utils/CheckToken';
import AWS,{ S3 } from 'aws-sdk';


export default function Dashboard() {

  
  function formatFileSize(sizeInBytes) {
    if (sizeInBytes < 1000000) 
    {
      return (sizeInBytes / 1000).toFixed(2) + ' KB';
    } else if (sizeInBytes < 1000000000) {
      return (sizeInBytes / 1000000).toFixed(2) + ' MB';
    } else {
      return (sizeInBytes / 1000000000).toFixed(2) + ' GB';
    }
  }
  
  
  const [user, setUser] = useUserContext();
  
  const [employee, setEmployee] = useState([])
  const [proyect, setProyect] = useState([])
  const [uploads, setUploads] = useState([])
  
  const files = uploads;
  useEffect(() =>{
    
    async function fetchEmplooyeData(id){
      const res = await axios.get(`http://localhost:8000/employees/${id}`)
      console.table(res.data)
      
      setEmployee(res.data)
    }
    fetchEmplooyeData(user._idEmployee)
  }, [])
  
  useEffect(()=>{
    async function fetchUploadsData(){
      const res = await axios.get('http://localhost:8000/files/')
      setUploads(res.data)
      console.table(res.data)
      console.log(uploads)
    }
    fetchUploadsData()
  }, [])
  
  async function getUploadUser(id){
    const res = await axios.get('http://localhost:8000/users/'+ id)
    return res.data[0]
  }
  
  
  useEffect(() =>{
    async function fetchProyectData(id){
      const res = await axios.get(`http://localhost:8000/proyects/` + id)
      console.table(res.data)
      setProyect(res.data)
    }
    fetchProyectData(user._idProyect)
  }, [])
  
  
  const [userTask, setUserTask] =useState([])
  
  useEffect(()=>{
    async function fetchTaskData(id){
      const res = await axios.get(`http://localhost:8000/tasks/user/${id}`)
      
      setUserTask(res.data)
      console.log(res.data._taskDeadline)
    }
    fetchTaskData(user._idEmployee)
  }, [])
 const [namePic, setNamePic] = useState("")
 
 
 const [time, setTime] = useState(new Date());
 
 useEffect(() => {
   const interval = setInterval(() => {
     setTime(new Date());
     
    }, 1);
    
    
    return () => clearInterval(interval);
  }, []);
  CheckToken();
  
  const [loading, setLoading] = useState(true);


  // useEffect(() => {
  //   setTimeout(() => {
  //     setLoading(false);
  //   }, 500);
  // }, []);
  
  const [taskTime, setTaskTime] = useState({})

  // useEffect(()=>{

  //   const taskDeadline = () =>{
  //     const dateToFormat = userTask._taskDeadline
      
  //     const momentDate = moment(dateToFormat)
  //     const formattedDate = momentDate.format('DD/MM/YYYY')
  //     console.log(formattedDate)
  //     setTaskTime(formattedDate)
  //     return(formattedDate)
  //   }
  //   taskDeadline()
  // }, [])

  // if (loading) {
  //   return <LoadingScreen />;
  // } else {

  // const handleDownload = async () => {
  //   // Configurar la autenticación con AWS
  //   AWS.config.update({
  //     accessKeyId: 'YOUR_ACCESS_KEY',
  //     secretAccessKey: 'YOUR_SECRET_KEY',
  //   });

  //   // Crear una instancia de S3
  //   const s3 = new AWS.S3();

  //   // Generar una URL temporal de descarga
  //   const params = {
  //     Bucket: 'YOUR_BUCKET_NAME',
  //     Key: 'path/to/file.jpg',
  //     Expires: 60, // Tiempo de expiración de la URL en segundos
  //   };
  //   const url = await s3.getSignedUrl('getObject', params);

  //   // Crear una etiqueta a y asignar la URL como su href
  //   const link = document.createElement('a');
  //   link.href = url;
  //   link.download = 'file.jpg';
  //   document.body.appendChild(link);
  //   link.click();
  //   document.body.removeChild(link);
  // };
  AWS.config.update({
    accessKeyId: 'AKIA4GUEUVFEFPSGSJMX',
    secretAccessKey: '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'
  });
  

  const [downloadUrl, setDownloadUrl] = useState(null);

  // const handleDownload  = (fileKey) => {
  //   const s3 = new AWS.S3();
  //   const params = { Bucket: 'tempus-dev-bucket', Key: fileKey };
  //   s3.getObject(params, (err, url) => {
  //     if (err) throw err;
  //     console.log(url)
  //     setDownloadUrl(url);
  //   });
  // };


  return (
    <div className="dashboardContainer">
      <div className="topItems">
         
        <div className="topCard" >
          <div className="dashicon" id="uploadIcon" />
          <h4 className="dashTitle">Uploader</h4>
          <Link to="/upload">
          <img className="imageDash"  src={filesupload}  alt="" />
          </Link> 
        </div>
        <div className="topCard" >
          <div className="dashicon" id="proyectIcon" />
          <h4 className="dashTitle">Proyect</h4>
          
            
            
            <img className="imageDash"  src="" alt="" />
          
        </div>
        <div className="topCard" >
          <div className="dashicon" />
          <h4 className="dashTitle">Tasks</h4>
          <span className="dashItemText">
            <p>Upcoming Task</p>
            <p>{userTask._taskName}</p>
            <p><Moment format="dddd, MMMM Do YYYY">{userTask._taskDeadline}</Moment></p>
          </span>
        </div>
      </div>

      <div className="bottomItems">
        <div className="bottomCard">
          <div className="dashicon" />
          <h4 className="dashTitle">Lastest Uploads</h4>

            <div className="tbodyContainer">
          <table className="uploaded-files-table">
            <thead>
            <tr>
              <th className="tableHeader">Name</th>
              <th className="tableHeader">Weight</th>
              <th className="tableHeader">Upload Date</th>
              <th className="tableHeader">Author</th>
              <th className="tableHeader">Proyect</th>
              <th className="tableHeader">Download</th>
            </tr>
            </thead>

            <tbody className="tbody">
            {files.length === 0? (<tr className="tr">
                  <td className=" td noDataCell" colSpan={7}>
                    No data
                  </td>
                </tr>
                ) : (
                  files.map((upload) =>(
                    
                    <tr className="tr" key={upload._idUpload}>
                  <td className="td">{upload._fileName.length > 13? upload._fileName.slice(0,13) : upload._fileName  }</td>
                  <td className="td">{formatFileSize(upload._fileWeight)}</td>
                  <td className="td">{upload._timestamp}</td>
                  <td className="td">{upload.userName}</td>
                  <td className="td">{upload._idProyect}</td>
                  <td className="td"><a href={`http://localhost:8000/files/download/${upload._fileKey}@${upload._fileName}`}> <button className="downloadBtn" ><i class="fa-solid fa-file-arrow-down fa-xl"/></button></a></td>


                </tr>
              ))) }
            
        
            </tbody>
          </table>
              </div>
        </div>
      </div>
      <div className="rightColumn">
        <div className="dashClock">
          <span className="clockTime">{time.toLocaleTimeString()}</span> 
        </div>
        <div className="userCard">
           {( user._photo ?  <img
            className="userPic"
            src={user._photo}
            alt="User Profile Pic"
          /> :<img
          className="userPic"
          src={userDefaultImage}
          alt="User Profile Pic"
        /> 
          
          )}

          <p style={{ marginTop: ".3rem", marginBottom: "1rem" }}>
            {user._userName}
          </p>
          <h3>Email</h3>
          <p id="useremail">{employee._email}</p>
          <h3>Proyect</h3>
          <p id="userproyect">{proyect._proyectName}  </p>
        </div>
      </div>

    </div>
  );
}
//}
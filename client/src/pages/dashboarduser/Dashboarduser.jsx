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

export default function Dashboard() {

  CheckToken()
  useEffect(()=>{


    function probarDatos(){
      const token = document.cookie.replace('token=', '')
      axios
      .post('http://localhost:8000/auth/testingData',{headers: {'authorization': token}})
      .then((response) =>{response.json()})
      .then(data =>{console.log(data)})
    }
  },[])




  const [user, setUser] = useUserContext();

  const [employee, setEmployee] = useState([])
  const [proyect, setProyect] = useState([])
 
  useEffect(() =>{

    async function fetchEmplooyeData(id){
      const res = await axios.get(`http://localhost:8000/employees/${id}`)
      console.table(res.data)
      
      setEmployee(res.data)
    }
    fetchEmplooyeData(user._idEmployee)
  }, [])


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

 
  const [time, setTime] = useState(new Date());
  
  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date());
    }, 1);
    
  
    return () => clearInterval(interval);
  }, []);
  
  const [loading, setLoading] = useState(true);


  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);
  
  const [taskTime, setTaskTime] = useState({})

  useEffect(()=>{

    const taskDeadline = () =>{
      const dateToFormat = userTask._taskDeadline
      
      const momentDate = moment(dateToFormat)
      const formattedDate = momentDate.format('DD/MM/YYYY')
      console.log(formattedDate)
      setTaskTime(formattedDate)
      return(formattedDate)
    }
    taskDeadline()
  }, [])

  if (loading) {
    return <LoadingScreen />;
  } else {
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

          <table className="uploaded-files-table">
            <tr>
              <th>{"Name"}</th>
              <th>{"Weight"}</th>
              <th>{"Upload Date"}</th>
              <th>{"Author"}</th>
              <th>{"Proyect"}</th>
              <th>{"Download"}</th>
            </tr>
            <tr></tr>
            <tr></tr>
          </table>
        </div>
      </div>
      <div className="rightColumn">
        <div className="dashClock">
          <span className="clockTime">{time.toLocaleTimeString()}</span> 
        </div>
        <div className="userCard">
          <img
            className="userPic"
            src={userDefaultImage}
            alt="User Profile Pic"
          />

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
}
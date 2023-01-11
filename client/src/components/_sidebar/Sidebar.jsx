import React, { useRef} from 'react'
import { useNavigate, Link } from "react-router-dom";

import '../../css/sidebar.css'


import { useLocation } from 'react-router-dom'; 

const  Sidebar = () =>  {
  
  const navigate = useNavigate();

  const elementRef = useRef(null);

  const handleLogout = () => {
    localStorage.removeItem("jwt");
    navigate('/')
  
  };


  const handleClick = () => {
  if(!elementRef.current.classList.contains('open')){
     elementRef.current.classList.add('open');}
     else elementRef.current.classList.remove('open')
};

  
const location = useLocation();

if (location.pathname === '/login' || location.pathname === '/') {
  return null;
}
          
  
    return (
   

      <>

       <div className={`sidebar `} ref={elementRef} id='sidebar'>
    <div className="logo-details">
      <i className={`bx icon`} id="sidebarLogo" ></i> 
        <div className="logo_name">Tempus</div>
        <i className='bx bx-menu' id="btn" onClick={handleClick}></i>
    </div>
    <ul className="nav-list">
      
      <li>
        <Link to="/dashboard" >
          <i className='bx bx-grid-alt' ></i>
          <span className="links_name">Dashboard</span>
        </Link>
         <span className="tooltip">Dashboard</span>
      </li>
      <li>
       <Link to="/employees">
         <i className='bx bx-id-card' ></i>
         <span className="links_name">Employees</span>
       </Link>
       <span className="tooltip">Employees</span>
     </li>
     <li>
       <a href="#">
         <i className='bx bx-chat' ></i>
         <span className="links_name">Messages</span>
       </a>
       <span className="tooltip">Messages</span>
     </li>
     <li>
       <a href="#">
         <i className='bx bx-pie-chart-alt-2' ></i>
         <span className="links_name">Analytics</span>
       </a>
       <span className="tooltip">Analytics</span>
     </li>
     <li>
       <a href="#">
         <i className='bx bx-folder' ></i>
         <span className="links_name">File Manager</span>
       </a>
       <span className="tooltip">Files</span>
     </li>
     <li>
       <a href="#">
         <i className='bx bx-cart-alt' ></i>
         <span className="links_name">Proyect</span>
       </a>
       <span className="tooltip">Proyect</span>
     </li>  
     <li>
       <a href="#">
         <i className='bx bx-cog' ></i>
         <span className="links_name">Settings</span>
       </a>
       <span className="tooltip">Settings</span>
     </li>
     <li className="profile">
         <div className="profile-details">
           <img src="profile.jpg" alt="profileImg"/>
           <div className="name_job">
             <div className="name">Prem Shahi</div>
             <div className="job">Web designer</div>
           </div>
         </div>
         <button onClick={handleLogout}>

         <i className='bx bx-log-out' id="log_out" />
         </button>
     </li>
    </ul>
  </div>
  
  </>
    )
  }

  export default Sidebar

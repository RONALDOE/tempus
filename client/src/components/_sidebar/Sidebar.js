import React, { useRef, useState } from 'react'
import '../../css/sidebar.css'


const  Sidebar = () =>  {
  
  

  const elementRef = useRef(null);


  const userLogout = () =>{console.log("exit")}

  const handleClick = () => {
  if(!elementRef.current.classList.contains('open')){
     elementRef.current.classList.add('open');}
     else elementRef.current.classList.remove('open')
};

          
  
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
        <a href="#">
          <i className='bx bx-grid-alt' ></i>
          <span className="links_name">Dashboard</span>
        </a>
         <span className="tooltip">Dashboard</span>
      </li>
      <li>
       <a href="#">
         <i className='bx bx-user' ></i>
         <span className="links_name">User</span>
       </a>
       <span className="tooltip">User</span>
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
         <i className='bx bx-log-out' id="log_out" onClick={userLogout}></i>
     </li>
    </ul>
  </div>
  
  </>
    )
  }

  export default Sidebar

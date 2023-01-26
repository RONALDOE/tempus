import React, { useRef, useEffect, useState } from 'react'
import { useNavigate, Link } from "react-router-dom";
import LoadingScreen from '../_loadingscreen/Loadingscreen';
import '../../css/sidebar.css'


import { useLocation } from 'react-router-dom';

const Sidebar = () => {


  const navigate = useNavigate();

  const elementRef = useRef(null);

  const handleLogout = () => {
    document.cookie = `token= ; max-age=; path=/; samesite=strict`
    navigate('/login')

  };


  const handleClick = () => {
    if (!elementRef.current.classList.contains('open')) {
      elementRef.current.classList.add('open');
    }
    else elementRef.current.classList.remove('open')
  };


  const location = useLocation();

  const [loading, setLoading] = useState(true);


  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 50);
  }, []);


  if (loading) {
    return <LoadingScreen />;
  } else {
    if (
      location.pathname === '/login' || 
      location.pathname === '/' ||
      location.pathname === '/signup' ||
      location.pathname.includes('/pay')) {
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
            {/* <li>
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
            </li> */}
            <li>
            <Link to="/files">
              <a href="#">
                <i className='bx bx-folder' ></i>
                <span className="links_name">File Manager</span>
              </a>
              <span className="tooltip">Files</span>
              </Link>
            </li>
            <li>
              {/* <a href="#">
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
            <li className="profile"> */}
              

              <button id="log_out"onClick={handleLogout}>

                <i className='bx bx-log-out'  />
              </button>
            </li>
          </ul>
        </div>

      </>
    )
  }
}
export default Sidebar

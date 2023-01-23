import { useEffect } from 'react';
import { useNavigate, useLocation } from "react-router-dom";
import axios from 'axios'

const CheckToken = () => {
  const navigate = useNavigate();

  const location =  useLocation();

  
  useEffect(() => {
    const token = document.cookie.replace('token=', '');
    axios.post('http://localhost:8000/auth/check-token', { token })
    .then((response) => {
      if(location.pathname === "/" || location.pathname === "/signup") return;
        if (!response.data.valid) {
          navigate('/login');
        }
      })
      .catch((error) => {
        console.error(error);
        navigate('/login');
      });
    }, []);
};

export default CheckToken;
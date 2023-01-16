import { useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import axios from 'axios'

const CheckToken = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const token = document.cookie.replace('token=', '');
    axios.post('http://localhost:8000/auth/check-token', { token })
      .then((response) => {
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
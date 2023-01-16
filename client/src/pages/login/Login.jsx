import React, { Component, useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../../css/login.css";
import axios from "axios";
import { useUserContext } from '../../contexts/UserContext';
import LoadingScreen from "../../components/_loadingscreen/Loadingscreen";


const Login = () => {
  const [_userName, setUsername] = useState("");
  const [_password, setPassword] = useState("");
  const [user, setUser] = useUserContext();

  const navigate = useNavigate()

  const [status, setStatus] = useState("")

  const handleStatus = (status) => {
    switch(status){
      case "200":
        console.log("Login Succesfull")
        return 'Login Succesfull';

      case "401":
        console.log("Invalid Credentials")
        setStatus("Invalid Credentials")
        return 'Invalid Credentials';
        
        default: 
        break;
    }
  }

  function probarDatos(){
    const token = document.cookie.replace('token=', '')
    axios
    .post('http://localhost:8000/auth/testingData',{headers: {'authorization': token}})
    .then((response) =>{response.json()})
    .then(data =>{console.log(data)})
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    axios
      .post("http://localhost:8000/auth", { _userName, _password })
      .then((response) => {
        handleStatus(response.status)
        const token = response.data.token;
        document.cookie = `token=${token}; max-age=${3600 * 3}; path=/; samesite=strict`
        console.log(document.cookie)
        setUser(response.data.results)
        console.log(response.data.results)
        navigate("/dashboard")
        
      })
      .catch((error) => {
        console.error(error);
      });
  };
  const [loading, setLoading] = useState(true);


  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);
  

  if (loading) {
    return <LoadingScreen />;
  } else {
    

  return (
    <div id="loginpagecontainer">
      <div className="loginbox">
        <form className="loginform" onSubmit={handleSubmit} autocomplete="off">
          <h2 className="loginh2"> Login </h2>
          <div className="logininputBox">
            <input
              className="logininput"
              type="text"
              required
              value={_userName}
              onChange={(event) => setUsername(event.target.value)}
            />
            <span className="loginspan">Username</span>
            <i className="logini"></i>
          </div>

          <div className="logininputBox">
            <input
              className="logininput"
              type="password"
              required
              value={_password}
              onChange={(event) => setPassword(event.target.value)}
            />
            <span className="loginspan">password</span>
            <i className="logini"></i>
          </div>

          <input className="logininput" type="submit" value="Login" />
          <h3>{status}</h3>

          <div className="loginlinks">
            <font size="9">
              <Link className="loginlink" to="/forgot">
                Olvidaste la Contraseña?{" "}
              </Link>
              <Link className="loginlink" to="/signup">
                Registrarse
              </Link>
            </font>
          </div>
        </form>
      </div>
    </div>
  );
};}

export default Login;

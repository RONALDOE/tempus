import React, { useState, useEffect } from "react";
import axios from "axios";
import {useNavigate, Link} from 'react-router-dom';
import {useUserContext} from '../../context/UserContext'
import '../../css/login.css';

function Login  () {
    const navigate = useNavigate();
    const [Guide, SetGuide] = useState(()=> {return {status:false, msg: 'Acceda con su nombre de usuario y contraseña', style:{color:'black'}}});
    const [User, SetUser] = useUserContext();
    useEffect(() => {
      const checkuser = async () =>{
        let Nuser=null;
        if(document.cookie.includes('token')){
          Nuser = {token: document.cookie.replace('token=',''),auth: true};
          const resp = await Axios.post('/auth',{
            token: NUser.token,
            auth: false
          });
          if (resp.status === 200){
            SetUser({...NUser, auth: true, UserData: resp.data.UserData});
            navigate('/');
          }
          if (resp.status===400){
            SetUser({...NUser, auth: false});
          }
          }
          checkuser();
        },[ navigate, SetUser]);

        const LogIn = async()=>{
          const Username = User.UserData.Username, psswd = User.UserData.psswd;
          try{
            
            const res = await Axios.post('/login', {Username, psswd})
            if (res.status === 200){
              SetUser(res.data);
              document.cookie = `token=${res.data.token} ; max-age=${60*60}; path=/; samesite=strict`;
              navigate('/');
            }else{
              SetGuide({status: true, msg: res.data.err, style: {color:'red'}});
            }
          }catch(err){
            SetGuide({status:true, msg: err.response.data.err, style: {color:'red'}});
          }
        }

        }
      }
    

    })


    return (
      <div id="loginpagecontainer">
        <div className="box">
            <form className="loginform" action=""
                autocomplete="off"> 
                <h2 className="loginh2"> Login </h2>
                <div className="inputBox">
                    <input className="logininput" type="text"
                    required />
                    <span className="loginspan">Nombre</span><i className="logini"></i>
                </div>

                <div class="inputBox">
                    <input className="logininput" type="password"
                    required />
                    <span className="loginspan">Contraseña</span><i className="logini"></i>
                </div>

                <div className="links">
                    <font size="9"> 
                        <a className="logina" href="#">Olvidaste la Contraseña? </a>
                        <a className="logina" href="#">Sign Up</a>
                    </font>
                </div>
                    <input className="logininput" type="submit"
                    value="Login"/>
            </form>
        </div> 
      </div>
    );

}

export default Login;
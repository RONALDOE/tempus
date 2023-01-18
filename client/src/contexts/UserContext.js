import axios from 'axios';
import {createContext, useState, useContext} from 'react';
import { useEffect } from 'react';
import CheckToken from '../utils/CheckToken';

export const UserContext = createContext();
export const useUserContext = () => useContext(UserContext);

export  const Provider = ({ children }) =>{
  const [user,setUser] = useState([]);
  CheckToken()
 

  console.log(user)
  return (            
            <UserContext.Provider value={[user, setUser]}>
                {children}
            </UserContext.Provider>  
    );
}


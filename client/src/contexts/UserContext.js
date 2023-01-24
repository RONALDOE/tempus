import axios from 'axios';
import {createContext, useState, useContext} from 'react';
import { useEffect } from 'react';

export const UserContext = createContext();
export const useUserContext = () => useContext(UserContext);

export  const Provider = ({ children }) =>{
  const [user,setUser] = useState(JSON.parse(localStorage.getItem("user")));

  useEffect(() => {
    localStorage.setItem("user", JSON.stringify(user));
  }, [user]);

  return (            
            <UserContext.Provider value={[user, setUser]}>
                {children}
            </UserContext.Provider>  
    );
}
import { Routes, Route } from "react-router-dom";
import React, { useState, useEffect } from "react";
import Mainpage from "./pages/mainpage/Mainpage";
import Home from "./pages/home/Home.js";
import Uploader from "./pages/uploader/Uploader.js";
import Stadistics from "./pages/stadistics/Stadistics.js";
import Nopage from "./pages/nopage/Nopage";
import Login from "./pages/login/Login.jsx";
import Joinus from "./pages/joinus/Joinus.js";
import Signup from "./pages/singup/Singup";
import Employeescrud from "./pages/cruds/Employeesrud";
import Proyectscrud from "./pages/cruds/Proyectscrud"
import Dashboard from "./pages/dashboarduser/Dashboarduser";
import Sidebar from "./components/_sidebar/Sidebar";
import NewEmployee from "./pages/inserters/NewEmployee";
import UpdateEmployee from "./pages/updaters/EditEmployee";
import LoadingScreen from "./components/_loadingscreen/Loadingscreen";
import  {Personpage}  from './pages/personPage/Personpage';
import ReactPayPal from "./components/_paypal/ReactPaypal";
import { Provider } from './contexts/UserContext.js';

export default function App() {
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
      <>

        <Sidebar />

      <Provider>
        <Routes>
          <Route index element={<Mainpage showOut />} />
          <Route index element={<Home />} />
          <Route path="*" element={<Nopage showOut />} />
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="upload" element={<Uploader />} />
          <Route path="signup" element={<Signup/>} />
          <Route path="stadistics" element={<Stadistics />} />
          <Route path="login" element={<Login />} />
          <Route path="pay/:id" element={<ReactPayPal />} />
          <Route path="employees" element={<Employeescrud />} />
          <Route path="proyects" element={<Proyectscrud />} />
          <Route path="employee/new" element={<NewEmployee />} />
          <Route path="employee/:idEmployee" element={<UpdateEmployee />} />
          <Route path="joinus" element={<Joinus />} />
          <Route path="user/:idUser" element={<Personpage/>} />
        </Routes>
      </Provider>
      </>
    );
  }
}

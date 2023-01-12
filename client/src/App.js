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
import Dashboard from "./pages/dashboarduser/Dashboarduser";
import Sidebar from "./components/_sidebar/Sidebar";
import NewEmployee from "./pages/inserters/NewEmployee";
import UpdateEmployee from "./pages/updaters/EditEmployee";
import LoadingScreen from "./components/_loadingscreen/Loadingscreen";
import Payments from "./components/_payments/Payments";
import  {Personpage}  from './pages/personPage/Personpage';

export default function App() {
  const [loading, setLoading] = useState(true);

  // https://dev.to/coderko/paypal-integration-in-react-3a57 Para lo de paypal

  useEffect(() => {
    // Simulamos la carga de datos
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

        <Routes>
          <Route index element={<Mainpage showOut />} />
          <Route index element={<Home />} />
          <Route path="*" element={<Nopage showOut />} />
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="upload" element={<Uploader />} />
          <Route path="signup" element={<Signup showOut />} />
          <Route path="stadistics" element={<Stadistics />} />
          <Route path="login" element={<Login />} />
          <Route path="pay" element={<Payments />} />
          <Route path="employees" element={<Employeescrud />} />
          <Route path="employee/new" element={<NewEmployee />} />
          <Route path="employee/:idEmployee" element={<UpdateEmployee />} />
          <Route path="joinus" element={<Joinus />} />
          <Route path="user/:idUser" element={<Personpage/>} />
        </Routes>
      </>
    );
  }
}

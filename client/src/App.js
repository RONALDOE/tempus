import { Routes, Route} from "react-router-dom";
import Mainpage from "./pages/mainpage/Mainpage";
import Home from "./pages/home/Home.js";
import Uploader from "./pages/uploader/Uploader.js";
import Stadistics from "./pages/stadistics/Stadistics.js";
import Nopage from "./pages/nopage/Nopage.js";
import Login from "./pages/login/Login.jsx";
import Joinus from "./pages/joinus/Joinus.js";
import Signup from "./pages/singup/Singup"
import Employeescrud from "./pages/employeescrud/Employeesrud";
import Dashboard from "./pages/dashboard/Dashboard"
import Sidebar from "./components/_sidebar/Sidebar";
import NewEmployee from './pages/inserters/NewEmployee'
import UpdateEmployee from './pages/updaters/EditEmployee'


export default function App() {
  return (
    <>
<Sidebar/>

      <Routes>
        <Route index element={<Mainpage showOut/>}/>
          <Route index element={<Home />} />
          <Route path="/" element={<Dashboard/>}/>
          <Route path="upload" element={<Uploader />} />
          <Route path="signup" element={<Signup />} />
          <Route path="stadistics" element={<Stadistics/>} />
          <Route path="login" element={<Login />} />
          <Route path="employees" element={<Employeescrud />} />
          <Route path="employees/new" element={<NewEmployee/>}/>
          <Route path="employees/:idEmployee" element={<UpdateEmployee/>}/>
          <Route path="joinus" element={<Joinus />} />
          <Route path="*" element={<Nopage />} />
        
      </Routes>
      </>
  );
}
import { Routes, Route} from "react-router-dom";
import Mainpage from "./pages/mainpage/Mainpage";
import Home from "./pages/home/Home.js";
import Uploader from "./pages/uploader/Uploader.js";
import Stadistics from "./pages/stadistics/Stadistics.js";
import Nopage from "./pages/nopage/Nopage.js";
import Login from "./pages/login/Login.jsx";
import Joinus from "./pages/joinus/Joinus.js";
import Navbar from './components/_navbar/Navbar'
import Signup from "./pages/singup/Singup"

export default function App() {
  return (
    <>
    <Navbar/>

      <Routes>
        <Route index element={<Mainpage />}/>
          <Route index element={<Home />} />
          <Route path="upload" element={<Uploader />} />
          <Route path="signup" element={<Signup />} />
          <Route path="stadistics" element={<Stadistics/>} />
          <Route path="login" element={<Login />} />
          <Route path="joinus" element={<Joinus />} />
          <Route path="*" element={<Nopage />} />
        
      </Routes>
      </>
  );
}
import ReactDOM from "react-dom/client";
import { Routes, Route, Link } from "react-router-dom";
import Mainpage from "./pages/mainpage/Mainpage";
import Home from "./pages/home/Home.js";
import Uploader from "./pages/uploader/Uploader.js";
import Stadistics from "./pages/stadistics/Stadistics.js";
import Nopage from "./pages/nopage/Nopage.js";
import Login from "./pages/login/Login.js";
import Joinus from "./pages/joinus/Joinus.js";
import Navbar from './components/_navbar/Navbar'

export default function App() {
  return (
    <>
    <Navbar/>

      <Routes>
        <Route index element={<Mainpage />}/>
          <Route index element={<Home />} />
          <Route path="upload" element={<Uploader />} />
          <Route path="stadistics" element={<h1>asda</h1>} />
          <Route path="login" element={<Login />} />
          <Route path="joinus" element={<Joinus />} />
          <Route path="*" element={<Nopage />} />
        
      </Routes>
      </>
  );
}
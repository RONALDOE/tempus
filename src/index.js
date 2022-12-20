import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Mainpage from './pages/mainpage/Mainpage'
import Home from './pages/home/Home.js'
import Uploader from './pages/uploader/Uploader.js'
import Stadistics from './pages/stadistics/Stadistics.js'
import Nopage from './pages/nopage/Nopage.js'
import Login from './pages/login/Login.js'
import Joinus from './pages/joinus/Joinus.js'


export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Mainpage />}>
          <Route index element={<Home />} />
          <Route path="Upload" element={<Uploader />} />
          <Route path="Stadistics" element={<Stadistics />} />
          <Route path="Login" element={<Login />} />
          <Route path="Joinus" element={<Joinus />} />
          <Route path="Stadistics" element={<Stadistics />} />
          <Route path="*" element={<Navigate replace to = "Nopage" />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
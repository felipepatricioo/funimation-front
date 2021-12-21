import "./App.css";
import Navbar from "./components/Navbar/index";
import Footer from "./components/Footer/index";
import Home from "./pages/Home/index";
import Login from "./pages/Login/index";
import AllAnimes from './pages/AllAnimes/index';
import CreateUser from "./pages/CreateUser/index";
import Anime from './pages/Anime/index';
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<CreateUser />} />
        <Route path="/allanimes" element={<AllAnimes />} />
        <Route path="/anime/:id" element={<Anime />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;

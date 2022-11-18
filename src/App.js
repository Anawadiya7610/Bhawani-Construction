import { Routes, Route, Link } from "react-router-dom";
import "./App.css";
import 'bootstrap/dist/css/bootstrap.min.css';
// import Navbar from "./components/Navbar/index";
import Navbarboot from "./components/Navbarboot";
import Footer from "./components/Footer/index";
import Home from "./pages/Home";
import Client from "./pages/AboutUs/clientUs";
import Vision from "./pages/AboutUs/visionUs";
import Download from './pages/AboutUs/downloadUs/index';
import Contact from "./pages/Contact/index";
import Carrer from "./pages/Carrer/index";
import Running from "./pages/ProjectsUs/Running Projects/index";
import Complete from  "./pages/ProjectsUs/Complite Projects/index";
import Resources from "./pages/Resources/index";
import Director from "./pages/The People/Director/index";
import General from "./pages/The People/General Manager/index";
import Proengineer from "./pages/The People/Project Engineer/index";
import Promaneger from "./pages/The People/Project Manager/index";
import Quality from "./pages/The People/Quality Control/index";


function App() {
  return (
    <div className="App">
    <Navbarboot />


    <Routes>
    {/*  <Navbar />  */}
        <Route path="/" element={<Home />} />
        <Route path="/vision" element={<Vision />} />
        <Route path="/download" element={<Download />} />
        <Route path="/client" element={<Client />} />
        <Route path="/running" element={<Running />}  />
        <Route path="/complete" element={<Complete/>} />
        <Route path="/general"  element={<General />} />
        <Route path="/director"  element={<Director />} />
        <Route path="/engineer"  element={<Proengineer />} />
        <Route path="/quality"  element={<Quality />} />
        <Route path="/manager"  element={<Promaneger />} />
        <Route path="/resources" element={<Resources />}/>
        <Route path="/contact" element={<Contact />}/>
        <Route path="/career" element={<Carrer />}/>
       
        
     
      
    </Routes>

      <Footer />
    </div>
  );
}

export default App;

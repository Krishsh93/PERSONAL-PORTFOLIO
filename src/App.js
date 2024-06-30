
import './App.css';
import Navbar from './components/navbar';
import { Routes,Route } from 'react-router-dom';
import Home from "./components/home";
import Projects from "./components/project";
import Contact from './components/contact'; 
import About from "./components/about"


function App() {
  return (
    <div>
      
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/projects" element={<Projects/>}/>
      <Route path="/about" element={<About/>}/>
      <Route path="/contact" element={<Contact/>}/>
    </Routes>
    </div>
    
  );
}

export default App;

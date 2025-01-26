import './App.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Service from './components/Service';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import { Routes, Route } from "react-router-dom";
import Mainpage from './components/Mainpage';

function App() {
  return (
    <div className="App h-screen bg-gray-200 overflow-x-hidden ">
     <Navbar className='pl-16 pr-16 '/>
    <Routes>
    <Route path="/" element={<Mainpage/>}></Route>
    <Route path="/about" element={<Service/>}/>
    <Route path="/skills" element={<Skills/>}></Route>
    <Route path="/projects" element={ <Projects/>}></Route>
    <Route path="/contact" element={ <Contact/>}></Route>
    </Routes>
    
    </div>
  );
}

export default App;

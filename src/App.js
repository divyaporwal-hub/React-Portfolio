import { useCallback,useEffect } from "react";
import Particles from "react-particles";
import { loadFull } from "tsparticles";
import './App.scss';
import Skills from './containers/skills';
import Contact from './containers/contact';
import Portfolio from './containers/portfolio';
import Resume from './containers/resume';
import Home from './containers/home';
import About from './containers/about';
import {Routes,Route,useLocation} from "react-router-dom";
import Navbar from './components/navbar';
import particles from "./utils.js/particles";

function App() {
  const location =useLocation();
  const handleInit= async (main)=>
  {
    await loadFull(main)
  }
   useEffect(()=>
  {
    document.title="Divya's Portfolio";
  })
  const renderLocation =location.pathname;
  return (
    <div className="App">
       {
        renderLocation==="/" && (<Particles id="particles" options={particles} init={handleInit} />)
       }
          <Navbar/>
          <div className="App__main-page-content"></div>
    <Routes>
    
      <Route index path="/home" element ={<Home/>}></Route>
      <Route path="/resume" element ={<Resume/>}></Route>
      <Route path="/skills" element ={<Skills/>}></Route>
      <Route path="/about" element ={<About/>}></Route>
      <Route path="/portfolio" element ={<Portfolio/>}></Route>
      <Route path="/contact" element ={<Contact/>}></Route>
    </Routes>
    </div>
  );
}

export default App;

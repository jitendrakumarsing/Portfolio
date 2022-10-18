import './App.css';
import Navbar from './components/Navbar';
import { HashRouter, Routes,Route} from "react-router-dom";
import Home from './components/Home';
import Work from './components/Work';
import Education from './components/Education';
import About from './components/About';




function App() {
  return (
    <>
   <HashRouter>
   <Navbar/>
    <Routes> 
      <Route path="/" element={<Home/>}/>
      <Route path="/Home" element={<Home/>} />
      <Route path="/Work" element={<Work username="jitendrakumarsing"/>}/>
      <Route path="/Education" element={<Education/>} />
      <Route path="/About" element={<About/>} />
    </Routes>
  </HashRouter>
    </>
  );
}

export default App;

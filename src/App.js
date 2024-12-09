
import "./Styles/App.css"; //sass location
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import  Home  from "./pages/Home";
import  About  from "./pages/About";
import Footer from "./pages/Footer";
import DarkModeToggle from "./controllers/DarkModeToggle"
import Post from "./controllers/Post";
import Nav from "./pages/Nav";




function App() {
  return (
    <Router>
      <Nav/>
      <Routes>        
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/posts' element={<Post/>}/>        
        <Route path="/:filename" element={<Post />} />
        <Route path="/posts/:filename" element={<Post />} /> {/* Ruta para un post específico */}
      </Routes>
      <DarkModeToggle />
      <Footer/>
    </Router> 
  );
}

export default App;


import "./Styles/App.css"; //sass location
import {BrowserRouter as Router, Routes, Route, Link} from "react-router-dom";
import  Home  from "./pages/Home";
import  About  from "./pages/About";
import Footer from "./pages/Footer";
import DarkModeToggle from "./controllers/DarkModeToggle"
import Post from "./controllers/Post";




function App() {
  return (
    <Router>     
      <nav>
        <h1>LOGO</h1>
        <Link to={"/"}>Home</Link>
        <Link to={"/about"}>about</Link>
        <Link to={"/posts"}>Posts</Link>
      </nav>
      
      <Routes>        
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/posts' element={<Post/>}/>        
        <Route path="/:filename" element={<Post />} />
      </Routes>
      <DarkModeToggle />
      <Footer/>
    </Router>
    

      
  );
}

export default App;


import "./Styles/App.css"; //sass location
import {BrowserRouter as Router, Routes, Route, Link} from "react-router-dom";
import  Home  from "./pages/Home";
import  About  from "./pages/About";
import Footer from "./pages/Footer";
import DarkModeToggle from "./controllers/DarkModeToggle"
import MarkdownPostsViewer from "./controllers/Blog"
import MarkdownPost from "./controllers/Post";




function App() {
  return (
    <Router>     
      <nav>
        <h1>LOGO</h1>
        <Link to={"/"}>Home</Link>
        <Link to={"/about"}>about</Link>
        
        
      </nav>
      
      <Routes>        
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path="/posts/:slug" element={<MarkdownPost />} />
      </Routes>
    
      <DarkModeToggle />
      <Footer/>
    </Router>
    

      
  );
}

export default App;

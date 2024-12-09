
import "./Styles/App.css"; //sass location
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import  Home  from "./pages/Home";
import  About  from "./pages/About";
import Footer from "./pages/Footer";
import DarkModeToggle from "./controllers/DarkModeToggle"
import Post from "./controllers/Post";
import Nav from "./pages/Nav";
import NotFound from "./pages/NotFound"




function App() {
  return (
    <Router>
      <Nav/>
      <Routes>        
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>       
        <Route path="/:filename" element={<Post />} />
        <Route path="/posts/:filename" element={<Post />} /> {/* Ruta para un post específico */}
        <Route path="/404" element={<NotFound />} /> {/* Página 404 */}
      </Routes>
      <DarkModeToggle />
      <Footer/>
    </Router> 
  );
}

export default App;

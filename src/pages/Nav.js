import React from 'react'
import {Link} from "react-router-dom";
import DarkModeToggle from "../controllers/DarkModeToggle"

function Nav() {
  return (
    <div>       
      <nav class="navbar navbar-expand-lg bg-transparent navbarcustom">
        <div class="container-fluid">
            <a class="navbar-brand" href="/">Blog juegos</a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav">
                <li class="nav-item">
                <Link to={"/"}>Home</Link>
                </li>
                <li class="nav-item">
                <Link to={"/posts"}>Posts</Link>
                </li>
                <li class="nav-item">
                <Link to={"/about"}>about</Link>
                </li> 
                <DarkModeToggle />               
            </ul>
            </div>
        </div>
        </nav>
    </div>
  )
}

export default Nav
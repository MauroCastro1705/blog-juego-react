import React from 'react'
import { Link } from "react-router-dom";

function Home() {
    return (
        <div className='home'>
            <div className='home-col1'>
            <h1>Posts</h1>
                <ul>
                    <li>
                    <Link to="/post1">Post 1</Link>
                    </li>
                    <li>
                    <Link to="/post2">Post 2</Link>
                    </li>
                    <li>
                    <Link to="/post3">Post 3</Link>
                    </li>
                </ul>                
            </div>
            <div className='home-col2'>
                <div className='home-col2-1'>
                    <h1>HOME col2 titulo h1</h1>                    
                </div>
                <div className='home-col2-2'>
                    <h1>HOME col2-2</h1>
                    <h1>HOME</h1>
                    <h1>HOME</h1>
                    <h1>HOME</h1>
                </div>                
            </div>
            

        </div>
        
    )
}

export default Home

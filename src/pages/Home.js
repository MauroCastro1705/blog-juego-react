import React from 'react'
import { Link } from "react-router-dom";

function Home() {

    const posteos = [
        { id: "post1", title: "Post 1" },
        { id: "post2", title: "Post 2" },
        { id: "post3", title: "Post 3" },
      ];

    return (
        <div className='container'>
            <div className='row'>
            <div className='col-8'>
                <button type="button" class="btn btn-primary">Primary</button>  
            <h1>Posts</h1>                              
            <ul>
                {posteos.map((post) => (
                <li key={post.id}>
                    <Link to={`/posts/${post.id}`}>{post.title}</Link>
                </li>
                ))}
            </ul>                
            </div>
            <div className='col-4'>
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
        </div>
        
    )
}

export default Home

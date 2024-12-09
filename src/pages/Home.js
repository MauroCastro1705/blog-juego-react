import React, { useState } from "react";
import { Link } from "react-router-dom";

function Home() {

    const posteos = [
        { id: "post1", title: "Post 1" },
        { id: "post2", title: "Post 2" },
        { id: "post3", title: "Post 3" },
      ];
      const [searchTerm, setSearchTerm] = useState("");

        const filteredPosts = posteos.filter((post) =>
            post.title.toLowerCase().includes(searchTerm.toLowerCase())
        );

    return (
        <div className='container'>
            <div className='row'>
            <div className='col-8 list-unstyled'>
                <button type="button" class="btn btn-primary">Primary</button>  
            <h1>Posts</h1> 
            <div class="container-fluid">
                <form class="d-flex" role="search">
                    <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search" value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}/>
                    <button class="btn btn-outline-success" type="submit">Search</button>
                </form>
            </div>                             
            <ul className="list-unstyled p-4">
                {filteredPosts.length > 0 ? (
                filteredPosts.map((post) => (
                    <li key={post.id}>
                    <Link to={`/posts/${post.id}`}>{post.title}</Link>
                    </li>
                ))
                ) : (
                <li>No se encontraron posts</li>
                )}
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

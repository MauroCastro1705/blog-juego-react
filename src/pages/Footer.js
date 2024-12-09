import React from 'react'
import GitLogo from "../assets/Logos/github-logo.png"

export default function Footer() {
  return (
    <div>
        <footer className='footer bg-transparent'>
            <button className='btn-footer'>               
                    <a href='https://github.com/MauroCastro1705/blog-juego-react.git' target="_blank" rel="noreferrer">  
                    <img src={GitLogo} alt='github logo'></img>
                    </a>                
            </button>
            
          <h2>este es el footer</h2>
      </footer>  
    </div>
  )
}

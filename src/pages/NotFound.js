import React from 'react'
import { Link } from "react-router-dom";

function NotFound() {
  return (
    <div className="container text-center my-5">
      <h1>404 - Página no encontrada</h1>
      <p>Lo sentimos, la página que buscas no existe.</p>
      <Link to="/" className="btn btn-primary">
        Volver al inicio
      </Link>
    </div>
  )
}

export default NotFound
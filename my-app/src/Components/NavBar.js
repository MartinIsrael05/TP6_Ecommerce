import React from 'react'
import { Link } from 'react-router-dom'
function NavBar() {
  return (
    <>
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
    <div className="container px-4 px-lg-5">
       
        <Link className="navbar-brand" to="/home">A feira do pindi</Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"><span className="navbar-toggler-icon"></span></button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0 ms-lg-4">
            <li className="nav-item"><Link to="/home"className="nav-link active">Home</Link></li>
                <li className="nav-item"><Link to="/quienes-somos"className="nav-link active">Quienes Somos</Link></li>
                <li className="nav-item"><Link to="/contacto"className="nav-link active">Contacto</Link></li>
                <li className="nav-item dropdown">
                </li>
            </ul>
            <form className="d-flex">
                <button className="btn btn-outline-dark" type="submit">
                    <i className="bi-cart-fill me-1"></i>
                    Carrinho
                    <span className="badge bg-dark text-white ms-1 rounded-pill">0</span>
                </button>
            </form>
        </div>
    </div>
</nav>
</>
  )
}

export default NavBar
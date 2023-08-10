import React from 'react'
import { Link } from "react-router-dom";
function Layout() {
  return (
    <nav>
<Link to="/home">Home</Link>
<Link to="/quienes-somos">Quienes Somos</Link>
<Link to="/contacto">Contacto</Link>
</nav>

  )
}

export default Layout
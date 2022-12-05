import React from 'react';
import { Link } from 'react-router-dom'
import CartWidget from './CartWidget';
import '../assets/styles/Navbar.css';

const NavBar = () => {
    return (
<div>
  <nav className='navbar navbar-expand-lg navbar-dark bg-dark pb-3 pt-3'>
    <div className='container-fluid'>
      <Link className='logo' to= "/">
        TERMOLAND⚡
      </Link>
      <button className='navbar-toggler' type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="basic-navbar-nav">
           <span className='navbar-toggler-icon'></span>
      </button>
      <div className='collapse navbar-collapse' id='navbarNav'>
        <ul className='navbar-nav ms-auto'>
          <li>
          <Link className="nav-style" to="/">Tienda</Link>
          </li>
          <li className='centrar'>
          <Link className="nav-style" to="/category/Acero">Acero Inox</Link>
          </li>
          <li className='centrar'>
          <Link className="nav-style" to="/category/Vidrio">Vidrio</Link>
          </li>
          <li>
          <Link className='logo-carrito' to="/cart"><CartWidget /></Link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</div>

  );
 
}

export default NavBar;
import React from 'react'
import './NavBar.css'
import CartWidget from '../CartWidget/CartWidget'

const NavBar = () => {
  return (
    <header>
      <h1>COMPRAS</h1>
      <nav>
        <ul>
          <li>prueba1</li>
          <li>prueba1</li>
          <li>prueba1</li>
        </ul>
      </nav>
      <CartWidget/>
    </header>
  )
}

export default NavBar
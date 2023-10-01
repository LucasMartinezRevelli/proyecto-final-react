import React from 'react'
import "./CartWidget.css"

const CartWidget = () => {
  const imgCarrito = "https://w7.pngwing.com/pngs/387/168/png-transparent-shopping-cart-button-graphy-earring-shopping-cart-angle-rectangle-logo.png"
  return (
    <div>
      <img className='imgCarrito' src = {imgCarrito} alt="imagen de carrito" />
      <p>5</p>
    </div>
  )
}

export default CartWidget
import { useState } from 'react'
import { pizzaCart } from '../pizzas'

const Cart = () => {
  const [cart, setCart] = useState(pizzaCart)

  const updateQuantity = (id, delta) => {
    const newCart = cart
      .map((p) =>
        p.id === id ? { ...p, quantity: p.quantity + delta } : p
      )
      .filter((p) => p.quantity > 0)
    setCart(newCart)
  }

  const total = cart.reduce((acc, p) => acc + p.price * p.quantity, 0)

  return (
    <div className="container my-5">
      <h2>Carrito de Compras</h2>
      <ul className="list-group">
        {cart.map((p) => (
          <li key={p.id} className="list-group-item d-flex justify-content-between align-items-center">
            <div>
              <img src={p.img} alt={p.name} width="80" className="me-3" />
              <strong>{p.name}</strong> - ${p.price.toLocaleString()} x {p.quantity}
            </div>
            <div>
              <button className="btn btn-sm btn-danger me-2" onClick={() => updateQuantity(p.id, -1)}>-</button>
              <button className="btn btn-sm btn-success" onClick={() => updateQuantity(p.id, 1)}>+</button>
            </div>
          </li>
        ))}
      </ul>
      <h4 className="mt-4">Total: ${total.toLocaleString('es-CL')}</h4>
      <button className="btn btn-primary mt-2">Pagar</button>
    </div>
  )
}

export default Cart

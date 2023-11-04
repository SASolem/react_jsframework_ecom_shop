import React, { useContext } from 'react'
import { CartContext } from '../../context/CartContext'
import { Link } from 'react-router-dom'

function CartIcon() {
  const { cart, addToCart } = useContext(CartContext)

  const { products } = cart

  const productItems = products.map((product) => (
    <li key={product.id}>
      {product.title} - ${product.price}
    </li>
  ))

  const handleAddToCart = (product) => addToCart(product)

  return (
    <div>
      <i className="fa fa-shopping-cart"></i>
      <Link to="/checkout">
        <ul>{productItems}</ul>
      </Link>
      <button
        onClick={() =>
          handleAddToCart({ id: 1, title: 'Product 1', price: 10.99 })
        }
      >
        Add to Cart
      </button>
      <p>Number of items: {products ? products.length : 0}</p>
    </div>
  )
}

export default CartIcon

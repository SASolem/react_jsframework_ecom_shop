import { useContext, useState } from 'react'
import { CartContext } from '../../context/CartContext'
import { Card, List, ListItem, Input, Button } from './Checkout.styles'
import { Link } from 'react-router-dom'

const Checkout = ({ closeModal }) => {
  const {
    cart,
    removeProduct,
    clearCart,
    incrementProduct,
    decrementProduct,
    setDiscountAmount,
  } = useContext(CartContext)

  const [discountCode, setDiscountCode] = useState('')
  const [discountAmountLocal, setDiscountAmountLocal] = useState(0)

  const handleDiscountCodeChange = (event) => {
    setDiscountCode(event.target.value)
  }

  const handleApplyDiscount = () => {
    if (discountCode === 'SPRINGSALE') {
      const newDiscountAmount = 10
      setDiscountAmountLocal(newDiscountAmount)
      setDiscountAmount(newDiscountAmount)
    }
  }

  const handleIncrement = (productId) => {
    incrementProduct(productId)
  }

  const handleDecrement = (productId) => {
    decrementProduct(productId)
  }

  const handleRemoveProduct = (productId) => {
    removeProduct(productId)
  }

  const handleClearCart = () => {
    clearCart()
  }

  const totalPrice = cart.products.reduce(
    (total, product) => total + product.price * product.quantity,
    0,
  )

  const discountedPrice = (
    totalPrice -
    (totalPrice * discountAmountLocal) / 100
  ).toFixed(2)

  const discountText =
    discountAmountLocal > 0 ? (
      <span>
        <s>${totalPrice.toFixed(2)}</s> ${discountedPrice} (
        {discountAmountLocal}% off){' '}
      </span>
    ) : (
      <span>${totalPrice.toFixed(2)}</span>
    )

  return (
    <Card>
      <h1>Items</h1>
      {cart.products.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <div>
          <List>
            {cart.products.map((product) => (
              <ListItem key={product.id}>
                <span>
                  {product.title} - ${product.price}
                </span>
                <div>
                  <Input
                    type="number"
                    min="1"
                    value={product.quantity}
                    onChange={() => handleIncrement(product.id)}
                  />
                  <Button onClick={() => handleIncrement(product.id)}>+</Button>
                  <Button onClick={() => handleDecrement(product.id)}>-</Button>
                  <Button onClick={() => handleRemoveProduct(product.id)}>
                    Remove
                  </Button>
                </div>
              </ListItem>
            ))}
          </List>
          <p>Total Price: {discountText}</p>
          <div>
            <input
              type="text"
              placeholder="Enter discount code"
              value={discountCode}
              onChange={handleDiscountCodeChange}
            />
            <Button onClick={handleApplyDiscount}>Apply Discount</Button>
          </div>
          <div>
            <Button onClick={handleClearCart}>Clear Cart</Button>
            <Link to="/checkoutSuccess">
              <Button>Checkout</Button>
            </Link>{' '}
            {/* Add Link component to create a link to success.jsx */}
          </div>
        </div>
      )}
    </Card>
  )
}

export default Checkout

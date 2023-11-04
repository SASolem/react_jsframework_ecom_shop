import { useContext, useEffect } from 'react'
import { CartContext } from '../../context/CartContext'
import { Card, Heading, Message } from './CheckoutSuccess.styles'

const CheckoutSuccess = () => {
  const { clearCart, setCartCount, setCheckoutSuccess } = useContext(
    CartContext,
  )

  useEffect(() => {
    clearCart()
    setCartCount(0)
    setCheckoutSuccess(false)
  }, [clearCart, setCartCount, setCheckoutSuccess])

  return (
    <Card>
      <Heading>Checkout Success!</Heading>
      <Message>Thank you for your purchase.</Message>
    </Card>
  )
}

export default CheckoutSuccess

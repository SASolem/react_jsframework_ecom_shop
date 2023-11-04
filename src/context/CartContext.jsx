import { createContext, useState, useContext } from 'react'

export const CartContext = createContext()

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState({ products: [] })
  const [discountAmount, setDiscountAmount] = useState(0)
  const [checkoutSuccess, setCheckoutSuccess] = useState(false)
  const [cartCount, setCartCount] = useState(0)

  const addToCart = (product) => {
    const productIndex = cart.products.findIndex((p) => p.id === product.id)

    if (productIndex >= 0) {
      const updatedProducts = [...cart.products]
      updatedProducts[productIndex] = {
        ...updatedProducts[productIndex],
        quantity: updatedProducts[productIndex].quantity + 1,
      }
      setCart({ products: updatedProducts })
    } else {
      setCart({ products: [...cart.products, { ...product, quantity: 1 }] })
    }
    setCartCount(cartCount + 1)
  }

  const removeProduct = (productId) => {
    const updatedProducts = cart.products.filter(
      (product) => product.id !== productId,
    )
    setCart({ products: updatedProducts })
    setCartCount(cartCount - 1)
  }

  const clearCart = () => {
    setCart({ products: [] })
    setCartCount(0)
  }

  const incrementProduct = (productId) => {
    const updatedProducts = [...cart.products]
    const productIndex = updatedProducts.findIndex((p) => p.id === productId)

    updatedProducts[productIndex] = {
      ...updatedProducts[productIndex],
      quantity: updatedProducts[productIndex].quantity + 1,
    }

    setCart({ products: updatedProducts })
    setCartCount(cartCount + 1)
  }

  const decrementProduct = (productId) => {
    const updatedProducts = [...cart.products]
    const productIndex = updatedProducts.findIndex((p) => p.id === productId)

    if (updatedProducts[productIndex].quantity > 1) {
      updatedProducts[productIndex] = {
        ...updatedProducts[productIndex],
        quantity: updatedProducts[productIndex].quantity - 1,
      }
      setCart({ products: updatedProducts })
      setCartCount(cartCount - 1)
    } else {
      removeProduct(productId)
    }
  }

  const handleCheckout = () => {
    setCheckoutSuccess(true)
    clearCart()
  }

  const contextValues = {
    cart,
    addToCart,
    removeProduct,
    clearCart,
    incrementProduct,
    decrementProduct,
    discountAmount,
    setDiscountAmount,
    checkoutSuccess,
    handleCheckout,
    cartCount,
    setCartCount,
    setCheckoutSuccess,
  }

  return (
    <CartContext.Provider value={contextValues}>
      {children}
    </CartContext.Provider>
  )
}

export const useCart = () => {
  const context = useContext(CartContext)
  if (!context) {
    throw new Error('useCart must be used within a CartProvider')
  }
  return context
}

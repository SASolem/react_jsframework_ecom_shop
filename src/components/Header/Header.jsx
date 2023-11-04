import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import Navbar from '../Navbar/Navbar'
import {
  HeaderWrapper,
  LogoContainer,
  CartNavLink,
  ShoppingCartIcon,
} from './Header.styles'
import { CartContext } from '../../context/CartContext'

const Header = () => {
  const { cartCount = 0 } = useContext(CartContext)

  return (
    <HeaderWrapper>
      <LogoContainer>
        <Link to="/">
          <h1>e-Shop</h1>
        </Link>
      </LogoContainer>
      <CartNavLink as={Link} to="/checkout" className="active">
        <ShoppingCartIcon />
        <span>{cartCount}</span>
      </CartNavLink>
      <Navbar />
    </HeaderWrapper>
  )
}

export default Header

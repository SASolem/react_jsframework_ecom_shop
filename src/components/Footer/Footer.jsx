import React from 'react'
import { FooterContainer, ScrollButton } from './Footer.styles'

function Footer() {
  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <>
      <FooterContainer>
        <p>&copy; 2023 NeNorvalls eCom_Shop</p>
      </FooterContainer>
      <ScrollButton onClick={handleScrollToTop}>Scroll to Top</ScrollButton>
    </>
  )
}

export default Footer

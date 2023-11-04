import React, { useEffect, useState, useContext } from 'react'
import { FaStar } from 'react-icons/fa'
import { CartContext } from '../../context/CartContext'
import {
  ModalOverlay,
  ModalContainer,
  CloseButton,
  ProductImage,
  ProductDetails,
  ProductTitle,
  ProductDescription,
  ProductPrice,
  ProductDiscountedPrice,
  ProductRating,
  ReviewList,
  Review,
  ReviewUser,
  ReviewRating,
  ReviewDescription,
} from './ProductDetail.styles'

const ProductDetail = ({ product, onClose }) => {
  const { addToCart } = useContext(CartContext)
  const [averageRating, setAverageRating] = useState(0)

  useEffect(() => {
    // Calculate average rating of product
    const ratings = product.reviews.map((review) => review.rating)
    const sum = ratings.reduce((a, b) => a + b, 0)
    setAverageRating(sum / ratings.length)
  }, [product.reviews])

  return (
    <ModalOverlay>
      <ModalContainer>
        <CloseButton onClick={onClose}>X</CloseButton>
        <ProductImage src={product.imageUrl} alt={product.title} />
        <ProductDetails>
          <ProductTitle>{product.title}</ProductTitle>
          <ProductDescription>{product.description}</ProductDescription>
          {product.discountedPrice !== product.price && (
            <>
              <ProductPrice>
                <span style={{ textDecoration: 'line-through', color: 'red' }}>
                  ${product.price}
                </span>{' '}
                <span style={{ marginLeft: '10px' }}>
                  <ProductDiscountedPrice>
                    ${product.discountedPrice}
                  </ProductDiscountedPrice>
                </span>
              </ProductPrice>
            </>
          )}
          {product.discountedPrice === product.price && (
            <ProductPrice>${product.price}</ProductPrice>
          )}
          <ProductRating>
            {Array.from({ length: 5 }).map((_, index) => (
              <FaStar
                key={index}
                size={24}
                color={index + 1 <= averageRating ? 'gold' : 'gray'}
              />
            ))}
          </ProductRating>
          <ReviewList>
            <h3>Reviews</h3>
            {product.reviews.map((review) => (
              <Review key={review.id}>
                <ReviewUser>{review.username}</ReviewUser>
                <ReviewRating>
                  {Array.from({ length: 5 }).map((_, index) => (
                    <FaStar
                      key={index}
                      size={18}
                      color={index + 1 <= review.rating ? 'gold' : 'gray'}
                    />
                  ))}
                </ReviewRating>
                <ReviewDescription>{review.description}</ReviewDescription>
              </Review>
            ))}
          </ReviewList>
          <button onClick={() => addToCart(product)}>Add to Cart</button>
        </ProductDetails>
      </ModalContainer>
    </ModalOverlay>
  )
}

export default ProductDetail

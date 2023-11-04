import React, { useState } from 'react'
import ProductDetail from '../ProductDetail/ProductDetail'
import {
  Card,
  CardImage,
  CardBody,
  CardTitle,
  CardPrice,
  ProductListWrapper,
  ViewButton,
} from './ProductList.styles'

function ProductList({ products }) {
  const [selectedProduct, setSelectedProduct] = useState(null)

  const handleProductClick = (product) => {
    setSelectedProduct(product)
  }

  return (
    <>
      <ProductListWrapper>
        {products.map((product) => (
          <Card key={product.id}>
            <CardImage src={product.imageUrl} />
            <CardBody>
              <CardTitle>{product.title}</CardTitle>
              <CardPrice>Price: ${product.price}</CardPrice>
              <ViewButton onClick={() => handleProductClick(product)}>
                View
              </ViewButton>
            </CardBody>
          </Card>
        ))}
      </ProductListWrapper>
      {selectedProduct && (
        <ProductDetail
          product={selectedProduct}
          onClose={() => setSelectedProduct(null)}
        />
      )}
    </>
  )
}

export default ProductList

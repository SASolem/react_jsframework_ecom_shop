import React, { useState, useEffect } from 'react'
import ProductList from '../ProductList/ProductList'
import { Container, SearchBar, SearchInput } from './Home.styles'

const Home = () => {
  const [products, setProducts] = useState([])
  const [filteredProducts, setFilteredProducts] = useState([])
  const [searchText, setSearchText] = useState('')

  useEffect(() => {
    fetch('https://api.noroff.dev/api/v1/online-shop')
      .then((response) => response.json())
      .then((data) => {
        setProducts(data)
        setFilteredProducts(data)
      })
      .catch((error) => console.error(error))
  }, [])

  const handleSearch = (event) => {
    const searchValue = event.target.value
    setSearchText(searchValue)

    const filtered = products.filter((product) =>
      product.title.toLowerCase().includes(searchValue.toLowerCase()),
    )
    setFilteredProducts(filtered)
  }

  if (!products) {
    return <div>Loading...</div>
  }

  return (
    <Container>
      <SearchBar>
        <SearchInput
          type="text"
          placeholder="Search by product name"
          value={searchText}
          onChange={handleSearch}
        />
      </SearchBar>
      {filteredProducts.length > 0 ? (
        <ProductList products={filteredProducts} />
      ) : (
        <div>
          {products.length > 0 ? (
            <ProductList products={products} />
          ) : (
            <p>No products found.</p>
          )}
        </div>
      )}
    </Container>
  )
}

export default Home

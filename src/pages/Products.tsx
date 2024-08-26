import styled from "styled-components";

import { FaCartPlus } from "react-icons/fa";

interface ProductInt {
  id : number,
  productType: string,
  brand: string,
  image: string,
  price: string,
}

const productItems: Array<ProductInt> = [
  {
    id: 1,
    productType: 'T-Shirt',
    brand: 'Carhartt',
    image: './src/assets/products/carhartt tshirt1.jpg',
    price: '50$'
  },
  {
    id: 2,
    productType: 'T-Shirt',
    brand: 'Carhartt',
    image: './src/assets/products/carhartt tshirt2.jpg',
    price: '50$'
  },
  {
    id: 3,
    productType: 'Jacket',
    brand: 'Carhartt',
    image: './src/assets/products/carhartt jacket1.jpg',
    price: '100$'
  },
  {
    id: 4,
    productType: 'Jacket',
    brand: 'Carhartt',
    image: './src/assets/products/carhartt jacket2.jpg',
    price: '100$'
  },
  {
    id: 5,
    productType: 'Bag',
    brand: 'Carhartt',
    image: './src/assets/products/carhartt bag1.jpg',
    price: '70$'
  },
  {
    id: 6,
    productType: 'T-Shirt',
    brand: 'Wolee',
    image: './src/assets/products/wolee tshirt1.webp',
    price: '30$'
  },
  {
    id: 7,
    productType: 'Shorts',
    brand: 'Wolee',
    image: './src/assets/products/wolee shorts1.webp',
    price: '25$'
  },
  {
    id: 8,
    productType: 'Pants',
    brand: 'Wolee',
    image: './src/assets/products/wolee pants1.webp',
    price: '40$'
  },
]

const Products = () => {
  return (
    <ProductsWrapper>
    <h1>Каталог товаров</h1>
    <ProductList>
    {productItems.map(el => 
          <Product key={el.id}>
            <img src={el.image} alt="Product Image" className='product-image'/>
            <ProductDescription>
              <ProductText>
                <span>{el.productType} {el.brand}</span>
                <Price>{el.price}</Price>
              </ProductText>
              <button>
                <FaCartPlus/>
              </button>
            </ProductDescription>
          </Product>
        )}
    </ProductList>
    </ProductsWrapper> 
  );
}

const ProductsWrapper = styled.div`
  margin: 50px 10%;
  h1{
    text-align: center;
  }
`
const ProductList = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  margin-top: 30px;
  
`
const Product = styled.div`
  display: flex;
  flex-direction: column;
  width: fit-content;
  padding: 15px;
  margin: 10px;
  background-color: #404040;
  border-radius: 10px;
  cursor: pointer;
  text-decoration: none;
  transition: 200ms;
  &:hover{
    scale: 1.03;
  }
  img{
  width: 250px;
  height: 250px;
  margin-bottom: 15px;
  object-fit: cover;
  }
`
const ProductDescription = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0px 10px;
  button{
    border: none;
    border-radius: 5px;
    scale: 2;
    padding: 5px;
    background-color: transparent;
    aspect-ratio: 1/1;
    color: #fff;
    transition: 200ms ease-in-out;
    cursor: pointer;
  }
  button:hover{
    background-color: #202020;  
  }
`
const ProductText = styled.div`
  display: flex;
  flex-direction: column;
  color: #fff;
  font-weight: 400;
`
const Price = styled.span`
  margin-top: 5px;
  font-weight: 500;
`
 
export default Products;
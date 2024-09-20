import styled from "styled-components";
import { useState } from "react";

import { FaCartPlus } from "react-icons/fa";
import initProductItems from "../assets/data/product-list"
import initShoppingCart from "./../assets/data/cart-list"

const Products = () => {

//Рабочий вариант без стейта, но при удалении из корзины и переключении вкладок, возвращается

  function addToCart(id: number) {
    const productToAdd = initProductItems.find(item => item.id === id)
    if(productToAdd){
      initShoppingCart.push({...productToAdd, count: 1})
    }
  }

  // const [shoppingCart, setShoppingCart] = useState(initShoppingCart)

  // function addToCart(id: number) {
  //   setShoppingCart(initProductItems.map(item => item.id === id && item ? shoppingCart.push({...item, count: 1}) : ))
  // }

  // function addToCart(id: number) {
  //   const addedItem = initProductItems.filter(v => v.id === id);
  //   setShoppingCart(val => [...val, addedItem])
  // }

  return (
    <ProductsWrapper>
    <h1>Каталог товаров</h1>
    <ProductList>
    {initProductItems.map(el => 
          <Product key={el.id}>
            <img src={el.image} alt="Product Image" className='product-image'/>
            <ProductDescription>
              <ProductText>
                <span>{el.productType} {el.brand}</span>
                <Price>{el.price}$</Price>
              </ProductText>
              <button onClick={() => addToCart(el.id)}>
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
  border-radius: 5px;
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
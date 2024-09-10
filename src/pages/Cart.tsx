import styled from "styled-components";

import { AiFillDelete } from "react-icons/ai";

interface CartInt {
    id: number,
    productType: string,
    brand: string,
    image: string,
    price: number,
    count: number,
}

const cartItems: Array<CartInt> = [
  {
    id: 1,
    productType: 'T-Shirt',
    brand: 'Carhartt',
    image: './src/assets/products/carhartt tshirt1.jpg',
    price: 50,
    count: 1
  },
  {
  id: 2,
  productType: 'T-Shirt',
  brand: 'Carhartt',
  image: './src/assets/products/carhartt tshirt2.jpg',
  price: 50,
  count: 3
  },
]

let totalPrice = 0;

for (let i = 0; i < cartItems.length; i++) {
  totalPrice += cartItems[i].price * cartItems[i].count
}

const Cart = () => {
  return (
    <CartWrapper>
    <h1>Корзина</h1>
    <ListWrapper>
      <CartList>
      {cartItems.map(el =>
        <Product key={el.id}>
          <ProductDescription>
            <img src={el.image} alt="Product Image" className='product-image'/>
            <ProductText>
              <span>{el.productType} {el.brand}</span>
              <h3>Цена товара:</h3>
              <Price>{el.price}$</Price>
            </ProductText>
          </ProductDescription>
          <ProductCount>
            <RemoveBtn>
              <span>Удалить</span>
              <AiFillDelete size={24}/>
            </RemoveBtn>
            <Counter>
              <CountMinus>-</CountMinus>
              <span>{el.count}</span>
              <CountPlus>+</CountPlus>
            </Counter>
            <SumPrice>
              <span>{el.price * el.count}$</span>
            </SumPrice>
          </ProductCount>
        </Product>
      )}
      </CartList>
      <TotalSum>
        <TotalSumContent>
          <h1>Итог:</h1>
          <h3>{totalPrice}$</h3>
          <OrderBtn>Оформить заказ</OrderBtn>
        </TotalSumContent>
      </TotalSum>
    </ListWrapper>
    </CartWrapper> 
  );
}
 
const CartWrapper = styled.div`
  margin: 50px 10%;
`
const ListWrapper = styled.div`
  display: flex;
  width: 100%;
`
const CartList = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 30px;
  width: 78%;
`
const Product = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 10px;
  background-color: #404040;
  border-radius: 5px;
`
const ProductDescription = styled.div`
  display: flex;
  margin: 20px;
  img {
  width: 200px;
  height: 200px;
  border-radius: 5px;
  object-fit: cover;
  }
`
const ProductText = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 20px;
  color: #fff;
  span {
    font-size: 24px;
    font-weight: 600;
  }
  h3 {
    margin-top: 20px;
    font-weight: 400;
  }
`
const Price = styled.p`
  margin-top: 10px;
  font-size: 18px;
  font-weight: 400;
`
const ProductCount = styled.p`
  margin: 20px;
  font-weight: 500;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: end;
`
const RemoveBtn = styled.div`
  display: flex;
  align-items: center;
  padding: 5px 10px;
  border-radius: 5px;
  transition: 200ms ease-in-out;
  cursor: pointer;
  span {
    margin-right: 10px;
  }
  &:hover {
    background-color: #202020;
  }
`
const Counter = styled.p`
  display: flex;
  flex-direction: row;
  align-items: center;
  background-color: #606060;
  span{

  }
`
const CountMinus = styled.p`
  background-color: #949494;
  margin-right: 20px;
  padding: 10px 15px;
  cursor: pointer;
`
const CountPlus = styled.p`
  background-color: #949494;
  margin-left: 20px;
  padding: 10px 15px;
  cursor: pointer;
`
const SumPrice = styled.p`
  font-size: 24px;
`

const TotalSum = styled.div`
  height: 100%;
  width: 18%;
  margin-top: 30px;
  margin-left: 4%;
  background-color: #404040;
  border-radius: 5px;
`
const TotalSumContent = styled.div`
  margin: 20px 10%;
  h1 {
    margin-bottom: 20px;
  }
  h3 {
    margin-bottom: 20px;
    font-size: 32px;
    font-weight: 400;
  }

`
const OrderBtn = styled.button`
  width: 100%;
  height: 50px;
  background-color: #202020;
  border: none;
  border-radius: 10px;
  font-size: 16px;
  font-weight: 400;
  cursor: pointer;
  transition: 200ms ease-in-out;
  &:hover {
    background-color: #fff;
    color: #202020;
  }
`

export default Cart;
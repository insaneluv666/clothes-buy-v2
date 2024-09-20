interface ProductInt {
  id : number,
  productType: string,
  brand: string,
  image: string,
  price: number,
}

const initProductItems: Array<ProductInt> = [
  {
    id: 1,
    productType: 'T-Shirt',
    brand: 'Carhartt',
    image: './src/assets/products/carhartt tshirt1.jpg',
    price: 50
  },
  {
    id: 2,
    productType: 'T-Shirt',
    brand: 'Carhartt',
    image: './src/assets/products/carhartt tshirt2.jpg',
    price: 50
  },
  {
    id: 3,
    productType: 'Jacket',
    brand: 'Carhartt',
    image: './src/assets/products/carhartt jacket1.jpg',
    price: 100
  },
  {
    id: 4,
    productType: 'Jacket',
    brand: 'Carhartt',
    image: './src/assets/products/carhartt jacket2.jpg',
    price: 100
  },
  {
    id: 5,
    productType: 'Bag',
    brand: 'Carhartt',
    image: './src/assets/products/carhartt bag1.jpg',
    price: 70
  },
  {
    id: 6,
    productType: 'T-Shirt',
    brand: 'Wolee',
    image: './src/assets/products/wolee tshirt1.webp',
    price: 30
  },
  {
    id: 7,
    productType: 'Shorts',
    brand: 'Wolee',
    image: './src/assets/products/wolee shorts1.webp',
    price: 25
  },
  {
    id: 8,
    productType: 'Pants',
    brand: 'Wolee',
    image: './src/assets/products/wolee pants1.webp',
    price: 40
  },
]

export default initProductItems
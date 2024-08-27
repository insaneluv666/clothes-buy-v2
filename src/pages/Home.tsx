import styled from "styled-components";
import banner from './../assets/images/banner.jpg';

interface NewsInt {
  id : number,
  text: string,
  image?: string,
}

const News: Array<NewsInt> = [
  {
    id: 1,
    text: 'Мы открылись!',
    image: './src/assets/news/hlopushka.png',
  },
  {
    id: 2,
    text: 'Летние скидки!',
    image: './src/assets/news/sale-icon.png',
  },
]

const Home = () => {
  return (
    <HomeWrapper>
    <Banner></Banner>
    <NewsWrapper>
      {News.map(el => 
        <NewsItem key={el.id}>
          <img src={el.image} alt="" />
          <h1>{el.text}</h1>
        </NewsItem>
      )}
    </NewsWrapper>
    </HomeWrapper> 
  );
}
const HomeWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin: 50px auto;
`
const Banner = styled.div`
  margin-bottom: 50px;
  background: url(${banner}) center / cover no-repeat;
  width: 100%;
  height: 400px;
  background-blend-mode: multiply;
  background-color: #e0e0e0;
  position: relative;
  &::after{
  content: 'ClothesBuy';
  position: absolute;
  bottom: 100px;
  right: 100px;
  font-size: 40px;
  font-weight: 800;
  }
  &::before{
  content: 'Стиль - это наше всё';
  position: absolute;
  bottom: 60px;
  right: 100px;
  font-size: 32px;
  font-weight: 400;
  }
`
const NewsWrapper = styled.div`
  display:flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
  margin: 0 20%;
`
const NewsItem = styled.div`
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 50%;
  aspect-ratio: 1/0.8;
  background-color: #303030;
  outline: 1px solid #202020;
  transition: 200ms ease-in-out;
  img{
    object-fit: cover;
    z-index: 1;
    height: 250px;
    position: absolute;
    filter: blur(2px);
    opacity: 0.6;
  }
  h1{
    text-align: center;
    font-size: 32px;
    margin: 10px;
    z-index: 2;
    position: absolute;
  }
  &:hover{
    scale: 1.05;
  }
`

export default Home;
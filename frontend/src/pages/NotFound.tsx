import styled from "styled-components";
import { Link } from "react-router-dom";

const NotFound = () => {
  return ( 
    <NotFoundWrapper>
      <Error>
      <h1>Error 404</h1>
      <h4>Страница не найдена</h4>
      <Link to="/">
        <button>На главную</button>
      </Link>
      </Error>
    </NotFoundWrapper>
   );
}
 
const NotFoundWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: calc(100vh - 80px - 172px);
`
const Error = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  color: #707070;
  h1{
    font-size: 48px;
    margin-bottom: 10px;
  }
  h4{
    font-size: 36px;
    margin-bottom: 20px;
  }
  button{
    background-color: #707070;
    padding: 10px 8px;
    border: none;
    border-radius: 10px;
    color: #202020;
    font-family: "Montserrat", sans-serif;
    font-weight: 600;
    font-size: 20px;
    cursor: pointer;
  }
`

export default NotFound;
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import avatar from './../assets/images/avatar.png'

const Header = () => {

  return ( 
    <HeaderWrapper>
      <NavBar>
        <NavLink to="/">
          <NavLogo>ClothesBuy</NavLogo>
        </NavLink>
        <NavPages>
          <NavLink to="/">Главная</NavLink>
          <NavLink to="/products">Товары</NavLink>
          <NavLink to="/cart">Корзина</NavLink>
        </NavPages>
        <NavLink to="/profile">
        <NavProfile>
          <NavProfInfo>
            <span>John Smith</span>
            <span>Client</span>
          </NavProfInfo>
          <NavProfImg src={avatar} alt="avatar" />
        </NavProfile>
        </NavLink>
      </NavBar>
    </HeaderWrapper>
   );
}
 
const HeaderWrapper = styled.div`
  background-color: #303030;
  width: 100%;
  height: 80px;
  align-content: center;
`

const NavBar = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin: 0 5%;
`

const NavLogo = styled.a`
  color: #fff;
  font-style: normal;
  font-weight: 600;
`
const NavPages = styled.div`
  width: 25%;
  display: flex;
  justify-content: space-between;
  a {
    display: flex;
    align-items: center;
    border-radius: 4px;
    padding: 5px 10px;
    color: #fff;
    transition: 200ms ease-in-out;
  }
  a:hover {
    background-color: #fff;
    color: #303030;
  }
  a.active {
    background-color: #fff;
    color: #303030;
  }
`
const NavProfile = styled.div`
  display: flex;
  align-items: center;
`
const NavProfInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: end;
  margin-right: 20px;
  color: #fff;
  font-style: normal;
`
const NavProfImg = styled.img`
  color: #fff;
  font-style: normal;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  box-shadow: 2px 2px 5px black;
`

export default Header;
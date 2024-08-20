import styled from "styled-components";

const Footer = () => {
  return ( 
    <FooterWrapper>
      <FooterContent>
        Все права защищены &copy;
      </FooterContent>
    </FooterWrapper>
   );
}
 
const FooterWrapper = styled.div`
  background-color: #303030;
  height: 80px;
  display: flex;
  justify-content: center;
  align-items: center;
`
const FooterContent = styled.div`
  margin: 10px 50px;
`


export default Footer;
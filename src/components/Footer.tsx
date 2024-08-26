import styled from "styled-components";

const Footer = () => {
  return ( 
    <FooterWrapper>
      <FooterContent>
        <Address>
          <h4>Адрес магазина</h4>
          <span>Цветной б-р, 15 стр. 1, Москва, 127051</span>
          <span>Универмаг "Цветной", 7 этаж</span>
        </Address>
        <Socials>
          <h4>Социальные сети</h4>
          <a href="#">Telegram</a>
          <a href="#">ВКонтакте</a>
        </Socials>
        <Contacts>
          <h4>Контакты</h4>
          <a href="mailto:support@clothesbuy.ru">support@clothesbuy.ru</a>
          <a href="tel:+79779779797">+7 (977) 977-97-97</a>
          <span>Ежедневно с 9:00 до 22:00</span>
        </Contacts>
      </FooterContent>
    </FooterWrapper>
   );
}
 
const FooterWrapper = styled.div`
  background-color: #303030;
  display: flex;
  justify-content: center;
  align-items: center;
`
const FooterContent = styled.div`
  display: flex;
  margin: 30px 0;
  width: 90%;
  flex-direction: row;
  justify-content: space-between;
  h4{
    margin-bottom: 12px;
  }
  span{
    margin-bottom: 8px;
  }
  a{
    margin-bottom: 8px;
  }
`
const Address = styled.div`
  display: flex;
  flex-direction: column;
`
const Socials = styled.div`
  display: flex;
  flex-direction: column;
`
const Contacts = styled.div`
  display: flex;
  flex-direction: column;
`


export default Footer;
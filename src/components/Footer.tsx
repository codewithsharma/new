import styled from "styled-components";
import Logo from "../assets/Angelini_industries.png";
import WeCareImg from "../assets/we care logo.svg";
const Left = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  img{
    width: 150px;
  }
  p{
    display: block;
    @media screen and (max-width: 480px) {
    display: none;
  }

  }
  
`;

const Container = styled.div`
  width: 80%;
  height: 250px;
  margin: auto;
  padding: 40px;
  display: flex;
  justify-content: space-between;
  @media screen and (max-width: 480px) {
    flex-direction: column;
    gap: 30px;
    padding: 10px;
    
  }

`;

const Right = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;
const Top = styled.div`
  display: flex;
  align-items: center;
  gap: 30px;
  div {
    display: flex;
    align-items: center;

    p {
      padding: 20px;
      border-left: 1px solid black;
      height: 20px;
      width: 100%;
    }
  }
`;
const Bottom = styled.div`
  p {
    font-size: 18px;
  }
  span {
    color: #003087;
  }
`;

const Footer = () => {
  return (
    <Container>
      <Left>
        <img src={Logo} alt="" />
        <p>© Copyright notice</p>
      </Left>
      <Right>
        <Top>
          <img src={WeCareImg} alt="" />
          <div>
            <p>Health</p>
            <p>People</p>
            <p>Family</p>
          </div>
        </Top>
        <Bottom>
          <p>
            <span>
              Il nuovo portale Welfare, globale e integrato, del Gruppo
              Angelini.
            </span>
            <br /> ​ Per permetterti di gestire in modo semplice e immediato
            tutti i tuoi benefit.
          </p>
        </Bottom>
      </Right>
    </Container>
  );
};

export default Footer;

import styled from "styled-components";
import LogoImg from "../assets/Angelini_industries.png";
import WecareImg from "../assets/we care logo.svg";
import Menu1Img from "../assets/Frame 58.svg";
import Menu2Img from "../assets/Notifiche.svg";
import Menu3Img from "../assets/logout 2.svg";
import Menu4Img from "../assets/Icon_search.svg";
import Menu5Img from "../assets/Vector.svg";

const Container = styled.div`

  padding: 10px 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const Logo = styled.img`
  width: 200px;
  height: 50px;
  object-fit: contain;
`;
const Wecare = styled.img`
  width: 100px;
  height: 40px;
  object-fit: contain;
`;
const Tagline = styled.div`
  h2 {
    font-size: 20px;
    color:#003087;
  }
  span {
    color: #DF1995;
  }
`;
const Menu = styled.img`
  width: 25px;
`;
const Wrapper = styled.div`
width: 1400px;
height: 100%;
margin: auto;
  
`

const Navbar = () => {
  return (
    <Wrapper>
      <Container>
        <Logo src={LogoImg} />

        <Wecare src={WecareImg} />
        <Tagline>
          <h2>
            <span>Ciao! Laura,</span>
            <br />
            Benvenuta sul tuo portale Welfare
          </h2>{" "}
          ​
        </Tagline>

        <Menu src={Menu1Img} />
        <Menu src={Menu2Img} />
        <Menu src={Menu3Img} />
        <Menu src={Menu4Img} />
        <Menu src={Menu5Img} />
      </Container>
    </Wrapper>
  );
};

export default Navbar;

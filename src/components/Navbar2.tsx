import styled from "styled-components"
import LogoImg from "../assets/Angelini_industries.png"
import WeCareImg from "../assets/we care logo.svg"
const Container = styled.div`
@media screen and (max-width: 480px) {
  gap: 10px;
}
    display: flex;
    align-items: center;
    gap: 50px;
    padding: 20px;
    h3{
      color:#003087 ;
      @media screen and (max-width: 480px) {
        font-size: 20px;
}
        font-weight: 500;
        font-size: 37px;
        font-style: italic;
    }

`
const Logo = styled.img`
width: 120px;
@media screen and (max-width: 480px) {
  display: none;
}
    
`
const WeCare = styled.img`
width: 100px;
@media screen and (max-width: 480px) {
  width  : 80px ;
}
    
`


const Navbar2 = () => {
  return (
    <Container>
        <Logo src={LogoImg}/>
        <WeCare src= {WeCareImg}/>

        <h3>Il nuovo portale welfare </h3>
        
    </Container>
  )
}

export default Navbar2
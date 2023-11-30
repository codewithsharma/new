import styled from "styled-components";
import Img from "../assets/AdobeStock_259411017 2.png";
const Container = styled.div`
  @media screen and (max-width: 480px) {
    flex-direction: column;
    padding: 10px;
    gap: 10px;
  }
  div{
    display: flex;
    gap: 20px; 

  }
  display: flex;
  align-items: center;
  overflow: hidden;
  justify-content: space-between;
  width: 90%;
  gap: 100px;
  margin: auto;
  border-radius: 20px;
  background-color: #003087;
  img {
    @media screen and (max-width: 480px) {
      width: 100px;
    }
    width: 200px;
  }
`;
const MobileText  = styled.div`
 
      display: none;
      @media screen and (max-width: 480px) {
        display: block;
        font-size: 22px;
        margin-top: 20px;
        font-weight: 800;
    color: white;
  }
    
`
const Text = styled.div`
  display: flex;
  margin: 20px 0;
  flex-direction: column;
  color: white;
  @media screen and (max-width: 480px) {
    flex-direction: column;
  }
  h2 {
    
      @media screen and (max-width: 480px) {
        display: none; 
    }
    margin-bottom: 20px;
  }
  p {
    font-size: 17px;
    word-spacing: 2px;
  }
  div {
    display: flex;
    gap: 30px;
    @media screen and (max-width: 480px) {
      flex-direction: column;
    }
    button {
      @media screen and (max-width: 480px) {
        width: 90%;
        margin: auto;
        padding: 8px;
      }
      background-color: #df1995;
      color: white;
      border: none;
      border-radius: 16px;
      font-weight: bold;
      font-size: 17px;
      margin-right: 20px;
      width: 300px;
      outline: none;
    }
  }
`;

const LetsBuild = () => {
  return (
    <Container>
      <div>
      <img src={Img} alt="" />
      <MobileText>Costruiamo WeCare insieme</MobileText>
      </div>
      
      <Text>
        <h2>Costruiamo WeCare insieme</h2>
        <div>
          <p>
            Scopri in anteprima WeCare! Raccontaci i servizi di cui non faresti{" "}
            <br />
            mai a meno e suggerisci miglioramenti per un Welfare sempre più a{" "}
            <br />
            tua misura
          </p>
          <button>val Al wick plus</button>
        </div>
      </Text>
    </Container>
  );
};

export default LetsBuild;

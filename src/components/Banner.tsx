import styled from "styled-components";
import PlayBtn from "../assets/Vector.png";
const Container = styled.div`
  @media screen and (max-width: 480px) {
    flex-direction: column-reverse;
    background: linear-gradient(
      177.92deg,
      #003087 36.77%,
      rgba(0, 48, 135, 0.62) 63.95%,
      rgba(0, 48, 135, 0.45) 76.64%
    );
    height: auto;
  }
  height: 250px;
  justify-content: space-around;
  display: flex;
  background: linear-gradient(
    273.98deg,
    #003087 47.39%,
    rgba(0, 48, 135, 0.62) 70.81%,
    rgba(0, 48, 135, 0.4) 104.29%
  );
  padding: 40px;
  color: white;
`;
const Left = styled.div`
  @media screen and (max-width: 480px) {
    width: 100%;
    align-items: center;
    h2{
      margin-top: 20px;
      font-size: 15px;
    
    }
  }
  width: 50%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-content: space-between;
  gap: 20px;


  button {
    color: white;
    background-color: transparent;
    border: 1px solid white;
    border-radius: 7px;
    padding: 10px;
    align-items: center;
    display: flex;
    justify-content: center;
    gap: 20px;
    font-size: 18px;
    width: 200px;
  }
`;
const Right = styled.div`

  align-items: center;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  h2 {
    font-size: 25px;
    font-weight: 500;
    font-style: italic;
  }
`;
const Time = styled.div`
  display: flex;
  padding: 20px;
  text-align: center;
  align-items: center;
  gap: 10px;

  div {
    @media screen and (max-width: 480px){
      width: 80px;
      height: 80px;
    }
    border: 7px solid red;
    border-radius: 50%;
    width: 100px;
    height: 100px;
    display: flex;
    text-align: center;
    flex-direction: column;
    align-items: center;
    padding-top: 20px;
    h3 {
      @media screen and (max-width: 480px){
     font-size: 20px;
    }
      font-size: 30px;
    }
  }
  span{
      @media screen and (max-width: 480px){
     font-size: 13px;
    }

    }
`;

const Banner = () => {
  return (
    <Container>
      <Left>
        <h2>
          Stiamo lavorando al tuo nuovo portale welfare: <br /> semplice,
          organizzato, personalizzato
        </h2>
        <button>
          scopri wecare <img src={PlayBtn} alt="" />
        </button>
      </Left>
      <Right>
        <h2>Coming soon...</h2>
        <Time>
          <div>
            <h3>30</h3>
            <span>GIORNI</span>
          </div>
          <div>
            <h3>30</h3>
            <span>GIORNI</span>
          </div>

          <div>
            <h3>30</h3>
            <span>GIORNI</span>
          </div>

          <div>
            <h3>30</h3>
            <span>GIORNI</span>
          </div>
        </Time>
      </Right>
    </Container>
  );
};

export default Banner;

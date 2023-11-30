import styled from "styled-components";
import HeartImg from "../assets/health 1.svg";
import Image from "../assets/AdobeStock_259411017 2.png";
const Container = styled.div`
  background-color: white;
  padding: 20px;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  min-width: 250px;
  gap: 20px;
  max-width: 350px;
  button{
    padding: 10px;
    border: none;
border-radius: 15px;
background: #DF1995;
color: #FFF;
text-align: center;
font-size: 14px;
font-style: normal;
font-weight: 700;
text-transform: uppercase;
  }
`;
const Title = styled.div`
  display: flex;
  justify-content: space-between;
`;
const Card = () => {
  return (
    <div>
      <Container>
        <Title>
          <h3>Angelini4You</h3>
          <img src={HeartImg} alt="" />
        </Title>
        <img src={Image} alt="" />

        <button>Scorpoi</button>
      </Container>
    </div>
  );
};

export default Card;

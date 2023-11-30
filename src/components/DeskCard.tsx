import styled from "styled-components";
import { FaHeartbeat } from "react-icons/fa";
const Container = styled.div`
  color: white;
  font-size: 20px;
  min-width: 300px;
  max-width: 400px;
  border-radius: 15px;
  background: #ff585d;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  flex-direction: column;
  height: 250px;
  text-align: center;
  @media screen and (max-width: 480px){
width: 100%;
height: 200px;
  
    }
  div {
    background-color: white;
    display: flex;
    padding: 15px;
    border-radius: 50%;
    color: #ff585d;
  }
`;
const Logo = styled(FaHeartbeat)`
  font-size: 30px;
`;

const DeskCard = () => {
  return (
    <Container>
      <h2>Health</h2>
      <div>
        <Logo />
      </div>
    </Container>
  );
};

export default DeskCard;

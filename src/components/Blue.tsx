import styled from "styled-components";
import HealthIcon from "../assets/health 1.svg"
const Container = styled.div`
 border-radius: 15px 15px 0px 0px;
background: #003087;
  color: white;
  padding: 50px 0 10px 40px;
  h3 {
    font-size: 20px;
    font-weight: 600;
  }
`;
const Wrappers = styled.div`
  display: flex;
  justify-content: space-evenly;
  text-align: center;
  border-bottom: 1px solid gray;
  padding: 10px 20px;
  h2 {
    font-size: 18px;
    font-weight: 500;
    width: 200px;
    color: #003087;;
    & .active {
      border-bottom: 2px thick blue;
    }
  }
  span {
    color: #DF1995;
  }
`;
const Filter = styled.div`
  display: flex;
  padding: 10px 0;
  gap: 20px;
  align-items: center;
  justify-content: flex-end;
  h3{
    color:  gray;
    font-size: 18px;
  }
`;
const FilterButton = styled.button`
    padding: 5px 10px;
    border-radius: 9px;
    display: flex;
    align-items: center;
    gap: 4px;
    color:  #125112;
    background-color: #bde6bd87;
    border:0.1px solid #3a783a;
    outline: none;
`;
const Wrapper = styled.div`
width: 1400px;
height: 100%;
margin: auto;
  
`
const Blue = () => {
  return (
    <>
      <Container>
        <Wrapper>
        <h3>Esplora per categoria</h3>
        </Wrapper>
      </Container>
      <Wrapper>
      <Wrappers>
        <h2>
          Convenzioni e Flexible Benefits <span>(2)</span>
        </h2>
        <h2 className="active">
          Convenzioni e Flexible Benefits <span>(2)</span>
        </h2>
        <h2>
          Convenzioni e Flexible Benefits <span>(2)</span>
        </h2>
        <h2>
          Convenzioni e Flexible Benefits <span>(2)</span>
        </h2>
        <h2>
          Convenzioni e Flexible Benefits <span>(2)</span>
        </h2>
      </Wrappers>
     
      <Filter>
        <h3>filter per piller: </h3>
        <FilterButton>Health <img src={HealthIcon} alt="" /></FilterButton>
        <FilterButton>Health</FilterButton>
        <FilterButton>Health</FilterButton>
      </Filter>
      </Wrapper>
    </>
  );
};

export default Blue;

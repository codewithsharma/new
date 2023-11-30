import styled from "styled-components"
import Card from "./Card"

const Container = styled.div`
    h2{
        font-size: 26px;
    color:#003087;
    padding-bottom: 30px;
    }
`
const Cards = styled.div`
    display: flex;
    gap: 20px;
`
const Wrapper = styled.div`
width: 1400px;
height: 100%;
margin: auto;
  
`
const Products = () => {
  return (
    <Container>
        <Wrapper>

       
        <h2>Benessere</h2>
        <Cards>
            <Card/>
            <Card/>

        </Cards>
        </Wrapper>
    </Container>
  )
}

export default Products
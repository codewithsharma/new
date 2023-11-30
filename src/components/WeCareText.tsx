import styled from "styled-components";

const Container = styled.div`
  width: 80%;
  padding-top: 30px;
  margin: auto;
  h3 {
    font-size: 20px;
    font-weight: 500;
    color: #003087;
    font-style: italic;
    font-size: 25px;
    margin-bottom: 20px;
  }p{
    font-size: 18px;
    line-height: 1.4rem;
  }
  span {
    font-style: normal;
    color: #003087;
    font-weight: 600;
  }
`;
const WeCareText = () => {
  return (
    <Container>
      <h3>
        WeCare:<span>il tuo ben-essere, la nostra missione</span> ​
      </h3>
      <p>
        Al cuore dell’impegno del Gruppo Angelini verso <span>salute</span> ,{" "}
        <span>famiglia</span> e <span>persone</span> c’è il ben-essere dei suoi{" "}
        <span>dipendenti</span> . WeCare nasce per permetterti di approfittare
        al massimo delle preziose opportunità offerte dal nostro Welfare:
        troverai tutti i servizi per te e per chi ami, in un’unica e ben
        organizzata piattaforma
      </p>
    </Container>
  );
};

export default WeCareText;

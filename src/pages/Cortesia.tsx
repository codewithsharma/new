
import Navbar2 from '../components/Navbar2'
import Banner from '../components/Banner'
import WeCareText from '../components/WeCareText'
import DeskCard from '../components/DeskCard'
import styled from 'styled-components'
import LetsBuild from '../components/LetsBuild'
import Footer from '../components/Footer'
const Cards = styled.div`
  padding: 20px;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
@media screen and (max-width: 480px){
  grid-template-columns: 1fr;
  
    }
  width: 90%;
  margin: auto;
  gap: 20px;
`
const Cortesia = () => {
  return (
    <div>
      <Navbar2/>
      <Banner/>
     <WeCareText/>
     <Cards>
      <DeskCard/>
      <DeskCard/>
      <DeskCard/>
     </Cards>
     <LetsBuild/>
     <Footer/>
    </div>
  )
}

export default Cortesia
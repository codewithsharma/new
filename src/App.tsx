import Navbar from "./components/Navbar"
import "./App.css"
import Blue from "./components/Blue"
import Products from "./components/Products"
import Footer from "./components/Footer"


const App = () => {
  return (
    <div>
      <Navbar/>
      <Blue/> 
      <Products/>
      <Footer/>
    </div>
  )
}

export default App
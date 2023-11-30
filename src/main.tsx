
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import Cortesia from './pages/Cortesia.tsx'
import Test from './pages/Test.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
<Router>
  <Routes>
    <Route element={ <App />} path="/"/>
    <Route element={ <Cortesia />} path="/2"/>
    <Route element={ <Test />} path="/test"/>

  </Routes>
</Router>
   
 
)

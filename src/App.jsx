import { Route, Routes } from 'react-router-dom'
import './App.css'
import Navbar from './components/Navbar'
import Pokupka from './pages/Pokupka'
import Rasprodaja from './pages/Rasprodaja'
import Cost from './pages/Cost'
import Help from './pages/Help'
import Bonus from './pages/Bonus'
import Blog from './pages/Blog'
import Market from './pages/Market'
import Logo from './pages/Logo'

function App() {
  return (
    <>
      <Navbar/>
      <Routes>
        <Route path='/logo' element={<Logo/>}/>
        <Route path='/pokupka' element={<Pokupka/>}/>
        <Route path='/rasprodaja' element={<Rasprodaja/>}/>
        <Route path='/cost' element={<Cost/>}/>
        <Route path='/help' element={<Help/>}/>
        <Route path='/bonus' element={<Bonus/>}/>
        <Route path='/blog' element={<Blog/>}/>
        <Route path='/market' element={<Market/>}/>
      </Routes>
    </>
  )
}

export default App

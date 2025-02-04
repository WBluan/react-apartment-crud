import './App.css'
import Condominium from './components/Condominium/Condominium'
import Menu from './components/Menu'
import Navbar from './components/Navbar'

function App() {

  return (
    <div className='flex'>
      <Menu/>
      <div className='flex-1 ml-54'>
      <Navbar/>
      <Condominium/>
      </div>
    </div>
  )
}

export default App

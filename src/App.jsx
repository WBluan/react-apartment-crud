import './App.css'
import Condominium from './components/Condominium/Condominium'
import Menu from './components/Menu'
import Navbar from './components/Navbar'
import { AuthProvider } from './context/AuthProvider'

function App() {

  return (
    <AuthProvider>
     <div className='flex'>
       <Menu/>
       <div className='flex-1 ml-54'>
       <Navbar/>
        <Condominium/>
       </div>
     </div>
    </AuthProvider>
  
  )
}

export default App

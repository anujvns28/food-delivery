
import { Route, Routes } from 'react-router-dom'
import './global.css'
import Header from './components/common/Header'
import Home from './pages/Home'

function App() {
  
  return (
    <div className='mx-auto'>
      <Header/>

      <Routes>
        <Route element={<Home/>} path='/'></Route>
      </Routes>
  </div>
  )
}

export default App

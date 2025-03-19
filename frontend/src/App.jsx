import { BrowserRouter, Route, Router, Routes } from 'react-router-dom'
import './App.css'
import Landingpage from './components/Landingpage'
import One from './components/One'
import Two from './components/Two'
import Three from './components/Three'
import Four from './components/Four'

function App() {
  return (
    <div className='flex flex-row'>
      <BrowserRouter>
        <div className='h-screen border border-zinc-300 rounded'>
          <Landingpage></Landingpage>
        </div>
        <Routes>
          <Route path='/1' element={<One></One>}></Route>
          <Route path='/2' element={<Two></Two>}></Route>
          <Route path='/3' element={<Three></Three>}></Route>
          <Route path='/4' element={<Four></Four>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App

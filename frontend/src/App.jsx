import { BrowserRouter, Route, Router, Routes } from 'react-router-dom'
import './App.css'
import Landingpage from './components/Landingpage'
import One from './components/One'
import Two from './components/Two'
import Three from './components/Three'
import Four from './components/Four'
import Topbar from './components/Topbar'

function App() {
  return (
    <div className='flex flex-row'>
      <BrowserRouter >
        <div className='h-screen border border-zinc-300 rounded '>
          <Landingpage></Landingpage>
        </div>

        <div className='w-full px-2'>
          <Topbar></Topbar>
          <Routes>
            <Route path='/list/teachers' element={<One></One>}></Route>
            <Route path='/list/students' element={<Two></Two>}></Route>
            <Route path='/list/parents' element={<Three></Three>}></Route>
            <Route path='/list/subjects' element={<Four></Four>}></Route>
          </Routes>
        </div>

      </BrowserRouter>
    </div>
  )
}

export default App

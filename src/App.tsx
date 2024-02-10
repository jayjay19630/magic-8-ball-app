import './App.css'

import { Route, Routes } from 'react-router-dom';
import { Home } from './pages/Home/Home';
import { Sidebar } from './components/Sidebar/Sidebar';

const usingBackend = process.env.USING_BACKEND == "TRUE" ? true : false; 

function App() {
  return (
    <>
      {usingBackend && <Sidebar></Sidebar>}
      <Routes>
        <Route path='/' element={<Home/>}></Route>
      </Routes>
    </>
    
  )
}

export default App

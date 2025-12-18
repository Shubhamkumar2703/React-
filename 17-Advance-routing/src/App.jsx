import React from 'react'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import { Route, Routes } from 'react-router-dom'
import About from './pages/About'
import Product from './pages/product'
import NotFound from './pages/notFound'
import Women from './pages/Women'
import Men from './pages/Men'
import Kids from './pages/Kids'
import Measurment from './pages/measurment'
import MeasurmentTechniques from './pages/MeasurmentTechniques'
import Navbar2 from './components/Navbar2'

const App = () => {
  return (
    <div className='h-screen bg-black text-white'>
      <Navbar />
      <Navbar2 />
      <Routes>
        <Route path='/' element={<Home />}/>
         <Route path='/about' element={<About />}/>
         <Route path='/measurment' element={<Measurment />}/>
         <Route path='/measurment/:measurmentId' element={<MeasurmentTechniques />} />
          <Route path='/product' element={<Product/>}>
            <Route path='men' element={<Men/>}/>
            <Route path='women' element={<Women/>}/>
            <Route path='kids' element={<Kids/>}/>
          </Route>
          
          
        
          <Route path='*' element={<NotFound />}/>
      </Routes>
      <Footer />
    </div>
  )
}

export default App
import React from "react"
import Header from "./components/header/Header";
import {Routes,Route} from 'react-router-dom'
import Home from "./pages/home/Home";
import About from "./pages/about/About";
import Menu from "./pages/menu/Menu";
import Footer from './components/footer/Footer'

const App = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='about' element={<About />} />
        <Route path='menu' element={<Menu />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App;

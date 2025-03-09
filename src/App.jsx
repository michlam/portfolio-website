import { useRef } from 'react';
import './App.css'
import About from './components/About'
import Header from './components/Header'
import Home from './components/Home'
import Experience from './components/Experience';
import Projects from './components/Projects';
import Contact from './components/Contact';
import UpArrow from './components/UpArrow';

function App() {
  return (
    <>
      <Header/>
      <Home/>
      <About/>
      <Experience/>
      <Projects/>
      <Contact />
      <UpArrow />
    </>
  )
}

export default App

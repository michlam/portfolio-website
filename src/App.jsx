import { useRef } from 'react';
import './App.css'
import About from './components/About'
import Header from './components/Header'
import Home from './components/Home'
import Experience from './components/Experience';
import Projects from './components/Projects';
import Contact from './components/Contact';

function App() {
  return (
    <>
      <Header/>
      <Home/>
      <About/>
      <Experience/>
      <Projects/>
      <Contact />
    </>
  )
}

export default App

import { useRef } from 'react';
import './App.css'
import About from './components/About'
import Header from './components/Header'
import Home from './components/Home'
import Experience from './components/Experience';
import Projects from './components/Projects';

function App() {
  return (
    <>
      <Header/>
      <Home/>
      <About/>
      <Experience/>
      <Projects/>
    </>
  )
}

export default App

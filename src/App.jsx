import { useRef } from 'react';
import './App.css'
import About from './components/About'
import Header from './components/Header'
import Home from './components/Home'
import Experience from './components/Experience';

function App() {
  return (
    <>
      <Header/>
      <Home/>
      <About/>
      <Experience/>
      <Experience/>
    </>
  )
}

export default App

/* eslint-disable no-unused-vars */
import { useState } from 'react'
import Home from './components/home'
import Guides from './components/guides'
import Header from './components/header'
import './App.css'

function App() {

  return (
    <>
      <Header />
      <Home />
      <Guides />
    </>
  )
}

export default App

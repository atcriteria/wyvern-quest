/* eslint-disable no-unused-vars */
import { useEffect, useState } from 'react'
import Header from './components/header'
import './App.css'

import { Outlet } from 'react-router-dom'
import { validateOverflows } from './util/overflows'

function App() {
  useEffect(() => {
    validateOverflows()
  }, [])
  return (
    <div>
      <Header />
      <Outlet />
    </div>
  )
}

export default App

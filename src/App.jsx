import { useState } from 'react'
import React from 'react'
import EmailJs from './components/EmailJs.jsx'
import Map from './components/Map.jsx'
import './App.css'
import Nested from './components/Nested.jsx'

function App() {
  
  return (
    <>
      <EmailJs/>
      <Map/>
      <Nested/>
    </>
  )
}

export default App;
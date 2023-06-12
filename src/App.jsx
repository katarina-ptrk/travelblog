import { useState } from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Homepage from './components/Homepage'
import './App.css'
import Amsterdam from './components/Amsterdam'
import Milan from './components/Milan'
import Prague from './components/Prague'


function App() {


  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homepage />}>
        </Route>
        <Route path="/amsterdam" element={<Amsterdam />}>
        </Route>
        <Route path="/milan" element={<Milan />}>
        </Route>
        <Route path="/prague" element={<Prague />}>
        </Route>
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App

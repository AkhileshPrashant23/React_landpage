import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import Card from './components/Card'
import data from './data'

function App() {
  const cards = data.map(item =>{
    return( 
      <Card 
       key = {item.title}
       {...item}
      />

    )
  })
  return (
    <div className="App">
          <Navbar />
          <section>
          {cards}
          </section>
          
    </div>
  )
}

export default App

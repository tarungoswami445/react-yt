import React, { useState } from 'react'
import Navbar from './components/Navbar'

const App = () => {
  const [theme, setheme] = useState('light')
  return (
    <div>
      
      <Navbar theme={theme}>
        <h2>This is Navbar  </h2>
          <h2>Bhot Achha Navbar  </h2>
      </Navbar>
     
        
    </div>
  )
}

export default App

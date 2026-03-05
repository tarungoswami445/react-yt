import React from 'react'
import Card from './components/Card'

const App = () => {
  return (
    <div className='parent'>
     <Card user='Arun' age ={24} img='https://images.unsplash.com/photo-1767872800861-cebd45498f74?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDgzfENEd3V3WEpBYkV3fHxlbnwwfHx8fHw%3D'/>
      <Card user='Gopal' age ={23} img='https://images.unsplash.com/photo-1692021107901-afc5d585f921?q=80&w=1032&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'/>
       <Card user='Raghav' age ={22} img='https://images.unsplash.com/photo-1714119486511-17719f033d67?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDEwNXxDRHd1d1hKQWJFd3x8ZW58MHx8fHx8' />
      
     </div>

  )
}

export default App

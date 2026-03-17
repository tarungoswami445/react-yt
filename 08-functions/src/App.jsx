import React from 'react'

const App = () => {
  function btnClicked(){
    console.log('hello');
  }
  return (
    <div>
      <button className='btn' onClick={btnClicked}><h1 className='h1'>Click</h1></button>
    </div>
  )
}

export default App
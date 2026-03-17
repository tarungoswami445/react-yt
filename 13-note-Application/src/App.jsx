import React, { useState } from 'react'

const App = () => {
  const [title, setTitle] = useState('')
  const [details, setDetails] = useState('')
  const [task, setTask] = useState([])
  const submitHandler =(e)=>{
    e.preventDefault()

    const copyTask=[...task];
    copyTask.push({title,details})

   setTask(copyTask)
  
    
    setTitle('')
    setDetails('')
  }
  const deleteNote=(idx)=>{
      const copyTask = [...task];
      copyTask.splice(idx,1)
      setTask(copyTask)


  }
  return (
    <div className='h-screen lg:flex bg-black text-white'>
     
      <form onSubmit={(e)=>{
        submitHandler(e)
      }} className='flex gap-4 lg:w-1/2  flex-col px-10 items-start pt-10'>

        <h1 className='text-4xl font-bold' >Add Notes</h1>
         {/* Pehla input  */}
        <input
         type='text'
          placeholder='Enter Notes Heading'
          className='px-5 w-full py-2 font-medium border-2 outline-none rounded'
          value={title}
          onChange={(e)=>{
          setTitle(e.target.value) 
           
          }}
          />
        {/* Detailed bala input  */}
        <textarea
        type='text'
         className='px-5 w-full h-30 font-medium py-2 border-2 items-start flex-row outline-none rounded'
         placeholder='Enter Details' 
         value={details}
         onChange={(e)=>{
          setDetails(e.target.value)
         }}
        />

        <button 
        className='bg-white font-medium active:scale-95 text-black w-full outline-none px-5 py-2 rounded'
        >

          Add Notes
        </button>
        
      </form>
      <div className='lg:w-1/2 lg:border-l-2 pt-10 px-10'>
      <h1 className='text-4xl font-bold' >Recent Notes</h1>
      <div className="flex flex-wrap items-start justify-start gap-5 mt-6 h-[90%] overflow-auto"> 
         {task.map(function(elem,idx){
          return <div key={idx} className=' relative flex justify-between flex-col items-start  h-52 w-40 bg-cover rounded-xl text-black pt-9 pb-4 px-4  bg-[url("https://tse3.mm.bing.net/th/id/OIP.DJ7bqHpDMWlKzasgaEKJMQHaEK?pid=Api&h=220&P=0")]'>
           <div>
             <h3 className='leading-tight text-lg font-bold'>{elem.title}</h3>
            <p className='mt-4 leading-tight text-xs text-gray-600 font-semibold'>{elem.details}</p>
           </div>
           <button onClick={()=>{
            deleteNote(idx)
           }} className='w-full py-1 text-xs rounded cursor-pointer active:scale-95 bg-red-600 text-black font-bold'>Delete</button>
          </div>

         })}
          
          </div>
      </div>
    </div>
  )
}

export default App

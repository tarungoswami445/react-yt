import React from 'react'

const RightCardContent = (props) => {
  return (
    <div>
      <div className='absolute top-0 left-0 h-full w-full p-8 flex flex-col justify-between'>
        <h2 className='bg-white text-lg font-bold rounded-full h-10 w-10 flex justify-center  items-center '>{props.id+1}</h2>
        <div>
            <p className=' text-shadow-2xs text-lg leading-relaxed text-white mb-14 mt-50'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quod eius eaque, amet at alias deleniti.
            </p>
            <div className='flex justify-between'>
            <button style={{backgroundColor:props.color}} className=' text-white font-medium px-3 py-2 rounded-full'>{props.tag}</button>
            <button><i className=" text-white font-medium px-4 py-3 rounded-full ri-arrow-right-line"></i></button>
            </div>
            </div>
        

     </div>
    </div>
  )
}

export default RightCardContent

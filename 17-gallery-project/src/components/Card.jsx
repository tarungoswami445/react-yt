import React from 'react'

const Card = (props) => {
    console.log(props)
  return (
    <div>
      <a href={props.elem.url} target='_blank'>
         <div className="h-45 w-50  overflow-hidden rounded-xl">
        <img className='h-full w-full object-cover' src={props.elem.download_url} alt=''/>
      </div>
      <h2 className='font-bold text-xl'>{props.elem.author}</h2>
       </a>
    </div>
  )
}

export default Card
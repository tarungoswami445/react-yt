import React from 'react'
import 'remixicon/fonts/remixicon.css'
import RightCard from './RightCard'
const RightContent = (props) => {
  return (
    <div id='right' className='h-full  rounded-4xl flex flex-nowrap gap-10 overflowx-auto w-2/3 p-6' >
    {props.users.map(function(elem,idx){

        return <RightCard  key={idx} id={idx} color={elem.color}img={elem.img} tag={elem.tag}/>
    })}
    </div>
  )
}

export default RightContent

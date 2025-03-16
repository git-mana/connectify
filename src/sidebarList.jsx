import React from 'react'

const SidebarList = (prop) => {
  return (
    <div className='flex gap-2 mt-2.5 content-center' onClick={prop.onClick}>
   <img src={ prop.img} alt="Group" />
    <span className=' h-full font-sans text-xs font-medium text-[#050505]' >{prop.title}</span>
    </div>
  )
}

export default SidebarList
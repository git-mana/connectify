import React from 'react'
import ReactDom from 'react-dom/client'
import SidebarList from './sidebarList'
import Navbar from "./Navbar"

const HomePage = () => {

const Seemore=()=>
{
  
let  seemore=document.querySelector(".seemore");
let sidebar=document.querySelector(".sidebar");
  sidebar.classList.toggle("h-auto");
sidebar.classList.toggle("overflow-visible ");

seemore.classList.add("hidden")



}
  return (
    <>
      <div className="homePage h-max self-center border-solid border-2 border-red-800 ">
        <div className="navBar h-max border-solid border-2 border-green-400 flex justify-between m-1">
         <Navbar/>
        </div>

        <div className='bodyHomepage grid-cols-3 h-max border-solid border-2 border-yellow-400'>
          <div className='sidebar h-64 overflow-hidden w-1/4 border-solid border-2 border-blue-500 flex-col'>
            <SidebarList className=' h-max w-auto' img='./public/friends.svg' title='Friends' />
            <SidebarList className=' h-max w-auto' img='./public/clock.svg' title='Memories' />
            <SidebarList className=' h-max w-auto' img='./public/saved.svg' title='Saved' />
            <SidebarList className=' h-max w-auto' img='./public/group.svg' title='Group' />            
            <SidebarList className=' h-max w-auto' img='./public/video.svg' title='Videos' />
            <SidebarList className=' h-max w-auto' img='./public/market.svg' title='Marketplace' />
            <SidebarList onClick={Seemore} className='seemore h-max w-auto' img='./public/downarrow.svg' title='See more' />
            <SidebarList className=' h-max w-auto' img='./public/market.svg' title='Marketplace' />
            <SidebarList className=' h-max w-auto' img='./public/market.svg' title='Marketplace' />
            <SidebarList className=' h-max w-auto' img='./public/market.svg' title='Marketplace' />
            <SidebarList className=' h-max w-auto' img='./public/market.svg' title='Marketplace' />
            <SidebarList className=' h-max w-auto' img='./public/market.svg' title='Marketplace' />                      
          </div>
        </div>
      </div>
    </>
  )
}

export default HomePage
import React, { useState,useEffect } from 'react';


    
const Navbar = () => 
{
    const [svgContent, setSvgContent] = useState(null);
  const [fillColor, setFillColor] = useState('#65676b'); // Default color

  useEffect(() => {
    fetch('/public/homeNav.svg')
      .then(response => response.text())
      .then(data => setSvgContent(data));
  }, []);

    const change_color_click=() => { 
        setFillColor('green')
     }
  
  return (
    <> 
        <div className='1stpart h-max w-max flex align-middle gap-2'>
    <img className=' self-center h-9 m-1 ' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRAFblA-Xq23CPSAo3jz04xyiNBrDxDRU2Blg&s" alt="" />
    <div className="inputfield self-center h-max w-max ">
      <input className=' bg-gray-100 placeholder:text-sm placeholder:tw-ml-4  self-center h-7 rounded-full' type="text" placeholder='Search connectivity' />
    </div>
  </div>
  <div className="2ndpart h-max w-max border-orange-400 border-solid border-2 self-center flex gap-1 justify-between">
    
    <span onClick={change_color_click} className={`fill-${fillColor}-600 items-center flex justify-center w-20 rounded border-solid border-2 border-red-200 hover:bg-slate-100`}
        dangerouslySetInnerHTML={{ __html: svgContent }}
        style={{ fill: fillColor }}
      ></span>
    <span className=' items-center flex justify-center w-20 rounded  border-solid border-2 border-red-200 hover:bg-slate-100'><img className='' src="./public/mediaNav.svg" alt="" /></span>
    <span className=' items-center flex justify-center w-20 rounded  border-solid border-2 border-red-200 hover:bg-slate-100'><img className='' src="./public/marketNav.svg" alt="" /></span>
    <span className=' items-center flex justify-center w-20 rounded  border-solid border-2 border-red-200 hover:bg-slate-100'><img className='' src="./public/groupNav.svg" alt="" /></span>
    <span className=' items-center flex justify-center w-20 rounded  border-solid border-2 border-red-200 hover:bg-slate-100'><img className='' src="./public/gameNav.svg" alt="" /></span>
     
  </div>
  <div className="3rdpart h-max w-max border-orange-400 border-solid border-2  self-center flex gap-1 justify-between " >
  <span className=' items-center flex justify-center rounded  border-solid border-2 border-red-200 hover:bg-slate-100'><img className='' src="./public/menu.svg" alt="" /></span>
  <span className=' items-center flex justify-center rounded  border-solid border-2 border-red-200 hover:bg-slate-100'><img className='' src="./public/msg.svg" alt="" /></span>
  <span className=' items-center flex justify-center rounded  border-solid border-2 border-red-200 hover:bg-slate-100'><img className='' src="./public/bell.svg" alt="" /></span>
    
  </div>
  </>
    )
}

export default Navbar
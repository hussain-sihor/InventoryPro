import React from 'react'

const NavBar = () => {
  return (
    <div className='w-full h-[50px] flex justify-around items-center text-white bg-black border-b-[1px] border-white border-dashed '>
    <div className="left flex gap-7">
      <h1>hele</h1>
      <h1>hele</h1>
    </div>
    <div className="mid flex gap-10">
      <h1>Products</h1>
      <h1>Categories</h1>
    </div>
    <div className="end"></div>
    </div>
  )
}

export default NavBar

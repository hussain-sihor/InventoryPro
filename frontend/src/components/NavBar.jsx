import React from 'react'
import logo from "../assets/trolley.png"
import { TbAlienFilled } from "react-icons/tb";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <div className='w-full h-[60px] justify-between items-center text-white bg-black border-b-[1px] border-white border-dashed flex '>

    <div className="left justify-start w-[20%] gap-4 flex items-center h-full pl-8">
     <img src={logo} alt="" className='w-[28px]'/>
      <h1 className='text-xl font-bold text-white content-center'>Inventory Pro</h1>
    </div>

    <div className="mid gap-10 flex w-[60%] h-full justify-center items-center text-md font-semibold">
    <Link to="/dashboard">Overview</Link>
    <Link to="/products">Products</Link>
    <Link to="/orders">Orders</Link>
    <Link to="/categories">Categories</Link>
    </div>
    <div className="flex w-[20%] h-full justify-end items-center pr-8 gap-5">
    <div className="justify-center items-center bg-white rounded-full w-10 h-10 cursor-pointer flex" onClick={()=>{}}>
			 <TbAlienFilled className="text-5xl text-black"/>
			 </div>
       <button className="flex justify-center items-center text-white text-lg font-medium rounded-md border-[1px] border-dashed border-white pl-2 pr-2 pt-[1px] pb-[1px] cursor-pointer" type="button" onClick={()=>{navigate('/addproduct')}}>Sign out</button>
      
    </div>
    
    </div>
  )
}

export default NavBar

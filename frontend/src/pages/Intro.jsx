import React from 'react'
import NavBar from '../components/NavBar'
import logo from "../assets/trolley.png"
import intro1 from "../assets/intro1.jpg"
import intro2 from "../assets/intro2.jpg"
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom';

const Intro = () => {
  const navigate = useNavigate();
  return (
   <>
   {/* NAVBAR  */}
   <div className='flex justify-between w-full bg-blue-300 border-y-2 border-gray-400 pl-[10%] pr-[10%]'>

    <div className="left flex justify-center w-[20%] gap-2">
     <img src={logo} alt="" className='w-10 content-center'/>
      <h1 className='text-xl font-bold text-gray-500 content-center'>Inventory Pro</h1>
    </div>

    <div className="flex right p-2 gap-5 w-[20%] justify-center ">
    <button className='text-gray-700 text-lg font-semibold' onClick={()=>{}}>Register</button>
    <button className='text-white text-lg font-semibold bg-blue-600 pt-1 pb-1 pl-3 pr-3 rounded-md' 
    onClick={()=>{  navigate('/login');}}>Login</button>
    </div>

   </div>
    
   <div className="w-full h-[700px] flex bg-blue-300 ">

    <div className="left w-[50%] flex justify-center items-start flex-col gap-8 pl-14 ">
      <h1 className='text-5xl font-bold '>Inventory & Stock <br></br> Managment Solution</h1>
      <h1 className='w-[65%] text-lg font-semibold'>InventoryPro is your ultimate solution for efficient and seamless inventory management. This helps you track and manage your stock effortlessly.</h1>
      <div className='border-1 outline-dashed border-black  pl-3 pr-3 font-semibold text-lg'>Free-to-use</div>
    </div>

    <div className="right flex w-[50%] justify-center items-center flex-col">
      
      <img className=' w-[100%] h-[80%] rounded-xl 'src={intro1} alt="" />
    
    </div>
   </div>

    </>
  )
}

export default Intro

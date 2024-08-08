import React from 'react'
import { MdDelete } from "react-icons/md";
import dateFormat from 'dateformat';


const Category = ({data,onclick}) => {
  const date = dateFormat(data.createdAt, "dS mmmm yyyy")
  return (
    <div className='w-full h-[95px] flex justify-evenly items-center gap-8  border-b-[1px] border-white pl-4 pr-4 pt-2 pb-2 border-dashed '>
      <div className='flex flex-col gap-2 justify-center items-start w-[30%] text-white h-full '>
         <h1 className='text-xl font-bold capitalize'>{data.name}</h1>
         <h1 className='text-sm font-semibold flex flex-col pr-2 pl-2 pt-[1px] pb-[1px] border-dashed border-[1px] border-white capitalize'>{data.author}</h1>
      </div>

      <div className=" w-[50%] h-full flex justify-start items-start text-sm font-medium overflow-hidden text-white ">
        <h1>{data.desc}</h1>
      </div>

      <div className="flex flex-col gap-3 justify-center items-center w-[20%] h-full">

      <span className=' font-semibold text-md text-white'>{date}</span>
        <MdDelete className='text-xl text-red-400 cursor-pointer' onClick={()=>{
          onclick(data._id)
        }}/>
      </div>
    </div>
  )
}

export default Category

import React from 'react'
import { Progress } from "@/components/ui/progress"

const StatusLabels = ({name,value,total,color}) => {
  const str = value.toLocaleString('en-IN')
  const finalVal = (value/total)*100
  return (
    <div className='w-full pl-2 pr-2 pt-1 pb-1 flex flex-col justify-center items-start '>
      <div className='w-full flex flex-col'>
        <h1 className={`text-md font-bold ${color}`}>{name} STOCK PRODUCTS</h1>
      <Progress value={finalVal} className="w-[85%] h-3 text-red-500 mt-2 bg-gray-500"/>
      <h1 className='text-sm font-semibold text-white'>{str} products</h1>
      </div>
    </div>
  )
}

export default StatusLabels

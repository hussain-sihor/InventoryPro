import React from 'react'

const OrderReviewList = ({data}) => {
  // console.log("hello")
  return (
    
    <div className='w-full h-[80px] flex pl-2 pr-2 pt-1 pb-1 border-b-[1px] border-dashed text-white '>
      <div className="w-[60%] h-full flex gap-5 items-center">
        <div className="w-[20%] h-[80%] rounded-md justify-center items-center">
          <img src={data.product.photo} alt="" className='w-full h-full rounded-md border-[1px] border-white'/>
        </div>
        <div className="flex flex-col justify-center">
          <h1 className='text-md font-medium'>{data.product.category}</h1>
          <h1 className='text-xl font-bold'>{data.product.name}</h1>
        </div>
      </div>
      <div className="left w-[40%] flex justify-end items-center gap-3 pr-5 h-[80px]">
        <h1 className='text-md font-semibold'>{data.quantity} * {data.product.price}</h1>
        <h1 className='text-md font-bold'>{data.quantity*data.product.price}</h1>
      </div>
    </div>
  )
}

export default OrderReviewList

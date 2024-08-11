import React, { useState } from 'react'

const AddOrderList = ({item,handle}) => {
  const [quantity,setQuantity] = useState(1);
  return (
    <div className="w-full h-[50px] border-2 border-red-300 flex justify-around items-center gap-4 pl-2 pr-2">
    <div className="w-[90%] h-full flex items-center gap-4">
  <img src={item.photo} alt="" className="w-[90px] h-[40px] rounded-md"/>
  <h1 className="text-md font-semibold">{item.name}</h1>
    </div>

    <div className="h-full flex justify-center items-center gap-2">
      <input type="number" className="w-[50px] border-[1px] border-white bg-black text-white text-center"  value={quantity} onChange={(e)=> setQuantity(e.target.value)}
    />
    <div className="">
      <button
      onClick={()=>{
        //  console.log("quantity: ",quantity,"productId: ",)
         handle(quantity,item._id)
      }}
      type="button"
      className="bg-white text-black rounded-md pl-1 pr-1 pt-[1px] pb-[1px] font-medium" >
        
        Add
      </button>
    </div>
    </div>
  </div>
  )
}

export default AddOrderList

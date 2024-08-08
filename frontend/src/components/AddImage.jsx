import React, { useEffect, useRef, useState } from 'react'
import defaultImage from "../assets/default.jpg"

const AddImage = (props) => {
  const cloudinaryRef = useRef();
  const widgetRef = useRef();

  const [str ,setStr] = useState("")
  useEffect(()=>{
    
    cloudinaryRef.current = window.cloudinary;
    widgetRef.current = cloudinaryRef.current.createUploadWidget({
      cloudName:"dqagtewz2",
      uploadPreset:"hussain",
      folder: 'inventoryPro'
    },function(error,result){
      //  console.log("Result",result)
       if(result.event == "success"){
        setStr(result.info.secure_url);
        const data = result.info.secure_url;
        props.saveUrl(data);
       }
    })
  },[])
  return (
    <div className='flex justify-between h-[150px] items-center  '>

  {! str ?<button className='pl-2 pr-2 pt-1 pb-1 border-[1px] border-white font-semibold text-white bg-black w-[20%] h-[25%] ml-[5%] rounded-xl hover:bg-gray-800' onClick={()=>{
     widgetRef.current.open()
   }}>
    Upload Photo
   </button> : <button className='pl-2 pr-2 pt-1 pb-1 border-2 border-gray-300 font-semibold bg-green-500 w-[20%] h-[25%] ml-[5%] rounded-xl text-white cursor-default'>
    Uploaded
   </button>}

   <div className='w-[30%] h-[150px] mr-[10%] flex justify-center items-center '>
    {str ? <img src={str} alt="str"  className='object-fill rounded-md border-[1px] border-white h-[150px] w-full'/> : <img src={defaultImage} alt="str"  className='object-fill rounded-md border-2 border-gray-300  h-[150px] w-full'/> }
   </div>
    </div>
  
  )
}

export default AddImage

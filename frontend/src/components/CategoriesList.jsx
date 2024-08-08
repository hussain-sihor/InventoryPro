import React, { useEffect, useState } from 'react'
import Category from './Category'
import axios from 'axios';

const CategoriesList = () => {

  const [categories,setCategories] = useState([]);
 
  useEffect(()=>{
    axios.get("http://localhost:5000/api/category/getcategories").then((response) => {
		setCategories(response.data);
 });
 },[])

 const handleDelete = (data)=>{
  const url = `http://localhost:5000/api/category/deletecategory/${data}`;

  axios.delete(url).then((response)=>{
    if(response.status == 200){
      window.location.reload(false)
    }
  })
  // console.log(data)
 
}
  return (
    <div className=' flex flex-col justify-start items-starts h-full w-full border-[1px] border-white rounded-md  overflow-y-scroll'>
      {categories.map((item)=>(
        <Category data ={item} onclick = {handleDelete}/>
      ))}
    </div>
  )
}

export default CategoriesList

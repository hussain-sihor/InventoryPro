import React from 'react'
import CategoriesList from '../components/CategoriesList'
import AddCategory from '../components/AddCategory'

const Categories = () => {

  return (
    <div className='w-full h-[93vh] flex justify-start items-center  pl-8 pr-8 pt-4 pb-4 bg-black'>

      <div className='right w-[55%] h-full'>

        <h1 className='text-2xl font-bold text-white mb-6  h-[5%]'>Available Categories</h1>
        <div className="w-full h-[93%]">
       <CategoriesList/>
        </div>
      </div>

      <div className='left w-[45%] bg-black pl-5  h-full overflow-hidden flex flex-col b'>
        <div className="w-full h-full">
       <AddCategory/>
        </div>
      </div>
    </div>
  )
}

export default Categories

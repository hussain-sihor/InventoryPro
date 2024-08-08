import axios from 'axios';
import React, { useState } from 'react'


// name
// author
// desc

const AddCategory = () => {
   
  const empName = "Hussain"


  const [data, setData] = useState({
		name: "",
    desc:"",
    author:empName,
	});




  const handleSubmit = (event) => {
		event.preventDefault();
		// console.log(data)
		axios.post("http://localhost:5000/api/category/addcategory", {
			name:data.name,
			desc:data.desc,
			author:empName,
			})
		.then((response) => {

			// console.log(response);
			if(response.status==200){
				setData({		
					name: "",
					desc:"",
					author:empName,})
          window.location.reload(false)
			}
		});
	};

	return (
		<div className="w-full h-full flex justify-center items-center ">

			<div className="w-[75vw] h-full flex items-start justify-center gap-10  pl-3 pr-3 pt-8 pb-2  flex-col rounded-lg max-sm:w-[80%] max-sm:h-[55vh] border-[1px] border-white">

			<div className="text-2xl font-bold text-white mb-6  h-[5%] pl-2">
          Add Category
        </div>
				
				<form
					className="flex flex-col gap-7 w-full h-full justify-start  items-between  rounded-xl"
					onSubmit={handleSubmit}
				>
					<div className="flex gap-6 text-white">
						<div className="flex flex-col gap-1 w-[50%]">
							<label htmlFor="name" className="font-semibold">
								Category
							</label>
							<input
								value={data.name}
								onChange={(e) => setData({ ...data, name: e.target.value })}
								type="text"
								className="rounded-lg p-1 w-full  border-white border-[1px] text-lg bg-black "
							/>
						</div>
					</div>

          <div className="flex flex-col gap-1 text-white">
          <label htmlFor="desc" className="font-semibold">Description
							</label>
           <textarea value={data.desc}
								onChange={(e) => setData({ ...data, desc: e.target.value })}
								type="text" rows={3} className="rounded-lg p-1 w-full border-white border-[1px] bg-black text-lg"></textarea>
          </div>

          <div className="flex gap-6 items-center">
						<div className="flex flex-col gap-1 w-[30%] ">
            <button
						type="submit"
						className="pl-2 pr-2 pt-2 pb-2 rounded-md font-semibold border-[1px] border-white bg-white"
					>
						Save
					</button>
          </div>
          <div className="flex w-[70%] text-white">
						<div className="pl-2 pr-2 pt-1 pb-1 border-[1px] border-white border-dashed rounded-lg font-semibold bg-black"> Employee: {empName}</div>
						</div>
					

						
					</div>
				</form>
			</div>
		</div>
	);
};

export default AddCategory

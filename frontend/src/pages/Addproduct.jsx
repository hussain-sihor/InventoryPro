import axios from "axios";
import { toast } from "react-toastify";
import { useEffect, useState } from "react";
import AddImage from "../components/AddImage";
import { useNavigate } from 'react-router-dom';

const Addproduct = () => {

	const navigate = useNavigate();

	const [categories,setCategories] = useState([]);

	useEffect(()=>{
    axios.get("http://localhost:5000/api/category/getcategories").then((response) => {
		setCategories(response.data)
		// console.log(response.data)
 });
 },[])

	// const categories = [
	// 	"mens shoe",
	// 	"women shoe",
	// 	"appliance",
	// 	"mens clothes",
	// 	"kids clothes",
	// ];

	const supplier = [
		"addidas mumbai facility",
		"goderage newdelhi ",
		"nike mega factorie east mumbai",
	];

  const empName="Hussain";
  const [image,setImage] =  useState("");
  const [status,setStatus] =  useState("");
	
	const getImageData = (str)=>{
    setImage(str);
	}

	const [data, setData] = useState({
		name: "",
		category: "",
    desc:"",
    quantity:"",
    price:"",
    supplier:"",
    level:"",
    author:empName,
	});

	const handleSubmit = (event) => {
		event.preventDefault();
		// console.log(data)
		
    
		if(data.quantity == 0){
       setStatus("Out of Stock")
		}
		else if(data.quantity <= data.level){
			setStatus("Low")
		}
		else if(data.quantity >= 50 && data.quantity <=  100){
			setStatus("Mid")
		}
		else{
			setStatus("High")
		}


		axios.post("http://localhost:5000/api/products/addproduct", {
			name:data.name,
			category:data.category,
			desc:data.desc,
			quantity:data.quantity,
			price:data.price,
			supplier:data.supplier,
			level:data.level,
			author:empName,
			photo:image,
		  status:status})
		.then((response) => {

			// console.log(response);
			if(response.status==200){
				setData({		
					name: "",
					category: "",
					desc:"",
					quantity:"",
					price:"",
					supplier:"",
					level:"",
					author:empName,})

					navigate("/dashboard")
			}
		});
	};

	return (
		<div className="w-full h-[93vh] flex justify-start items-start bg-black flex-col pl-8 pr-8 pt-4 pb-4 overflow-hidden">
		<div className="w-full h-[8%] ">
			<h1 className="text-2xl font-bold text-white">Add product</h1>
		</div>

    <div className="h-[92%] w-full flex justify-center items-center overflow-hidden">

			<div className="w-[75vw] h-[100%] flex justify-start items-start pl-5 pr-5 pt-4 pb-4  flex-col gap-5 bg-black rounded-xl shadow-gray-900 shadow-md max-sm:w-[80%] max-sm:h-[55vh] border-dashed border-[2px] border-white">
				<form
					className="flex flex-col gap-4 w-full h-full justify-center items-between  rounded-xl"
					onSubmit={handleSubmit}
				>
					<div className="flex gap-6">
						<div className="flex flex-col gap-1 w-[50%] text-white">
							<label htmlFor="name" className="font-semibold">
								Product Name
							</label>
							<input
								value={data.name}
								onChange={(e) => setData({ ...data, name: e.target.value })}
								type="text"
								className="rounded-md p-1 w-full border-[1px] border-white text-lg bg-black text-white"
							/>
						</div>

						<div className="flex flex-col gap-1 w-[50%] text-white">
							<label htmlFor="category" className="font-semibold">
								Category:
							</label>
							<select
								value={data.category}
								onChange={(e) => setData({ ...data, category: e.target.value })}
								name="category"
								className="rounded-md p-1 w-full border-[1px] border-white text-lg bg-black text-white"
							>
								{categories.map((item) => (
									<option value={item.name}>{item.name}</option>
								))}
							</select>
						</div>
					</div>

          <div className="flex flex-col gap-1 text-white">
          <label htmlFor="desc" className="font-semibold">
								Product Description
							</label>
           <textarea value={data.desc}
								onChange={(e) => setData({ ...data, desc: e.target.value })}
								type="text" rows={2} className="rounded-md p-1 w-full border-[1px] border-white text-lg bg-black text-white"></textarea>
          </div>

         {/* PHOTOS  */}
				 <AddImage saveUrl={getImageData} />
				
				 
				

         <div className="flex gap-6">
						<div className="flex flex-col gap-1 w-[50%] text-white">
							<label htmlFor="quantity" className="font-semibold">
								Quantity Available
							</label>
							<input
								value={data.quantity}
								onChange={(e) => setData({ ...data, quantity: e.target.value })}
								type="text"
								className="rounded-md p-1 w-full border-[1px] border-white text-lg bg-black text-white"
							/>
						</div>

            <div className="flex flex-col gap-1 w-[50%] text-white">
							<label htmlFor="price" className="font-semibold">
								Unit Price
							</label>
							<input
								value={data.price}
								onChange={(e) => setData({ ...data, price: e.target.value })}
								type="text"
								className="rounded-md p-1 w-full border-[1px] border-white text-lg bg-black text-white"
							/>
						</div>
					</div>

          <div className="flex gap-6">

          <div className="flex flex-col gap-1 w-[50%] text-white">
							<label htmlFor="supplier" className="font-semibold">
								Supplier:
							</label>
							<select
								value={data.supplier}
								onChange={(e) => setData({ ...data, supplier: e.target.value })}
								name="category"
								className="rounded-md p-1 w-full border-[1px] border-white text-lg bg-black text-white"
							>
								{supplier.map((item) => (
									<option value={item}>{item}</option>
								))}
							</select>
						</div>

						<div className="flex flex-col gap-1 w-[50%] text-white">
							<label htmlFor="name" className="font-semibold">
								Reorder level
							</label>
							<input
								value={data.level}
								onChange={(e) => setData({ ...data, level: e.target.value })}
								type="number"
								className="rounded-md p-1 w-full border-[1px] border-white text-lg bg-black text-white"
							/>
						</div>

						
					</div>

          <div className="flex gap-6 items-center">
						<div className="flex flex-col gap-1 w-[30%]">
            <button
						type="submit"
						className="pl-1 pr-1 pt-1 pb-1 rounded-md font-semibold border-[1px]
						border-white bg-white text-black text-lg hover:bg-gray-300"
					>
						Save
					</button>
          </div>
          <div className="flex w-[70%]">
						<div className="pl-2 pr-2 pt-1 pb-1 border-[1px] border-white border-dashed rounded-lg font-semibold text-white bg-black capitalize"> Employee: {empName}</div>
						</div>
					

						
					</div>
				</form>
			</div>
			</div>
		</div>
	);
};

export default Addproduct;

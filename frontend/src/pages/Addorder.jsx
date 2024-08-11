import axios from "axios";
import { toast } from "react-toastify";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Checkbox } from "@/components/ui/checkbox"
import AddOrderList from "@/components/AddOrderList";

//    orderNumber ,
// 		customerId,
// 		customerName,
//    customerPhone

//    customerEmail
// 		paymentMethod,

// 		  orderDate,
// 		status,

// 		shippingAddress,
// street:"",
// city:"",
// state:"",
// zip:"",
// country:"",
// 		billingAddress,
// 		items,

// 		shippingCost,
// 		discount,
// 		totalAmount,

const Addorder = () => {
	const navigate = useNavigate();


	const empName = "Hussain";

	const [data, setData] = useState({
		orderNumber: "",
		customerId: "",
		customerName: "",
		customerPhone: "",
		customerEmail: "",
		paymentMethod: "",
		shippingCost: "",
		discount: "",
		totalAmount: "",
	});
	const [shipping,setShipping] = useState({
		street:"",
    city:"",
    state:"",
    zip:"",
		country:"",
	})


	const [items,setItems] = useState([]);
	const [products,setProducts] = useState([]);


	const saveChange = (quantity,id)=>{
    // console.log(quantity,id)
		setItems(prevItems =>[...prevItems,{"quantity":quantity,"_id":id}]);
		// console.log(items)
	}




	const handleSubmit = (event) => {
		event.preventDefault();
		// console.log("data",data)
		// console.log("items",items)
		// console.log("shipping",shipping)

		

		axios.post("http://localhost:5000/api/orders/addorder", {
			orderNumber:data.orderNumber,
			customerId: data.customerId,
			customerName: data.customerName,
			customerPhone: data.customerPhone,
			customerEmail: data.customerEmail,
			paymentMethod: data.paymentMethod,
			shippingCost: data.shippingCost,
			discount: data.discount,
			totalAmount: data.totalAmount,
		  shippingAddress:shipping,
			billingAddress:shipping,
			items:items
		})
		.then((response) => {

					navigate("/orders")
					// console.log(response.data)
		})
	};


	
	useEffect(()=>{
		axios
		.get("http://localhost:5000/api/products/getproducts")
		.then((response) => {
			setProducts(response.data);
		});

 },[])

	return (
		<div className="w-full  flex justify-start items-start bg-black flex-col pl-8 pr-8 pt-4 pb-4 overflow-hidden">
			<div className="w-full h-[8%] ">
				<h1 className="text-2xl font-bold text-white">Add Order</h1>
			</div>

			<div className="h-[92%] w-full flex justify-center items-center overflow-hidden">
				<div className="w-[75vw] h-[100%] flex justify-start items-start pl-5 pr-5 pt-4 pb-4  flex-col gap-5 bg-black rounded-xl shadow-gray-900 shadow-md max-sm:w-[80%] max-sm:h-[55vh] ">
					<form
						className="flex flex-col gap-20 w-full h-full justify-center items-between  rounded-xl"
						onSubmit={handleSubmit}
					>
						{/* Customer details  */}
						<div className="flex gap-6 justify-center items-between w-full border-[1px] border-white flex-col text-white pl-2 pr-2 pt-2 pb-2 rounded-lg">
							<h1>Customer Details</h1>

							<div className="flex gap-6">
								<div className="flex flex-col gap-1 w-[50%] text-white">
									<label htmlFor="customerId" className="font-semibold">
										Customer Id
									</label>
									<input
										value={data.customerId}
										onChange={(e) =>
											setData({ ...data, customerId: e.target.value })
										}
										type="text"
										className="rounded-md p-1 w-full border-[1px] border-white text-lg bg-black text-white"
									/>
								</div>

								<div className="flex flex-col gap-1 w-[50%] text-white">
									<label htmlFor="customerName" className="font-semibold">
										Customer Name
									</label>
									<input
										value={data.customerName}
										onChange={(e) =>
											setData({ ...data, customerName: e.target.value })
										}
										type="text"
										className="rounded-md p-1 w-full border-[1px] border-white text-lg bg-black text-white"
									/>
								</div>
							</div>

							<div className="flex gap-6">
								<div className="flex flex-col gap-1 w-[50%] text-white">
									<label htmlFor="customerPhone" className="font-semibold">
										Customer Phone
									</label>
									<input
										value={data.customerPhone}
										onChange={(e) =>
											setData({ ...data, customerPhone: e.target.value })
										}
										type="text"
										className="rounded-md p-1 w-full border-[1px] border-white text-lg bg-black text-white"
									/>
								</div>

								<div className="flex flex-col gap-1 w-[50%] text-white">
									<label htmlFor="customerEmail" className="font-semibold">
										Customer Email
									</label>
									<input
										value={data.customerEmail}
										onChange={(e) =>
											setData({ ...data, customerEmail: e.target.value })
										}
										type="text"
										className="rounded-md p-1 w-full border-[1px] border-white text-lg bg-black text-white"
									/>
								</div>
							</div>
						</div>
						{/* Shipping details  */}
						<div className="flex gap-6 justify-center items-start w-full border-[1px] border-white flex-col text-white pl-2 pr-2 pt-2 pb-2 rounded-lg">
							<h1>Shipping Address</h1>

							<div className=" flex gap-5 w-full">
								<div className="flex flex-col gap-1 w-[50%] text-white">
									<label htmlFor="street" className="font-semibold">
										Street
									</label>
									<input
										value={shipping.street}
										onChange={(e) =>
											setShipping({ ...shipping, street: e.target.value })
										}
										type="text"
										className="rounded-md p-1 w-full border-[1px] border-white text-lg bg-black text-white"
									/>
								</div>

								<div className="flex flex-col gap-1 w-[50%] text-white">
									<label htmlFor="city" className="font-semibold">
										City
									</label>
									<input
										value={shipping.city}
										onChange={(e) =>
											setShipping({ ...shipping, city: e.target.value })
										}
										type="text"
										className="rounded-md p-1 w-full border-[1px] border-white text-lg bg-black text-white"
									/>
								</div>

								<div className="flex flex-col gap-1 w-[50%] text-white">
									<label htmlFor="state" className="font-semibold">
										State
									</label>
									<input
										value={shipping.state}
										onChange={(e) =>
											setShipping({ ...shipping, state: e.target.value })
										}
										type="text"
										className="rounded-md p-1 w-full border-[1px] border-white text-lg bg-black text-white"
									/>
								</div>
							</div>

							<div className=" flex gap-5 w-full">
								<div className="flex flex-col gap-1 w-[50%] text-white">
									<label htmlFor="state" className="font-semibold">
										Country
									</label>
									<input
										value={shipping.country}
										onChange={(e) =>
											setShipping({ ...shipping, country: e.target.value })
										}
										type="text"
										className="rounded-md p-1 w-full border-[1px] border-white text-lg bg-black text-white"
									/>
								</div>

								<div className="flex flex-col gap-1 w-[50%] text-white">
									<label htmlFor="zip" className="font-semibold">
										Zip / Postal code
									</label>
									<input
										value={shipping.zip}
										onChange={(e) =>
											setShipping({ ...shipping, zip: e.target.value })
										}
										type="number"
										className="rounded-md p-1 w-full border-[1px] border-white text-lg bg-black text-white"
									/>
								</div>

								<div className="flex flex-col gap-1 w-[50%] text-white">
									<label htmlFor="shippingCost" className="font-semibold">
										Shipping Cost
									</label>
									<input
										value={data.shippingCost}
										onChange={(e) =>
											setData({ ...data, shippingCost: e.target.value })
										}
										type="text"
										className="rounded-md p-1 w-full border-[1px] border-white text-lg bg-black text-white"
									/>
								</div>
							</div>

							
						</div>

						<div className="flex justify-start items-start w-full border-[1px] border-white flex-col text-white pl-2 pr-2 pt-2 pb-2 rounded-lg h-[250px]">

							<div className="flex w-[50%] flex-col gap-3 h-full">
								<input
									type="text"
									className="border-[1px] w-full rounded-md pt-2 pb-2 pl-3 bg-black text-white border-gray-100 "
									placeholder="Filter orders..."
								/>

								<div className="w-full h-[80%] gap-5 flex flex-col border-2 border-white overflow-y-scroll">
								{products.map((item)=>(
									<AddOrderList item={item} handle={saveChange}/>
								))}
								</div>

							</div>
						</div>

						{/* Final  */}
						<div className="flex gap-6 justify-center items-start w-full border-[1px] border-white flex-col text-white pl-2 pr-2 pt-2 pb-2 rounded-lg">
							<div className="flex gap-5 w-full">

							<div className="flex flex-col gap-1 w-[50%] text-white items-start justify-center">
									<label htmlFor="totalAmount" className="font-semibold">
										Order Number
									</label>
									<input
										value={data.orderNumber}
										onChange={(e) =>
											setData({ ...data, orderNumber: e.target.value })
										}
										type="text"
										className="rounded-md p-1 w-full border-[1px] border-white text-lg bg-black text-white"
									/>
								</div>

								<div className="flex flex-col gap-1 w-[50%] text-white">
									<label htmlFor="discount" className="font-semibold">
										Discount
									</label>
									<input
										value={data.discount}
										onChange={(e) =>
											setData({ ...data, discount: e.target.value })
										}
										type="text"
										className="rounded-md p-1 w-full border-[1px] border-white text-lg bg-black text-white"
									/>
								</div>

								<div className="flex flex-col gap-1 w-[50%] text-white">
									<label htmlFor="paymentMethod" className="font-semibold">
										Payment Method
									</label>
									<select
								value={data.paymentMethod}
								onChange={(e) => setData({ ...data, paymentMethod: e.target.value })}
								name="paymentMethod"
								className="rounded-md p-1 w-full border-[1px] border-white text-lg bg-black text-white"
							>
								<option value="Credit Card">Credit Card</option>
								<option value="Cash on Delivery">Cash on Delivery</option>
							</select>
								</div>

								<div className="flex flex-col gap-1 w-[50%] text-white">
									<label htmlFor="totalAmount" className="font-semibold">
										totalAmount
									</label>
									<input
										value={data.totalAmount}
										onChange={(e) =>
											setData({ ...data, totalAmount: e.target.value })
										}
										type="text"
										className="rounded-md p-1 w-full border-[1px] border-white text-lg bg-black text-white"
									/>
								</div>
							</div>

							<div className="flex gap-6 items-center w-full ">

								<div className="flex flex-col gap-1 w-[30%] text-white">
									<button
										type="submit"
										className="pl-1 pr-1 pt-1 pb-1 rounded-md font-semibold border-[1px]
						border-white bg-white text-black text-lg hover:bg-gray-300"
									>
										Save
									</button>
								</div>
								<div className="flex flex-col gap-1  text-white">
									<div className="pl-2 pr-2 pt-1 pb-1 border-[1px] border-white border-dashed rounded-lg font-semibold text-white bg-black capitalize">
										{" "}
										Employee: {empName}
									</div>
								</div>
							

							</div>
						</div>
					</form>
				</div>
			</div>
		</div>
	);
};

export default Addorder;

import React, { useEffect } from "react";
import dateFormat from "dateformat";
import { useNavigate } from "react-router-dom";
import OrderReview from "@/pages/OrderReview";
import { Link } from "react-router-dom";

const Order = ({ data }) => {
	const date = dateFormat(data.orderDate, "d/m/yy");
	const totalAmount = data.totalAmount;
	const formatedNumber = totalAmount.toLocaleString("en-IN");
  const navigate = useNavigate();
	const items = data.items.length
	console.log(items)
	return (
		<div
			className="w-full h-[65px] grid
    grid-cols-7  border-t-0 border-l-0 border-r-0 border-dashed border-[1px] border-white cursor-pointer"
		onClick={()=>{
		navigate(`/orderreview/${data._id}`)
	}}
		>
			<div className="grid col-span-1 h-full w-full text-white justify-center items-center">
				<h1>{data.orderNumber}</h1>
			</div>

			{/* Date  */}
			<div className="grid col-span-1 justify-center items-center  h-full w-full ">
				<h1 className="text-md font-medium w-full  text-white">{date}</h1>
			</div>

			{/* Name  */}
			<div className="grid col-span-1 gap-2  justify-center items-center  w-full h-full ">
				<h1 className="text-md font-medium text-white">{data.customerName} </h1>
			</div>

			{/* City-Country  */}
			<div className="grid col-span-1   justify-center items-center  w-full h-full ">
				<h1 className="text-md font-medium text-white capitalize">
					{data.shippingAddress.city} - {data.shippingAddress.country}
				</h1>
			</div>

			{/* Items  */}
			<div className="grid col-span-1   justify-center items-center  w-full h-full ">
				<h1 className="text-md font-medium text-white">{items}</h1>
			</div>

			{/* Status  */}
			<div className="grid col-span-1   justify-center items-center  w-full h-full ">
				<h1 className="text-md font-medium text-white">{data.status}</h1>
			</div>

			{/* totalAmount  */}
			<div className="grid col-span-1 justify-center items-center  w-full h-full ">
				<h1 className="text-md font-medium text-white">₹ {formatedNumber}</h1>
			</div>
		</div>
	);
};

export default Order;

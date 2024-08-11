import React, { useEffect, useState } from "react";
import Product from "../components/Product";
import { useNavigate } from "react-router-dom";
import axios from "axios";

import { Button } from "@/components/ui/button";
import {
	DropdownMenu,
	DropdownMenuCheckboxItem,
	DropdownMenuContent,
	DropdownMenuLabel,
	DropdownMenuSeparator,
	DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import { CiCirclePlus } from "react-icons/ci";

// getCategoryProducts

const Products = () => {
	const navigate = useNavigate();
	let count = 1;

	const [products, setProducts] = useState([]);
	const [number, setNumber] = useState(0);
	const [categories, setCategories] = useState([]);

	//  type Checked = DropdownMenuCheckboxItemProps["checked"];

	const [showHigh, setShowHigh] = React.useState(false);
	const [defaultt, setDefaultt] = React.useState(false);
	const [showLow, setShowLow] = React.useState(false);
	const [showMidium, setShowMidium] = React.useState(false);
	const [showOut, setShowOut] = React.useState(false);

	const checkProductChange = (data) => {
		if (data == "default") {
			console.log("hureggg");
			axios
				.get("http://localhost:5000/api/products/getproducts")
				.then((response) => {
					setProducts(response.data);
				});
		} else {
			axios
				.post("http://localhost:5000/api/products/getstatusproducts", {
					status: data,
				})
				.then((response) => {
					setProducts(response.data);
				});
		}
	};

	const checkCategoryChange = (data) => {
		axios
			.post("http://localhost:5000/api/products/getcategoryproducts", {
				category: data,
			})
			.then((response) => {
				setProducts(response.data);
			});
	};

	useEffect(() => {
		axios
			.get("http://localhost:5000/api/products/getproducts")
			.then((response) => {
				setProducts(response.data);
				setNumber(response.data.length);
			});
		axios
			.get("http://localhost:5000/api/categories/getcategories")
			.then((response) => {
				setCategories(response.data);
			});
	}, []);

	return (
		<div className="w-full h-[91.7vh]">
			{/* NavBar  */}
			<div className="flex justify-start w-full h-[25%] flex-col items-center pl-8 pr-8 pt-4 pb-4 bg-black gap-10">
				{/* 1st row */}
				<div className="flex  w-full justify-between items-center">
					{/* Intro  */}
					<div className=" flex flex-col justify-center w-[20%] gap-2 items-start">
						<h1 className="text-2xl font-bold text-white ">Welcome back!</h1>
						<div className="text-md  rounded-sm text-gray-300">
							Here's a list of{" "}
							<span className="text-lg font-semibold text-white">{number}</span>{" "}
							products
						</div>
					</div>

					{/* Button */}
					<button className="flex justify-center items-center text-green-400 text-xl font-semibold rounded-md border-[1px] border-dashed border-white pl-2 pr-2 pt-1 pb-1 cursor-pointer" type="button" onClick={()=>{navigate('/addproduct')}}>Add Products</button>
				</div>

				{/* 2nd row  */}
				<div className="flex w-full justify-start items-center gap-3 ">
					<input
						type="text"
						className="border-[1px] w-[25%] rounded-md pt-2 pb-2 pl-3 bg-black text-white border-gray-100 "
						placeholder="Filter products..."
					/>

					{/* <div className="flex gap-1 justify-center items-center bg-black border-dashed border-[1px] border-white pt-2 pb-2 pr-3 pl-3 rounded-md">
				 <CiCirclePlus className="text-white text-lg font-bold"/>
				 <h1 className="text-white">Status</h1>
				 </div> */}

					<DropdownMenu>
						<DropdownMenuTrigger asChild>
							<Button className="text-white bg-black border-[1px] border-dashed pl-3 pr-3 pt-1 pb-1 flex gap-2 rounded-md">
								<CiCirclePlus className="text-white text-lg font-bold" />
								Status
							</Button>
						</DropdownMenuTrigger>
						<DropdownMenuContent className="w-56 bg-black text-white">
							<DropdownMenuLabel>Options</DropdownMenuLabel>

							<DropdownMenuSeparator />

							<DropdownMenuCheckboxItem
								checked={defaultt}
								onCheckedChange={() => {
									checkProductChange("default");
									setShowOut(false);
									setShowMidium(false);
									setShowHigh(false);
									setShowLow(false);
								}}
							>
								Clear
							</DropdownMenuCheckboxItem>

							<DropdownMenuCheckboxItem
								checked={showOut}
								onCheckedChange={() => {
									checkProductChange("Out of Stock");
									setShowOut(!showOut);
									setShowMidium(false);
									setShowHigh(false);
									setShowLow(false);
								}}
							>
								Out Of Stock
							</DropdownMenuCheckboxItem>

							<DropdownMenuCheckboxItem
								checked={showLow}
								onCheckedChange={() => {
									checkProductChange("Low");
									setShowLow(!showLow);
									setShowMidium(false);
									setShowHigh(false);
									setShowOut(false);
								}}
							>
								Low
							</DropdownMenuCheckboxItem>

							<DropdownMenuCheckboxItem
								checked={showMidium}
								onCheckedChange={() => {
									setShowMidium(!showMidium);
									checkProductChange("Mid");
									setShowOut(false);
									setShowHigh(false);
									setShowLow(false);
								}}
							>
								Midium
							</DropdownMenuCheckboxItem>

							<DropdownMenuCheckboxItem
								checked={showHigh}
								onCheckedChange={() => {
									checkProductChange("High");
									setShowHigh(!showHigh);
									setShowMidium(false);
									setShowOut(false);
									setShowLow(false);
								}}
							>
								High
							</DropdownMenuCheckboxItem>
						</DropdownMenuContent>
					</DropdownMenu>

					<DropdownMenu>
						<DropdownMenuTrigger asChild>
							<Button className="text-white bg-black border-[1px] border-dashed pl-3 pr-3 pt-1 pb-1 flex gap-2 rounded-md">
								<CiCirclePlus className="text-white text-lg font-bold" />
								Categories
							</Button>
						</DropdownMenuTrigger>
						<DropdownMenuContent className="w-56 bg-black text-white">
							<DropdownMenuLabel>Options</DropdownMenuLabel>

							<DropdownMenuSeparator />

							<DropdownMenuCheckboxItem
								onCheckedChange={() => {
									checkProductChange("default");
								}}
							>
								Clear
							</DropdownMenuCheckboxItem>

							{categories.map((item) => (
								<DropdownMenuCheckboxItem
									onCheckedChange={() => {
										checkCategoryChange(item.name);
									}}
								>
									{item.name}
								</DropdownMenuCheckboxItem>
							))}
						</DropdownMenuContent>
					</DropdownMenu>
				</div>
			</div>

			<div className=" w-full h-[75%] flex justify-start items-start flex-col pl-8 pr-8 pt-4 pb-4 overflow-hidden bg-black">
				<div className=" h-[55px] grid grid-cols-9 w-full border-[1px] border-white rounded-t-md  gap-2">
					<h1 className="grid col-span-4 justify-center items-center text-gray-500">
						Title
					</h1>
					<h1 className="grid col-span-1 justify-center items-center text-gray-500">
						Price
					</h1>
					<h1 className="grid col-span-1 justify-center items-center text-gray-500">
						Quantity
					</h1>
					<h1 className="grid col-span-1 justify-center items-center text-gray-500">
						Minimum
					</h1>
					<h1 className="grid col-span-1 justify-center items-center text-gray-500">
						Status
					</h1>
					<h1 className="grid col-span-1 justify-center items-center text-gray-500">
						Value
					</h1>

					{/* <h1 className="bg-gray-100">heloo</h1> */}
				</div>

				<div className="h-auto w-full overflow-y-scroll border-[1px] border-white">
					{products.map((item) => (
						<Product data={item} count={count++} />
					))}
				</div>
			</div>
		</div>
	);
};

export default Products;

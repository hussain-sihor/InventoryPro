import React, { useEffect, useState } from "react";
import { DollarSign, Package2, Album, ArchiveX } from "lucide-react";
import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";

import StatusLabels from "@/components/StatusLabels";

import CategoryChart from "@/components/CategoryChart";
import axios from "axios";
import StatusChart from "@/components/StatusChart";
import Reminders from "@/components/Reminders";

const Dashboard = () => {
	const [products, setProducts] = useState([]);
	const [productNumber, setProductNumber] = useState(0);
	const [categoryNumber, setCategoryNumber] = useState(0);
	const [storeValue, setStoreValue] = useState("");
	const [outOfStock, setOutOfStock] = useState(0);
	const [categories, setCategories] = useState([]);
	const [pieData, setPieData] = useState([]);
	const [statusPie, setStatusPie] = useState([]);

	useEffect(() => {
		axios
			.get("http://localhost:5000/api/products/getproducts")
			.then((response) => {
				setProducts(response.data);
				setProductNumber(response.data.length);
			});
		axios
			.get("http://localhost:5000/api/categories/getcategories")
			.then((response) => {
				setCategories(response.data);
				setCategoryNumber(response.data.length);
			});
	}, []);

	useEffect(() => {
		let ans = 0;
		let count = 0;
		for (let i = 0; i < products.length; i++) {
			if (products[i].quantity == 0) {
				count++;
			}
			let price = products[i].price;
			let quantity = products[i].quantity;
			let value = price * quantity;
			ans += value;
			// console.log("Price",price,"quantity",quantity,"value",value,"ans",ans)
		}
		const numformatted = ans.toLocaleString("en-IN");
		setStoreValue(numformatted);
		setOutOfStock(count);
	}, [products]);

	useEffect(() => {
		const data = [];

		for (let i = 0; i < categories.length; i++) {
			var val = 0;

			for (let j = 0; j < products.length; j++) {
				if (products[j].category == categories[i].name) {
					val = val + 1;
				}
			}
			data[i] = { name: categories[i].name, value: val };
		}

		// console.log("Data",data)
		setPieData(data);
	}, [products, categories]);

	useEffect(() => {
		var data = [];
		var lowcnt = 0;
		var midcnt = 0;
		var highcnt = 0;
		var outcnt = 0;

		for (let i = 0; i < products.length; i++) {
			if (products[i].status == "Low") {
				lowcnt += 1;
			} else if (products[i].status == "Mid") {
				midcnt += 1;
			} else if (products[i].status == "High") {
				highcnt += 1;
			} else {
				outcnt += 1;
			}
		}
		data = [
			{ name: "HIGH", value: highcnt, color: "text-[#7fff35]" },
			{ name: "MIDIUM", value: midcnt, color: "text-[#ffa673]" },
			{ name: "LOW", value: lowcnt, color: "text-[#edff28]" },
			{ name: "OUT OF", value: outcnt, color: "text-[#ff4141]" },
		];

		setStatusPie(data);
		// console.log("Data",data)
	}, [products]);

	return (
		<div className="w-full  bg-black pl-8 pr-8 pt-4 pb-4 flex flex-col">
			<div className="text-2xl font-bold text-white">Inventory Stats</div>

			<div className="grid gap-4 md:grid-cols-2 md:gap-8 lg:grid-cols-4 pt-5">
				<Card
					x-chunk="dashboard-01-chunk-0"
					className="bg-gray-900 text-white hover:bg-gray-500 hover:text-black"
				>
					<CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
						<CardTitle className="text-md font-medium">
							Total Products
						</CardTitle>
						<Package2 className="h-5 w-5 text-green-300" />
					</CardHeader>
					<CardContent>
						<div className="text-2xl font-bold">{productNumber}</div>
						{/* <p className="text-xs text-muted-foreground text-gray-400 pt-1">
							+20.1% from last month
						</p> */}
					</CardContent>
				</Card>

				<Card
					x-chunk="dashboard-01-chunk-0"
					className="bg-gray-900 text-white hover:bg-gray-500 hover:text-black"
				>
					<CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
						<CardTitle className="text-md font-medium">
							Total Store Value
						</CardTitle>
						<DollarSign className="h-5 w-5 text-lime-300" />
					</CardHeader>
					<CardContent>
						<div className="text-2xl font-bold">₹ {storeValue}</div>
						{/* <p className="text-xs text-muted-foreground text-gray-400 pt-1">
							+20.1% from last month
						</p> */}
					</CardContent>
				</Card>

				<Card
					x-chunk="dashboard-01-chunk-0"
					className="bg-gray-900 text-white hover:bg-gray-500 hover:text-black"
				>
					<CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
						<CardTitle className="text-md font-medium">
							All Categories
						</CardTitle>
						<Album className="h-5 w-5 text-yellow-300" />
					</CardHeader>
					<CardContent>
						<div className="text-2xl font-bold">{categoryNumber}</div>
						{/* <p className="text-xs text-muted-foreground text-gray-400 pt-1">
							+20.1% from last month
						</p> */}
					</CardContent>
				</Card>

				<Card
					x-chunk="dashboard-01-chunk-0"
					className="bg-gray-900 text-white hover:bg-gray-500 hover:text-black"
				>
					<CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
						<CardTitle className="text-md font-medium">Out of Stock</CardTitle>
						<ArchiveX className="h-5 w-5 text-red-300" />
					</CardHeader>
					<CardContent>
						<div className="text-2xl font-bold">{outOfStock}</div>
						{/* <p className="text-xs text-muted-foreground text-gray-400 pt-1">
							+20.1% from last month
						</p> */}
					</CardContent>
				</Card>
			</div>

			<div className="w-full flex justify-between items-center h-[400px] pt-7 ">

				<div className="w-[50%] h-full  flex justify-start items-center relative">
					<div className="text-lg font-bold text-white  absolute left-[2%] top-2">
						Categories
					</div>
					<div className="w-[70%] h-full border-white border-[1px] border-dashed rounded-md ">
						<CategoryChart data={pieData} />
					</div>
				</div>

				<div className="w-[50%] h-full flex justify-between  border-white border-[1px] border-dashed rounded-md">
					<div className="w-[40%] h-full overflow-hidden flex justify-between items-center">
						<StatusChart data={statusPie} />
					</div>

					<div className="w-[60%] h-full flex gap-4 flex-col justify-center items-center">
						{statusPie.map((item) => (
							<StatusLabels
								name={item.name}
								value={item.value}
								total={productNumber}
								color={item.color}
							/>
						))}
					</div>
				</div>
			</div>


			<div className="w-full flex justify-around items-center h-[400px] pt-7 ">

				<div className="w-[50%] h-full  flex justify-start items-center relative">
					<div className="text-lg font-bold text-white  absolute left-[2%] top-2">
						Categories
					</div>
					<div className="w-[70%] h-full border-white border-[1px] border-dashed rounded-md ">
						<CategoryChart data={pieData} />
					</div>
				</div>

				<div className="w-[50%] h-full  flex justify-center items-start relative border-[1px] rounded-md border-dashed border-white">
						<Reminders/>
					
					
				</div>

			
			</div>


		
		

		</div>
	);
};

export default Dashboard;

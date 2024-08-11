import React, { useEffect, useState } from "react";
import Order from "../components/Order";

import axios from "axios";
import { TbAlienFilled } from "react-icons/tb";
 
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { useNavigate } from "react-router-dom";
 
import { CiCirclePlus } from "react-icons/ci";





const Orders = () => {
	const navigate = useNavigate();
 let count=1;

 const [Orders,setOrders] = useState([]);
 const [number,setNumber] = useState(0);


//  type Checked = DropdownMenuCheckboxItemProps["checked"];
 
  const [showpending, setShowpending] = React.useState(false)
  const [defaultt, setDefaultt] = React.useState(false)
  const [showcompleted, setShowcompleted] = React.useState(false)
  const [showrejected, setShowrejected] = React.useState(false)
  // const [checkStatusChange, setCheckStatusChange] = React.useState("")
  

 

 useEffect(()=>{
    axios.get("http://localhost:5000/api/orders/getorders").then((response) => {
		setOrders(response.data);
    setNumber(response.data.length)
    // console.log(response.data)
 });

 },[])


 const CheckStatusChange = (data) => {
  if (data == "default") {
    // console.log("hureggg");
    axios
      .get("http://localhost:5000/api/orders/getorders")
      .then((response) => {
        setOrders(response.data);
      });
  } else {
    axios
      .post("http://localhost:5000/api/orders/getstatusorders", {
        status: data,
      })
      .then((response) => {
        setOrders(response.data);
      });
  }
};



	return (
		<div className="w-full h-[91.7vh]">
		   
       {/* NavBar  */}
			<div className="flex justify-start w-full h-[25%] flex-col items-center pl-8 pr-8 pt-4 pb-4 bg-black gap-10">
				{/* 1st row */}
				<div className="flex  w-full justify-between items-center">
         
				 {/* Intro  */}
				<div className=" flex flex-col justify-center w-[20%] gap-2 items-start">		
					<h1 className="text-2xl font-bold text-white ">
						Orders
					</h1>
          <div className='text-md  rounded-sm text-gray-300'>Here's a list of <span className="text-lg font-semibold text-white">{number}</span> orders</div>

				</div>
       
			 {/* Profile */}
			 <button className="flex justify-center items-center text-green-400 text-xl font-semibold rounded-md border-[1px] border-dashed border-white pl-2 pr-2 pt-1 pb-1 cursor-pointer" type="button" onClick={()=>{navigate('/addorder')}}>Add Orders</button>
			

				</div>

         {/* 2nd row  */}
				<div className="flex w-full justify-start items-center gap-3 ">

         <input type="text" className="border-[1px] w-[25%] rounded-md pt-2 pb-2 pl-3 bg-black text-white border-gray-100 " placeholder="Filter orders..." />
         
	

			 <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button className="text-white bg-black border-[1px] border-dashed pl-3 pr-3 pt-1 pb-1 flex gap-2 rounded-md">
				<CiCirclePlus className="text-white text-lg font-bold"/>
					Status</Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56 bg-black text-white">
        <DropdownMenuLabel>Options</DropdownMenuLabel>

        <DropdownMenuSeparator />

        <DropdownMenuCheckboxItem
        
         checked={defaultt}
          onCheckedChange={()=>{
            CheckStatusChange("default")
            setShowrejected(false)
            setShowcompleted(false)
            setShowpending(false)
          }

          }
        >
          Clear
        </DropdownMenuCheckboxItem>

        <DropdownMenuCheckboxItem
        
          checked={showpending}
          onCheckedChange={()=>{
            CheckStatusChange("Pending")
            setShowpending(!showpending)
            setShowrejected(false)
            setShowcompleted(false)
            
          }

          }
        >
          Pending
        </DropdownMenuCheckboxItem>

        <DropdownMenuCheckboxItem
          checked={showcompleted}
          onCheckedChange={()=>{
            CheckStatusChange("Completed")
            setShowcompleted(!showcompleted)
            setShowrejected(false)
            setShowpending(false)
            
          }
        }
        >
          Completed
        </DropdownMenuCheckboxItem>

        <DropdownMenuCheckboxItem
          checked={showrejected}
          onCheckedChange={()=>{
            setShowrejected(!showrejected)
            CheckStatusChange("Rejected")
            setShowcompleted(false)
            setShowpending(false)
          
          }}
        >
          Rejected
        </DropdownMenuCheckboxItem>


      </DropdownMenuContent>

      </DropdownMenu>


	

				

				</div>
			</div>



     <div className=" w-full h-[75%] flex justify-start items-start flex-col pl-8 pr-8 pt-4 pb-4 overflow-hidden bg-black">

			<div className=" h-[55px]  w-full border-[1px] border-white rounded-t-md  gap-2">
      
      <div className="w-[99%] grid grid-cols-7 justify-center items-center h-full">
       <h1 className="grid col-span-1 justify-center items-center text-gray-500">OrderID</h1>
       <h1 className="grid col-span-1 justify-center items-center text-gray-500">Date</h1>
       <h1 className="grid col-span-1 justify-center items-center text-gray-500">Customer</h1>
       <h1 className="grid col-span-1 justify-center items-center text-gray-500">Destination</h1>
       <h1 className="grid col-span-1 justify-center items-center text-gray-500">Items</h1>
       <h1 className="grid col-span-1 justify-center items-center text-gray-500">Status</h1>
       <h1 className="grid col-span-1 justify-center items-center text-gray-500">Amount</h1>
       </div>
     </div>

      <div className="h-auto w-full overflow-y-scroll border-[1px] border-white">
			 {Orders.map((item)=>(
				<Order data = {item} count = {count++}/>
			))}
			</div>

		
			
   
		 </div>



		</div>
	);
};

export default Orders;


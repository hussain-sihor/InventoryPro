import React, { useEffect, useState } from "react";
import { FaRegNoteSticky } from "react-icons/fa6";
import { IoMdAdd } from "react-icons/io";
import { MdVerifiedUser } from "react-icons/md";
import { LuShieldClose } from "react-icons/lu";
import { ImBin2 } from "react-icons/im";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import {
	Dialog,
	DialogContent,
	DialogDescription,
	DialogFooter,
	DialogHeader,
	DialogTitle,
	DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
const Reminders = () => {

  const navigate = useNavigate();
	const [data, setData] = useState([]);
	const [task, setTask] = useState(null);

	const handleDelete = (id) => {
		axios.delete(`http://localhost:5000/api/reminders/deletereminder/${id}`);
	};

	const handleSave = () => {
    if(task){
      axios.post(`http://localhost:5000/api/reminders/addreminder`,{
        task
      }).then((response)=>{
        navigate(0)
      })
    }
    
	};

	useEffect(() => {
		axios
			.get("http://localhost:5000/api/reminders/getreminders")
			.then((response) => {
				setData(response.data);
			});
	}, [handleDelete]);

	return (
		<div className="w-full h-full flex justify-center flex-col items-center gap-2">
			
			<div className="w-full h-[10%] flex justify-between items-center pl-3 pr-3 pt-1 pb-1">
				<div className=" flex gap-3 items-center justify-center text-white">
					<FaRegNoteSticky className="text-xl font-bold" />
					<h1 className="text-lg font-bold">Reminders</h1>
				</div>

				<div className="text-md font-medium">
					<Dialog className="">
						<DialogTrigger asChild>
							<Button
								className="text-xl font-bold text-white bg-transparent hover:bg-transparent"
								onClick={() => {}}
							>
								<IoMdAdd />
							</Button>
						</DialogTrigger>

						<DialogContent className="sm:max-w-[50%] h-[50%] flex flex-col gap-0 bg-gray-300">
							<DialogHeader className="h-[15%]">
								<DialogTitle className="font-bold ">Add Reminder</DialogTitle>
								{/* <DialogDescription>
												Cheking products quantity from the inventory.
											</DialogDescription> */}
							</DialogHeader>

							<div className="flex  w-full h-[70%]  rounded-lg border-[2px] border-black bg-black justify-center items-center">
								
                <div className="flex  gap-3 w-[70%] text-white items-center">
									<label htmlFor="name" className="font-semibold">
										Task:
									</label>
									<input
										value={task}
										onChange={(e) => setTask(e.target.value)}
										type="text"
										className="rounded-md p-1 w-full border-[1px] border-white text-lg bg-black text-white"
									/>
								</div>

							</div>
							<DialogFooter className="h-[15%] flex justify-end items-center mt-2 ">
								<Button type="submit" onClick={() => {
                  handleSave()
                }} className="">
									Save
								</Button>
							</DialogFooter>
						</DialogContent>
					</Dialog>
				</div>
			</div>

			<div className="flex w-[95%] h-[85%] flex-col justify-start items-center gap-4 pt-2">
				{data.map((item) => (
					<div className="w-full pl-2 pr-2 pt-1 pb-1 h-[50px] flex justify-between items-center rounded-lg border-l-[5px] border-t-[1px] border-b-[1px] border-r-[1px] border-green-400 text-white">
						<div className=" flex w-[80%] justify-start items-center gap-4 h-full">
							<MdVerifiedUser className="text-lg font-bold text-green-400" />
							<h1 className="text-lg font-semibold">{item.task}</h1>
						</div>
						<div className="flex justify-end items-center w-[20%] h-full">
							<ImBin2
								className="text-md font-bold text-white cursor-pointer"
								onClick={() => {
									handleDelete(item._id);
								}}
							/>
						</div>
					</div>
				))}
			</div>
		</div>
	);
};

export default Reminders;

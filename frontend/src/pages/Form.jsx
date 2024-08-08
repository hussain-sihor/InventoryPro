"use client";
import { FaUser } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { RiLockPasswordFill } from "react-icons/ri";
import axios from "axios";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";

const Form = ({ type }) => {
	//customizing toast for using here
	const toastOptions = {
		position: "bottom-right",
		theme: "dark",
		pauseOnHover: false,
		draggable: true,
		autoClose: 4000,
	};
	// react hook form helps in validating form
	const {
		register,
		handleSubmit,
		watch,
		formState: { errors },
	} = useForm();

	const onSubmit = async (data) => {
		if (type == "login") {
		}

		if (type == "register") {
		
		}
	};
	return (
		<div className="w-full h-screen flex justify-center items-center">
			<div className="w-[45vw] h-[65vh] flex justify-center items-center  py-5  flex-col gap-5 bg-[#dce6ee] rounded-xl shadow-[#6a6ab9] shadow-md max-sm:w-[80%] max-sm:h-[55vh] ">
	
				<form
					//handelSubmit funct from react-hook-form which needs userdefined function
					onSubmit={handleSubmit(onSubmit)}
					className="w-full flex flex-col gap-[5vh] max-sm:gap-5 justify-center max-sm:ml-4"
				>
					{/* displaying Username based on type  */}
					{type === "register" && (
						<div className="">
							<div className="flex justify-center gap-3  items-center">
								<input
									defaultValue=""
									//performing validation (register function is inbuild with react-hook-form) in which performing validation on username
									{...register("username", {
										required: "Username is required",
										validate: (value) => {
											if (value.length < 3) {
												return "Username must be atleast 3 characters";
											}
										},
									})}
									type="text"
									placeholder="Enter username"
									className="p-3 w-[50%] h-[5vh] bg-transparent outline-dashed max-sm:w-[60%] max-sm:outline-2"
								></input>
								<FaUser className="text-lg max-sm:text-sm" />
							</div>
							{/* displaying error if present */}
							{errors.username && (
								<p className="text-red-600 text-center max-sm:text-sm">
									{errors.username.message}
								</p>
							)}
						</div>
					)}
					{/* Email  */}
					<div>
						<div className="flex justify-center items-center gap-3">
							<input
								defaultValue=""
								{...register("email", { required: "Email is required" })}
								type="email"
								placeholder="Enter email"
								className=" p-3 w-[50%] h-[5vh] bg-transparent outline-dashed max-sm:w-[60%] max-sm:outline-2"
							></input>
							<MdEmail className="text-lg max-sm:text-sm" />
						</div>

						{errors.email && (
							<p className="text-red-600  text-center max-sm:text-sm">
								{errors.email.message}
							</p>
						)}
					</div>
					{/* Password  */}
					<div>
						<div className="flex justify-center items-center gap-3">
							<input
								defaultValue=""
								{...register("password", {
									required: "Password is required",
									validate: (value) => {
										if (value.length < 5) {
											return "Password must be atleast 5 characters";
										}
									},
								})}
								type="password"
								placeholder="Enter password"
								className="p-3 w-[50%] h-[5vh] bg-transparent outline-dashed max-sm:w-[60%] max-sm:outline-2"
							></input>
							<RiLockPasswordFill className="text-lg max-sm:text-sm" />
						</div>
						{errors.password && (
							<p className="text-red-600  text-center max-sm:text-sm">
								{errors.password.message}
							</p>
						)}
					</div>
					{/* Button  */}
					<div className="flex justify-center items-center gap-3">
						<button className="px-4 py-2 w-[30%] bg-[#8585ff] text-lg text-[#131324] rounded-md font-semibold max-sm:w-[30%] max-sm:text-sm max-sm:px-0">
							{type === "login" ? "Lets go" : "Join now"}
						</button>
					</div>
				</form>

				<div>
					{/* Navigate links */}
					{type === "login" ? (
						<a href="/register">
							Don't have an account?{" "}
							<span className="text-[#4e0eff] font-bold max-sm:text-sm flex-wrap">
								Register Here
							</span>
						</a>
					) : (
						<a href="/">
							Already have an account?{" "}
							<span className="text-[#4e0eff] font-bold max-sm:text-sm flex-wrap">
								Sign In Here
							</span>
						</a>
					)}
				</div>
			</div>
		</div>
	);
};

export default Form;

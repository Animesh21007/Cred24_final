import React from 'react';
import { toast } from 'react-toastify';
import Requests from '../../api/ApiList';
import { useNavigate, useParams } from 'react-router-dom';

const ResetPass = ({ email }) => {
	const { token, uid } = useParams();
	const navigate = useNavigate();

	const onVerify = async (data) => {
		// toast.loading('Please wait ...');
		// Requests.all
	};
	return (
		<div className="md:h-[-webkit-fill-available] border-2 grid items-center justify-center mx-auto rounded-md  border-blue-950 place-items-center w-[100%]  bg-gradient-to-t from-[#09203f] to-[#173b57] md:shadow-xl">
			<div className=" rounded-lg backdrop-blur-xl flex flex-col w-[100%] justify-evenly shadow-2xl md:h-[70%] items-baseline align-baseline">
				<div className="mb-8 w-[80%]  mx-auto flex flex-col items-start pt-4 m-2 justify-evenly text-slate-300 text-center">
					<h2 className="mx-auto my-3 text-2xl text-blue-200">
						Complete the verification of your Email address
					</h2>
					<p className="mx-auto mt-4 text-center text-blue-400">
						We have sent a verification link to {email}.
					</p>
					<p className="mx-auto font-[Poppins]">
						Click on the button below to complete the verification process.
					</p>
				</div>
				<button
					type="button"
					className="my-3 p-2 px-3  border-2 cursor-pointer focus:border-2 border-blue-800 w-[fit-content]  mx-auto rounded-md text-slate-400 hover:text-white ml-auto py-1 hover:border-green-600 focus:text-blue-600"
					onClick={onVerify}>
					Complete verification
				</button>
			</div>
		</div>
	);
};

export default ResetPass;

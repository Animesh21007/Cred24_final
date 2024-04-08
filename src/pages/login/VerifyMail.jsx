import React from 'react';
import { toast } from 'react-toastify';
import Requests from '../../api/ApiList';
import { useNavigate, useParams } from 'react-router-dom';

const ResetPass = ({ email }) => {
	const { token, uid } = useParams();
	const navigate = useNavigate();

	const onVerify = async (data) => {
		toast.loading('Please wait ...');
		// Requests.all
	};
	return (
		<div className="appi grid mx-auto rounded-md border-2 border-blue-950 place-items-center w-[100%] h-[100%] bg-gradient-to-t from-[#09203f] to-[#173b57] shadow-xl">
			<div className="w-[80%] mx-auto flex flex-col items-start pt-4 m-2 justify-evenly text-slate-300 text-center">
				<h2 className="mx-auto my-1 text-2xl">
					Complete the verification of your Email address
				</h2>
				<p className="mx-auto mt-4 text-blue-400">
					We have sent a verification link to {email}.
				</p>
				<pre className="font-[Poppins]">
					Click on the button below to complete the verification process.
				</pre>
			</div>
			<button
				type="button"
				className="my-3 border-2 cursor-pointer focus:border-2 w-[fit-content] rounded-md text-slate-400 hover:text-white ml-auto py-1 hover:border-green-600 focus:text-blue-600"
				onClick={onVerify}>
				Complete verification
			</button>
		</div>
	);
};

export default ResetPass;

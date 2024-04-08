import React, { useState } from 'react';
import Login from './Login';
import Register from './Register';
import ReactCardFlip from 'react-card-flip';
import './Loginpage.css';

const LoginPage = () => {
	const [isflipped, setIsFlipped] = useState(false);

	function handleClickReg(e) {
		e.preventDefault();
		setIsFlipped((prev) => prev = true);
	}

	function handleClickLog(e){
		e.preventDefault();
		setIsFlipped((prev) => prev = false);
	}

	return (
		<div className="mid mt-4 w-[100%] sm:w-[50%] h-[webkit-fill-available] mx-auto">
				<div className="flex flex-row justify-center">
				<button
					onClick={handleClickLog}
					className="p-2 m-1 mx-4 text-lg font-semibold focus:border-b-2 text-sky-100">
					Login
				</button>
				<button
					onClick={handleClickReg}
					className="p-2 m-1 mx-4 text-lg font-semibold text-sky-100 focus:border-b-2">
					Register
				</button>
			</div>
			<div className="sm:w-[100%] md:w-[70%] h-[70%] mx-auto">
				<ReactCardFlip isFlipped={isflipped} flipDirection="horizontal">
					<Login></Login>
					<Register></Register> 
				</ReactCardFlip>
			</div>
		</div>
	);
};

export default LoginPage;

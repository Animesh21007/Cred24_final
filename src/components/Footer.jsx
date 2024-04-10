import React from 'react';
import Insta from '../images/Insta.png';
import Linkedin from '../images/Linkedin.png';
import Facebook from '../images/Facebook.png';

const Footer = () => {
	return (
		<div className=" w-[100%] z-[100] mx-0 text-white fixed sm:bottom-0 text-center  px-6 bottom-0 md:py-2 p-0 flex flex-col bg-white backdrop-filter backdrop-blur-md bg-opacity-10 items-center md:flex-row justify-between ">
			<p className='text-[0.7rem] md:text-[0.8rem]'>@ PICT IEEE Student Branch</p>

			<a href="/webteam" className="p-1">
			<p  className=" text-[0.7rem] md:text-[0.8rem]">
				Designed and Developed by : Web Team
					</p>
				</a>
			<div className="flex justify-center space-x-4 md:mt-0">
				<a href="https://www.instagram.com/pictieee/" className="p-1">
					<img src={Insta} className="w-6" alt="Instagram" />
				</a>
				<a href="https://www.linkedin.com/company/pisbieee/" className="p-1">
					<img src={Linkedin} className="w-6" alt="Linkedin" />
				</a>
				<a href="/" className="p-1">
					<img src={Facebook} className="w-6" alt="Facebook" />
				</a>
			</div>
		</div>
		// </div>
	);
};

export default Footer;

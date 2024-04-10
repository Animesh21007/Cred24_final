import Styles from './card.module.css';
import React, { useState } from 'react';
import { useSpring, animated } from 'react-spring';
import Carousel from '../../components/Carousel';

import '@fortawesome/fontawesome-free/css/all.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
function CardNew({ imagen, name, }) {
	const [show, setShown] = useState(false);

	const props3 = useSpring({
		transform: show ? 'scale(1.03)' : 'scale(1)',
		boxShadow: show
			? '0 20px 25px rgb(0 0 0 / 25%)'
			: '0 2px 10px rgb(0 0 0 / 8%)',
	});
	return (
		<animated.div
			className="  cardp flex flex-col border-2 border-blue-300 w-44 md:w-52 bg-slate-900  rounded-2xl justify-center h-[fit-content]  md:h-[fit-content] "
			style={props3}
			onMouseEnter={() => setShown(true)}
			onMouseLeave={() => setShown(false)}>
			<img
				src={imagen}
				className=" rounded-3xl p-3"
				alt=""
				width="250px"
				height="250px"
			/>
			<div className="text-[0.6rem] text-center text-white md:text-xs p-2">
				{name}
			</div>
			
		</animated.div>
	);
}

export default CardNew;

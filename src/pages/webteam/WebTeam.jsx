import React, { useState, useEffect } from 'react';
import { Parallax, ParallaxLayer } from '@react-spring/parallax';
import Carousel from '../../components/Carousel';

import { useWindowSize } from 'react-use';
import Footer from '../../components/Footer';


import 'react-lazy-load-image-component/src/effects/blur.css'; 
import { v4 as uuidv4 } from 'uuid';

import './WebTeam.css'
import CardNew from '../../components/cards/WebTeamCard';
import hk from '../../assets/webteamphotos/hk2.jpg'
import ani from '../../assets/webteamphotos/ani3.jpg'
import hitesh from '../../assets/webteamphotos/hitesh.jpg'
import lol from '../../assets/webteamphotos/lolwani.jpg'
import mb from '../../assets/webteamphotos/mb.jpg'
import pj from '../../assets/webteamphotos/pj.jpg'
import samir from '../../assets/webteamphotos/Samir.jpg'
import wtAnu from '../../assets/webteamphotos/wtAnu.jpg'
import wtsri from '../../assets/webteamphotos/wtsri.jpg'
import wtkulkarni from '../../assets/webteamphotos/wtkulkarni.jpg'
import ab from '../../assets/webteamphotos/ab.jpg'
import am from '../../assets/webteamphotos/am.jpg'
const WebTeam = () => {

	const { width } = useWindowSize();
	const [pages, setPages] = useState(2.5);
	const [offset, setOffset] = useState(2);
	// useEffect(() => {
	// 	// Update pages and offset values based on screen width
	// 	if (width < 425) {
	// 		setPages(3.9); // Set pages value for small screens
	// 		setOffset(1.8);
	// 	} else {
	// 		setPages(3.15); // Set pages value for larger screens
	// 		setOffset(2); // Set offset value for larger screens
	// 	}
	// }, [width]); // Update whenever width changes

	let Cards1 = [
		{
			key: uuidv4(),
			content: <CardNew
			imagen={hk}
			name={'Harsh Khandelwal'}
		
		/>,
		},
		{
			key: uuidv4(),
			content:<CardNew
			imagen={ani}
			name={'Animesh Jain'}
			
		/>,
		},
		{
			key: uuidv4(),
			content: <CardNew
			imagen={pj}
			name={'Piyush Jain'}
		
		/>,
		},
		
	];
	let Cards2 = [
		{
			key: uuidv4(),
			content:<CardNew
			imagen={samir}
			name={'Samir Wankhede'}
			
		/>,
		},
		{
			key: uuidv4(),
			content:<CardNew
			imagen={wtsri}
			name={'Shrinidhi Balaji'}
		
		/>,
		},
		{
			key: uuidv4(),
			content: <CardNew
			imagen={wtAnu}
			name={'Anujha Barawkar'}
			
		/>,
		},
		
	];
	let Cards3 = [
		{
			key: uuidv4(),
			content:<CardNew
			imagen={hitesh}
			name={'Hitesh Sonavane'}
		
		/>,
		},
		{
			key: uuidv4(),
			content:<CardNew
			imagen={lol}
			name={'Siddharth Lalwani'}
			
		/>,
		},
		{
			key: uuidv4(),
			content: <CardNew
			imagen={wtkulkarni}
			name={'Kaushal Kulkarni'}
		
		/>,
		},
		
	];
	let Cards4 = [
		{
			key: uuidv4(),
			content:<CardNew
			imagen={am}
			name={'Aayush Mohod'}
			
		/>,
		},
		{
			key: uuidv4(),
			content:<CardNew
			imagen={mb}
			name={'Maheshwar Bhosale'}
		
		/>,
		},
		{
			key: uuidv4(),
			content: <CardNew
			imagen={ab}
			name={'Abhishek Bhosale'}
			
		/>,
		},
		
	];
	return (
		<div className="">
			<div className="sponsors -z-10 ">
				<Parallax
					pages={2.95}
					style={{ top: '0', left: '0' }}
					className="animation4  bg-[#032648] h-[fit-content] [&::-webkit-scrollbar]:[width:2px]">
					<ParallaxLayer offset={0} speed={0.25}>
						<div
							className="animation_layer parallax4 h-[1400px]"
							id="bgwt"></div>
					</ParallaxLayer>
					<ParallaxLayer offset={0} speed={0.50}>
          <div className="animation_layer parallax4" id="bubbles"></div>
        </ParallaxLayer>
					<ParallaxLayer offset={0} speed={0.3}>
						<div className="animation_layer parallax4" id="wtlayers0"></div>
					</ParallaxLayer>
					<ParallaxLayer offset={0} speed={-0.1}>
						<div className="animation_layer parallax4" id="wtlayers1"></div>
					</ParallaxLayer>

					<ParallaxLayer offset={0} speed={0.3}>
						<div className="animation_layer parallax4" id="wtlayers2"></div>
					</ParallaxLayer>

					<ParallaxLayer offset={0} speed={0.35}>
						<div className="animation_layer parallax4" id="wtlayers3"></div>
					</ParallaxLayer>
					<ParallaxLayer offset={0} speed={-0.3}>
						<div className="flex items-start justify-center font-extrabold text-center text-[#093c6ef6] align-middle animation_layer parallax4 mt-[20rem] sm:mt-24 md:mt-20 lg:mt-8 text-5xl sm:text-8xl md:text-7xl lg:text-9xl">
							<p className="mt-[20%]"> Web Team</p>
						</div>
					</ParallaxLayer>
					<ParallaxLayer offset={0} speed={0.5}>
						<div className="animation_layer parallax4" id="wtlayers4"></div>
					</ParallaxLayer>
					<ParallaxLayer offset={0} speed={0.45}>
						<div className="animation_layer parallax4" id="wtlayers5"></div>
					</ParallaxLayer>
          <ParallaxLayer offset={0} speed={1.05}>
					<div class="animation_layer parallax" id="aquaman"></div>
				</ParallaxLayer>
					<ParallaxLayer offset={0} speed={0.4}>
						<div className="animation_layer parallax4" id="wtlayers6"></div>
					</ParallaxLayer>
					<ParallaxLayer offset={0} speed={0.35}>
						<div className="animation_layer parallax4" id="wtlayers7"></div>
					</ParallaxLayer>
					<ParallaxLayer offset={0} speed={0.35}>
						<div className="animation_layer parallax4" id="wtlayers8"></div>
					</ParallaxLayer>
					<ParallaxLayer offset={0} speed={0.35}>
						<div className="animation_layer parallax4" id="wtlayers9"></div>
					</ParallaxLayer>
					<ParallaxLayer offset={0} speed={0.35}>
						<div className="animation_layer parallax4" id="wtlayers10"></div>
					</ParallaxLayer>
					<ParallaxLayer offset={0} speed={0.35}>
						<div className="animation_layer parallax4" id="wtlayers11"></div>
					</ParallaxLayer>
					<ParallaxLayer offset={0} speed={0.35}>
						<div className="animation_layer parallax4" id="wtlayers12"></div>
					</ParallaxLayer>
					<ParallaxLayer
						className="animation_layer parallax4"
						offset={1}
						speed={0.25}>
						<div className=" wteam flex-col m-5   ">
							<div className="text-2xl text-center md:text-2xl lg:text-3xl text-sky-200">
								Designed and Developed by
							</div>
							<div className="flex gap-5 m-5 justify-evenly">
								<CardNew
									imagen={hk}
									name={'Harsh Khandelwal'}
								
								/>

								<CardNew
									imagen={ani}
									name={'Animesh Jain'}
									
								/>
								<CardNew
									imagen={pj}
									name={'Piyush Jain'}
								
								/>
							</div>

							<div className="flex gap-5 m-5 justify-evenly">
								<CardNew
									imagen={samir}
									name={'Samir Wankhede'}
									
								/>
								<CardNew
									imagen={wtsri}
									name={'Shrinidhi Balaji'}
								
								/>
								<CardNew
									imagen={wtAnu}
									name={'Anujha Barawkar'}
									
								/>
							</div>
							<div className="flex gap-5 m-5 justify-evenly">
								<CardNew
									imagen={hitesh}
									name={'Hitesh Sonavane'}
								
								/>

								<CardNew
									imagen={lol}
									name={'Siddharth Lalwani'}
									
								/>
								<CardNew
									imagen={wtkulkarni}
									name={'Kaushal Kulkarni'}
								
								/>
							</div>
							<div className="flex gap-5 m-5 justify-evenly">
								<CardNew
									imagen={am}
									name={'Aayush Mohad'}
									
								/>
								<CardNew
									imagen={mb}
									name={'Maheshwar Bhosale'}
								
								/>
								<CardNew
									imagen={ab}
									name={'Abhishek Bhosale'}
									
								/>
							</div>
						</div>
                        <div className='forsmallsize' >
						<div className="px-4 py-2">
							<Carousel cards={Cards1} height="300px" />
						</div>
						<div className="px-4  py-2">
							<Carousel cards={Cards2} height="300px" />
						</div>
						<div className="px-4  py-2">
							<Carousel cards={Cards3} height="300px" />
						</div>
						<div className="px-4  py-2">
							<Carousel cards={Cards4} height="300px" />
						</div>
						</div>


					</ParallaxLayer>
         
				</Parallax>
			</div>
			<Footer />
		</div>
	);
};

export default WebTeam;

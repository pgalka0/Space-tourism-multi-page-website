import { useState } from 'react';
import DestinationComponent from '../components/Destination';
import { IDestination } from '../types/interfaces';

import Navbar from '../components/Shared/Navbar';
import Head from 'next/head';

enum DestinationEnum {
	moon = 'MOON',
	mars = 'MARS',
	europa = 'EUROPA',
	titan = 'TITAN',
}

export default function DestinationPage() {
	const [destinationChoice, setDestinationChoice] = useState<DestinationEnum>(
		DestinationEnum.moon
	);

	const [destinationData, setDestinationData] = useState<IDestination>(
		destinations[0]
	);

	const setDestination = (destination: DestinationEnum) => {
		setDestinationData(
			destinations.filter(
				(dest: IDestination) => dest.title === destination
			)[0]
		);

		setDestinationChoice(destination);
	};

	return (
		<>
			<Head>
				<title>Destination | Space Tourism</title>
				<meta
					name="description"
					content="Generated by create next app"
				/>
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<div className="w-screen min-h-screen bg-destination-desktop tablet:bg-destination-tablet mobile:bg-destination-mobile bg-no-repeat bg-cover select-none bg-fixed mobile:h-auto">
				<Navbar />
				<div className="flex flex-col items-center justify-between tablet:flex-col mt-[50px] px-[200px] tablet:px-[0px] tablet:mt-[100px] mobile:mt-[40px]">
					<div className="font-barlowCondensed text-[28px] tablet:text-[20px] tracking-[4.72px] self-start tablet:px-[50px] mobile:text-[16px] mobile:self-center">
						<span className="text-white/[0.5] font-bold pr-5">
							01
						</span>
						<span className="text-white">
							PICK YOUR DESTINATION
						</span>
					</div>
					<DestinationComponent
						destinationChoice={destinationChoice}
						setDestination={setDestination}
						{...destinationData}
					/>
				</div>
			</div>
		</>
	);
}

const destinations: IDestination[] = [
	{
		title: 'MOON',
		description:
			'See our planet as you’ve never seen it before. A perfect relaxing trip away to help regain perspective and come back refreshed. While you’re there, take in some history by visiting the Luna 2 and Apollo 11 landing sites.',
		imageURL: '/assets/destination/image-moon.png',
		averageDistance: '384,400 KM',
		estimatedTravelTime: '3 DAYS',
	},
	{
		title: 'MARS',
		description:
			'Don’t forget to pack your hiking boots. You’ll need them to tackle Olympus Mons, the tallest planetary mountain in our solar system. It’s two and a half times the size of Everest!',
		imageURL: '/assets/destination/image-mars.png',
		averageDistance: '225 MIL. KM',
		estimatedTravelTime: '9 MONTHS',
	},
	{
		title: 'EUROPA',
		description:
			'The smallest of the four Galilean moons orbiting Jupiter, Europa is a winter lover’s dream. With an icy surface, it’s perfect for a bit of ice skating, curling, hockey, or simple relaxation in your snug wintery cabin.',
		imageURL: '/assets/destination/image-europa.png',
		averageDistance: '628 MIL. KM',
		estimatedTravelTime: '3 YEARS',
	},
	{
		title: 'TITAN',
		description:
			'The only moon known to have a dense atmosphere other than Earth, Titan is a home away from home (just a few hundred degrees colder!). As a bonus, you get striking views of the Rings of Saturn.',
		imageURL: '/assets/destination/image-titan.png',
		averageDistance: '1.6 BIL. KM',
		estimatedTravelTime: '7 YEARS',
	},
];

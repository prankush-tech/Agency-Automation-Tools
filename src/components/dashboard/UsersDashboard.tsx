import React from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
// import { AvatarIcon } from 'lucide-react';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

type Props = {};
const data = [
	{
		name: 'Prankush Giri',
		email: 'prankushgiri@gmail.com',
		avatarSrc: 'https://img.freepik.com/premium-photo/green-yellow-anime_941211-14.jpg',
		fallbackText: 'CN'
	},
	{
		name: 'Prankush Giri',
		email: 'prankushgiri@gmail.com',
		avatarSrc: 'https://img.freepik.com/premium-photo/green-yellow-anime_941211-14.jpg',
		fallbackText: 'CN'
	},
	{
		name: 'Prankush Giri',
		email: 'prankushgiri@gmail.com',
		avatarSrc: 'https://img.freepik.com/premium-photo/green-yellow-anime_941211-14.jpg',
		fallbackText: 'CN'
	},
	{
		name: 'Prankush Giri',
		email: 'prankushgiri@gmail.com',
		avatarSrc: 'https://img.freepik.com/premium-photo/green-yellow-anime_941211-14.jpg',
		fallbackText: 'CN'
	},
	{
		name: 'Prankush Giri',
		email: 'prankushgiri@gmail.com',
		avatarSrc: 'https://img.freepik.com/premium-photo/green-yellow-anime_941211-14.jpg',
		fallbackText: 'CN'
	}
	// Add more data objects as needed
];

const UsersDashboard = (props: Props) => {
	return (
		<React.Fragment>
			<Card className="w-full">
				<CardHeader className="">
					{data.map((item, index) => (
						<div key={index} className="flex items-center justify-between border-b-2">

							<div className="flex flex-row items-center gap-2 py-3">
								<Avatar>
									<AvatarImage src={item.avatarSrc} alt={item.name} />
									<AvatarFallback>{item.fallbackText}</AvatarFallback>
								</Avatar>
								<div className="">
									<h2>{item.name}</h2>
									<p className="text-neutral-500">{item.email}</p>
								</div>
							</div>

                            <div className="text-2xl font-bold">
                            $199.99
                            </div>
						</div>
					))}
				</CardHeader>
			</Card>
		</React.Fragment>
	);
};

export default UsersDashboard;

// import CopyButton from '@/components/copyButton';
import Navbar from '@/components/global/navbar';
import React from 'react';

type Props = {
	children: React.ReactNode;
};

const layout = ({ children }: Props) => {
	return (
		<div className="flex items-center flex-col justify-center h-screen">
			<div className="absolute top-0 z-[-2] h-screen w-screen dark:bg-neutral-950 dark:bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(255,255,0,0.2),rgba(255,255,255,0))]   bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(255,255,0,0.4),rgba(255,255,255,0))]"></div>
			<Navbar/>
			{/* <h1 className='text-lg' >Demo login</h1>
			{children && (
				<div className="text-lg text-center">
					<CopyButton />
				</div>
			)}
			<p className='font-sans text-xs pb-2 lg:p-5'>If DEMO doesn&apos;t work, create new</p> */}
			{children}
		</div>
	);
};

export default layout;

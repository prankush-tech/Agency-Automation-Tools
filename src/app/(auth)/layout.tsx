import CopyButton from '@/components/copyButton';
import React from 'react';

type Props = {
	children: React.ReactNode;
};

const layout = ({ children }: Props) => {
	return (
		<div className="flex items-center flex-col justify-center h-screen">
			<div className="absolute top-0 z-[-2] h-screen w-screen dark:bg-neutral-950 dark:bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(255,255,0,0.2),rgba(255,255,255,0))]   bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(255,255,0,0.4),rgba(255,255,255,0))]"></div>
			<h1 className='text-3xl' >Demo Login</h1>
			<p className='font-sans text-sm pb-2 lg:p-5 text-center'>Some APIS expire and might not work <br/>
			USE DEMO LOGIN</p>
			{children && (
				<div className="text-lg text-center">
					<CopyButton />
				</div>
			)}
			{children}
		</div>
	);
};

export default layout;

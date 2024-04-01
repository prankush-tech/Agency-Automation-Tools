// import CopyButton from '@/components/copyButton';
import React from 'react';

type Props = {
	children: React.ReactNode;
};

const layout = ({ children }: Props) => {
	return (
		<div className="flex items-center flex-col justify-center h-screen">
			{/* <h1 className='text-lg' >Demo login</h1>
			{children && (
				<div className="text-lg text-center">
					<CopyButton />
				</div>
			)} */}
			<p className='font-sans text-xs pb-2 lg:p-5'>If DEMO doesn&apos;t work, create new</p>
			{children}
		</div>
	);
};

export default layout;

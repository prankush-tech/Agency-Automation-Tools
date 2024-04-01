import CopyButton from '@/components/copyButton';
import React from 'react';

type Props = {
	children: React.ReactNode;
};

const layout = ({ children }: Props) => {
	return (
		<div className="flex items-center flex-col justify-center h-screen">
				{children}
			<div className="text-lg text-center">
                <CopyButton/>
			</div>
		</div>
	);
};

export default layout;

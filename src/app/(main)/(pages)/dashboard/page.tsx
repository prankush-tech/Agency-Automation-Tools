import React from 'react';

type Props = {};

const DashboardPage = (props: Props) => {
	return (
		<div className="felx felx-col gap-4 relative">
			<h1 className="text-xl lg:text-2xl sticky top-0 z-[10] p-4 bg-background/50 backdrop-blur-lg flex items-center border-b font-bold">
				Dashboard
			</h1>
		</div>
	);
};

export default DashboardPage;

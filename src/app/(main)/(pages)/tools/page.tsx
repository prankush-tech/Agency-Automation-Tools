import { AllTools } from '@/lib/constants';
import React from 'react';
import ToolsCard from './_components/ToolsCard';

type Props = {};

const Category = (props: Props) => {
	console.log();
	return (
		<div className="felx felx-col gap-4 ">
			<h1 className="text-xl lg:text-2xl sticky top-0 z-[10] p-4 bg-background/50 backdrop-blur-lg flex items-center border-t border-x-2 font-bold rounded-t-2xl border-b">
				<span>Tools connected</span>
			</h1>
			<div className="relative flex flex-col gap-4">
				<section className="flex flex-col gap-4  p-3 md:p-6 text-muted-foreground text-xs md:text-lg">
					Connect all your apps directly from here. You may need to connect these apps regularly to refresh
					verification.
					{AllTools.map((eachTool, index) => (
						<ToolsCard
							key={index}
							icon={eachTool.image}
							description={eachTool.description}
							title={eachTool.title}
							type={eachTool.title}
							connected={''}
						/>
					))}
				</section>
			</div>
		</div>
	);
};

export default Category;

import { cn } from '@/lib/utils';
import React from 'react';
import { BentoGrid, BentoGridItem } from './ui/bento-grid';
import { IconClipboardCopy, IconFileBroken, IconSignature, IconTableColumn } from '@tabler/icons-react';
import Image from 'next/image';

export function BentoGridSecondDemo() {
	return (
		<BentoGrid className="max-w-[90rem] sm:mx-auto px-2 md:auto-rows-[20rem]">
			{items.map((item, i) => (
				<BentoGridItem
					key={i}
					title={item.title}
					description={item.description}
					header={item.header}
					className={item.className}
					icon={item.icon}
					className2={item.className2}
				/>
			))}
		</BentoGrid>
	);
}
interface SkeletonProps {
	link: string;
}
interface classDarkMode{
	classNamdevalue:string
}

const Skeleton: React.FC<SkeletonProps> = ({ link }) => {
	return (
		<div className="flex flex-1 w-full h-full min-h-[7rem] rounded-xl dark:bg-dot-white/[0.2] bg-dot-black/[0.2] border border-transparent  dark:bg-neutral-900">
			{/* <img src={link} alt="BentoImage" className="w-full" /> */}
		</div>
	);
};

const Skeleton2: React.FC<SkeletonProps> = ({ link }) => {
	return (
		<div className="flex flex-1 w-full h-full min-h-[7rem] rounded-xl dark:bg-dot-white/[0.2] bg-dot-black/[0.2] border border-transparent  dark:bg-[#e2f24b]">
			<img src={link} alt="BentoImage" className="w-full" />
		</div>
	);
};
const items = [
	{
		title: 'The Dawn of Innovation',
		// description: 'Explore the birth of groundbreaking ideas and inventions.',
		header: <Skeleton link={''} />,
		className: 'md:col-span-2',
		className2:'dark:text-neutral-200',
		// icon: <IconClipboardCopy className="h-4 w-4 text-neutral-900" />
	},
	{
		title: 'The Digital Revolution',
		description: 'Dive into the transformative power of technology.',
		header: <Skeleton2 link={'/bentoImage2.svg'} />,
		className2:'dark:text-neutral-900',
		className: 'md:col-span-1 bg-[#e2f24b] dark:bg-[#e2f24b]',
		icon: <IconFileBroken className="h-4 w-4 text-neutral-900" />
	},
	{
		title: 'The Art of Design',
		description: 'Discover the beauty of thoughtful and functional design.',
		header: <Skeleton2 link={'/bentoImage.svg'} />,
		className: 'md:col-span-1 bg-[#e2f24b] dark:bg-[#e2f24b]',
		className2:'dark:text-neutral-900',
		icon: <IconSignature className="h-4 w-4 text-neutral-900" />
	},
	{
		title: 'The Power of Communication',
		description: 'Understand the impact of effective communication in our lives.',
		header: <Skeleton link={''} />,
		className: 'md:col-span-2',
		className2:'dark:text-neutral-200',
		icon: <IconTableColumn className="h-4 w-4 text-neutral-900" />
	}
];

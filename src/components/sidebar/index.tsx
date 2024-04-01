'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';
import { TooltipProvider } from '../ui/tooltip';
import Image from 'next/image';
import { SideBarIcons } from '@/lib/constants';
import { Tooltip, TooltipContent, TooltipTrigger } from '@radix-ui/react-tooltip';
import clsx from 'clsx';
import { Separator } from '@/components/ui/separator';
import { Database, GitBranch, LucideMousePointerClick } from 'lucide-react';
import { ModeToggle } from '../global/mode-toggle';

type Props = {};

const SideBar = (props: Props) => {
	const pathName = usePathname();

	return (
		<nav className=" dark:bg-neutral-900 h-[100vh] flex justify-between overflow-hidden items-center flex-col gap-1 py-4 w-[8rem] md:w-[10rem] z-[100]">
			<div className="flex items-center justify-center fixed z-10 right-2 bottom-2 ">
				<ModeToggle />
			</div>
			<div className="flex  flex-col gap-4 md:gap-5">
				<Link href="/" className="font-bold">
					<div className="flex items-center justify-center hover:scale-125 duration-200 ">
						<Image
							src="/fuzzieLogo.png"
							width={10}
							height={10}
							alt="Zency"
							className="shadow-sm invert dark:invert-0"
						/>
						<p className="text-xl font-bold dark:text-neutral-50 ">ZEN.</p>
					</div>
				</Link>

				{SideBarIcons.map((icons, index) => (
					<ul key={index}>
						<li>
							<Link href={icons.href}>
								{pathName === icons.href ? (
									<p className="text-[0.8rem] md:text-[1rem] px-32 py-2 rounded-3xl text-neutral-900 text bg-[#e2f24b] ">
										{icons.name}
									</p>
								) : (
									<p className="text-[0.8rem] md:text-[1rem] px-32 py-2  text-neutral-500 hover:text-neutral-900 dark:hover:text-neutral-50 ">
										{icons.name}
									</p>
								)}
							</Link>
						</li>
					</ul>
				))}

				<Separator />

				<div className="flex items-center flex-col gap-9 dark:bg-[#353346]/30 py-4 mx-32  p-2 rounded-full h-84 overflow-scroll border-[1px] border-neutral-800 ">
					<div className="relative dark:bg-[#353346]/70 p-2 rounded-full border-t-[2px] border-[1px] border-t-[#353346]">
						<GitBranch className="text-muted-foreground" size={18} />
						<div className="border-l-2 border-muted-foreground/50 h-6 absolute left-1/2 transform translate-x-[-50%] -bottom-[30px]" />
					</div>
					<div className="relative dark:bg-[#353346]/70 p-2 rounded-full border-t-[2px] border-[1px] border-t-[#353346]">
						<LucideMousePointerClick className="text-muted-foreground" size={18} />
						<div className="border-l-2 border-muted-foreground/50 h-6 absolute left-1/2 transform translate-x-[-50%] -bottom-[30px]" />
					</div>
					<div className="relative dark:bg-[#353346]/70 p-2 rounded-full border-t-[2px] border-[1px] border-t-[#353346]">
						<Database className="text-muted-foreground" size={18} />
						
					</div>

				</div>
			</div>
		</nav>
	);
};

export default SideBar;

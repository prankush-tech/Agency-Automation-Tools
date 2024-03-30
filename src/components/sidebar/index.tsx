'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';
import { TooltipProvider } from '../ui/tooltip';
import Image from 'next/image';
import { SideBarIcons } from '@/lib/constants';
import { Tooltip, TooltipContent, TooltipTrigger } from '@radix-ui/react-tooltip';
import clsx from 'clsx';

type Props = {};

const SideBar = (props: Props) => {
	const pathName = usePathname();

	return (
		<nav className=" bg-neutral-900 h-screen overflow-scroll  justify-between flex items-center flex-col  gap-10 py-6 px-4">
			<div className="flex items-center justify-between flex-col gap-8">
				<Link href="/" className="font-bold">
					<aside className="flex items-center gap-[1px] hover:scale-125 duration-200">
						<Image src="/fuzzieLogo.png" width={10} height={10} alt="Zency" className="shadow-sm " />
						<p className="text-xl font-bold  text-neutral-50 ">Z.</p>
					</aside>
				</Link>

				<TooltipProvider>
					{SideBarIcons.map((icons, index) => (
						<ul key={index}>
							<Tooltip delayDuration={0}>
								<TooltipTrigger>
									<li>
										<Link
											href={icons.href}
											className={clsx(
												'group h-6 w-6 flex items-center justify-center scale-[1.75] rounded-lg p-[0.3rem] cursor-pointer',
												{
													'bg-[#e2f24b] ': pathName === icons.href
												}
											)}
										>
											<icons.Component selected={pathName === icons.href} />
										</Link>
									</li>
								</TooltipTrigger>
								<TooltipContent side="right" className="bg-neutral-900 backdrop-blur-xl  rounded-2xl">
									<p className="p-3 ">{icons.name}</p>
								</TooltipContent>
							</Tooltip>
						</ul>
					))}
				</TooltipProvider>
			</div>
		</nav>
	);
};

export default SideBar;

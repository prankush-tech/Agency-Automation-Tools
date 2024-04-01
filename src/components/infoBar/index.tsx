'use client';
import React, { useEffect } from 'react';
import { ModeToggle } from '../global/mode-toggle';
import { Book, Mail, Search } from 'lucide-react';
import Templates from '../icons/cloud_download';
import { Input } from '@/components/ui/input';

import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';
import { UserButton } from '@clerk/nextjs';
type Props = {};

const InfoBar = (props: Props) => {
	return (
		<div className=" sticky top-0 flex flex-row justify-end gap-4 items-center px-4 py-4 w-full dark:bg-neutral-900 ">
			<span className="flex items-center bg-muted px-4 rounded-full">
				<Search />
				<Input placeholder="Find" className="border-none bg-transparent" />
			</span>

			<TooltipProvider>
				<Tooltip delayDuration={0}>
					<TooltipTrigger>
						<Mail size={16} />
					</TooltipTrigger>
					<TooltipContent>
						<p>Contact Support</p>
					</TooltipContent>
				</Tooltip>
			</TooltipProvider>

			{/* Guide */}
			<TooltipProvider>
				<Tooltip delayDuration={0}>
					<TooltipTrigger>
						<Book size={16} />
					</TooltipTrigger>
					<TooltipContent>
						<p>Guide</p>
					</TooltipContent>
				</Tooltip>
			</TooltipProvider>
			<UserButton
				afterSignOutUrl='/'
			/>
		</div>
	);
};

export default InfoBar;

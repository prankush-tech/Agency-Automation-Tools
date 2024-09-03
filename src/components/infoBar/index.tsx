'use client';
import React, { useEffect } from 'react';
import { ModeToggle } from '../global/mode-toggle';
import { Book, Mail, Search } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';
import {  UserButton } from '@clerk/nextjs';
import { useBilling } from '../../providers/billing-providers';
import { onPaymentDetails } from '@/app/(main)/(pages)/billing/_actions/paymentConnection';
import SignOutButtonCustom from '../ButtonLogOut/cutomSignOut';
import { useUser } from '@clerk/nextjs';

type Props = {};

const InfoBar = (props: Props) => {


	const { credits, tier, setCredits, setTier } = useBilling();

	const onGetPayment = async () => {
		const response = await onPaymentDetails();
		if (response) {
			setTier(response.tier!);
			setCredits(response.credits!);
		}
	};

	const {user} = useUser();
	
	useEffect(() => {
		onGetPayment();
	}, []);

	return (
		<div className=" sticky top-0 flex flex-row justify-end gap-4 items-center px-4 py-6 w-full bg-neutral-50 dark:bg-neutral-900 z-[20]">
			<span className="flex items-center gap-2 font-bold">
				<p className="text-sm font-light text-neutral-900 dark:text-neutral-100">Credits</p>
				{tier == 'Unlimited' ? (
					<span>Unlimited</span>
				) : (
					<span>
						{credits}/{tier == 'Free' ? '10' : tier == 'Pro' && '100'}
					</span>
				)}
			</span>

			<span className="flex items-center bg-muted px-4 rounded-full">
				<Search />
				<Input placeholder="Find" className="" />
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
			{(user?.id == "user_2f1YutxgSudfCwnMQIEJBuEL5uY")? <SignOutButtonCustom  />:<UserButton afterSignOutUrl="/" />}
		</div>
	);
};

export default InfoBar;

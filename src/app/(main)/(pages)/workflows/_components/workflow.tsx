import { Card, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { Switch } from '@/components/ui/switch';
import { Button } from "@/components/ui/button"

import { toast } from 'sonner';
import { onFlowPublish } from '../_actions/workflowsConnection';


type Props = {
	name: string;
	description: string;
	id: string;
	publish: boolean | null;
};

const Workflow = ({ name, id, description, publish }: Props) => {


	const onPublishFlow = async (event: any) => {
		const response = await onFlowPublish(
		  id,
		  event.target.ariaChecked === 'false'
		)
		if (response) toast.message(response)
	  }



	return (
		<Card className="flex w-full items-center justify-between">
			<CardHeader className="flex flex-col ">
				<div className="flex flex-row gap-2">
					<Image
						src="/googleDrive.png"
						alt="Google Drive"
						height={30}
						width={30}
						className="object-contain saturate-0"
					/>
					<Image
						src="/notion.png"
						alt="Google Drive"
						height={30}
						width={30}
						className="object-contain saturate-0"
					/>
					<Image
						src="/discord.png"
						alt="Google Drive"
						height={30}
						width={30}
						className="object-contain saturate-0"
					/>
					<Image src="/slack.png" alt="SLACK" height={30} width={30} className="object-contain saturate-0" />
				</div>
				<div className="">
					<CardTitle className="text-md md:text-xl">{name}</CardTitle>
					<CardDescription className='text-xs md:text-lg'>{description}</CardDescription>
					<Link href={`/workflows/editor/${id}`}>
              <button className='text-xs px-3 rounded-lg py-2 text-neutral-900 bg-[#e2f24b] my-3 md:text-sm' >Node Editor</button>
					</Link>
				</div>
			</CardHeader>

			<div className="flex flex-col items-center gap-2 p-4">
				<Label htmlFor="airplane-mode" className="text-muted-foreground">
					{publish! ? 'On' : 'Off'}
				</Label>
				<Switch
					id="airplane-mode"
					// onClick={onPublishFlow}
					defaultChecked={publish!}
				/>
			</div>
		</Card>
	);
};

export default Workflow;

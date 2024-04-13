'use client';
import React, { useState } from 'react';
import { Badge } from '@/components/ui/badge';
import { CheckCheck, Copy } from 'lucide-react';

type Props = {};

const CopyButton = (props: Props) => {

	const email = 'giriprankush@gmail.com';
	const pass = 'prankush@test';

    const [icon, setIcon ] = useState(<Copy/>)
    const [icon2, setIcon2 ] = useState(<Copy/>)

    
	const copyEmail = async() => {
        setIcon2(<Copy/>)
        await navigator.clipboard?.writeText(email);
        setIcon(<CheckCheck/>)
	};
	const copyPassword = async () => {
        setIcon(<Copy/>)
        await navigator.clipboard?.writeText(pass);
        setIcon2(<CheckCheck/>)
	};

	return (
		<React.Fragment>
   
			<div className="flex w-full my-2 max-w-sm items-center space-x-2 ">
				<Badge className="text-sm font-sans text-neutral-900 px-5 py-2 dark:text-neutral-50 cursor-default  bg-transparent hover:bg-transparent">
					Email: {email}
				</Badge>
				<div className="flex hover:cursor-pointer px-5" onClick={copyEmail}>
                    {icon}
				</div>
			</div>
			<div className="flex w-full my-2 max-w-sm items-center space-x-2 justify-between">
			<Badge className="text-sm font-sans text-neutral-900 px-5 py-2 dark:text-neutral-50 cursor-default  bg-transparent hover:bg-transparent">
					Password: {pass}
				</Badge>
				<div className="flex hover:cursor-pointer px-5" onClick={copyPassword}>
					{icon2}
				</div>
			</div>
		</React.Fragment>
	);
};

export default CopyButton;

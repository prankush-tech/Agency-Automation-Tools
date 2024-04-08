import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import {MenuIcon} from 'lucide-react'
import { UserButton, currentUser } from '@clerk/nextjs';


type Props = {};

const Navbar = async(props: Props) => {
	const user = await currentUser()


	return (
		<header className="fixed right-0 left-0 top-0 py-4 px-4 backdrop-blur-lg z-[100] flex items-center border-b-[0.1em] border-neutral-800 justify-between">
			<aside className="flex items-center gap-[2px]">
				<Image src="/fuzzieLogo.png" width={10} height={10} alt="AgencyAlly" className="shadow-sm m-1 invert dark:invert-0" />
				<p className="text-xl font-bold">ZENCY</p>
			</aside>

			<nav className="absolute left-[50%] top-[50%] transform translate-x-[-50%] translate-y-[-50%] hidden md:block">
				<ul className="flex items-center gap-4 list-none">
					<li>
						<Link href="#">Product</Link>
					</li>
					<li>
						<Link href="#">Price</Link>
					</li>
					<li>
						<Link href="#">Client</Link>
					</li>
					<li>
						<Link href="#">Source</Link>
					</li>
					<li>
						<Link href="#">Docs</Link>
					</li>
					<li>
						<Link href="#">Service</Link>
					</li>
				</ul>
			</nav>
			<aside className="flex items-center gap-4">
				<Link
					href="/dashboard"
					className="relative inline-flex h-10 overflow-hidden rounded-full p-[2px] "
				>
					<span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full hover:bg-neutral-50 px-3 py-1 text-xs md:text-sm font-medium text-black  hover:text-black backdrop-blur-3xl bg-[#e2f24b] ">
						{user?"DASHBOARD":"LETS GO"}
					</span>
				</Link>
				
				<MenuIcon className='md:hidden hover:cursor-pointer'/>
			</aside>
		</header>
	);
};

export default Navbar;






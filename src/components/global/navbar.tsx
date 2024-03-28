import Image from 'next/image';
import React from 'react';


type Props = {};

const Navbar = (props: Props) => {
	return (
		<header className="fixed right-0 left-0 top-0 py-4 px-4 bg-black/40 backdrop-blur-lg z-[100] flex items-center border-b-[1px] border-neutral-900 justify-between">
			<aside className="flex items-center gap-[2px]" >
                <Image src='/fuzzieLogo.png' width={15} height={15} alt="AgencyAlly" className='shadow-sm' />
                <p className='text-2xl font-bold' >Agency Ally</p>
            </aside>
		</header>
	);
};

export default Navbar;


import { useClerk } from '@clerk/clerk-react';
import { useRouter } from 'next/navigation';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { useUser } from '@clerk/nextjs';

const SignOutButtonCustom = () => {
	const { signOut } = useClerk();
	const router = useRouter();

	const clerkUser = useUser();

	return (
		// Clicking on this button will sign out a user and reroute them to the "/" (home) page.
		<button onClick={() => signOut(() => router.push('/'))} className='flex flex-col justify-center items-center' >
			<Avatar>
				<AvatarImage src={clerkUser.user?.imageUrl} />
				<AvatarFallback>ZN</AvatarFallback>
			</Avatar>
			<span className="">Sign out</span>
		</button>
	);
};

export default SignOutButtonCustom;

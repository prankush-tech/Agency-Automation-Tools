import ProfileForm from '@/components/forms/profileform';
import React from 'react';
import ProfilePicture from './_components/profilePicture';
import { db } from '@/lib/database';

interface Props { }

const Settings = (props: Props) => {

	const removeProfileImage = async () => {
		'use server'
		const response = await db.user.update({
		  where: {
			clerkId: "authUser.id",
		  },
		  data: {
			profileImage: '',
		  },
		})
		return response
	  }




	return (
		<div className="felx felx-col gap-4 ">
			<h1 className="text-xl lg:text-2xl sticky top-0 z-[10] p-4 bg-background/50 backdrop-blur-lg flex items-center border-b font-bold">
				<span>Settings</span>
			</h1>
			<div className="flex flex-col gap-10 p-6">
				<div>
					<h2 className="text-lg font-bold">User Profile</h2>
					<p className="text-sm text-white/50">Add or update your information</p>
				</div>
				{/* <ProfilePicture
					onDelete={removeProfileImage}
					userImage={user?.profileImage || ''}
					onUpload={uploadProfileImage}
				/>
				<ProfileForm /> */}
			</div>
		</div>
	);
};

export default Settings;

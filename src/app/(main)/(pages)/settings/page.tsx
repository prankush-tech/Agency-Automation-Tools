import ProfileForm from '@/components/forms/profileform';
import React from 'react';
import ProfilePicture from './_components/profilePicture';
import { db } from '@/lib/database';
import { currentUser } from '@clerk/nextjs';

type Props = {}

const Settings = async (props: Props) => {


	const authUser = await currentUser()
	if (!authUser) return null;


	const user = await db.user.findUnique({ where: { clerkId: authUser.id } })


	const removeProfileImage = async () => {
		'use server'
		const response = await db.user.update({
			where: {
				clerkId: authUser.id,
			},
			data: {
				profileImage: '',
			},
		})
		return response
	}

	const uploadProfileImage = async (image: string) => {
		'use server'
		const id = authUser.id
		const response = await db.user.update({
			where: {
				clerkId: id,
			},
			data: {
				profileImage: image,
			},
		})

		return response
	}

	const updateUserInfo = async (name: string) => {
		'use server'

		const updateUser = await db.user.update({
			where: {
				clerkId: authUser.id,
			},
			data: {
				name,
			},
		})
		return updateUser
	}



	return (
		<div className="felx felx-col gap-4 ">
			<h1 className="text-xl lg:text-2xl sticky top-0 z-[10] p-4 bg-background/50 backdrop-blur-lg flex items-center border-b font-bold">
				<span>Settings</span>
			</h1>
			<div className="flex flex-col gap-4 p-6">
				<div>
					<h2 className="text-md font-bold">User Profile</h2>
					<p className="text-sm text-white/50">Add or update your information</p>
				</div>

				<div className="flex flex-col md:flex-row w-full justify-evenly gap-5">

				<ProfilePicture
					onDelete={removeProfileImage}
					userImage={user?.profileImage || ''}
					onUpload={uploadProfileImage}
				/>
				<ProfileForm />
				</div>
			</div>
		</div>
	);
};

export default Settings;

'use client'
import React from 'react'
import UploadCareButton from './uploadCareButton'
import { useRouter } from 'next/navigation'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { X } from 'lucide-react'

type Props = {
  userImage: string | null
  onDelete?: any
  onUpload?: any
}

const ProfilePicture = ({ userImage, onDelete, onUpload }: Props) => {

  const router = useRouter();
  const onRemoveProfileImage = async () => {
    const response = await onDelete()

    if (response) {
      router.refresh()
    }
  }

  return (
    <div className='flex flex-col justify-start lg:gap-5'>
      <p className='text-md text-neutral-900 dark:text-neutral-50'>Profile Picture</p>

      <div className="flex h-[30vh] flex-col items-center justify-center">
        {userImage ? (
          <>
            <div className="relative w-32 h-32 lg:w-64 lg:h-64">
              <Image
                src={userImage}
                alt="User Image"
                fill 
                className='object-cover w-full h-full'
              />
            </div>
            <Button
              onClick={onRemoveProfileImage}
              className="bg-[#e2f24b] text-neutral-900 my-2 rounded-3xl text-xs md:text-[1rem] "
            >
              <X size={16} />Remove Logo
            </Button>
          </>
        ) : (
          <UploadCareButton onUpload={onUpload}/>
        )}
      </div>
    </div>
  )
}

export default ProfilePicture
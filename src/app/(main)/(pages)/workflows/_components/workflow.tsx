import {
    Card,
    CardDescription,
    CardHeader,
    CardTitle,
  } from '@/components/ui/card'
import { Label } from '@/components/ui/label'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { Switch } from '@/components/ui/switch'

type Props = {
    name:string,
    description:string 
    id:string 
    publish: boolean | null 
}



const Workflow = ({name,id,description,publish}: Props) => {
  return (
   <Card className='flex w-full items-center justify-between'>
    <CardHeader className="flex flex-col gap-4">
    <Link href={`/workflows/editor/${id}`}>
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
            <Image
              src="/slack.png"
              alt="SLACK"
              height={30}
              width={30}
              className="object-contain saturate-0"
            />
           
          </div>
          <div className="p-1">
          <CardTitle className="text-lg">{name}</CardTitle>
            <CardDescription>{description}</CardDescription>
            <CardDescription>{"Click to AUTOMATE"}</CardDescription>
          </div>
        </Link>
    </CardHeader>

    <div className="flex flex-col items-center gap-2 p-4">
        <Label
          htmlFor="airplane-mode"
          className="text-muted-foreground"
        >
          {publish! ? 'On' : 'Off'}
        </Label>
        <Switch
          id="airplane-mode"
          // onClick={onPublishFlow}
          defaultChecked={publish!}
        />
      </div>


   </Card>
  )
}

export default Workflow
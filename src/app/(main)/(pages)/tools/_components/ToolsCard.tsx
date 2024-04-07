import { ToolTypes } from '@/lib/types';
import React from 'react';
import { Card, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import Image from 'next/image';
import Link from 'next/link';

type Props = {
  type: ToolTypes;
  icon: string;
  title: ToolTypes;
  description: string;
  callback?: () => void;
  connected: {} & any;
};

const ToolsCard = ({ description, type, icon, title, connected }: Props) => {
  return (
    <Card className="flex w-full items-center justify-between  bg-[#e2f24b]">
      <CardHeader className="flex flex-col gap-1">
        <div className="flex flex-row gap-1">
          <Image src={icon} alt={title} height={30} width={30} className="object-contain saturate-0 invert" />
        </div>
        <div>
          <CardTitle className="text-sm md:text-xl font-sans text-neutral-900">{title}</CardTitle>
          <CardDescription className="text-xs md:text-[1rem] font-sans text-neutral-900">{description}</CardDescription>
        </div>
      </CardHeader>
      <div className="flex flex-col items-center gap-1 px-3 md:p-4 font-sans">
        {connected[type] ? (
          <div className="border-bg-primary rounded-lg border-2 md:px-3 py-2 md:font-bold text-neutral-900">
            Connected
          </div>
        ) : (
          <Link
            href={
              title == 'Discord'
                ? process.env.NEXT_PUBLIC_DISCORD_REDIRECT!
                : title == 'Notion'
                  ? process.env.NEXT_PUBLIC_NOTION_AUTH_URL!
                  : title == 'Slack'
                    ? process.env.NEXT_PUBLIC_SLACK_REDIRECT!
                    : '#'
            }
            className=" rounded-lg bg-primary p-2 font-bold text-primary-foreground"
          >
            Connect
          </Link>
        )}

      </div>
    </Card>
  );
};

export default ToolsCard;

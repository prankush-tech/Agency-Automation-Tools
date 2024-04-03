import { ToolsType } from '@/providers/toolProviders';
import { z } from 'zod';

export const EditProfileSchema = z.object({
	email: z.string().email('Required'),
	name: z.string().min(1, 'Required')
});

export const WorkflowFormSchema = z.object({
  name: z.string() .min(1, 'Required'),
  description: z.string().min(1, 'Required'),
  })


export type ToolTypes = 'Google Drive' | 'Notion' | 'Slack' | 'Discord';

export type Tools = {
	title: ToolTypes;
	description: string;
	image: string;
	connectionKey: keyof ToolsType;
	accessTokenKey?: string;
	alwaysTrue?: boolean;
	slackSpecial?: boolean;
};

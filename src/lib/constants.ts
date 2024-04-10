import Category from '@/components/icons/category';
import Logs from '@/components/icons/clipboard';
import Templates from '@/components/icons/cloud_download';
import Home from '@/components/icons/home';
import Payment from '@/components/icons/payment';
import Settings from '@/components/icons/settings';
import Workflows from '@/components/icons/workflows';
import { Tools } from './types';
import ExcalidrawPage from '@/app/(main)/(pages)/planner/page';

export const clients = [ ...new Array(10) ].map((client, index) => ({
	href: `/${index + 1}.png`
}));

export const SideBarIcons = [
	{ name: 'Settings', Component: Settings, href: '/settings' },
	{ name: 'D-Tools', Component: Category, href: '/tools' },
	{ name: 'Nodes', Component: Workflows, href: '/workflows' },
	{ name: 'Dashboard', Component: Home, href: '/dashboard' },
	{ name: 'Payments', Component: Payment, href: '/billing' },
	{ name: 'Work Logs', Component: Logs, href: '/logs' },
	{ name: 'Templates', Component: Templates, href: '/templates' },
	{ name: 'Planner', Component: ExcalidrawPage, href: '/planner' },
];

export const AllTools: Tools[] = [
	{
		title: 'Google Drive',
		description: 'Connect your google drive to listen to folder changes',
		image: '/googleDrive.png',
		connectionKey: 'googleNode',
		alwaysTrue: true
	},
	{
		title: 'Discord',
		description: 'Connect your discord to send notification and messages',
		image: '/discord.png',
		connectionKey: 'discordNode',
		accessTokenKey: 'webhookURL'
	},
	{
		title: 'Notion',
		description: 'Create entries in your notion dashboard and automate tasks.',
		image: '/notion.png',
		connectionKey: 'notionNode',
		accessTokenKey: 'accessToken'
	},
	{
		title: 'Slack',
		description: 'Use slack to send notifications to team members through your own custom bot.',
		image: '/slack.png',
		connectionKey: 'slackNode',
		accessTokenKey: 'slackAccessToken',
		slackSpecial: true
	}
];

export const EditorCanvasDefaultCardTypes = {
	Email: { description: 'Send and email to a user', type: 'Action' },
	Condition: {
	  description: 'Boolean operator that creates different conditions lanes.',
	  type: 'Action',
	},
	AI: {
	  description:
		'Use the power of AI to summarize, respond, create and much more.',
	  type: 'Action',
	},
	Slack: { description: 'Send a notification to slack', type: 'Action' },
	'Google Drive': {
	  description:
		'Connect with Google drive to trigger actions or to create files and folders.',
	  type: 'Trigger',
	},
	Notion: { description: 'Create entries directly in notion.', type: 'Action' },
	'Custom Webhook': {
	  description:
		'Connect any app that has an API key and send data to your applicaiton.',
	  type: 'Action',
	},
	Discord: {
	  description: 'Post messages to your discord server',
	  type: 'Action',
	},
	'Google Calendar': {
	  description: 'Create a calendar invite.',
	  type: 'Action',
	},
	Trigger: {
	  description: 'An event that starts the workflow.',
	  type: 'Trigger',
	},
	Action: {
	  description: 'An event that happens after the workflow begins',
	  type: 'Action',
	},
	Wait: {
	  description: 'Delay the next action step by using the wait timer.',
	  type: 'Action',
	},
  }
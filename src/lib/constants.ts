import Category from '@/components/icons/category';
import Logs from '@/components/icons/clipboard';
import Templates from '@/components/icons/cloud_download';
import Home from '@/components/icons/home';
import Payment from '@/components/icons/payment';
import Settings from '@/components/icons/settings';
import Workflows from '@/components/icons/workflows';
import { Tools } from './types';

export const clients = [ ...new Array(10) ].map((client, index) => ({
	href: `/${index + 1}.png`
}));

export const SideBarIcons = [
	{ name: 'Dashboard', Component: Home, href: '/dashboard' },
	{ name: 'Workflows', Component: Workflows, href: '/workflows' },
	{ name: 'Settings', Component: Settings, href: '/settings' },
	{ name: 'D-Tools', Component: Category, href: '/tools' },
	{ name: 'Payments', Component: Payment, href: '/billing' },
	{ name: 'Work Logs', Component: Logs, href: '/logs' },
	{ name: 'Templates', Component: Templates, href: '/templates' },
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

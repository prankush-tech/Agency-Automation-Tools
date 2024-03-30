import Category from '@/components/icons/category';
import Logs from '@/components/icons/clipboard';
import Templates from '@/components/icons/cloud_download';
import Home from '@/components/icons/home';
import Payment from '@/components/icons/payment';
import Settings from '@/components/icons/settings';
import Workflows from '@/components/icons/workflows';

export const clients = [ ...new Array(10) ].map((client, index) => ({
	href: `/${index + 1}.png`
}));

export const SideBarIcons = [
	{ name: 'Home', Component: Home, href: '/dashboard' },
	{ name: 'Workflows', Component: Workflows, href: '/workflows' },
	{ name: 'Options', Component: Settings, href: '/settings' },
	{ name: 'Bonds', Component: Category, href: '/connections' },
	{ name: 'Bills', Component: Payment, href: '/billing' },
	{ name: 'Temps', Component: Templates, href: '/templates' },
	{ name: 'Logs', Component: Logs, href: '/logs' }
];

// export const CONNECTIONS: Connection[] = [
// 	{
// 		title: 'Google Drive',
// 		description: 'Connect your google drive to listen to folder changes',
// 		image: '/googleDrive.png',
// 		connectionKey: 'googleNode',
// 		alwaysTrue: true
// 	},
// 	{
// 		title: 'Discord',
// 		description: 'Connect your discord to send notification and messages',
// 		image: '/discord.png',
// 		connectionKey: 'discordNode',
// 		accessTokenKey: 'webhookURL'
// 	},
// 	{
// 		title: 'Notion',
// 		description: 'Create entries in your notion dashboard and automate tasks.',
// 		image: '/notion.png',
// 		connectionKey: 'notionNode',
// 		accessTokenKey: 'accessToken'
// 	},
// 	{
// 		title: 'Slack',
// 		description: 'Use slack to send notifications to team members through your own custom bot.',
// 		image: '/slack.png',
// 		connectionKey: 'slackNode',
// 		accessTokenKey: 'slackAccessToken',
// 		slackSpecial: true
// 	}
// ];
